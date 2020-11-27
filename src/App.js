import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Home from './components/Home';
import UserPage from './components/UserPage';
import Header from './components/Header';
import { UserContextProvider } from './context/users-context';

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 14px;
    font-family: 'Open Sans', sans-serif;
  }
  a {
    text-decoration: none;
  }

  ion-icon {
    fill: #F3F3F3;
  }

  .t {
    transition: all 0.5s ease-out;
  }

  input, select {
    margin-top: 3rem;
    padding: 1.5rem;
    border-radius: 10px;
    outline: none;
    border: none;
    background-color: #F3F3F3;
    border: 1px solid grey;
    width: 100%;
    &:focus {
      border: 1px solid #1E1E1E;  
    }
    &:hover {
      border: 1px solid #1E1E1E;  
    }
  }

  .black {
    fill: #000;
    margin-right: 1rem;
  }

  .profile {
    color: #000;
    text-decoration: underline;
  }

  .m-t {
    margin-top: 1rem;
  }

  .center-text {
    text-align: center;
  }

  .chart {
    max-width: 750px;
  }
`;

const Container = styled.div`
  width: 100%;
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Container>
        <Switch>
          <UserContextProvider>
            <Route exact path="/" component={Home} />
            <Route path="/user/:api/:id" component={UserPage} />
          </UserContextProvider>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
