import './App.css';
import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './views/Main';
import Usl from './views/Usl';
import Ivent from './views/Ivent';
import About from './views/About';
import Contacts from './views/Contacts';
import ModalBox from './components/ModalBox';
import Login from './components/Login';
import Registration from './components/Registration';
import Regivent from './components/Regivent';



function App() {
  const[page, setPage] = useState('Main')
  const[modalBox, setModalBox] = useState('none')
  const pages = {
    Main: <Main />,
    Usl: <Usl />,
    Ivent: <Ivent />,
    About: <About />,
    Contacts: <Contacts />
  }
  const modalBoxes ={
    none: null,
    Login: <ModalBox setModalBox={setModalBox}><Login /></ModalBox>,
    Registration: <ModalBox setModalBox={setModalBox}>< Registration /></ModalBox>,
    Regivent: <ModalBox setModalBox={setModalBox}>< Regivent /></ModalBox> 
  }
  return (
    <div className="App">
      <Header setPage={ setPage } setModalBox={setModalBox}/>
      { pages[page] } 
      { modalBoxes[modalBox]}
      <Footer />
    </div>
  );
}

export default App;
