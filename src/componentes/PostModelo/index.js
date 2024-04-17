import styled from "styled-components";

const ArticleEstilizado = styled.article`
  color: var(--cor-fonte-post);
  position: relative;
`;

const FotoCapaEstilizado = styled.div`
  height: 204px;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.3;
  position: absolute;
  top: 0;
  z-index: -1;
  background-image: ${(props) => `url(${props.fotoCapa})`};`;

const TituloEstilizado = styled.h2`
  height: 204px;
  font-family: var(--fonte-secundaria);
  padding: 0 7.5rem;
  font-size: 4rem;
  display: flex;
  align-items: center;
`;

const DivEstilizado = styled.div`
  padding: 2.5rem 7.5rem 4.5rem;
`;

export default function PostModelo({ fotoCapa, titulo, children}) {
  return (
    <ArticleEstilizado>
      <FotoCapaEstilizado fotoCapa={fotoCapa}></FotoCapaEstilizado>

      <TituloEstilizado>{titulo}</TituloEstilizado>

      <DivEstilizado>{children}</DivEstilizado>
    </ArticleEstilizado>
  );
}
