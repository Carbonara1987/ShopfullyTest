import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeComponent from "./components/HomeComponent/HomeComponent";
function App() {

  return (
    <div className="App container">
      <header className="App-header">
        <nav className="navbar navbar-expand-lg navbar-light bg-white menu">
          <div className="container mt-4 px-0 row-margin">
            <a className="navbar-brand logo mw-40" href="#"><h1>ShopFully</h1></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item mr-2">
                  <a className="nav-link" href="#">
                      Wishlist
                  </a>
                </li>
              </ul>

            </div>

          </div>
        </nav>
      </header>
      <HomeComponent></HomeComponent>
    </div>
  );
}

export default App;
