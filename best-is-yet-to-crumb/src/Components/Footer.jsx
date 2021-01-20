import React from 'react';
import GH from '../Images/Gitlogo.png'

function Footer(props) {
    return (
        <div>
         <div className="foot-container">
           <h5>Awesome, Inc. 2021</h5>
           </div> 
           <div className="logo-links">
             <div className="git">
               <a href="https://github.com/michaelannawesome" target='blank' rel='noreferrer'>
                  
               <img src={GH} alt="" height='60px' />
                  </a>
                    </div>
             </div>



           </div>
       
    );
}

export default Footer;