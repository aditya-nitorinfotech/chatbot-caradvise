import logo from './logo.svg';
// import './App.css';
import { ChakraProvider, theme } from "@chakra-ui/react";
import Chat from './pages/Chat';
import Footer from './components/common/Footer';
import CommonHeader from './components/common/Header';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    <BrowserRouter>
      <CommonHeader />
      <ChakraProvider>

        <Chat />

      </ChakraProvider >
      <Footer />
    </BrowserRouter>
    // </div>
  );
}

export default App;
