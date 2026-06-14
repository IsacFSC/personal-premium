export interface StudioArea {
  id: number;
  title: string;
  media: string;
  mediaType: "image" | "video";
  description: string;
  badge?: string;
}

export const studioAreas: StudioArea[] = [
  {
    id: 1,
    title: "Espaço Premium",
    media: "/assets/studio/academy.jpg",
    mediaType: "image",
    description:
      "Ambiente moderno, climatizado e projetado para oferecer conforto, sofisticação e performance.",
    badge: "Exclusivo",
  },
  {
    id: 2,
    title: "Sauna",
    media: "/assets/studio/sauna.jpg",
    mediaType: "image",
    description:
      "Área de relaxamento ideal para recuperação muscular e bem-estar após os treinos.",
    badge: "Premium",
  },
  {
    id: 3,
    title: "Área de Lutas",
    media: "/assets/studio/fight.jpg",
    mediaType: "image",
    description:
      "Espaço completo para boxe, muay thai, jiu-jitsu e outras modalidades de combate.",
    badge: "Performance",
  },
  {
    id: 4,
    title: "Área de Massagem",
    media: "/assets/studio/massage.jpg",
    mediaType: "image",
    description:
      "Um refúgio dedicado ao relaxamento e à recuperação. Experiências terapêuticas com aromaterapia, pedras vulcânicas aquecidas e um ambiente cuidadosamente projetado para restaurar o equilíbrio entre corpo e mente.",
    badge: "Premium",
  },
  {
    id: 5,
    title: "Piscina de Natação",
    media: "/assets/studio/poolday.mp4",
    mediaType: "video",
    description:
      "Piscina semiolímpica para aulas, treinos e atividades aquáticas.",
    badge: "Premium",
  },
];
