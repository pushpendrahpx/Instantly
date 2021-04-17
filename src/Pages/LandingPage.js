import React from 'react';
import Peer from 'peerjs';


const PORT = process.env.PORT || 9000;

export default class LandingPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            remoteStream:undefined,
            ownVideo:undefined
        }
        // const customGenerationFunction = () => (Math.random().toString(36) + '0000000000000000000').substr(2, 16);


    }
    componentDidMount(){

        this.peer = new Peer("sdyfugaiufgybiuegfsdg",{
            host:'localhost',
            port:PORT,
            path: '/peerjs/myapp'}); 
        console.log(this.peer)
        this.peer.on('connection', function(conn) {
            console.log(conn)
            conn.on('data', function(data){
              // Will print 'hi!'
              console.log(data);
            });
          });
        var outerThis = this;

          var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
          
          this.peer.on('call', function(call) {
            getUserMedia({video: true, audio: true},(stream) => {
                console.log(stream)
              call.answer(stream); // Answer the call with an A/V stream.
              call.on('stream', function(remoteStream) {
        
                // this.bind(outerThis);
                outerThis.state.ownVideo.srcObject = remoteStream;
                outerThis.setState({remoteStream:remoteStream})
                // Show stream in some video/canvas element.
              });
            }, function(err) {
              console.log('Failed to get local stream' ,err);
            });
          });


        

        
    }
    referrer = (refer)=>{
        // refer.current.srcObject = this.state.remoteStream;
        console.log(refer,this.state.remoteStream)
        this.setState(prev=>{
            return {...prev,ownVideo:refer}
        })
    
    }
    render(){
        return <div>
            LandingPage
            <video width="300px" height="200px" autoPlay={true} ref={this.referrer}></video>             
        </div>
    }
}