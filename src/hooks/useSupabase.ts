import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import type { Client, Order, Message, File } from "@/types/database";

export const useSupabase = () => {
  // Clients
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchClients = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("clients")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching clients:", error);
    } else {
      setClients(data || []);
    }
    setLoading(false);
  };

  const createClient = async (
    client: Omit<Client, "id" | "created_at" | "updated_at">,
  ) => {
    const { data, error } = await supabase
      .from("clients")
      .insert([client])
      .select();

    if (error) {
      console.error("Error creating client:", error);
      return null;
    }

    await fetchClients();
    return data?.[0] || null;
  };

  // Orders
  const fetchOrders = async (clientId?: string) => {
    let query = supabase
      .from("orders")
      .select("*, clients(*)")
      .order("created_at", { ascending: false });

    if (clientId) {
      query = query.eq("client_id", clientId);
    }

    const { data, error } = await query;

    if (error) {
      console.error("Error fetching orders:", error);
      return [];
    }

    return data || [];
  };

  const createOrder = async (
    order: Omit<Order, "id" | "created_at" | "updated_at">,
  ) => {
    const { data, error } = await supabase
      .from("orders")
      .insert([order])
      .select();

    if (error) {
      console.error("Error creating order:", error);
      return null;
    }

    return data?.[0] || null;
  };

  const updateOrderStatus = async (
    orderId: string,
    status: Order["status"],
  ) => {
    const { error } = await supabase
      .from("orders")
      .update({ status, updated_at: new Date().toISOString() })
      .eq("id", orderId);

    if (error) {
      console.error("Error updating order:", error);
      return false;
    }

    return true;
  };

  // Messages
  const fetchMessages = async (orderId: string) => {
    const { data, error } = await supabase
      .from("messages")
      .select("*")
      .eq("order_id", orderId)
      .order("created_at", { ascending: true });

    if (error) {
      console.error("Error fetching messages:", error);
      return [];
    }

    return data || [];
  };

  const sendMessage = async (message: Omit<Message, "id" | "created_at">) => {
    const { data, error } = await supabase
      .from("messages")
      .insert([message])
      .select();

    if (error) {
      console.error("Error sending message:", error);
      return null;
    }

    return data?.[0] || null;
  };

  // Real-time subscriptions
  const subscribeToOrderMessages = (
    orderId: string,
    callback: (message: Message) => void,
  ) => {
    const subscription = supabase
      .channel(`messages:${orderId}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
          filter: `order_id=eq.${orderId}`,
        },
        (payload) => {
          callback(payload.new as Message);
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  };

  return {
    // State
    clients,
    loading,

    // Methods
    fetchClients,
    createClient,
    fetchOrders,
    createOrder,
    updateOrderStatus,
    fetchMessages,
    sendMessage,
    subscribeToOrderMessages,
  };
};
