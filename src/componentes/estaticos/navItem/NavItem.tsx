import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
import Search from '../../search/Search';
import { Grid } from '@material-ui/core';
import './NavItem.css'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: '#0a72c7',
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid className='background-Navitem'>
      <Paper className={classes.root} >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          centered
        >

          <Link to="/home" className='link-style' >
            <Tab label="Home" className='tab-style' />
          </Link>

          <Link to="/materia/portuges" className='link-style' >
            <Tab label="Português" className='tab-style' />
          </Link>

          <Link to="/materia/matematica" className='link-style' >
            <Tab label="Matematica" className='tab-style' />
          </Link>

          <Link to="/materia/ciencias" className='link-style' >
            <Tab label="Ciências" className='tab-style' />
          </Link>

          <Link to="/materia/historia" className='link-style' >
            <Tab label="História" className='tab-style' />
          </Link>

          <Link to="/materia/geografia" className='link-style' >
            <Tab label="Geografia" className='tab-style' />
          </Link>

          <Link to="/materia/filosofia" className='link-style' >
            <Tab label="Filosofia" className='tab-style' />
          </Link>

          <Link to="/materia/inglês" className='link-style' >
            <Tab label="Inglês" className='tab-style' />
          </Link>



        </Tabs>
      </Paper>
    </Grid>
  );
}