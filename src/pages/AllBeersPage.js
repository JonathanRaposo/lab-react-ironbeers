import {Link} from 'react-router-dom';
function AllBeersPage({beers}){
    
 
    return(
          <div>
              {beers.map( (beer) => {
                return(
                    
                    <div key={beer._id} className="each-beer-container">
                    <img src={beer.image_url} alt="beer" className="each-bear-img"/>
                       <div>
                           <h3>
                              <Link to={`/beers/${beer._id}`} className="link">
                                   {beer.name}
                             </Link>
                           </h3>
                           <h4 className='tagline'>{beer.tagline}</h4>
                           <p className='created-by-para'><strong>Created by:</strong> {beer.contributed_by}</p>
                       </div>

                    </div>
                )
              })}
          </div>

    );
}

export default AllBeersPage;