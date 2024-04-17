import error404 from "assets/erro_404.png";
import BotaoPrincipal, { BotaoPrincipalGrande } from "componentes/BotaoPrincipal";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ConteudoContainer = styled.div`
  position: relative;
  text-align: center;
  background-color: var(--azul-escuro);
  color: var(--branco);
  padding: 0 1.5rem 6.5rem;

  @media (max-width: 744px) {
    padding: 3rem 1rem 17rem;
  }
`;

const Texto404 = styled.span`
  display: block;
  color: var(--azul-medio);
  font-family: var(--fonte-secundaria);
  font-size: 6rem;
  font-weight: 700;
  margin-bottom: 2rem;

  @media (max-width: 1100px) {
    margin-bottom: 2.25rem;
  }
  @media (max-width: 744px) {
    font-size: 4rem;
  }
`;

const TituloEstilizado = styled.h1`
  font-family: var(--fonte-secundaria);
  font-size: 3rem;
  margin-bottom: 2rem;

  @media (max-width: 744px) {
    font-size: 2.25rem;
    line-height: 3rem;
  }
`;

const ParagrafoEstilizado = styled.p`
  font-size: 1.5rem;
  line-height: 1.75rem;

  @media (max-width: 744px) {
    font-size: 1.125rem;
    line-height: 1.3125rem;
  }
`;

const BotaoEstilizado = styled.div`
  text-align: start;
  margin-top: 3.5rem;
  margin-left: 30vw;

  @media (max-width: 1100px) {
    margin-top: 2.75rem;
    margin-left: 15vw;
  }
  @media (max-width: 744px) {
    margin: 2.5rem 0 0;
    text-align: center;
  }
`;

const ImgEstilizado = styled.img`
  position: absolute;
  height: 25vw;
  bottom: calc(-25vw * 0.5);

  @media (max-width: 1100px) {
    height: 50vw;
    bottom: calc(-50vw * 0.65);
    left: 40vw;
  }
  @media (max-width: 744px) {
    position: absolute;
    margin: 0 auto;
    left: 0;
    right: 0;
    height: 94vw;
    bottom: calc(-94vw * 0.3);
    max-height: 375px;
  }
`;

const EspacoBranco = styled.div`
  height: 40vh;

  @media (max-width: 1100px) {
    height: 53vw;
  }
  @media (max-width: 744px) {
    height: calc(94vw * 0.5);
  }
`;

export default function NaoEncontrada() {
  const navegar = useNavigate()


  return (
    <>
      <ConteudoContainer>
        <Texto404>404</Texto404>
        <TituloEstilizado>Ops! Página não encontrada</TituloEstilizado>
        <ParagrafoEstilizado>
          Tem certeza de que era isso que você estava procurando?{" "}
        </ParagrafoEstilizado>
        <ParagrafoEstilizado>
          Aguarde uns instantes e recarregue a página, ou volte para a página
          inicial.
        </ParagrafoEstilizado>
        <BotaoEstilizado onClick={() => {navegar(-1)}}>
          <BotaoPrincipalGrande>Voltar</BotaoPrincipalGrande>
        </BotaoEstilizado>
        <ImgEstilizado src={error404} alt="cachorro" />
      </ConteudoContainer>
      <EspacoBranco></EspacoBranco>
    </>
  );
}
