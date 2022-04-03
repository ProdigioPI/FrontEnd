import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './componentes/estaticos/footer/Footer';
import Login from './paginas/login/Login';
import './App.css';
import Cadastrar from './paginas/cadastrar/Cadastrar';
import HomeAluno from './paginas/home/homealuno/HomeAluno';
import HomeProfessor from './paginas/home/homeprofessor/HomeProfessor';
import NavBar from './componentes/estaticos/navbar/NavBar/NavBar';


function App() {
  return (
    <Router>
      
      <Switch>
        <div style={{ minHeight: '100vh' }}>
          <Route exact path='/'>

          <NavBar />
            <Login />
          </Route>

          <Route path='/login'>
          <NavBar />
            <Login />
          </Route>

          <Route path='/cadastro'>
          <NavBar />
            <Cadastrar />
          </Route>

          <Route path={`/home/${'A'}`}>
            <HomeAluno />
          </Route>

          <Route path={`/home/${'P'}`}>
            <HomeProfessor />
          </Route>
          
        </div>
      </Switch>
      <Footer />
    </Router>
  );

}
export default App;
