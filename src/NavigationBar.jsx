import React from 'react';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <div className="navbar-container">
     <div className='navbar-1'>
     <img className='search-icon' src="/images/search.png" alt="Search-Icon" />
     <button className='btn-1'>CONNECT</button>
      </div> 
     
    <div className='navbar-2'>
     
        <button className='btn-2'>DCA</button>
      
       
       <ul className='content-items'>
             
              <li>Spot Grid</li>
              <li>Futures Grid</li>
              <li>Martingale</li>
              <li>Infinity Grid</li>
              
             </ul>
      
       
       <img className='icon-1' src="/images/stock-market.png" alt="stock-market" />
       <img className='icon-2' src="/images/forex.png" alt="forex-icon" />
      
      </div> 

      <div class="navbar-3"></div>
      
      <div class="navbar-4">
        <div  className='lastdiv-1'>
        <img className='icon-3' src="/images/trading.png" alt="trading-icon" />
        <p>ETH/INRTD<br /><span className='span-1'>Ethereum</span></p> 
      
        </div>
     
     
      <button className='btn-4'>$20,679.17<br /><span className='span-2'>$20,679.17</span></button>
      <div  className='lastdiv-2'>
      <img className='play-image'  src="/images/play.png" alt="play-button" />
      <p className='tutorial'>Tutorial</p> 
      </div>
      <div  className='lastdiv-3'>
      <img className='book-image' src="/images/book.png" alt="book" />
      <p className='Guidance'>Guidance</p> 

     </div>























    </div>
  </div>

  );
};


export default NavigationBar;