import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
//Books
import List from './screens/books/List';
import Form from './screens/books/Form';
import Single from './screens/books/Single';
import Favorites from './screens/books/Favorites';
//Wheather
import Weather from './screens/weather/Weather';
//YouTube
import YouTube from './screens/YouTube';

class App extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Книги
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/" className="dropdown-item">Каталог</Link>
                <Link to="/form" className="dropdown-item">Добавить книгу</Link>
                <Link to="/favorites" className="dropdown-item">Избранные книги</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/weather" className="nav-link">Погода</Link>
            </li>
            <li className="nav-item">
              <Link to="/youtube" className="nav-link">YouTube</Link>
            </li>
          </ul>
        </nav>
        <div className="container d-flex justify-content-center">
          <Route exact path="/" component={List} />
          <Route path="/form" component={Form} />
          <Route path="/books/:id" component={Single} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/weather" component={Weather} />
          <Route path="/youtube" component={YouTube} />
        </div>
      </>
    );
  }
}

export default App;
