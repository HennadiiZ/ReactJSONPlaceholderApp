import './App.scss';
import Layout from './layout/Layout/Layout';
import { Route, Routes, Navigate } from 'react-router-dom';
import AllCardsPage from './pages/AllCardsPage';
import DetailsCardPage from './pages/DetailsCardPage';
import AuthPage from './pages/AuthPage';
import { AuthContextProvider } from './_store/auth-context';

function App() {
  return (

  // <Layout>
  //   <main>
  //     <Routes>
  //       <Route path="*" element={<Navigate to="/cards" replace />}/>
  //       <Route path='/auth' element={ <AuthPage/> } />
  //       <Route path='/cards/*' element={ <AllCardsPage/> } />
  //       <Route path='/cards/:cardId' element={ <DetailsCardPage/> } />
  //     </Routes>
  //   </main>
  // </Layout>

    <AuthContextProvider>
      <Layout>
        <main>
          <Routes>
            <Route path="*" element={<Navigate to="/cards" replace />}/>
            <Route path='/auth' element={ <AuthPage/> } />
            <Route path='/cards/*' element={ <AllCardsPage/> } />
            <Route path='/cards/:cardId' element={ <DetailsCardPage/> } />
          </Routes>
        </main>
      </Layout>
    </AuthContextProvider>
  );
}

export default App;

// npm install node-sass --save-dev 
// npm install sass
// npm install react-router-dom