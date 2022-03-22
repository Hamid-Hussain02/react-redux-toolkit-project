import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Switch, Routes,Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import MovieDetail from './components/MovieDetail/MovieDetail';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <div className='container'>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/movie/:imbdID" element={<MovieDetail/>}/>
          <Route   element={<PageNotFound/>}/>
        </Routes>
        </div>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
