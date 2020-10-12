import React from 'react'

 const ControlPanal=()=> {


///////control car ///////
const topBtnCar=()=>{

}    

const leftBtnCar=()=>{

}    

const centerBtnCar=()=>{

}    

const rigghtBtnCar=()=>{

}    

const buttomBtnCar=()=>{

} 

///////control camera ///////
const topBtnCamera=()=>{

}    

const leftBtnCamera=()=>{

}    

const rightBtnCamera=()=>{

}    

const buttomBtnCamera=()=>{

}    

    return (
    <div className=''> 
        
        
        <div className=''>  
            <img src="./img/banner-img.png" class="img-fluid mx-auto d-block col-sm-12 col-md-10  mt-3 mb-3 cam" alt="Responsive image"/>
        </div>  
    <div className='container '>
        <div className='row justify-content-around'> 
            <div className='  ml-5  '>
                <div className=' col-md-12  divColor'>
                
                    <div className='row  justify-content-center'>    
                        <button className='top  font'  onClick={topBtnCar}>    
                        <i class="fal fa-arrow-alt-circle-up"></i>
                        </button> 
                    </div> 
                    
                    <div className='row '>  
                    <div className='  mt-2 mb-2 '> 
                        <button className='left  font ' onClick={leftBtnCar}>    
                        <i class="fal fa-arrow-alt-circle-left "></i>
                        </button>
                    </div>
                    
                    <div className=' col align-self-end  mt-2 mb-2 '> 
                        <button className=' right font ml-4' onClick={rigghtBtnCar}>    
                            <i class="fal fa-arrow-alt-circle-right align-self-end " ></i>  
                        </button>
                    </div>
                    </div>
                    <div className='row justify-content-center ' >
                        <button className='buttom font'onClick={buttomBtnCar}>    
                            <i class="fal fa-arrow-alt-circle-down" ></i>  
                        </button>
                    </div>   
                
                </div>
            </div>

                    <div className='    mt-2 mb-2 '> 
                                <button className='center font' onClick={centerBtnCar}>    
                                <i class="fab fa-youtube"></i> </button>  
                    </div>
            
            <div className=' mr-5  '>
                <div className='col-md-12  divColorleft'>
                
                    <div className='row justify-content-center'>    
                        <button className='top  font'  onClick={topBtnCar}>    
                        <i class="fal fa-arrow-alt-circle-up"></i>
                        </button> 
                    </div> 
                    
                    <div className='row '>  
                    <div className='  mt-2 mb-2 '> 
                        <button className='left  font ' onClick={leftBtnCar}>    
                        <i class="fal fa-arrow-alt-circle-left "></i>
                        </button>
                    </div>
                    
                    <div className=' col align-self-end  mt-2 mb-2 '> 
                        <button className=' right float-right font ml-4' onClick={rigghtBtnCar}>    
                            <i class="fal fa-arrow-alt-circle-right align-self-end " ></i>  
                        </button>
                    </div>
                    </div>
                    <div className='row justify-content-center ' >
                        <button className='buttom font'onClick={buttomBtnCar}>    
                            <i class="fal fa-arrow-alt-circle-down" ></i>  
                        </button>
                    </div>   
                
                </div>
            </div>   
        </div>    
    </div>
            
    </div>
    )
}
export default ControlPanal
