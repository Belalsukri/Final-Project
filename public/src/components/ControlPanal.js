import React ,{useEffect} from  'react'
//import StartVideo from './StartVideo'

 const ControlPanal=()=> {


///////control car ///////
const topBtnCar=()=>{

}    

const leftBtnCar=()=>{

}    

const centerBtnCar=()=>{
        let videoGrid = document.getElementById('video-grid')
        videoGrid.muted = true;
        let myVideoStream
    navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
    }).then(stream => {
        myVideoStream = stream;
        addVideoStream(videoGrid,stream)
        })    
            function addVideoStream(video, stream) {
                video.srcObject = stream
                video.addEventListener('loadedmetadata', () => {
                  video.play()
                })
                
              }
}    
useEffect(()=>{

}, [centerBtnCar])
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
       <div className='row fl'>
       <video id='video-grid' className='mx-auto d-block col-xs-12 col-md-12  mt-3 mb-3 cam'> </video>
       </div>       
        
    <div className=' '>
        <div className=' justify-content-around  fl'> 
            <div className='row  ml-5  col-xs-5 '>
                <div className=' col-xs-4   divColor'>
                
                    <div className='row  justify-content-center'>    
                        <button className='top font'  onClick={topBtnCar}>    
                        <i className="fal fa-arrow-alt-circle-up"></i>
                        </button> 
                    </div> 
                    
                    <div className='row '>  
                    <div className='  mt-2 mb-2 '> 
                        <button className='left  font ' onClick={leftBtnCar}>    
                        <i className="fal fa-arrow-alt-circle-left "></i>
                        </button>
                    </div>
                    
                    <div className=' col align-self-end  mt-2 mb-2 '> 
                        <button className=' right font ml-4' onClick={rigghtBtnCar}>    
                            <i className="fal fa-arrow-alt-circle-right align-self-end " ></i>  
                        </button>
                    </div>
                    </div>
                    <div className='row justify-content-center ' >
                        <button className='buttom font'onClick={buttomBtnCar}>    
                            <i className="fal fa-arrow-alt-circle-down" ></i>  
                        </button>
                    </div>   
                
                </div>
            </div>

                    <div className='col-xs-2 '> 
                                <button className='center font ' onClick={centerBtnCar}>    
                                <i className="fab fa-youtube"></i> </button>  
                    </div>
            
            <div className=' mr-5 col-xs-5 '>
                <div className='col-xs-5  divColorleft'>
                
                    <div className='row justify-content-center'>    
                        <button className='top  font'  onClick={topBtnCar}>    
                        <i className="fal fa-arrow-alt-circle-up"></i>
                        </button> 
                    </div> 
                    
                    <div className='row '>  
                    <div className='  mt-2 mb-2 '> 
                        <button className='left  font ' onClick={leftBtnCar}>    
                        <i className="fal fa-arrow-alt-circle-left "></i>
                        </button>
                    </div>
                    
                    <div className=' col align-self-end  mt-2 mb-2 '> 
                        <button className=' right float-right font ml-4' onClick={rigghtBtnCar}>    
                            <i className="fal fa-arrow-alt-circle-right align-self-end " ></i>  
                        </button>
                    </div>
                    </div>
                    <div className='row justify-content-center ' >
                        <button className='buttom font'onClick={buttomBtnCar}>    
                            <i className="fal fa-arrow-alt-circle-down" ></i>  
                        </button>
                    </div>   
                
                </div>
            </div>   
        </div>    
    </div>
    <div className='container '>
      <div className='row col-xs-4 justify-content-center'>
            <div> <button className='btn-1 font-speed ' onClick={centerBtnCar}>    
            <i className="far fa-circle font-speed"></i> <span className='number font-speed'>1 </span> </button>   
            </div>
            <div> <button className='btn-1 font-speed' onClick={centerBtnCar}>    
            <i className="far fa-circle font-speed"></i> <span className='number font-speed'>2 </span>  </button>   
            </div>
            <div> <button className='btn-1 font-speed' onClick={centerBtnCar}>    
            <i className="far fa-circle font-speed"></i> <span className='number font-speed'>3 </span> </button>   
            </div>
            <div> <button className='btn-1 font-speed' onClick={centerBtnCar}>    
            <i className="far fa-circle font-speed"></i> <span className='number font-speed'>4 </span> </button>   
            </div>
            <div> <button className='btn-1 font-speed' onClick={centerBtnCar}>    
            <i className="far fa-circle font-speed"></i> <span className='number font-speed'>5 </span> </button>   
            </div>
            <div> <button className='btn-1 font-speed' onClick={centerBtnCar}>    
            <i className="far fa-circle font-speed"></i> <span className='number font-speed'>6 </span> </button>   
            </div>
      </div>
    </div>
    <div col-xs-12>
            <ul id="menu">
                
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li><a href="#">6</a></li>
                
            </ul>
    </div>
            
    </div>
    )
}
export default ControlPanal
