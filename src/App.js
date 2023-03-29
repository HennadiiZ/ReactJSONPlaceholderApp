import './App.css';
import CardsList from './components/cardsList/CardsList';
import { useEffect, useState } from 'react';

function App() {

const URL = 'https://jsonplaceholder.typicode.com/photos';
const [photos, setPhotos] = useState([]);

useEffect(() => {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => setPhotos(data.slice(0, 20)));
}, []);

console.log(photos);

  return (
    <div>
      < CardsList  photos={photos}/>
    </div>
  );
}

export default App;
