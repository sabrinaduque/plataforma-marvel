import { Header, Carousel } from '../../components'
import { Container, Content } from './styles'
import data, { IDataCharacter } from "../../data/data-character"

const Characters: React.FC = () => {
  const dataCharacters: IDataCharacter = data

  return (
    <Container>
      <Header />
      <Content>
        <Carousel data={dataCharacters}/>
      </Content>
    </Container>
  )
}

export default Characters
