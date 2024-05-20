import ironMan from "../statics/movies/homem-de-ferro.png"
import ironMan2 from "../statics/movies/homem-de-ferro-2.png"
import captaoAmerica from "../statics/movies/capitao-america.png"
import captaMarvel from "../statics/movies/capita-marvel.png"
import thorPoster from "../statics/movies/thor-movie.png"
import amazon from "../statics/streaming/amazon.png"

export interface IMovie {
  id: number
  title: string;
  description: string;
  release: number;
  chronology: number;
  appearances: string[]
  rating: number;
  image: string;
  streaming: string;
}

export interface IDataMovie {
  type: string
  data: Array<IMovie>
}

const data: IDataMovie = {
  type: "movies",
  data: [
    {
      id: 1,
      title: "Homem de Ferro",
      description: "Tony Stark (Robert Downey Jr.) é um industrial bilionário, que também é um brilhante inventor, ao ser sequestrado, ele é obrigado a construir uma arma devastadora, mas ao invés disso, cria uma armadura capaz de mudar a história.",
      appearances: [],
      release: 2008,
      chronology: 2009,
      rating: 3,
      image: ironMan,
      streaming: amazon,
    },
    {
      id: 2,
      title: "Homem de Ferro 2",
      description: "O mundo já sabe que o inventor bilionário Tony Stark (Robert Downey Jr.) é o super-herói blindado Homem de Ferro. Sofrendo pressão do governo, da mídia e do público para compartilhar sua tecnologia com as forças armadas",
      appearances: [],
      release: 2010,
      chronology: 2011,
      rating: 3,
      image: ironMan2,
      streaming: amazon,
    },
    {
      id: 3,
      title: "Thor",
      description: "Quando é banido do reino de Asgard e exilado na Terra, o arrogante guerreiro Thor (Chris Hemsworth) é obrigado a lutar para reaver seus poderes perdidos. ",
      appearances: [],
      release: 2011,
      chronology: 2011,
      rating: 4,
      image: thorPoster,
      streaming: amazon,
    },
    {
      id: 4,
      title: "Capitã Marvel",
      description: "Capitã Marvel, parte do exército de elite dos Kree, uma raça alienígena, encontra-se no meio de uma batalha entre seu povo e os Skrulls. ",
      appearances: [],
      release: 2019,
      chronology: 1995,
      rating: 4,
      image: captaMarvel,
      streaming: amazon,
    },
    {
      id: 5,
      title: "Capitão América: O Primeiro Vingador",
      description: "Em Capitão América: O Primeiro Vingador, conhecemos a história de Steve Rogers (Chris Evans) e como ele se tornou o melhor soldado do mundo. ",
      appearances: [],
      release: 2011,
      chronology: 1943,
      rating: 4,
      image: captaoAmerica,
      streaming: amazon,
    },
  ]
}

export default data;
