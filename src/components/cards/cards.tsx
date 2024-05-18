import React, { useState } from "react";
import { Container } from "./styles";
import homemAranha from "../../statics/characters/Homem-Aranha.png";

const Cards: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleVerDetalhesClick = () => {
    setExpanded(!expanded)
  };

  return (
    <Container className={expanded ? "expanded" : ""}>
      <div className="content">
        <img src={homemAranha} alt="Imagem do heroi" />

        <div className="infos">
          <p>Homem-Aranha</p>
          <span className="description">
          Após ser mordido por uma aranha radioativa, Peter Parker se torna o amigo da vizinhança, o Homem-Aranha.
          </span>

          {expanded && (
          <div className="appears">
            <span>
              Aparições: Vingadores - Era de Ultron Capitão América - Guerra Civil Vingadores - Guerra Infinita Vingadores - Ultimato WandaVision
            </span>
          </div>
          )}
    
          <button onClick={handleVerDetalhesClick}>
            {expanded ? "Fechar Detalhes" : "Ver Detalhes"}
          </button>
       
        </div>
      </div>
    </Container>
  )
}

export default Cards
