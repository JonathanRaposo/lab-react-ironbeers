 import {useState, useEffect} from 'react';
 import axios from 'axios';
 import Navbar from '../components/Navbar';

function RandomBeerPage(){
    const [randomBeer, setRandomBeer] = useState(null);

    const apiURL = "https://ih-beers-api2.herokuapp.com/beers"

    useEffect( () => {
        axios
        .get(apiURL)
        .then( (response) => {
            const randomIndex =  Math.floor(Math.random() * response.data.length);
            const oneRandomBeer = response.data[randomIndex];
             setRandomBeer(oneRandomBeer);
            
        })
    }, []);
   
    return (
         
          <div>
              {randomBeer && <Navbar/>}
              {/* {!randomBeer && <h3>Beer not found!</h3>} */}
              {randomBeer && (
                <div className='one-beer-container'>
                   <img src={randomBeer.image_url} alt="beer" className='each-bear-img'/>
                   <div>
                   <h3 >{randomBeer.name}</h3>
                    <h4 className="tagline">{randomBeer.tagline}</h4>
                    <p className='created-by-para'>{randomBeer.first_brewed}</p>
                    <p className='created-by-para attenuation-level' >{randomBeer.attenuation_level}</p>
                    <p >{randomBeer.description}</p>
                    <p className='created-by-para contributed-by'>{randomBeer.contributed_by}</p>
                   </div>

                    
                </div>
              )}
           </div>

         
    );
}

export default RandomBeerPage;