import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Features = () => {
  const features = [
    {
      icon: "Search",
      title: "Отслеживание заказов",
      description:
        "Мониторь статус всех проектов в реальном времени. Получай уведомления о важных изменениях.",
      color: "bg-creative-purple",
    },
    {
      icon: "Upload",
      title: "Загрузка файлов",
      description:
        "Безопасная загрузка и хранение материалов проекта. Поддержка всех популярных форматов.",
      color: "bg-creative-magenta",
    },
    {
      icon: "Calendar",
      title: "Планирование",
      description:
        "Интегрированный календарь для планирования дедлайнов и встреч с клиентами.",
      color: "bg-creative-orange",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold mb-6 creative-text-gradient">
            Всё что нужно для работы
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мощные инструменты для эффективного управления рекламными проектами
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}
                >
                  <Icon name={feature.icon} size={32} className="text-white" />
                </div>

                <h3 className="font-montserrat text-xl font-semibold mb-4 text-gray-900">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
