import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

interface Message {
  id: number;
  text: string;
  sender: "user" | "team" | "client";
  time: string;
  avatar: string;
}

const ChatDemo = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Привет! Как дела с макетами для нового проекта?",
      sender: "client",
      time: "14:32",
      avatar: "👤",
    },
    {
      id: 2,
      text: "Уже готовы первые варианты! Скоро отправлю на согласование",
      sender: "team",
      time: "14:35",
      avatar: "👨‍💻",
    },
    {
      id: 3,
      text: "Отлично! А когда планируете запуск рекламы?",
      sender: "client",
      time: "14:36",
      avatar: "👤",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const addMessage = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: messages.length + 1,
        text: newMessage,
        sender: "user",
        time: new Date().toLocaleTimeString("ru-RU", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        avatar: "🚀",
      };
      setMessages([...messages, message]);
      setNewMessage("");
    }
  };

  const getSenderName = (sender: string) => {
    switch (sender) {
      case "client":
        return "Клиент";
      case "team":
        return "Команда";
      case "user":
        return "Вы";
      default:
        return sender;
    }
  };

  const getSenderColor = (sender: string) => {
    switch (sender) {
      case "client":
        return "bg-blue-100 text-blue-800";
      case "team":
        return "bg-green-100 text-green-800";
      case "user":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <Card className="shadow-xl border-0">
        <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-lg">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Icon name="MessageCircle" size={20} />
            </div>
            <div>
              <h3 className="font-semibold">Чат проекта</h3>
              <p className="text-sm opacity-90">3 участника онлайн</p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          <div className="h-80 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div key={message.id} className="flex items-start space-x-3">
                <div className="text-2xl">{message.avatar}</div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span
                      className={`text-xs px-2 py-1 rounded-full font-medium ${getSenderColor(message.sender)}`}
                    >
                      {getSenderName(message.sender)}
                    </span>
                    <span className="text-xs text-gray-500">
                      {message.time}
                    </span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-sm">
                    {message.text}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t p-4">
            <div className="flex space-x-2">
              <Input
                placeholder="Написать сообщение..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && addMessage()}
                className="flex-1"
              />
              <Button onClick={addMessage} size="sm" className="px-4">
                <Icon name="Send" size={16} />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChatDemo;
