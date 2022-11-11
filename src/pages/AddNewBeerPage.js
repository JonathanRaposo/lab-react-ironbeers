   import {useState} from 'react';
   import axios from 'axios';
    import {useNavigate} from 'react-router-dom';
    import Navbar from '../components/Navbar';
   

   function AddNewBeerPage(){

     const [name, setName] = useState('');
     const [tagline, setTagline] = useState('');
     const [description, setDescription] = useState('');
     const [firstBrewed, setFirstBrewed] = useState('');
     const [brewersTips, setBrewersTips] = useState('');
     const [attenuationLevel, setAttenuationLevel] = useState(1);
     const [contributedBy, setContributedBy] = useState('');


     const navigate = useNavigate();


   // event handler function htmlFor onSubmit event:

   const handleSubmit = (e) => {
      e.preventDefault();

      const body = {
        name: name,
        tagline: tagline,
        description: description,
        first_brewed: firstBrewed,
        brewers_tips: brewersTips,
        attenuation_level: attenuationLevel,
        contributed_by: contributedBy

      }
      axios  
         .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
         .then( (response) => {
             console.log(response)

            setName('');
            setTagline('');
            setDescription('');
            setFirstBrewed('');
            setBrewersTips('');
            setAttenuationLevel(1);
            setContributedBy('');

            navigate('/beers')
         })
         .catch( (error) => {
            console.log('Somethin went wrong: ', error)
         })
   }



    



    return(
          <div className='AddNewBeerPage'>
                <Navbar />
              <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input 
                        type='text'
                        name='name'
                        id='name'
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />

                    <label htmlFor='tagline'>Tagline</label>
                    <input 
                        type='text'
                        name='tagline'
                        id='tagline'
                        onChange={(e) => setTagline(e.target.value)}
                        value={tagline}
                    />

                      <label htmlFor='description'>Description</label>
                    <textarea
                         id='description'
                        type='text'
                        name='description'
                        rows='10'
                        cols='35'
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />

                      <label htmlFor='firstBrewed'>First Brewed</label>
                    <input 
                         
                        type='text'
                        name='firstBrewed'
                        id='firstBrewed'
                        onChange={(e) => setFirstBrewed(e.target.value)}
                        value={firstBrewed}
                    />

                      <label htmlFor='brewersTips'>Brewers Tips</label>
                    <input 
                        
                        type='text'
                        name='brewersTips'
                        id='brewersTips'
                        onChange={(e) => setBrewersTips(e.target.value)}
                        value={brewersTips}
                    />

                       <label htmlFor='attenuationLevel'>Attenuation Level</label>
                    <input 
                        type='number'
                        name='attenuationLevel'
                        id='attenuationLevel'
                        onChange={(e) => setAttenuationLevel(e.target.value)}
                        value={attenuationLevel}
                    />

                      <label htmlFor='contributedBy'>Contributed By</label>
                    <input 
                        type='text'
                        name='contributedBy'
                        id='contributedBy'
                        onChange={(e) => setContributedBy(e.target.value)}
                        value={contributedBy}
                    /> 
                   <button className='add-new-beer-btn'>Add New</button>
              </form>
          </div>
    );
   }

   export default AddNewBeerPage;




