import { BrowserRouter as Router, Route, Routes as Switch } from "react-router-dom";
import Getting from "./pages/Getting";
import Loading from "./pages/Loading";
import AvaliableEvents from "./pages/AvaliableEvents";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" element={<Getting />} />
        <Route exact path="/info" element={<Loading />} />
        <Route exact path="/events" element={<AvaliableEvents />} />
      </Switch>
    </Router>
  );
};

export default Routes;
