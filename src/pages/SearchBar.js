   import axios from 'axios';
   import {useState, useEffect} from 'react'

function SearchBar(){
     const [searchinput, setSearchInput] = useState('');




     //event handler:
     const handleSearchInput = (e) => {
        setSearchInput(e.target.value)
     }

     useEffect( () => {
           axios
           .get('https://ih-beers-api2.herokuapp.com/beers/search?q={query}')
     })


      

    return(
            <div>
                <input onChange={handleSearchInput}placeholder='Search Beer'/>

                
            </div>
    );
}

export default SearchBar;