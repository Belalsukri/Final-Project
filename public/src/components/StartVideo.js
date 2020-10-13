import React , {useEffect} from 'react'

const StartVideo = () => {
    // useEffect(()=>{
   
    //     let videoGrid = document.getElementById('video-grid')
    //     videoGrid.muted = true;
    //     let myVideoStream
    // navigator.mediaDevices.getUserMedia({
    //     video: true,
    //     audio: true
    // }).then(stream => {
    //     myVideoStream = stream;
    //     addVideoStream(videoGrid,stream)
    //     })
        
           
    //         function addVideoStream(video, stream) {
    //             video.srcObject = stream
    //             video.addEventListener('loadedmetadata', () => {
    //               video.play()
    //             })
                
    //           }
             
    //         }, [])
       

        return (
            
                <video id='video-grid' className='mx-auto d-block col-sm-12 col-md-10  mt-3 mb-3 cam'> </video>
            
        )
    }

export default StartVideo
