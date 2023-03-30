import './App.scss';
import CardsList from './components/cardsList/CardsList';
import { useEffect, useState } from 'react';
import { URL } from './constants/constants';
import Layout from './layout/Layout/Layout';

function App() {


const [photos, setPhotos] = useState([]);

useEffect(() => {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => setPhotos(data.slice(0, 20)));
}, []);

console.log(photos);

  return (
    <Layout>
      <CardsList  photos={photos}/>
    </Layout>
  );
}

export default App;

// npm install node-sass --save-dev 
// npm install sass
