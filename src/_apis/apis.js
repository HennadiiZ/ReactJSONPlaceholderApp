import { URL } from '../constants/constants';



export const fetchCards = async (setIsLoading, setCardItems) => {
  try {
    const response = await fetch(`${URL}`);
    if (!response.ok) {
      throw new Error("Data not found");
    }
    const data = await response.json();
  
    const listOfCards = [];
  
    for(const key in data) {
      listOfCards.push(data[key]);
    }
    setIsLoading(false);
    setCardItems(listOfCards.slice(0, 20));
  } catch (error) {
    console.error("Error:", error.message);
  }
  // console.log(cardItems);
};

// fetchCards();