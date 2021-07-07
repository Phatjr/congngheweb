import Navbar from './component/Navbar/navabar'
import About from './component/AboutUs/aboutus'
import Home from './component/Home/home'
import Howitwork from './component/Howitwork/howitwork'
import Categories from './component/Categories/categories'
import Testimony from './component/Testimony/testimony'
import Subscribe from './component/Subscribe/subscribe'
import Footer from './component/Footer/footer'
import Login from './component/Login/login'
function App() {
  return (
    <section className="container position-relative">
      <Navbar />
      <About />
      <Home />
      <Howitwork />
      <Categories />
      <Testimony />
      <Subscribe />
      <Footer />
      <Login />
    </section>
  );
}
export default App;