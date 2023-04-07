import React, { useState, useEffect } from 'react';
import { URL, AMOUNT_OF_CARDS } from '../constants/constants';
// import { fetchCards } from '../_apis/apis';

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
        setCardItems(data.slice(0, AMOUNT_OF_CARDS));

      } catch (error) {
        console.error("Error:", error.message);
      }
      console.log(cardItems);
      setIsLoading(false);
    };
    fetchCards();
    // localStorage.setItem('cardItems', JSON.stringify(cardItems));
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

    for(const key of cardItems) {
      if (key.id === itemId) {    
        fetch(
          `https://jsonplaceholder.typicode.com/photos/${key.itemId}`, 
          {
            method: 'DELETE',
          }
        )
        .then(() => {
          console.log('Item deleted successfully!');
        })
        .catch((error) => {
          console.error('Error deleting item:', error);
        });
      } 
    };
  };

  const updateCardHandler = async (itemId, updatedCard) => {
    try {
      setIsLoading(true);
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${itemId}`, {
        method: 'PUT',
        body: JSON.stringify(updatedCard),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Update failed');
      }

      const updatedCardItem = await response.json();
      const cardIndex = cardItems.findIndex((card) => card.id === updatedCardItem.id);
      const updatedCardItems = [...cardItems];
      updatedCardItems[cardIndex] = updatedCardItem;

      setCardItems(updatedCardItems);
    } catch (error) {
      console.error('Error:', error.message);
    }
    setIsLoading(false);
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