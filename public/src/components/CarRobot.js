import React from 'react';

import Coverflow from 'react-coverflow';

var fn = function () {
	/* do you want */  
  }

class CarRobot extends React.Component{
	render() {
	return(
	
		<React.Fragment>
			<section class="banner-area relative" id="home">
        <div class="overlay overlay-bg"></div>
        <div class="container">
          <div class="row d-flex align-items-center justify-content-center">
            <div class="about-content-1 col-lg-12">
              <h1 class="text-white">
                Car Robot
              </h1>
              <p class="text-white link-nav">
                <a href="index.html">Home
                </a>
                <span class="lnr lnr-arrow-right"></span>
                <a href="about.html">
                  Car Robot</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mar"></div>

      <h1 class="card-title text-center mt-5 mb-5 font-italic fontShadow1 bg-dark text-white">Car Details</h1>
	
	<div className="container-fluid col-sm-9 ">
        <Coverflow 
        className=''
		width={960}
		height={480}
		displayQuantityOfSide={2}
		navigation={false}
		enableHeading={false}

		
	  >
		<div
		  onClick={() => fn()}
		  onKeyDown={() => fn()}
		  role="menuitem"
		  tabIndex="0"
		>
        
		  <img className="sliderImg"
			src='img/car1.png'
			alt='title or description'
			style={{ display: 'block', width: '80%'  }}
			
		  />
		  
		</div>
		<img className="sliderImg mobilImg" src='img/car3.png' alt='title or description' />
		<img className="sliderImg mobilImg" src='img/car2.png' alt='title or description' />
		<img className="sliderImg mobilImg" src='img/car4.png' alt='title or description' />
		<img className="sliderImg mobilImg" src='img/car5.png' alt='title or description' />
		<img className="sliderImg mobilImg" src='img/car6.png' alt='title or description' />
	  </Coverflow>
	</div>
	

	  <div className="mar"></div>
	 
	  <div className='
container home-about-right no-padding  border border-dark rounded  table-dark'
>
                            <h1 className='
text-center text-white'
>Product description</h1>
                        <div className='
font-weight-bold '
>
                        <table class='
table table-dark'
>
  <thead>
    <tr>
      <th scope='
col'
>plate set</th>
      <th scope='
col'
>robot hats</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>PCA9685 PWM driver</td>
      <td>TB6612 motor driver</td>
    </tr>
    <tr>
      <td>18650 battery holder</td>
      <td>SunFounder SF006C servo</td>
    </tr>
    <tr>
      <td>120 ° wide angle USB camera</td>
      <td>rear wheel</td>
    </tr>
    <tr>
      <td>front wheel</td>
      <td>ribbon (30cm)</td>
    </tr>
    <tr>
      <td>Phillips screwdriver</td>
      <td>Multiple wires, bolts, nuts, wrenches and spacers.</td>
    </tr>
    <tr>
      <td>Two rechargeable 18650 batteries</td>
      <td>Volt: 3.7 V / 3.2 V</td>
    </tr>
    <tr>
      <td>mAh: 2000 mAh / 2600 mAh / 3000 mAh</td>
      <td>Suitable for 14 years or older.</td>
    </tr>
  </tbody>
</table>
                        </div>
      </div>
      <div className='
mar'
></div>
      <div className='
container home-about-right no-padding  border border-dark rounded  table-dark'
>
                            <h1 className='
text-center text-white'
>Raspbarry description</h1>
                        <div className='
font-weight-bold '
>
                        <table class='
table table-dark'
>
  <thead>
    <tr>
      <th scope='
col'
>Brand</th>
      <th scope='
col'
>Raspberry Pi</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>CPU Model</td>
      <td>Cortex</td>
    </tr>
    <tr>
      <td>Processor Speed</td>
      <td>1.5 GHz</td>
    </tr>
    <tr>
      <td>RAM Size</td>
      <td>4096 MB</td>
    </tr>
    <tr>
      <td>Hardware Interface</td>
      <td>MicroSD, Bluetooth, USB, Micro-HDMI, HDMI, Composite Video, USB 2.0</td>
    </tr>
    <tr>
      <td>Computer Memory Type</td>
      <td>DDR3 SDRAM</td>
    </tr>
    <tr>
      <td>Supports Bluetooth</td>
      <td>Bluetooth</td>
    </tr>
    <tr>
      <td>Voice command </td>
      <td>Keyboard</td>
    </tr>
  </tbody>
</table>
                        </div>
      </div>
        <div className='
mar'
></div>




		</React.Fragment>

		)
}
}

  
  




export default CarRobot