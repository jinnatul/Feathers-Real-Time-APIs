import { BrowserRouter, Switch, Route } from "react-router-dom";
import Service from "./components/Service";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Service} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
