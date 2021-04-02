import { GlobalStyle } from './styles/global'
import Modal from 'react-modal'
import { Header } from './components/Header'
import { DashBoard } from './components/Dashboard';
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewModalTransactionOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewModalTransactionOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewModalTransactionOpen(false);
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <DashBoard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal} />
      <GlobalStyle />
    </>
  );
}

