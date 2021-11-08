import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import AuthProvider from "./contexts/AuthProvider";
import Appointment from "./Pages/Appointment/Appointment";
import DashBoard from "./Pages/DashBoard/DashBoard/DashBoard";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <div className="App">
      <AuthProvider>
           <Router>
       <Switch>
          <Route exact path="/">
           <Home></Home>
          </Route>
          <Route  path="/home">
           <Home></Home>
          </Route>
          <PrivateRoute exact path="/appointment">
            <Appointment></Appointment>
          </PrivateRoute>
          <PrivateRoute  path="/dashboard">
            <DashBoard></DashBoard>
          </PrivateRoute>
          <Route  path="/login">
           <Login></Login>
          </Route>
          <Route  path="/register">
           <Register></Register>
          </Route>
        </Switch>
     </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
