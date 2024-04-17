import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";
import styled from "styled-components";

const FotoSobreMim = styled.img`
  margin-bottom: 0.5rem;
  margin-left: 1.5rem;
  width: 40vw;
  float: right;
  @media (max-width: 1100px) {
    float: none;
    display: block;
    margin: 0 auto 2rem;
    width: 70vw;
  }
  @media (max-width: 744px) {
    width: 100%;
  }
`;

const SubTitulo = styled.h3`
  margin-bottom: 2rem;
  font-size: 2.5rem;
  @media (max-width: 1100px) {
    margin-bottom: 2rem;
  }
  @media (max-width: 744px) {
    font-size: 1.5rem;
    line-height: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const PEstilizado = styled.p`
  text-align: justify;
  font-size: 1.5rem;
  line-height: 2.25rem;
  margin-bottom: 1.5rem;
  @media (max-width: 1100px) {
  }
  @media (max-width: 744px) {
    font-size: 1rem;
    line-height: 1.75rem;
  }
`;

function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <SubTitulo>Olá, sou o Antônio</SubTitulo>
      <FotoSobreMim src={fotoSobreMim} alt="foto" />
      <PEstilizado>
        Oi, tudo bem? Eu sou instrutor de Front-end na Alura e estou feliz de te
        ver por aqui.
      </PEstilizado>

      <PEstilizado>
        Minha história com programação começou no Instituto Federal do Piauí
        (IFPI), quando fiz o ensino médio integrado ao curso de Informática. Eu
        aprendi lógica de programação e o básico de várias linguagens, como PHP,
        Python, Java, mas sem aprofundar muito em cada uma delas. Eu gostava
        muito de estudar programação, mas na época não fazia ideia de que
        trabalharia com isso hoje.
      </PEstilizado>

      <PEstilizado>
        No ensino superior, escolhi cursar Engenharia Elétrica na Universidade
        Federal do Piauí (UFPI). Lá eu consegui entrar no PET (Programa de
        Educação Tutorial), um grupo acadêmico que contribui de diversas formas
        para o curso. Lá eu tive a oportunidade de estudar desenvolvimento web
        para ser um dos mantenedores do site deles.
      </PEstilizado>
      <PEstilizado>
        Com isso tive minha experiência de dev mais próxima da realidade, com
        prazos de implementação para o site, e aprendi muito enquanto
        codificava.
      </PEstilizado>

      <PEstilizado>
        E foi enquanto eu estava no PET que decidi procurar um estágio em
        desenvolvimento web. Eu encontrei uma vaga na Alura para o Scuba Team e
        percebi que ela aliava duas paixões minhas: programação e educação. Para
        minha felicidade, fui escolhido para fazer parte do time.
      </PEstilizado>

      <PEstilizado>
        Desde então, tem sido aprenas aprendizados atrás de aprendizados. A
        Alura é uma escola não só para seus alunos e alunas, mas também para os
        colaboradores e colaboradoras. Hoje sou muito feliz de ter a
        oportunidade de trazer esses conteúdos ricos e encantadores para você.
        Espero que aprenda bastante!
      </PEstilizado>
    </PostModelo>
  );
}

export default SobreMim;
