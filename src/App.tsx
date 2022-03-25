import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './componentes/estaticos/navbar/NavBar';
import Footer from './componentes/estaticos/footer/Footer';
import Login from './paginas/login/Login';
import Cadastro from './paginas/cadastro/Cadastro';
import './App.css';
import Home from './paginas/home/Home';


function App() {
  return (
      <Router>
        <NavBar />
        <Switch>
          <div style={{minHeight: '100vh'}}>

            <Route exact path='/'>
              <Login/>
            </Route>

            <Route path='/login'>
              <Login />
            </Route>

            <Route path='/cadastro'>
              <Cadastro />
            </Route>

          <Route path='/home'>
            <Home />
          </Route> 
          
          </div>
        </Switch>  
        <Footer />
      </Router>  
  );

}
export default App;
