import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center creative-gradient overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-16 h-16 bg-white/20 rounded-full blur-sm"></div>
      </div>
      <div
        className="absolute top-40 right-20 animate-float"
        style={{ animationDelay: "1s" }}
      >
        <div className="w-12 h-12 bg-white/20 rounded-full blur-sm"></div>
      </div>
      <div
        className="absolute bottom-40 left-20 animate-float"
        style={{ animationDelay: "2s" }}
      >
        <div className="w-20 h-20 bg-white/20 rounded-full blur-sm"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 text-center text-white animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-montserrat text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Управляй заказами
            <span className="block text-yellow-300">как профи</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Современная система управления заказами для рекламных агентств.
            Отслеживай проекты, загружай файлы, планируй задачи.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Icon name="Rocket" size={24} className="mr-2" />
              Начать работу
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
            >
              <Icon name="Play" size={24} className="mr-2" />
              Смотреть демо
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div
              className="text-center animate-scale-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="text-3xl font-bold font-montserrat mb-2">
                1000+
              </div>
              <div className="text-white/80">Активных заказов</div>
            </div>
            <div
              className="text-center animate-scale-in"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="text-3xl font-bold font-montserrat mb-2">
                24/7
              </div>
              <div className="text-white/80">Поддержка</div>
            </div>
            <div
              className="text-center animate-scale-in"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="text-3xl font-bold font-montserrat mb-2">
                99.9%
              </div>
              <div className="text-white/80">Надёжность</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-white/60" />
      </div>
    </section>
  );
};

export default Hero;
