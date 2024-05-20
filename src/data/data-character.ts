import spider from "../statics/characters/homem-aranha.png"
import wanda from "../statics/characters/wanda.png"
import thanos from "../statics/characters/thanos.png"
import hulk from "../statics/characters/hulk.png"

export interface ICharacter {
  id: number
  title: string
  description: string
  appearances: string[]
  rating: number
  image: string
  release: number;
  chronology: number;
  streaming: string;
}

export interface IDataCharacter {
  type: string
  data: Array<ICharacter>
}

const data: IDataCharacter = {
  type: "characters",
  data: [
    {
      id: 1,
      title: "Homem-Aranha",
      description: "Após ser mordido por uma aranha radioativa, Peter Parker se torna o amigo da vizinhança, o Homem-Aranha.",
      appearances: ["Spiderverse", "Homecomming", "The Amazing Spiderman"],
      rating: 4,
      image: spider,
      release: 0,
      chronology: 0,
      streaming: "",
    },
    {
      id: 2,
      title: "Wanda Maximoff",
      description: "Wanda Maximoff foi sequestrada da Sérvia e trazida para a Montanha Wundagore, base do Alto Evolucionário. Durante anos, ela e seu irmão gêmeo, Pietro, acreditavam que eram filhos de um casal de ciganos.",
      appearances: ["Vingadores - Era de Ultron", "Capitão América - Guerra Civil", "Vingadores - Guerra Infinita", "Vingadores - Ultimato", "WandaVision"],
      rating: 4,
      image: wanda,
      release: 0,
      chronology: 0,
      streaming: "",
    },
    {
      id: 3,
      title: "Thanos",
      description: "A lua Titã era governada por Mentor (A'Lars), quando então reinava paz e tecnologia. Mentor tinha dois filhos: Eros e Thanos.  Ao contrário do irmão, Thanos, era bem mais poderoso e almejava ainda mais.",
      appearances: ["Vingadores", "Guardiões da Galáxia - vol. I", "Vingadores - Guerra Infinita", "Vingadores - Ultimato"],
      rating: 5,
      release: 0,
      chronology: 0,
      image: thanos,
      streaming: "",
    },
    {
      id: 4,
      title: "Hulk",
      description:"Na história original dos quadrinhos, o Hulk é um selvagem e poderoso alter ego do Dr. Robert Bruce Banner, um cientista que foi atingido por raios gama enquanto salvava um adolescente durante o teste militar.",
      appearances: ["Vingadores", "Vingadores - Era de Ultron", "Thor - Ragnarok", "Vingadores - Guerra Infinita", "Vingadores - Ultimato"],
      rating: 4,
      release: 0,
      chronology: 0,
      image: hulk,
      streaming: "",
    }
  ]
}

export default data;
