import { Studio } from "@/types/studio";
import { WHATSAPP_STORE_1, WHATSAPP_STORE_2 } from "@/lib/whatsapp";

export const studios: Studio[] = [
  {
    label: "Academia 1 — Studio Vilas Boas",
    address: "Av. Cel Pôrto Carrero, 100",
    city: "Campo Grande – MS",
    phone: "(67) 9 9999-9999",
    whatsapp: WHATSAPP_STORE_1,
    email: "premiumpersonal@gmail.com",
    lat: -20.484572,
    lng: -54.5961881,
    mapsUrl: "https://www.google.com/maps?q=-20.484572,-54.5961881",
    hours: [
      { day: "Segunda-feira", time: "06:00 - 22:00" },
      { day: "Terça-feira", time: "06:00 - 22:00" },
      { day: "Quarta-feira", time: "06:00 - 22:00" },
      { day: "Quinta-feira", time: "06:00 - 22:00" },
      { day: "Sexta-feira", time: "06:00 - 22:00" },
      { day: "Sábado", time: "06:00 - 18:00" },
      { day: "Domingo", time: "Fechado" },
    ],
  },

  {
    label: "Academia 2 — Santa Fé",
    address: "Rua das Garças, 3163",
    city: "Campo Grande – MS",
    phone: "(67) 9 9999-9999",
    whatsapp: WHATSAPP_STORE_2,
    email: "premiumpersonal@gmail.com",
    lat: -20.4485561,
    lng: -54.5858249,
    mapsUrl: "https://www.google.com/maps?q=-20.4485561,-54.5858249",
    hours: [
      { day: "Segunda-feira", time: "06:00 - 22:00" },
      { day: "Terça-feira", time: "06:00 - 22:00" },
      { day: "Quarta-feira", time: "06:00 - 22:00" },
      { day: "Quinta-feira", time: "06:00 - 22:00" },
      { day: "Sexta-feira", time: "06:00 - 22:00" },
      { day: "Sábado", time: "06:00 - 18:00" },
      { day: "Domingo", time: "Fechado" },
    ],
  },
];
