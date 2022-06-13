import { BrowserRouter as Router, Route, Routes as Switch } from "react-router-dom";
import Getting from "./pages/Getting";
import Loading from "./pages/Loading";
import Events from "./pages/Events";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/getting" element={<Getting />} />
        <Route exact path="/" element={<Loading />} />
        <Route exact path="/events" element={<Events />} />
      </Switch>
    </Router>
  );
};

export default Routes;
