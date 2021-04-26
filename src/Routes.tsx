import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PeoplePage from "pages/PeoplePage/PeoplePage";
import App from "App";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/people">
          <PeoplePage />
        </Route>
      </Switch>
    </Router>
  );
}
