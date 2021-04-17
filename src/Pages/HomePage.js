import React from 'react';
import Peer from 'peerjs';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import './homepage.css'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { createMuiTheme, makeStyles, MuiThemeProvider, ThemeProvider } from '@material-ui/core/styles';
const PORT = process.env.PORT || 9000;



export default class HomePage extends React.Component{

    constructor(props){
        super(props)
        
        this.state = {}
    }
    componentDidMount(){
        this.peer = new Peer('eugiuesgyfiueghiuesdhgoiursgrtgRTDS',{
            host: 'localhost',
            port:PORT,
            path: '/peerjs/myapp'
          }); 
        const peer = this.peer;
        var conn = this.peer.connect('sdyfugaiufgybiuegfsdg');
        console.log(conn, this.peer.id);
        
        // on open will be launch when you successfully connect to PeerServer
        conn.on('open', function(){
            console.log("SFFFSS")
        // here you have conn.id
        // conn.send('hi!');
         window.navigator.getUserMedia({video: true, audio: true}, function(stream) {
        var call = peer.call('sdyfugaiufgybiuegfsdg', stream);
        call.on('stream', function(remoteStream) {
            console.log(stream)
            // Show stream in some video/canvas element.
        });
        }, function(err) {
        console.log('Failed to get local stream' ,err);
        });
        });

        
    }

    render(){
        return      <Box display="flex" flexDirection="row" p={1}  width="100%" minHeight="100vh" >
        {/* content flex item 1 */}
        <Box display="flex" p={1} width="50%" flexDirection="column"  >
        
        <Box class="item" >
        <Avatar alt="Remy Sharp" src="../images/ps2pdf.com.png" />
        </Box>
        
        <Box class="item" >
       
       <Typography className="title" variant="h2"  >
           Instantly stream music and video and share files
       </Typography>
       </Box>

       <Box class="item" >

       <Typography  variant="h5" className="descrip"  >
      Using just a web browser to instantly share files and stream whatever you waana do with your friends
       </Typography>
       </Box>

       <Box class="item" justifyContent="center" alignItems="center">

       <Button className="mainButton" variant="outlined">Create Portal</Button>
       </Box>

        </Box>
        {/* image flex item 2 */}
        <Box display="flex" p={1}  width="50%"  >
        </Box>
        </Box>
    }
}