import './Navbar.css';
import {Link} from "react-router-dom";


function Navbar() {
  return (
    <div className="navbar">
     
      
   {/* the links session */}
   <div className='link'>   
        <span>    
          <Link to="/home" className='p'>
            <span>Home</span>                
          </Link>
        </span>

        <span> 
            <Link to="/character" className='p'>
              <span>Characters</span>                
            </Link>
        </span>

        <span> 
            <Link to="/episode" className='p'>
              <span>
                Episode
              </span>
            </Link>
        </span>

        <span> 
            <Link to="/qoutes" className='p'>
              <span>
                Quotes
              </span>
            </Link>
        </span>

        <span> 
        
            <Link to="/death" className='p'>
              <span>
                Deaths
              </span>
            </Link>
        </span>
        
   </div>

</div>
  );
}

export default Navbar;
