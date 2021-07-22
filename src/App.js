// import Home from './views/Hello'
import CreateOrder from './views/CreateOrder'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <CreateOrder/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
