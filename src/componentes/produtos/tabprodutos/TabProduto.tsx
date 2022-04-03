import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
//import ListaPostagem from '../listapostagem/ListaPostagem';
//import ListaProduto from '../listaproduto/ListaProduto';

import './TabProduto.css';
import GridItem from '../../gridItem/GridItem';
//import ModalPostagem from '../modalPostagem/ModalPostagem';
//import ModalProduto from '../modalProduto/ModalProduto';
//import Sobre from '../../sobre/Sobre';


function TabProduto() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static" className='back-produto'>
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
            <Tab className="menu-tab" label="Portugues" value="1"/>
            <Tab className="menu-tab" label="Matematica" value="2" />
            <Tab className="menu-tab" label="História" value="3" />
            <Tab className="menu-tab" label="Geografia" value="4" />
            <Tab className="menu-tab" label="Biologia" value="5" />
            <Tab className="menu-tab" label="Quimica" value="6" />
            <Tab className="menu-tab" label="Fisica" value="7" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box  display="flex" flexWrap="wrap" justifyContent="center" style={{margin:'5px'}}>
            {/* <ModalProduto/> */}
            <GridItem />
          </Box>
          <Box  display="flex" flexWrap="wrap" >
            {/* <ListaProduto /> */}
          </Box>
        </TabPanel>
        <TabPanel value="2">
          {/* <Sobre/> */}
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabProduto;