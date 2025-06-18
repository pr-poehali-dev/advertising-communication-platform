import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

interface Order {
  id: string;
  title: string;
  client: string;
  status: "В работе" | "На согласовании" | "Завершён";
  progress: number;
  date: string;
}

const OrderTrackingDemo = () => {
  const [orders] = useState<Order[]>([
    {
      id: "ORD-001",
      title: "Рекламная кампания для банка",
      client: "Сбербанк",
      status: "В работе",
      progress: 75,
      date: "15.12.2024",
    },
    {
      id: "ORD-002",
      title: "Дизайн упаковки товара",
      client: "Nestle",
      status: "На согласовании",
      progress: 90,
      date: "18.12.2024",
    },
    {
      id: "ORD-003",
      title: "Брендинг стартапа",
      client: "TechStart",
      status: "Завершён",
      progress: 100,
      date: "10.12.2024",
    },
  ]);

  const [trackingId, setTrackingId] = useState("");
  const [foundOrder, setFoundOrder] = useState<Order | null>(null);

  const trackOrder = () => {
    const order = orders.find((o) => o.id === trackingId.toUpperCase());
    setFoundOrder(order || null);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "В работе":
        return "bg-blue-100 text-blue-800";
      case "На согласовании":
        return "bg-yellow-100 text-yellow-800";
      case "Завершён":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <Card className="shadow-xl border-0">
        <CardHeader className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-t-lg">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Icon name="Search" size={20} />
            </div>
            <div>
              <h3 className="font-semibold">Отслеживание заказов</h3>
              <p className="text-sm opacity-90">Введите номер заказа</p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-4">
          <div className="space-y-4">
            <div className="flex space-x-2">
              <Input
                placeholder="Например: ORD-001"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && trackOrder()}
                className="flex-1"
              />
              <Button onClick={trackOrder} size="sm" className="px-4">
                <Icon name="Search" size={16} />
              </Button>
            </div>

            {foundOrder ? (
              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-sm">
                      {foundOrder.title}
                    </h4>
                    <p className="text-xs text-gray-600">{foundOrder.client}</p>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${getStatusColor(foundOrder.status)}`}
                  >
                    {foundOrder.status}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span>Прогресс</span>
                    <span>{foundOrder.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-purple-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${foundOrder.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-xs text-gray-600">
                  <Icon name="Calendar" size={14} />
                  <span>Дедлайн: {foundOrder.date}</span>
                </div>
              </div>
            ) : (
              trackingId && (
                <div className="text-center text-sm text-gray-500 py-4">
                  Заказ не найден. Попробуйте ORD-001, ORD-002 или ORD-003
                </div>
              )
            )}

            <div className="text-xs text-gray-500 pt-2 border-t">
              💡 Попробуйте: ORD-001, ORD-002, ORD-003
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderTrackingDemo;
