import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './componentes/estaticos/footer/Footer';
import Login from './paginas/login/Login';
import './App.css';
import Cadastrar from './paginas/cadastrar/Cadastrar';
import HomeAluno from './paginas/home/homealuno/HomeAluno';
import HomeProfessor from './paginas/home/homeprofessor/HomeProfessor';
import NavBar from './componentes/estaticos/navbar/NavBar/NavBar';
import ListaCategorias from './componentes/categorias/listaCategorias/ListaCategorias';
import ListaProdutos from './componentes/produtos/listaProdutos/ListaProdutos';
import CadastrarProdutos from './componentes/produtos/cadastarProdutos/CadastrarProdutos';
import CadastrarCategorias from './componentes/categorias/cadastrarCategorias/CadastrarCategorias';
import DeletarProduto from './componentes/produtos/deletarProdutos/DeletarProduto';
import DeletarCategoria from './componentes/categorias/deletarCategorias/DeletarCategoria';
import { Box } from '@material-ui/core';
import NavAluno from './componentes/estaticos/navbar/navbarAluno/NavAluno';
import NavProfessor from './componentes/estaticos/navbar/navbarprofessor/NavProfessor';
import { Provider } from 'react-redux';
import store from './store/store';
import HomePrincipal from './paginas/home/HomePrincipal';


function App() {
  return (
    <Provider store={store} >

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

            <Route exact path='/home/aluno'>
              <HomeAluno />
            </Route>

            <Route exact path='/home/professor'>
              <HomeProfessor />
            </Route>
            <Route exact path='/home'>
              <HomePrincipal />
            </Route>
            <Route path='/categorias'>
              <NavProfessor />
              <Box display='flex' flexGrow='grow'>
                <ListaCategorias />
              </Box>
            </Route>
            <Route path='/produtos' >
              <NavProfessor />
              <Box display='flex' flexGrow='grow'>
                <ListaProdutos />
              </Box>
            </Route>

            <Route exact path='/formularioProduto'>
              <NavProfessor />
              <CadastrarProdutos />
            </Route>
            <Route exact path='/formularioProduto/:id'>
              <NavProfessor />
              <CadastrarProdutos />
            </Route>
            <Route exact path='/formularioCategoria'>
              <NavProfessor />
              <CadastrarCategorias />
            </Route>
            <Route exact path='/formularioCategoria/:id'>
              <NavProfessor />
              <CadastrarCategorias />
            </Route>
            <Route path='/deletarProduto/:id' >
              <NavProfessor />
              <DeletarProduto />
            </Route>
            <Route path='/deletarCategoria/:id'>
              <NavProfessor />
              <DeletarCategoria />
            </Route>

          </div>
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );

}
export default App;
