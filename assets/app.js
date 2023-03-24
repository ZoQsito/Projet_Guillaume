import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Redirect, Route, Switch, withRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./bootstrap";
import Navbar from "./js/components/Navbar";
import PrivateRoute from "./js/components/PrivateRoute";
import AuthContext from "./js/contexts/AuthContext";
import HomePage from "./js/pages/HomePage";
import LoginPage from "./js/pages/LoginPage";
import RegisterPage from "./js/pages/RegisterPage";
import ShopPage from "./js/pages/Shop";
import authAPI from "./js/services/authAPI";
import "./styles/app.css";
import Panier from "./js/pages/Panier";
import Profil_Page from "./js/pages/Profil_page";
import Stock from "./js/pages/Stock";
import Stocks from "./js/pages/Stocks";
import AdminPage from "./js/pages/Admin";
import jwtDecode from "jwt-decode";

authAPI.setup();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    authAPI.isAuthenticated()
  );

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    var token = localStorage.getItem("authToken");

  var decodedToken = jwtDecode(token);

  if(decodedToken.roles[0] === "ADMIN"){
    setIsAdmin(true)
  }

  },[isAuthenticated]);

  const AdminRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated && isAdmin ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );


  const NavbarWithRouter = withRouter(Navbar);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      <HashRouter>
        <NavbarWithRouter />
        <main className="container pt-5">
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <PrivateRoute path="/profil" component={Profil_Page} />
            <PrivateRoute path="/shop" component={ShopPage} />
            <PrivateRoute path="/panier" component={Panier} />
            <PrivateRoute path="/Stock" component={Stock} />
            <PrivateRoute
              path="/Stocks/:id"
              isAuthenticated={isAuthenticated}
              component={Stocks}
            />
            <AdminRoute path="/Admin" component={AdminPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </main>
      </HashRouter>
      <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
    </AuthContext.Provider>
  );
};
const rootElement = document.querySelector("#app");
ReactDOM.render(<App />, rootElement);
