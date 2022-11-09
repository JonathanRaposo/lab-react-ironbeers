
import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AllBeersPage from './pages/AllBeersPage';
import BeerDetailsPage from './pages/BeerDetailsPage';
import RandomBeer from './pages/RandomBeer';
function App() {

  const [allBeers, setAllBeers] = useState([]);


    const apiURL = "https://ih-beers-api2.herokuapp.com/beers";

    useEffect( () => {
      axios
      .get(apiURL)
      .then( (response) => {
        // console.log(response.data);
        setAllBeers(response.data)
      })

    }, []);
  return (
    <div className="App">
  
       <Routes>
        <Route path='/' element={<HomePage/>}/>
       <Route path='/beers' element={<AllBeersPage beers={allBeers}/>}/>
        <Route path='/beers/:beerId' element={<BeerDetailsPage beers={allBeers}/>}/>
        <Route path='/random-beer' element={<RandomBeer beers={allBeers}/>}/>
       </Routes>
        
       

    </div>
  );
}

export default App;

// 