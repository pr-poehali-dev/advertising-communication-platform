export interface Database {
  public: {
    Tables: {
      clients: {
        Row: {
          id: string;
          name: string;
          email: string;
          phone?: string;
          company?: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          phone?: string;
          company?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          email?: string;
          phone?: string;
          company?: string;
          updated_at?: string;
        };
      };
      orders: {
        Row: {
          id: string;
          client_id: string;
          title: string;
          description?: string;
          status:
            | "draft"
            | "in_progress"
            | "review"
            | "completed"
            | "cancelled";
          budget?: number;
          deadline?: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          client_id: string;
          title: string;
          description?: string;
          status?:
            | "draft"
            | "in_progress"
            | "review"
            | "completed"
            | "cancelled";
          budget?: number;
          deadline?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          client_id?: string;
          title?: string;
          description?: string;
          status?:
            | "draft"
            | "in_progress"
            | "review"
            | "completed"
            | "cancelled";
          budget?: number;
          deadline?: string;
          updated_at?: string;
        };
      };
      messages: {
        Row: {
          id: string;
          order_id: string;
          sender_name: string;
          content: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          order_id: string;
          sender_name: string;
          content: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          order_id?: string;
          sender_name?: string;
          content?: string;
        };
      };
      files: {
        Row: {
          id: string;
          order_id: string;
          filename: string;
          file_path: string;
          file_size: number;
          mime_type: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          order_id: string;
          filename: string;
          file_path: string;
          file_size: number;
          mime_type: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          order_id?: string;
          filename?: string;
          file_path?: string;
          file_size?: number;
          mime_type?: string;
        };
      };
    };
  };
}

export type Client = Database["public"]["Tables"]["clients"]["Row"];
export type Order = Database["public"]["Tables"]["orders"]["Row"];
export type Message = Database["public"]["Tables"]["messages"]["Row"];
export type File = Database["public"]["Tables"]["files"]["Row"];
