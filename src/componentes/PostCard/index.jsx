import BotaoPrincipal from "componentes/BotaoPrincipal";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PostEstilizado = styled.div`
  text-align: center;
  width: 282px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);
  border-radius: 0px 0px 10px 10px;
  padding-bottom: 1.5rem;
  transition: transform 0.2s;

  &&:hover {
    transform: translate(0, -1rem);
  }

  @media (max-width: 1100px) {
    width: 336px;
  }
`;

const TituloEstilizado = styled.h2`
  font-family: var(--fonte-secundaria);
  font-size: 1.25rem;
  color: var(--azul-escuro);
  line-height: 1.75rem;
  margin: 1.5rem 0 1.75rem;
`;



const CapaEstilizada = styled.img`
  width: 100%;
  max-width: 1731px;
`;

export default function PostCard({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>
    <PostEstilizado>
      <CapaEstilizada src={`/assets/posts/${post.id}/capa.png`} alt="a" />
      <TituloEstilizado>{post.titulo}</TituloEstilizado>
      <BotaoPrincipal>Ler</BotaoPrincipal>
    </PostEstilizado>    
    </Link>

  );
}
