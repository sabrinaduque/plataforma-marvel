import surfista from "../statics/comics/surfista-penteado.png"
import wolverine from "../statics/comics/wolverine.png"
import thorComics from "../statics/comics/thor-hq.png"
import amazon from "../statics/streaming/amazon.png"

export interface IComics {
  id: number
  title: string
  description: string
  appearances: string[]
  rating: number
  image: string
  streaming: string;
  release: number;
  chronology: number;
}

export interface IDataComics {
  type: string
  data: Array<IComics>
}

const data: IDataComics = {
  type: "comics",
  data: [
    {
      id: 1,
      title: "Thor: Vikings",
      description:"Garth Ennis e sua violência atacam novamente na HQ que leva a violência das histórias de Thor ao limite! Na minissérie de 2003 vemos vikings de um passado distante voltando a vida.",
      appearances: [],
      rating: 4,
      release: 0,
      chronology: 0,
      image: thorComics,
      streaming: amazon,
    },
    {
      id: 2,
      title: "Surfista Prateado: Parábola",
      description: "O único oponente do Devorador de Mundos é o herói que ele aprisionou na Terra: o Surfista Prateado, Galactus jurou não consumir o planeta, mas e se, em vez disso, ele transformar a civilização em seus adoradores?",
      appearances: [],
      rating: 4,
      release: 0,
      chronology: 0,
      image: surfista,
      streaming: amazon,
    },
    {
      id: 3,
      title: "Wolverine: Origens",
      description: "Origem é uma minissérie em quadrinhos publicada pela Marvel Comics em seis edições, entre 2001 e 2002. A história conta a revelação do passado do personagem Wolverine. ",
      appearances: [],
      rating: 5,
      release: 0,
      chronology: 0,
      image: wolverine,
      streaming: amazon,
    }
  ]
}

export default data;
