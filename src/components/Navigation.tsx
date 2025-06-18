import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const navItems = [
    {
      icon: "LayoutDashboard",
      title: "Дашборд",
      description: "Общий обзор всех проектов",
      route: "/dashboard",
      color: "bg-blue-500",
    },
    {
      icon: "ShoppingCart",
      title: "Заказы",
      description: "Управление активными заказами",
      route: "/orders",
      color: "bg-green-500",
    },
    {
      icon: "MessageCircle",
      title: "Чат",
      description: "Общение с командой и клиентами",
      route: "/chat",
      color: "bg-purple-500",
    },
    {
      icon: "User",
      title: "Профиль",
      description: "Настройки аккаунта",
      route: "/profile",
      color: "bg-orange-500",
    },
    {
      icon: "Users",
      title: "Команда",
      description: "Управление сотрудниками",
      route: "/team",
      color: "bg-pink-500",
    },
    {
      icon: "CheckCircle",
      title: "Завершённые",
      description: "Архив выполненных проектов",
      route: "/completed",
      color: "bg-indigo-500",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Переходи к работе
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выбери нужный раздел и начни управлять проектами прямо сейчас
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {navItems.map((item, index) => (
            <Card
              key={index}
              className="border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                  >
                    <Icon name={item.icon} size={24} className="text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-montserrat text-lg font-semibold mb-2 text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {item.description}
                    </p>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:text-primary/80 p-0 h-auto font-semibold"
                    >
                      Перейти
                      <Icon name="ArrowRight" size={16} className="ml-1" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="creative-gradient text-white hover:opacity-90 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Icon name="Zap" size={24} className="mr-2" />
            Открыть главный дашборд
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
