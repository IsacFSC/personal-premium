import { BusinessHour } from "@/types/studio";

const weekDays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

const dayMap: Record<string, string> = {
  domingo: "Domingo",
  "segunda-feira": "Segunda-feira",
  "terça-feira": "Terça-feira",
  "quarta-feira": "Quarta-feira",
  "quinta-feira": "Quinta-feira",
  "sexta-feira": "Sexta-feira",
  sábado: "Sábado",
};

export function getBusinessStatus(hours: BusinessHour[]) {
  const now = new Date();

  const formatter = new Intl.DateTimeFormat("pt-BR", {
    timeZone: "America/Campo_Grande",
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const parts = formatter.formatToParts(now);

  const currentHour = Number(
    parts.find((p) => p.type === "hour")?.value ?? 0
  );

  const currentMinute = Number(
    parts.find((p) => p.type === "minute")?.value ?? 0
  );

  const weekday =
    parts.find((p) => p.type === "weekday")?.value.toLowerCase() ?? "";

  const today = dayMap[weekday];

  const todayIndex = weekDays.indexOf(today);

  const currentTime = currentHour * 60 + currentMinute;

  const schedule = hours.find((h) => h.day === today);

  if (!schedule || schedule.time === "Fechado") {
    return {
      isOpen: false,
      message: findNextOpening(hours, todayIndex),
    };
  }

  const [open, close] = schedule.time.split(" - ");

  const [oh, om] = open.split(":").map(Number);
  const [ch, cm] = close.split(":").map(Number);

  const openMinutes = oh * 60 + om;
  const closeMinutes = ch * 60 + cm;

  const isOpen =
    currentTime >= openMinutes &&
    currentTime <= closeMinutes;

  if (isOpen) {
    return {
      isOpen: true,
      message: `Fecha às ${close}`,
    };
  }

  return {
    isOpen: false,
    message: findNextOpening(hours, todayIndex),
  };
}

function findNextOpening(
  hours: BusinessHour[],
  currentDay: number
) {
  for (let i = 1; i <= 7; i++) {
    const index = (currentDay + i) % 7;

    const day = weekDays[index];

    const schedule = hours.find((h) => h.day === day);

    if (schedule && schedule.time !== "Fechado") {
      const openTime = schedule.time.split(" - ")[0];

      return `Abre ${day} às ${openTime}`;
    }
  }

  return "Horário indisponível";
}