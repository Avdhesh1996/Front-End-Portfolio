import React from 'react';
import './VerticalMenu.css';

const VerticalMenu = () => {

  return (
    <div className="menu-container">
    
        <div className='company-info'>
          <img className='meta' src="src/images/meta.png" alt="meta" />   
         <div className="company-name">CRIPTIC</div>
         </div>
      <div className="user-info">
             <img className='admin'  src="src/images/admin.webp" alt="admin" /> 
              <div className="user-name">Avdhesh<br />Kumar Pandey</div>
              <div className="user-role">admin</div>
            </div>
            <div className="menu-items">
           
              <div className='home'>
              <img className='home-icon'src="src/images/home.png" alt="home" /> 
              <p>Home</p>
              </div>
              <div className='buy'>
              <img className='buy-icon'src="src/images/buy.png" alt="buy" /> 
              <p>Live Pricing</p>

              </div>
              <div  className='bot'>
              <img className='bot-icon'src="src/images/trading-bot.png" alt="bot" /> 
              <p> Trading Bot </p>
              </div>
             
              <div className='swap'>

              <img className='swap-icon'src="src/images/swap.png" alt="swap" /> 
              <p>Swap</p>


              </div>

              <div className='liquidity'>
              <img className='liquidity-icon'src="src/images/liquidity.png"  /> 
              <p>Liquidity</p>


                </div>
              
              <div className='profile' >
              <img className='profile-icon'src="src/images/profile.png"  /> 
              <p>Profile</p>

              </div>


              <div  className='vote'>
              <img className='vote-icon'src="src/images/vote.png"  /> 
              <p>Vote</p>

              </div>
              <div  className='lock'>

              <img className='lock-icon'src="src/images/lock.png"  /> 
              <p>Authentication</p>

              </div>
             
            
          </div>
       
      </div>
     
    
  );
};

export default VerticalMenu;

