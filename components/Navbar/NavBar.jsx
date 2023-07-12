// import react tools
import React,{useEffect,useState} from 'react'
import Image from "next/image";
import Link from "next/link";

// import icons
import {MdNotifications} from 'react-icons/md';
import {BsSearch} from 'react-icons/bs';
import {CgMenuLeft,CgMenuRight} from 'react-icons/cg';


// import internals
import Style from "./Navbar.module.css";
import {Discover,HelpCenter,Profile,Notification,SideBar} from './index'; 
import Button from "../Button/Button";
import images from "../../img";



const NavBar = () => {

  //  USESTATE
  const [discover,setDiscover] = useState(false);
  const [help,setHelp] = useState(false);
  const [notification,setNotification] = useState(false);
  const [profile,setProfile] = useState(false);
  const [openSideMenu,setOpenSideMenu] = useState(false);

   // openmenu function in Discover,Help
  const openMenu = (e) =>{
    const btntext = e.target.innerText;// Discover,Profile etc
    if(btntext == "Discover"){
      setDiscover(true);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    }
    else if(btntext == "Help Center"){
      setHelp(true);
      setDiscover(false);
      setNotification(false);
      setProfile(false);
    }
    else{
      setHelp(false);
      setDiscover(false);
      setNotification(false);
      setProfile(false);
    }
  }

  // open notification function in notification section
  const openNotification = ()=>{
    if(!notification){
      setNotification(true);
      setDiscover(false);
      setHelp(false);
      setProfile(false);
    }
    else{
      setNotification(false);
    }
  }

  // open profile function in Profile section
  const openProfile = () =>{
    if(!profile){
      setProfile(true);
      setNotification(false);
      setDiscover(false);
      setHelp(false);
    }
    else{
      setProfile(false);
    }
  }

  // open sidebar function used in menu button
  const openSideBar=()=>{
    if(!openSideMenu){
      setOpenSideMenu(true);
    }
    else{
      setOpenSideMenu(false);
    }
  }

 


  return(
    <div  className={Style.navbar}>

      <div className={Style.navbar_container}>


            {/* // Left section starts */}
          <div className={Style.navbar_container_left}>
                <div className={Style.logo}>
                  <Image 
                  src={images.logo2} 
                  alt="NFT MArketPlace" 
                  width={100}
                  height={100}
                  />
                </div>

                <div className={Style.navbar_container_left_box_input}>
                    <div className={Style.navbar_container_left_box_input_box}>
                        <input type="text" placeholder='Search NFT'/>
                        <BsSearch onClick={() => {}} className={Style.search_icon}/>
                    </div>
                </div>
          </div>
          {/* // Left section ends */}


          {/* // Rignt section starts */}
          <div className={Style.navbar_container_right}>
                        {/* Discover menu */}
              <div className={Style.navbar_container_right_discover}>
                <p onClick={(e)=> openMenu(e)}>Discover</p>
                {discover && (
                     <div className={Style.navbar_container_right_discover_box}>
                         <Discover/>
                      </div> 
                )}
              </div>
 
                          {/* Help center menu */}
              <div className={Style.navbar_container_right_help}>
                <p onClick={(e)=> openMenu(e)}>Help Center</p>
                {help && (
                     <div className={Style.navbar_container_right_help_box}>
                         <HelpCenter/>
                      </div> 
                )}
              </div>


                          {/* notification menu */}
              <div className={Style.navbar_container_right_notify}>
                  <MdNotifications 
                  className={Style.notify} 
                  onClick={() => openNotification()}
                  />
                  {notification && <Notification/>}
              </div>

                           {/* create button section */}
              <div className={Style.navbar_container_right_button}>
                <Button btnName="Create" handleClick={()=>{}}/>
              </div>


                          {/* user profile */}
              <div className={Style.navbar_container_right_profile_box}>
                <div className={Style.navbar_container_right_profile}>
                  <Image
                    src={images.person8}
                    alt="User1"
                    width={40}
                    height={40}
                    onClick={()=>openProfile()}
                    className={Style.navbar_container_right_profile}
                  />
                  {profile && <Profile/>}
                </div>
              </div>

                        {/* menu button */}
              <div className={Style.navbar_container_right_menuBtn}>
                <CgMenuRight
                 className={Style.meuIcon} 
                 onClick={()=>openSideBar()}
                />
              </div>

          </div>
          {/* // Right section ends */}

      </div>

                    {/* SIDEBAR component */}
              {
                openSideMenu && (
                  <div className={Style.sideBar}>
                    <SideBar setOpenSideMenu={setOpenSideMenu}/>
                  </div>
                )}
    </div>
  );
};

export default NavBar
