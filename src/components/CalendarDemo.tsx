import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface Event {
  id: number;
  title: string;
  time: string;
  type: "meeting" | "deadline" | "call";
  date: number;
}

const CalendarDemo = () => {
  const [currentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [events] = useState<Event[]>([
    {
      id: 1,
      title: "Созвон с клиентом",
      time: "10:00",
      type: "call",
      date: 18,
    },
    {
      id: 2,
      title: "Дедлайн макетов",
      time: "18:00",
      type: "deadline",
      date: 20,
    },
    {
      id: 3,
      title: "Презентация проекта",
      time: "14:30",
      type: "meeting",
      date: 22,
    },
  ]);

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0,
  ).getDate();
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1,
  ).getDay();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyDays = Array.from(
    { length: firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1 },
    (_, i) => i,
  );

  const monthName = currentDate.toLocaleDateString("ru-RU", {
    month: "long",
    year: "numeric",
  });

  const getEventIcon = (type: string) => {
    switch (type) {
      case "meeting":
        return "Users";
      case "deadline":
        return "Clock";
      case "call":
        return "Phone";
      default:
        return "Calendar";
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case "meeting":
        return "bg-blue-100 text-blue-800";
      case "deadline":
        return "bg-red-100 text-red-800";
      case "call":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const hasEvent = (day: number) => {
    return events.some((event) => event.date === day);
  };

  const getEventsForDate = (day: number) => {
    return events.filter((event) => event.date === day);
  };

  return (
    <div className="max-w-md mx-auto">
      <Card className="shadow-xl border-0">
        <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-t-lg">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Icon name="Calendar" size={20} />
            </div>
            <div>
              <h3 className="font-semibold">Планирование</h3>
              <p className="text-sm opacity-90 capitalize">{monthName}</p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-4">
          <div className="space-y-4">
            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1 text-center">
              {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((day) => (
                <div
                  key={day}
                  className="text-xs font-medium text-gray-500 p-2"
                >
                  {day}
                </div>
              ))}

              {emptyDays.map((_, index) => (
                <div key={`empty-${index}`} className="p-2"></div>
              ))}

              {days.map((day) => (
                <Button
                  key={day}
                  variant={selectedDate === day ? "default" : "ghost"}
                  size="sm"
                  className={`p-2 h-8 text-xs relative ${
                    hasEvent(day) ? "bg-orange-100 hover:bg-orange-200" : ""
                  }`}
                  onClick={() => setSelectedDate(day)}
                >
                  {day}
                  {hasEvent(day) && (
                    <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                  )}
                </Button>
              ))}
            </div>

            {/* Events for selected date */}
            {selectedDate && (
              <div className="space-y-2">
                <h4 className="text-sm font-medium">
                  События {selectedDate} декабря:
                </h4>
                {getEventsForDate(selectedDate).length > 0 ? (
                  getEventsForDate(selectedDate).map((event) => (
                    <div
                      key={event.id}
                      className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg"
                    >
                      <Icon
                        name={getEventIcon(event.type)}
                        size={16}
                        className="text-orange-500"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium">{event.title}</p>
                        <p className="text-xs text-gray-500">{event.time}</p>
                      </div>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${getEventColor(event.type)}`}
                      >
                        {event.type === "meeting"
                          ? "Встреча"
                          : event.type === "deadline"
                            ? "Дедлайн"
                            : "Звонок"}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-gray-500">
                    Нет событий на этот день
                  </p>
                )}
              </div>
            )}

            <div className="text-xs text-gray-500 pt-2 border-t">
              💡 Нажмите на дату, чтобы увидеть события
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CalendarDemo;
