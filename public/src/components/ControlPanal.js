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
    <div className=' cont mb-3 '> 
        <div >.</div>
        <div className=''>  
            <img src="./img/os1.jpg" class="img-fluid mx-auto d-block col-md-10 mt-3 mb-3 cam" alt="Responsive image"/>
        </div>  
        <div className='row '>
            <div className='col-md-6 float-left mb-5  '>
                <div className='container col-5 divColor'>
                
                    <div className='row justify-content-center'>    
                        <button className='top  font'  onClick={topBtnCar}>    
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-up-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
</svg> 
                        </button> 
                    </div> 
                    
                    <div className='row '>  
                    <div className='  mt-3 mb-3 '> 
                        <button className='left  font' onClick={leftBtnCar}>    
                        <i class='fas fa-arrow-up' ></i>
                        </button>
                    </div>
                    <div className='  mt-3 mb-3'> 
                        <button className='center font' onClick={centerBtnCar}>    
                        <i class="fab fa-youtube"></i> 
                        </button>
                    </div>
                    <div className=' col align-self-end  mt-3 mb-3 '> 
                        <button className=' float-right font' onClick={rigghtBtnCar}>    
                            <i class="fas fa-arrow-alt-circle-right align-self-end" ></i>  
                        </button>
                    </div>
                    </div>
                    <div className='row justify-content-center ' >
                        <button className='buttom font'onClick={buttomBtnCar}>    
                            <i class="fas fa-arrow-alt-circle-down" ></i>  
                        </button>
                    </div>   
                
                </div>
            </div>
            <div className='col-md-6 float-right '>
            <div className='container col-5 divColor'>
                
                <div className='row justify-content-center'>    
                    <button className='top  font'  onClick={topBtnCar}>    
                        <i class="fas fa-arrow-alt-circle-up" ></i>  
                    </button> 
                </div> 
                
                <div className='row '>  
                <div className='  mt-3 mb-3 '> 
                    <button className='left  font' onClick={leftBtnCar}>    
                        <i class="fas fa-arrow-alt-circle-left" ></i>  
                    </button>
                </div>
                
                <div className=' col align-self-end  mt-3 mb-3 '> 
                    <button className=' float-right font' onClick={rigghtBtnCar}>    
                        <i class="fas fa-arrow-alt-circle-right align-self-end" ></i>  
                    </button>
                </div>
                </div>
                <div className='row justify-content-center ' >
                    <button className='buttom font'onClick={buttomBtnCar}>    
                        <i class="fas fa-arrow-alt-circle-down" ></i>  
                    </button>
                </div>   
            
            </div>
            </div>   
    </div>
    </div>
    )
}
export default ControlPanal
