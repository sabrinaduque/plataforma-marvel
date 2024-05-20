import React, { useState } from "react"
import { Container, CardsWrapper, Overlay, FilterContainer, SortSelect } from "./styles"
import closeButton from "../../statics/svg/close-button.svg"
import emptyStar from "../../statics/empty-star.png"
import fullStar from "../../statics/full-star.png"
import { IDataCharacter} from "../../data/data-character"
import { IDataComics } from "../../data/data-comics"
import { IDataMovie } from "../../data/data-movies"

interface CardsProps {
  data: IDataCharacter | IDataMovie | IDataComics
}

const Cards: React.FC<CardsProps> = ({ data }) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [sortOrder, setSortOrder] = useState<"release" | "chronology">("release");

  const handleVerDetalhesClick = (id: number) => {
    setExpandedId(prevId => (prevId === id ? null : id));
  };

  const renderStarRating = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img key={i} src={fullStar} alt="Full Star" className="star-image" />)
      } else {
        stars.push(<img key={i} src={emptyStar} alt="Empty Star" className="star-image" />)
      }
    }
    return stars;
  }

  const sortedCardsData = [...data.data].sort((a, b) => {
    if (sortOrder === "release") {
      return a.release - b.release;
    } else {
      return a.chronology - b.chronology;
    }
  });

  return (
    <div>
      {data.type === "movies" && (
        <FilterContainer>
          <SortSelect id="sortOrder" onChange={(e) => setSortOrder(e.target.value as "release" | "chronology")}>
            <option>Filtrar por</option>
            <option value="release">Lançamento</option>
            <option value="chronology">Cronologia</option>
          </SortSelect>
        </FilterContainer>
      )}

      <CardsWrapper>
        {expandedId !== null && <Overlay />}
        {sortedCardsData.map((card) => (
          <Container
            key={card.id}
            className={`${expandedId === card.id ? "expanded" : ""}`}
          >
            <div className="content">
              <img src={card.image} alt={`Imagem do ${card.title}`} className="heroImage" />

              <div className="infos">
                <div className="title">
                  <p>{card.title}</p>
                </div>

                <div className="description">
                  <span>{card.description}</span>
                </div>

                {data.type === "characters" && expandedId === card.id && (
                  <>
                    <div className="appears">
                      <span className="label-appearances"> Aparições: </span>
                      <div className="appearances">
                        {card.appearances.map((appearance, index) =>
                          <div key={`${index}-appearance`}>{appearance}</div>
                        )}
                      </div>
                    </div>
                    <div className="classification">
                      <span> Avaliações dos Fãs</span>
                    </div>
                    <div className="rating">
                      {renderStarRating(card.rating)}
                    </div>
                  </>
                )}

                {(data.type === "movies" || data.type === "comics") && expandedId === card.id && (
                  <>
                    <div className="more">
                      <div className="description-details">
                        {card.description}
                      </div>
                    </div>
                    <div className="streaming">
                      <span>Disponível para compra:</span>
                      <img src={card.streaming} alt="Streaming" className="streaming-image" />
                    </div>
                    <div className="classification">
                      <span> Crítica</span>
                    </div>
                    <div className="rating">
                      {renderStarRating(card.rating)}
                    </div>
                  </>
                )}

                <div className="section-buttons">
                  <button onClick={() => handleVerDetalhesClick(card.id)}>
                    {expandedId === card.id ? <img src={closeButton} alt="" className="closeButton" /> : "Ver Detalhes"}
                  </button>
                </div>
              </div>
            </div>
          </Container>
        ))}
      </CardsWrapper>
    </div>
  );
};

export default Cards;