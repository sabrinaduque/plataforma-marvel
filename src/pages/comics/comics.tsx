import { Header, Carousel } from '../../components'
import { Container, Content } from './styles'
import data, { IDataComics } from "../../data/data-comics"

const Comics: React.FC = () => {
  const dataComics: IDataComics = data
  return (
    <Container>
    <Header />
    <Content>
    <Carousel data={dataComics}/>
    </Content>
  </Container>
  )
}

export default Comics
