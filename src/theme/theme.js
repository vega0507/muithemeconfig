import { createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: indigo[900],
    },
    secondary: {
      main: blue[300],
    },
  },
  typography: {   
    fontFamily:'Roboto',
    fontSize: 14,    
  },
  overrides: {
        MuiInputBase: {
            input: {
            color: pink[900],
            },
        },
    }
});

export default theme; 