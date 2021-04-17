import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import HomePage from './Pages/HomePage';
import './App.css';
import { createMuiTheme, makeStyles, MuiThemeProvider, ThemeProvider } from '@material-ui/core/styles';

import CssBaseline from "@material-ui/core/CssBaseline";

const darkTheme=createMuiTheme({
  palette: {
    
    type:'dark'
 
  }
});
const lightTheme=createMuiTheme({
  palette: {
    type:'light'
    

    },

});
function App() {
  return (
    <MuiThemeProvider theme={darkTheme}>
        <CssBaseline />
    <div className="App">
     
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route path="/first" exact component={LandingPage} />
          <Route path="/second" component={HomePage} />
        </Switch>
      </BrowserRouter>
      
    </div>
    </MuiThemeProvider>
  );
}

export default App;
