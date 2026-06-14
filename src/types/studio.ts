export type BusinessHour = {
  day: string;
  time: string;
};

export type Studio = {
  label: string;
  address: string;
  city: string;
  phone: string;
  email: string;
  whatsapp: string;

  lat: number;
  lng: number;

  mapsUrl: string;

  hours: BusinessHour[];
};
