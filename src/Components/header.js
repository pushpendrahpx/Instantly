import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import {Avatar ,IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import './header.css'
function header() {
    return (
        <div className="header">
        <div className="header_left">
            <img  src={require('../images/Facebook-logo.png')} alt="facebook logo" />
          </div>        
           
        

    <div className="header_center">
   
   <div className="header_option header_option--active">
   <HomeIcon fontsize="large"/>
   </div>

   <div className="header_option">
   <MusicNoteIcon fontsize="large"/>
   </div>

   <div className="header_option">
   <SubscriptionsIcon fontsize="large"/>
   </div>

   <div className="header_option">
   <SupervisedUserCircleIcon fontsize="large"/>
   </div>

  {/* <div className='header_right'>
   <div className='header_info'>
       <Avatar />
       <h4>Harshit</h4>
   </div>

   <IconButton>
   <AddIcon />
   </IconButton>
  

   <IconButton >
   <ForumIcon />
   </IconButton>
  
   <IconButton >
   <NotificationsActiveIcon />
   </IconButton>
  
   <IconButton >
     <ExpandMoreIcon />
     </IconButton>

  </div> */}


    </div>


        </div>
    )
}

export default header
