import React, { useState, useEffect } from 'react';
import { URL } from '../constants/constants';

const DataContext = React.createContext({
  cards: [],
  totalCards: 0,
  loading: false,
  addCard: (newCard) => {},
  removeCard: (id) => {},
  updateCard: (id) => {}, 
});

export const DataContextProvider = (props) => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect( () => {
    setIsLoading(true); 


    // fetch(URL)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data)
    //     setCards('data212233', data.slice(0, 20))
    // });


    const fetchCards = async () => {
        try {
          const response = await fetch(`${URL}`);
          if (!response.ok) {
            throw new Error("Data not found");
          }
          const data = await response.json();
        
          const listOfCards = [];
      
          for(const key in data) {
            listOfCards.push({itemId: key, ...data[key]});
          }
          setIsLoading(false);
          setCards(listOfCards.slice(0, 20));

        //   console.log('listOfCards', listOfCards);

        } catch (error) {
          console.error("Error:", error.message);
        }
    };

    fetchCards();
    // console.log('cards', cards);
  }, []);







  const addCardHandler = (newCard) => {
    setCards([...cards, newCard]);
  };

  const removeCardHandler = (itemId) => {
    setCards((prevCard) => {
      return prevCard.filter(item => item.id !== itemId);
    }); 
  };

  const updateCardHandler = (itemId, card) => { 
    // let idx;
    // cards.forEach((item, index) => {  

    //   if (item.id === itemId) {
    //     // cards.splice(index, 1, card);
    //     // console.log(cards)
    //     idx = index;
    //   }
    // });

    // cards.splice(idx, 1, card);
    // console.log(card, itemId);
  };

  const context= {
    cards: cards, 
    totalCards: cards.length, 
    loading: isLoading,
    addCard: addCardHandler,
    removeCard: removeCardHandler,
    updateCard: updateCardHandler,
  };
      
  return (
    <DataContext.Provider value={context}>
      { props.children }
    </DataContext.Provider>
  );
}

export default DataContext;