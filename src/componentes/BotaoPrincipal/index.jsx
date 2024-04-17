import styled from "styled-components";

const BotaoPrincipalEstilizado = styled.button`
  display: inline-block;
  border-radius: 24px;
  padding: 0.75rem 1.5rem;
  font-size: 1.125rem;
  line-height: 1.125rem;
  background-color: var(--azul-medio);
  color: var(--branco);
  border: 3px solid var(--azul-medio);
  cursor: pointer;
  transition: 0.2s;
  :hover {
    border: 3px solid var(--azul-escuro);
  }
`;

export const BotaoPrincipalGrande = styled(BotaoPrincipalEstilizado)`
    padding: 1.5rem 2.75rem;
    font-size: 1.5rem;
    line-height: 1.125rem;
`;
export default function BotaoPrincipal({ children }) {
  return (
    <BotaoPrincipalEstilizado>
    {children}
    </BotaoPrincipalEstilizado>
  )
}
