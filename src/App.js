import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { TextField } from '@material-ui/core'
import MenuBar from './MenuBar/MenuBar';

function App() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <MenuBar/>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" >
          Buttons
        </Typography> 
      </Grid>
      <Grid item xs={3}>
        <Button variant="contained" color="primary">
          Primary  
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button variant="contained" color="secondary">
          Secondary  
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button variant="contained" >
          Default  
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" >
          Inputs
        </Typography> 
      </Grid>
      <Grid item xs={3}>
        <TextField
          id="textPrimary"
          label="Primary"
          color="primary"          
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          id="textSecondary"
          label="Secondary"
          color="secondary"          
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          id="textDefault"
          label="Default"
        />
      </Grid>
      </Grid>
  );
}

export default App;
