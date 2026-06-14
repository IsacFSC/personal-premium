import { getBusinessStatus } from "@/lib/business-hours";
import { BusinessHour } from "@/types/studio";

type Props = {
  hours: BusinessHour[];
};

export default function BusinessHoursCard({ hours }: Props) {
  const status = getBusinessStatus(hours);

  return (
    <div className="rounded-md border border-white/10 bg-black/20 p-4">
      <div className="mb-4">
        <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
          Horário de Funcionamento
        </p>

        <div className="mt-2 flex items-center gap-2">
          <span
            className={`h-2.5 w-2.5 rounded-full ${
              status.isOpen ? "bg-green-500" : "bg-red-500"
            }`}
          />

          <span
            className={`text-sm font-semibold ${
              status.isOpen ? "text-green-400" : "text-red-400"
            }`}
          >
            {status.isOpen ? "Aberto agora" : "Fechado"}
          </span>
        </div>

        <p className="mt-1 text-xs text-gray-400">{status.message}</p>
      </div>

      <div className="space-y-2">
        {hours.map((hour) => (
          <div
            key={hour.day}
            className="flex items-center justify-between border-b border-white/5 pb-2 last:border-none"
          >
            <span className="text-sm text-gray-400">{hour.day}</span>

            <span className="text-sm font-medium text-white">{hour.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
