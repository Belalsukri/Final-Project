import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import io from 'socket.io-client';

import { getIceServers } from '../services/api'
//import StartVideo from './StartVideo'

const ControlPanal = (props) => {


    ///////control car ///////
    const topBtnCar = () => {
        //action('forward')

    }

    const leftBtnCar = () => {

    }

    const centerBtnCar = () => {
        
    }







    useEffect(() => {


        getIceServers().then(data => {
            const socket = io(window.location.origin);
            const action = (command) => {
                console.log(command);
                socket.emit("command", command);
            }
            console.log(props.user.id, data, socket);
            // let peerConnection;
            // const config = {
            //     iceServers: data
            // };

            // const video = document.querySelector("video");
  

            // socket.on("offer", (id, description) => {
            //     console.log(id, description);
            //     peerConnection = new RTCPeerConnection(config);
            //     peerConnection
            //         .setRemoteDescription(description)
            //         .then(() => peerConnection.createAnswer())
            //         .then(sdp => peerConnection.setLocalDescription(sdp))
            //         .then(() => {
            //             console.log(id, peerConnection);
            //             socket.emit("answer", id, peerConnection.localDescription);
            //         });
            //     peerConnection.ontrack = event => {
            //         console.log('streaming');
            //         video.srcObject = event.streams[0];
            //     };
            //     peerConnection.onicecandidate = event => {
            //         console.log(event);
            //         if (event.candidate) {
            //             socket.emit("candidate", id, event.candidate);
            //         }
            //     };
            // });


            // socket.on("candidate", (id, candidate) => {
            //     peerConnection
            //         .addIceCandidate(new RTCIceCandidate(candidate))
            //         .catch(e => console.error(e));
            // });

            socket.on("connect", () => {
                socket.emit("watcher", '10');
            });

            // socket.on("broadcaster", () => {
            //     console.log("broadcaster conect");
            //     //socket.emit("watcher", '10');
            // });

            // socket.on("disconnectPeer", (userid) => {
            //     peerConnection.close();
            // });

            window.onunload = window.onbeforeunload = () => {
                socket.close();
            };
            window.onkeydown = e => {
                console.log(e.keyCode);
                switch (e.keyCode) {
                    case 87:
                        action('forward')
                        break;
                    case 65:
                        action('turn left')
                        break;
                    case 68:
                        action('turn right')
                        break;
                    case 83:
                        action('back')
                        break;
                    case 38:
                        action('cam up')
                        break;
                    case 37:
                        action('cam left')
                        break;
                    case 39:
                        action('cam right')
                        break;
                    case 40:
                        action('cam down')
                        break;
                    case 49:
                        action('speed 1')
                        break;
                    case 50:
                        action('speed 2')
                        break;
                    case 51:
                        action('speed 3')
                        break;
                    case 52:
                        action('speed 4')
                        break;
                    case 53:
                        action('speed 5')
                        break;
                    case 54:
                        action('speed 6')
                        break;

                    default:
                        break;
                }
            }

            window.onkeyup = e => {

                switch (e.keyCode) {
                    case 87:
                        action('stop')
                        break;
                    case 65:
                        action('turn forward')
                        break;
                    case 68:
                        action('turn forward')
                        break;
                    case 83:
                        action('stop')
                        break;
                    case 38:
                        action('cam up')
                        break;
                    case 37:
                        action('cam left')
                        break;
                    case 39:
                        action('cam right')
                        break;
                    case 40:
                        action('cam down')
                        break;

                    default:
                        break;
                }
            }
        }).catch(error => {
            console.log(error.message);
        })



    })
    useEffect(() => {

    }, [centerBtnCar])
    const rigghtBtnCar = () => {

    }

    const buttomBtnCar = () => {

    }

    ///////control camera ///////
    const topBtnCamera = () => {

    }

    const leftBtnCamera = () => {

    }

    const rightBtnCamera = () => {

    }

    const buttomBtnCamera = () => {

    }

    return (
        <div className=''>
            <div className='row fl'>
                {/* <video id='video-grid' className='mx-auto d-block col-xs-12 col-md-12  mt-3 mb-3 cam'> </video> */}
                <iframe src="https://bogyrobot.coding-school.org/watcher" className='mx-auto d-block col-xs-12 col-md-12  mt-3 mb-3 cam'></iframe>
            </div>

            <div className=' '>
                <div className=' justify-content-around  fl'>
                    <div className='row  ml-5  col-xs-5 '>
                        <div className=' col-xs-4   divColor'>

                            <div className='row  justify-content-center'>
                                <button className='top font' onClick={topBtnCar}>
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
                                <button className='buttom font' onClick={buttomBtnCar}>
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
                                <button className='top  font' onClick={topBtnCar}>
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
                                <button className='buttom font' onClick={buttomBtnCar}>
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
const mapStateToProps = (state) => {
    return { user: state.user }
}
export default connect(mapStateToProps)(ControlPanal)
