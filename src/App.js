import './App.css';
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
      <ul className="card-list">
        {photos.map((photo) => (
          <li className="card" key={photo.id}>
            <img key={photo.id} src={photo.url} alt={photo.title} />
  
            <div className="card__info"> 
              <p>{photo.title}</p>
            </div>
            

          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
