import React from "react"
import Navbar from "../components/Navbar/navabar"
import About from "../components/AboutUs/aboutus"
import Home from "../components/Home/home"
import Howitwork from "../components/Howitwork/howitwork"
import Categories from "../components/Categories/categories"
import Testimony from "../components/Testimony/testimony"
import Subscribe from "../components/Subscribe/subscribe"
import Footer from "../components/Footer/footer"
import Homelogin from "../components/Homelogin/homelogin"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="container position-relative">
        <Navbar />
      <About />
      <Home />
      <Howitwork />
      <Categories />
      <Testimony />
      <Subscribe />
      <Footer />
      <Homelogin />
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App
