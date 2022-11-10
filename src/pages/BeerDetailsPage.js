 import {Link, useParams} from 'react-router-dom';
 import {useState, useEffect} from 'react';
 import Navbar from '../components/Navbar';
//  import axios from 'axios';


function BeerDetailsPage({beers}){
    const [foundBeer, setFoundBeer] = useState(null);
   
   const beerId = useParams().beerId;
   console.log('Beer Id: ',beerId);

   useEffect( () => {
          const beer =  beers.find( (oneBeer) => {
             return oneBeer._id === beerId;
        });
           if(beer) {
              setFoundBeer(beer);
            }
       }, [beerId]);

    //  const apiURL = `https://ih-beers-api2.herokuapp.com/beers/${beerId}`;
    //  useEffect( () => {
    //      axios.get(apiURL)
    //      .then( (response) => {
    //         setFoundBeer(response.data)
    //      })
    //  }, [beerId])

//    
  

    return (
             
           <div>
              {!foundBeer && <h3>Beer not found!</h3>}
              <Navbar id="details-nav"/>

              {foundBeer && (
                <div className='one-beer-container'>
                   <img src={foundBeer.image_url} alt="beer" className='each-bear-img'/>
                   <div>
                   <h3 >{foundBeer.name}</h3>
                    <h4 className="tagline">{foundBeer.tagline}</h4>
                    <p className='created-by-para'>{foundBeer.first_brewed}</p>
                    <p className='created-by-para attenuation-level' >{foundBeer.attenuation_level}</p>
                    <p >{foundBeer.description}</p>
                    <p className='created-by-para contributed-by'>{foundBeer.contributed_by}</p>
                   </div>

                    
                </div>
              )}
           </div>
    );
}

export default BeerDetailsPage;

/*
name
tagline
first_brewed
attenuation_level
description
contributed_by

*/ 