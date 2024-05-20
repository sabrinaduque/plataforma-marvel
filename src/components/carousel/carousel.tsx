import { Container, CarouselContainer } from "./styles"
import React, { useRef } from "react";
import arrowLeft from "../../statics/svg/arrow-left.svg";
import arrowRight from "../../statics/svg/arrow-right.svg";
import Cards from "../cards"
import { isBrowser } from "react-device-detect";
import { IDataCharacter} from "../../data/data-character"
import { IDataComics } from "../../data/data-comics"
import { IDataMovie } from "../../data/data-movies"

interface CarouselProps {
  data: IDataCharacter | IDataMovie | IDataComics
}

const Carousel: React.FC<CarouselProps> = ({data}) => {
  const carouselContainer = useRef<HTMLDivElement>(null);
  const dataCard = data

  const handleLeftClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if (carouselContainer.current) {
      carouselContainer.current.scrollLeft -= carouselContainer.current.offsetWidth;
    }
  };

  const handleRightClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if (carouselContainer.current) {
      carouselContainer.current.scrollLeft += carouselContainer.current.offsetWidth;
    }
  };
  return (
    <Container>
      <a href="#" onClick={handleLeftClick} className="reactIconLeft">
        <img src={arrowLeft} alt="Previous" />
      </a>
      <CarouselContainer ref={carouselContainer}>
        {isBrowser && (
          <>
            <Cards data={dataCard}></Cards>
          </>
        )}
      </CarouselContainer>
      <a href="#" onClick={handleRightClick} className="reactIconRight">
        <img src={arrowRight} alt="Next" />
      </a>
    </Container>
  )
}

export default Carousel
