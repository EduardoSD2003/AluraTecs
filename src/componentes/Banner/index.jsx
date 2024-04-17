import styled from "styled-components";
import circuloColorido from "assets/circulo_colorido.png";
import minhaFoto from "assets/minha_foto.png";

const BannerEstilizado = styled.div`
  padding: 3rem 7.5rem 6.25rem;
  background-color: var(--azul-escuro);
  color: var(--branco);
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 1100px) {
    padding: 3.5rem 1.5rem;
  }
`;

const ApresentacaoEstilizado = styled.div``;

const TituloEstilizado = styled.h1`
  font-family: var(--fonte-secundaria);
  font-size: 4rem;
  margin-top: 4.875rem;
  margin-bottom: 2rem;
  @media (max-width: 1100px) {
    margin-top: 0;
    margin-bottom: 1.5rem;
  }
`;

const ParagrafoEstilizado = styled.p`
  font-family: var(--fonte-secundaria);
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 1100px) {
    margin-bottom: 1.5rem;
  }
`;

const ImagensEstilizado = styled.div`
  height: 406px;
  position: relative;
  @media (max-width: 1100px) {
    height: 338px;
  }
`;

const CirculoColoridoEstilizado = styled.img`
  position: absolute;
  right: 7vw;
  bottom: 2.2vw;
  width: 20vw;
  @media (max-width: 1100px) {
    right: 10vw;
    width: 35vw;
  }
`;

const MinhaFoto = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 18vw;
  border-radius: 50%;
  @media (max-width: 1100px) {
    width: 25vw;
  }
`;

export default function Banner() {
  return (
    <BannerEstilizado>
      <ApresentacaoEstilizado>
        <TituloEstilizado>Olá, Mundo!</TituloEstilizado>
        <ParagrafoEstilizado>
          Boas vindas ao meu espaço pessoal! Eu sou Antônio Evaldo, instrutor de
          Front-end da Alura. Aqui compartilho vários conhecimentos, espero que
          aprenda algo novo :)
        </ParagrafoEstilizado>
      </ApresentacaoEstilizado>
      <ImagensEstilizado>
        <CirculoColoridoEstilizado src={circuloColorido} aria-hidden={true} />
        <MinhaFoto src={minhaFoto} alt="foto sorrindo" />
      </ImagensEstilizado>
    </BannerEstilizado>
  );
}
