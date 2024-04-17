import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const LinkEstilizado = styled.a`
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: var(--cor-fonte-principal);

  text-decoration: ${(props) => (props.localizacao === props.to ? "underline" : "")};
`;

export default function MenuLink({ children, to }) {
  const localizacao = useLocation();

  return (
    <Link to={to}>
      <LinkEstilizado localizacao={localizacao.pathname} to={to}>
        {children}
      </LinkEstilizado>
    </Link>
  );
}
