import React from 'react';

function Footer(props) {
    return (
        <div>
         <div className="foot-container">
           <h5>Awesome, Inc. 2021</h5>
           </div> 
           <div className="logo-links">
             <div className="git">
               <a href="https://github.com/michaelannawesome" target='blank' rel='noreferrer'>
                 GitHub <br/>
               <img src="https://www.flaticon.com/svg/vstatic/svg/1322/1322053.svg?token=exp=1611123304~hmac=0d8e54f15d21a1b7cbc77989b5870a8d" alt="github" height='60px' />
                  </a>
                    </div>
             </div>



           </div>
       
    );
}

export default Footer;