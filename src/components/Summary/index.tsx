import { Container } from "./styles";
import incomeImg from '../../assets/entradas.svg'
import outComeImg from '../../assets/saidas.svg'
import totalImg from '../../assets/total.svg'

export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas"></img>
                </header>
                <strong> R$1000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outComeImg} alt="Entradas"></img>
                </header>
                <strong> - R$500,00</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Entradas"></img>
                </header>
                <strong> - R$500,00</strong>
            </div>

        </Container>
    )
}