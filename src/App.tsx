import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './componentes/estaticos/navbar/NavBar';
import Footer from './componentes/estaticos/footer/Footer';
import Login from './paginas/login/Login';
import './App.css';
import Home from './paginas/home/Home';
import Cadastrar from './paginas/cadastrar/Cadastrar';
import NavBarLogado from './componentes/estaticos/navbarlogado/NavBarLogado';


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
          <Route path='/home'>
          <NavBarLogado/>
            <Home />
          </Route>
        </div>
      </Switch>
      <Footer />
    </Router>
  );

}
export default App;
