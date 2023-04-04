import React, { useState, useEffect } from 'react';
import { URL } from '../constants/constants';
import { fetchCards } from '../_apis/apis';

const DataContext = React.createContext({
  cards: [],
  totalCards: 0,
  loading: false,
  addCard: (newCard) => {},
  removeCard: (id) => {},
  updateCard: (id) => {}, 
});

export const DataContextProvider = (props) => {
  // const [cardItems, setCardItems] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [cardItems, setCardItems] = useState(() => {
    const storedItems = localStorage.getItem('cardItems');
    return storedItems ? JSON.parse(storedItems) : [];
  });
  

  useEffect( () => {
    setIsLoading(true); 
    const fetchCards = async () => {
      try {
        const response = await fetch(`${URL}`);
        if (!response.ok) {
          throw new Error("Data not found");
        }
        const data = await response.json();
            
        console.log(data.slice(0, 20));
        setCardItems(data.slice(0, 20));

      } catch (error) {
        console.error("Error:", error.message);
      }
      console.log(cardItems);
      setIsLoading(false);
    };

    fetchCards();
    // fetchCards(setIsLoading, setCardItems)
  }, []);


  useEffect(() => {
    localStorage.setItem('cardItems', JSON.stringify(cardItems));
  }, [cardItems]);







  const addCardHandler = (newCard) => {
    setCardItems([...cardItems, newCard]);
  };

  const removeCardHandler = (itemId) => {
    setCardItems((prevCard) => {
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
    cards: cardItems, 
    totalCards: cardItems.length, 
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