import Modal from 'react-modal'
import { Container } from './styles';

interface NewTransactionModalPorps{
    isOpen: boolean;
    onRequestClose:() => void
}

export function NewTransactionModal({isOpen,onRequestClose}:NewTransactionModalPorps){
    return(
        <Modal 
        overlayClassName={"react-modal-overlay"}
        className="react-modal-content"
          isOpen={isOpen} 
          onRequestClose={onRequestClose}>

            <Container>
                <h2>Cadastrar transação</h2>
                <input placeholder='Título' />

                <input type="number" placeholder='Valor' />

                <input type="text" placeholder='Categoria' />

                <button type="submit">Cadastrar</button>
            </Container>
          
        </Modal>
    )
}