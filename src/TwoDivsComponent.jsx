import React from 'react';
import './TwoDivsComponent.css';

const TwoDivsComponent = () => {
  return (
      <>
      <div className="leftDiv">
      <label className='label-1'>Invest Every<br />
<select className='scroll'>

  <option className='option' value="2">2 days</option>

  <option className='option'  value="3">3 days</option>

  <option  className='option' value="4">4 days</option>

  <option  className='option' value="5">5 days</option>

  <option  className='option' value="6">6 days</option>

  <option  className='option' value="7">7 days</option>

</select>

</label>
<div className='X1'>
<span className='x1'>Amount Per Investment</span>
<div className='X2'>
<span  className='x2'>Price Range(USDT)</span>
<span  className='x3'>USDT</span>
<img className='x4'  src="/images/more.png" alt="" /> 

</div>
</div>
<div className='Z1'>
<span  className='z1'>Min: 2</span>
<span  className='z2'>USDT</span>
</div>
<div  className='l1'>Advanced Settings(Optional)</div>
<div className='L1'>


<span  className='l2'>Max Investment</span>
<span  className='l3'>USDT</span>
</div>




<div  className='A1'>
  <span className='a1'>Profit Target</span>
  <span  className='a2'>10%</span>
  <img  className='a3'  src="/images/right.png" alt="" /> 
  </div>
<div className='B2'>
<span  className='b1'>First Investment</span>
<span  className='b2'>Now</span>
<img  className='b3'  src="/images/right.png" alt="" /> 
</div>
<div className='HA1'>CREATE</div>
      </div>
    
      </>
  );
};

export default TwoDivsComponent;
