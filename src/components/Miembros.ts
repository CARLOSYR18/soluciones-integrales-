import wilderImg from "../assets/wilder.png";
import ytaloImg from "../assets/italo.png";
import diegoImg from "../assets/diego.png";
import victorImg from "../assets/victor.png";
import edwinImg from "../assets/edwin.png";

export interface MiembroEquipo {
  nombre: string;
  cargo: string;
  imagen: string;
  alt: string;
}

export const miembros: MiembroEquipo[] = [
  { nombre: "Wilder Julca", cargo: "Gerente de Servicios", imagen: wilderImg, alt: "Wilder Julca" },
  { nombre: "Ytalo Romero", cargo: "Programador Web", imagen: ytaloImg, alt: "Ytalo Romero" },
  { nombre: "Diego Chancafe", cargo: "Programador Móvil", imagen: diegoImg, alt: "Diego Chancafe" },
  { nombre: "Victor Galarza", cargo: "Analista de Sistemas", imagen: victorImg, alt: "Victor Galarza" },
  { nombre: "Edwin Bustamante", cargo: "Administración de Redes", imagen: edwinImg, alt: "Edwin Bustamante" }
];
