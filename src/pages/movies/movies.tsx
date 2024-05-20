import { Header, Carousel } from '../../components'
import { Container, Content } from './styles'
import data, { IDataMovie } from "../../data/data-movies"

const Movies: React.FC = () => {
  const dataMovie: IDataMovie = data

  return (
    <Container>
      <Header />
      <Content>
        <Carousel data={dataMovie}/>
      </Content>
    </Container>
  )
}

export default Movies
