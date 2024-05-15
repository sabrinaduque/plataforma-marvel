import { Header, Carousel } from '../../components'
import { Container, Content } from './styles'

const Characters: React.FC = () => {
  return (
    <Container>
      <Header />

      <Content>
        <Carousel />
      </Content>
    </Container>
  )
}

export default Characters
