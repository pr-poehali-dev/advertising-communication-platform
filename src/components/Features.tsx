import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import ChatDemo from "@/components/ChatDemo";
import OrderTrackingDemo from "@/components/OrderTrackingDemo";
import FileUploadDemo from "@/components/FileUploadDemo";
import CalendarDemo from "@/components/CalendarDemo";

const Features = () => {
  const features = [
    {
      icon: "Search",
      title: "Отслеживание заказов",
      description:
        "Мониторь статус всех проектов в реальном времени. Получай уведомления о важных изменениях.",
      color: "bg-creative-purple",
      demo: <OrderTrackingDemo />,
    },
    {
      icon: "Upload",
      title: "Загрузка файлов",
      description:
        "Безопасная загрузка и хранение материалов проекта. Поддержка всех популярных форматов.",
      color: "bg-creative-magenta",
      demo: <FileUploadDemo />,
    },
    {
      icon: "Calendar",
      title: "Планирование",
      description:
        "Интегрированный календарь для планирования дедлайнов и встреч с клиентами.",
      color: "bg-creative-orange",
      demo: <CalendarDemo />,
    },
  ];

  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-4xl md:text-5xl font-bold mb-6 creative-text-gradient">
              Попробуйте все функции прямо сейчас
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Интерактивные демо покажут как работают все инструменты системы
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="space-y-6">
                <Card
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}
                    >
                      <Icon
                        name={feature.icon}
                        size={32}
                        className="text-white"
                      />
                    </div>

                    <h3 className="font-montserrat text-xl font-semibold mb-4 text-gray-900">
                      {feature.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>

                <div
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.2 + 0.3}s` }}
                >
                  {feature.demo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Живое общение с командой
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Попробуйте чат прямо сейчас! Напишите сообщение и посмотрите как
              работает система
            </p>
          </div>

          <ChatDemo />

          <div className="text-center mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex items-center space-x-3">
                <Icon name="Users" size={24} className="text-purple-500" />
                <span className="text-gray-700">Групповые чаты</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Bell" size={24} className="text-green-500" />
                <span className="text-gray-700">Push-уведомления</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="FileText" size={24} className="text-blue-500" />
                <span className="text-gray-700">Обмен файлами</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
