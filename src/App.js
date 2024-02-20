import { createContext, useState } from 'react';
import './App.css';
import { CardImages } from './components/cards/variable';
import  CardContainer  from './components/cards/CardContainer';
import _ from 'lodash';

export const CardContext = createContext(CardImages)

function App() {

  const [images , setImages] = useState(CardImages)
  const [clicked , setClicked] = useState([])
  const [gameOver , setGameOver] = useState(false)


  const shuffleImages = (cardId)=> {
    if( gameOver || clicked.includes(cardId)) return setGameOver(true)
    setClicked([...clicked , cardId])
    setImages(_.shuffle(CardImages))
  }

  const resetGame =() => {
      setClicked([])
      setGameOver(false)
  }

  return (
    <CardContext.Provider value={{images , 
    shuffleImages ,
     resetGame ,
     gameOver , 
     clicked
     }}>
      <CardContainer/>
    </CardContext.Provider>
  );
}

export default App;
