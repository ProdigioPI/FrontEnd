import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });
  
const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
 };
function ComplexGrid(){
    return (
        <Paper
          sx={{
            p: 2,
            margin: 'auto',
            maxWidth: 500,
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
          }}
        >
          <Grid container spacing={2} style={{ backgroundColor: "#1C1C1C" , color: "white"}}>
            <Grid item>
              <ButtonBase sx={{ width: 208, height: 228 }}>
                <Img alt="complex" src="https://static.todamateria.com.br/upload/al/be/alberteinstein-cke.jpg" />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    Standard license
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Full resolution 1920x1080 • JPEG
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ID: 1030114
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{ cursor: 'pointer' }} variant="body2">
                    Compre
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" component="div">
                  $19.00
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      );

}
function FormRow() {
    return (
        <React.Fragment >
            <Grid item xs={4}   >
                <Box >
                <ComplexGrid/>
                </Box>
            </Grid>
            <Grid item xs={4}>
                <Box>
                <ComplexGrid/>
                </Box>
            </Grid>
            <Grid item xs={4}>
                <Box>
                <ComplexGrid/>
                </Box>
            </Grid>
        </React.Fragment>
    );
}

function ListDividers() {
    return (
      <List sx={style} component="nav" aria-label="mailbox folders">
        <ListItem button>
          <ListItemText primary="Inbox" />
        </ListItem>
        <Divider />
        <ListItem button divider>
          <ListItemText primary="Drafts" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <Divider light />
        <ListItem button>
          <ListItemText primary="Spam" />
        </ListItem>
      </List>
    );
  }


export default function AutoGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Item><ListDividers/></Item>
                </Grid>
                <Grid item xs={6}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={1} marginTop={1} >
                            <Grid container item spacing={3} >
                                <FormRow />
                            </Grid>
                            <Grid container item spacing={3}>
                                <FormRow />
                            </Grid>
                            <Grid container item spacing={3}>
                                <FormRow />
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs>
                    <Item>xs</Item>
                </Grid>
            </Grid>
        </Box>
    );
}