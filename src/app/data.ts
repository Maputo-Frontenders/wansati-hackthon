import type { StaticImageData } from "next/image";
import { ReactNode } from "react";

// Speakers
import IgorImg from "../../public/speakers/igor.webp";

export interface Speaker {
	img: StaticImageData,
	alt: string,
	name: string,
	role: string
};

export interface CustomizableCardType {
  title: string,
  description: string,
  children?: ReactNode
}

export interface Agenda extends CustomizableCardType {
  time: string,
  date: string
}

const Speakers: Speaker[] = [
  {
    img: IgorImg,
    alt: "",
    name: "Igor Sambo",
    role: "Presidente @MozDevz" 
  },
  {
    img: IgorImg,
    alt: "",
    name: "Igor Sambo",
    role: "Presidente @MozDevz" 
  },
  {
    img: IgorImg,
    alt: "",
    name: "Igor Sambo",
    role: "Presidente @MozDevz" 
  },
  {
    img: IgorImg,
    alt: "",
    name: "Igor Sambo",
    role: "Presidente @MozDevz" 
  },
  {
    img: IgorImg,
    alt: "",
    name: "Igor Sambo",
    role: "Presidente @MozDevz" 
  },
  {
    img: IgorImg,
    alt: "",
    name: "Igor Sambo",
    role: "Presidente @MozDevz" 
  }
];

const agenda: Agenda[] = [
  {
    title: " Introdução",
    description: "Check-in, introdução Wansati Hackathon, 3 master classes inspiradoras e formação de grupos participantes.",
    date: "2 de Junho || Sexta-feira",
    time: "18:00h - 19:40h"
  },
  {
    title: "Desenvolvimento das Soluções",
    description: "Check-in e registo das equipas, desafios do Wansati Hackathon, sessões de trabalho em grupos, almoço, master classes, sessões de trabalho em grupos, lanche da tarde e término dos trabalhos.",
    date: "3 de Junho || Sábado",
    time: "08:00h - 20:00h"
  },
  {
    title: "Apresentações e Premiação",
    description: "Chegada dos participantes, pitch perfeito, sprint final, sessão em grupo, lanche, apresentação ao júri, anúncio dos vencedores, encerramento e networking.",
    date: "4 de Junho || Domingo",
    time: "08:00h - 14:00h"
  }
]

const challenges: CustomizableCardType[] = [
  {
    title: "Educação",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio quae velit nobis at blanditiis hic reiciendis!"
  },
  {
    title: "Educação",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio quae velit nobis at blanditiis hic reiciendis!"
  },
  {
    title: "Educação",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio quae velit nobis at blanditiis hic reiciendis!"
  },
  {
    title: "Educação",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio quae velit nobis at blanditiis hic reiciendis!"
  },
  {
    title: "Educação",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio quae velit nobis at blanditiis hic reiciendis!"
  },
  {
    title: "Educação",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio quae velit nobis at blanditiis hic reiciendis!"
  }
]

export { Speakers, agenda, challenges };