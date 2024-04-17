import { ReactComponent as MarcaRegistrada } from "assets/marca_registrada.svg"
import styled from "styled-components"

const FooterEstilizado = styled.footer `
    background-color: var(--azul-escuro);
    color: var(--branco);
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: .5rem;
`

export default function Rodape () {
    return (
        <FooterEstilizado>
            <MarcaRegistrada/>

            Desenvolvido por alura
        </FooterEstilizado>
    )
}