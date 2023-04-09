import './App.scss';
import Layout from './layout/Layout/Layout';
import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import AllCardsPage from './pages/AllCardsPage';
import DetailsCardPage from './pages/DetailsCardPage';
import AuthPage from './pages/AuthPage';
import { AuthContextProvider } from './_store/auth-context';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import SigninForm from './components/SigninForm/SigninForm';

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
            
            <Route path='/auth' element={ <AuthPage/> }>
              <Route path="signup" element={<RegistrationForm />} />
              <Route path="signin" element={<SigninForm />} />
              <Route path="*" element={<Navigate to="/signup" replace />} />
            </Route>
              
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