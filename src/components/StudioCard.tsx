import StoreMap from "./StoreMap";
import ContactInfo from "./ContactInfo";
import BusinessHoursCard from "./BusinessHoursCard";

import { Studio } from "@/types/studio";

import { buildWhatsAppUrl } from "@/lib/whatsapp";

type Props = {
  studio: Studio;
};

export default function StudioCard({ studio }: Props) {
  return (
    <div className="overflow-hidden border border-white/10 bg-white/5">
      <div className="p-6">
        <h2 className="mb-6 text-center text-xl font-bold text-white">
          {studio.label}
        </h2>

        <BusinessHoursCard hours={studio.hours} />

        <div className="mt-6">
          <ContactInfo
            address={studio.address}
            city={studio.city}
            phone={studio.phone}
            email={studio.email}
          />
        </div>

        <a
          href={buildWhatsAppUrl(
            studio.whatsapp,
            `Olá! Quero falar com a ${studio.label}.`,
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp mt-6 w-full justify-center"
        >
          Agendar avaliação
        </a>
      </div>

      <StoreMap
        lat={studio.lat}
        lng={studio.lng}
        name={studio.label}
        googleMapsUrl={studio.mapsUrl}
        containerClassName="h-52"
      />
    </div>
  );
}
