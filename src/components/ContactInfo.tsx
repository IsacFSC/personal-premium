type Props = {
  address: string;
  city: string;
  phone: string;
  email: string;
};

export default function ContactInfo({ address, city, phone, email }: Props) {
  return (
    <div className="space-y-5">
      <div>
        <p className="text-xs uppercase text-gray-500">Endereço</p>

        <p className="text-sm text-gray-300">{address}</p>

        <p className="text-xs text-gray-500">{city}</p>
      </div>

      <div>
        <p className="text-xs uppercase text-gray-500">Telefone</p>

        <a href={`tel:${phone}`} className="text-sm text-gray-300">
          {phone}
        </a>
      </div>

      <div>
        <p className="text-xs uppercase text-gray-500">Email</p>

        <a href={`mailto:${email}`} className="text-sm text-gray-300">
          {email}
        </a>
      </div>
    </div>
  );
}
