import { BrowserRouter, Route, Switch } from "react-router-dom";
import Sidebar from "./Sidebar";
import Test from "./test";

export default function HomeUser() {
  return (
    <>
      <BrowserRouter>
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="col-10">
            <Switch>
              <Route path="/homeuser" component={Test} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}
