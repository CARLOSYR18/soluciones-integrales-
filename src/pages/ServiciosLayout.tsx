import ClientesCarousel from "../components/ClientesCarousel";

interface Props {
  children: React.ReactNode;
}

const ServiciosLayout = ({ children }: Props) => {
  return (
    <>
      {children}

      {/* Carrusel clientes siempre al final */}
      <ClientesCarousel />
    </>
  );
};

export default ServiciosLayout;