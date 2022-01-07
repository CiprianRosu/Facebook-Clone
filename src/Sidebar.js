import React from 'react'
import "./Sidebar.css";
import SidebarRow from "./SidebarRow"
import  LocalHospitalIcon  from '@material-ui/icons/LocalHospital';
import  EmojiFlagsIcon  from '@material-ui/icons/EmojiFlags';
import  PeopleIcon  from '@material-ui/icons/People';
import ChatIcon from "@material-ui/icons/Chat";
import  StorefrontIcon  from '@material-ui/icons/Storefront';
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import { ExpandMoreOutlined } from '@material-ui/icons';



function Sidebar() {
    return (
        <div className="sidebar">
      <SidebarRow src="https://www.donkey.bike/wp-content/uploads/2020/12/user-member-avatar-face-profile-icon-vector-22965342-300x300.jpg" title="Cip Rosu"/> 
      <SidebarRow Icon={LocalHospitalIcon} title="Virus-19 Info Center"/>      

      <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>      

      <SidebarRow Icon={PeopleIcon} title="Friends"/>      

      <SidebarRow Icon={ChatIcon} title="Messenger"/>      
      <SidebarRow Icon={StorefrontIcon} title="Martketplace"/>    
      <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>      
      <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace"/>  

        </div>
    );
}

export default Sidebar
