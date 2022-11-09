
import {Link} from 'react-router-dom';
import image1 from '../assets/beers.png'
import image2 from '../assets/random-beer.png';
import image3 from '../assets/new-beer.png';

function HomePage(){

    return (
         <div className='HomePage'>
               
               <div className='link-container'>
               <img src={image1}  alt='beers'/>
                 <h3>
                 <Link to="/beers"  className='link'>
                     All Beers
                 </Link>
                 </h3>
                <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra lectus , sit amet eleifend ex tincidunt in. Nam dictum arcu ut diginissim varisu.</p>
               </div>

               <div className='link-container'>
               <img src={image2}  alt='beers'/>
                  <h3>
                  <Link to="/random-beer" className='link'>
                      Random Beer
              </Link>
                  </h3>
             <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra lectus , sit amet eleifend ex tincidunt in. Nam dictum arcu ut diginissim varisu.</p>
               </div>

               <div className='link-container'>
               <img src={image3}  alt='beers'/>

              <h3>
              <Link to="/new-beer"  className='link' >
                      new Beer
                </Link>
              </h3>
                <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra lectus , sit amet eleifend ex tincidunt in. Nam dictum arcu ut diginissim varisu.</p>
               </div>
         </div>
    );

}

export default HomePage;