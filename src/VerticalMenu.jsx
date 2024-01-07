import React from 'react';
import './VerticalMenu.css';

const VerticalMenu = () => {

  return (
    <div className="menu-container">
    
        <div className='company-info'>
          <img className='meta' src="./public/images/meta.png" alt="meta" />   
         <div className="company-name">CRIPTIC</div>
         </div>
      <div className="user-info">
             <img className='admin'  src="./public/images/admin.webp" alt="admin" /> 
              <div className="user-name">Avdhesh<br />Kumar Pandey</div>
              <div className="user-role">admin</div>
            </div>
            <div className="menu-items">
           
              <div className='home'>
              <img className='home-icon'src="./public/images/home.png" alt="home" /> 
              <p>Home</p>
              </div>
              <div className='buy'>
              <img className='buy-icon'src="./public/images/buy.png" alt="buy" /> 
              <p>Live Pricing</p>

              </div>
              <div  className='bot'>
              <img className='bot-icon'src="./public/images/trading-bot.png" alt="bot" /> 
              <p> Trading Bot </p>
              </div>
             
              <div className='swap'>

              <img className='swap-icon'src="./public/images/swap.png" alt="swap" /> 
              <p>Swap</p>


              </div>

              <div className='liquidity'>
              <img className='liquidity-icon'src="./public/images/liquidity.png"  /> 
              <p>Liquidity</p>


                </div>
              
              <div className='profile' >
              <img className='profile-icon'src="./public/images/profile.png"  /> 
              <p>Profile</p>

              </div>


              <div  className='vote'>
              <img className='vote-icon'src="./public/images/vote.png"  /> 
              <p>Vote</p>

              </div>
              <div  className='lock'>

              <img className='lock-icon'src="./public/images/lock.png"  /> 
              <p>Authentication</p>

              </div>
             
            
          </div>
       
      </div>
     
    
  );
};

export default VerticalMenu;

