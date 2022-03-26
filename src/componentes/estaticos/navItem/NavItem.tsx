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
        <Tabs style={{ color: 'white'}}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Link to="/login" >
            <Tab label="Home" />
          </Link>
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </Paper>
    </Grid>
  );
}