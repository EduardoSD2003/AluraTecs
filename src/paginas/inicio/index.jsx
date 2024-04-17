import Post from "componentes/PostCard";
import posts from "json/posts.json";
import styled from "styled-components";

const UlEstilizado = styled.ul`
  padding: 0 6vw 3.625rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: -2.5rem;
  max-width: 1730px;

  @media (max-width: 1100px) {
    margin-top: 0;
    padding: 2rem 1.5rem 3.625rem;
  }
`;

function Inicio() {
  return (
    <UlEstilizado>
      {posts.map((post) => (
        <li key={post.id}>
          <Post post={post} />
        </li>
      ))}
    </UlEstilizado>
  );
}

export default Inicio;
