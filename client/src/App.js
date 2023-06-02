// import './App.css';
import { ChakraProvider } from "@chakra-ui/react";
import Chat from './pages/Chat';
import CommonHeader from './components/common/Header';
import CommonFooter from './components/common/Footer';
import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    window.onload = function () {
      window.scrollTo(0, 0);
    }

  }, [])
  return (

    <BrowserRouter>
      <CommonHeader />
      <ChakraProvider>

        <Chat />

      </ChakraProvider >
      <CommonFooter />
    </BrowserRouter>
    // </div>
  );
}

export default App;
