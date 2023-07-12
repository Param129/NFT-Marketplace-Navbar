import React,{useState} from 'react'
import Image from "next/image"
import Link from "next/link"
import {GrClose} from 'react-icons/gr'
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialYoutube,
  TiArrowSortedDown,
  TiSocialTwitter,
  TiArrowSortedUp
} from 'react-icons/ti'



//internal import
import Style from "./SideBar.module.css";
import images from "../../../img";
import Button from "../../Button/Button";

// receive procs setopenSideMenu which we send in navbar.jxs in sidebar section
const SideBar = ({setOpenSideMenu}) => {

  // --------------USESTATE-----------
  const [openDiscover,setOpenDiscover] = useState(false);
  const [openHelp,setOpenHelp] = useState(false);

  // discover menu
  const discover = [
    {
      name:"Collection",
      link:"collection",
    },
    {
      name:"Author Profile",
      link:"author-profile"
    },
    {
      name:"NFT-Details",
      link:"NFT-details"
    },
    {
      name:"Account Setting",
      link:"account-setting"
    },
    {
      name:"Connect Wallet",
      link:"connect-wallet"
    },
    {
      name:"Blog",
      link:"blog"
    }
  ];

  // help center menu
  const helpCenter=[
    {
      name:"About",
      link:"about"
    },
    {
      name:"Contact Us",
      link:"contact-us"
    },
    {
      name:"Sign Up",
      link:"sign-up"
    },
    {
      name:"Sign In",
      link:"sign-in"
    },
    {
      name:"Subscription",
      link:"subscription"
    },
  ];

  const openDiscoverMenu = ()=>{
    if(!openDiscover){
      setOpenDiscover(true);
    }
    else{
      setOpenDiscover(false);
    }
  }

  const openHelpMenu = ()=>{
    if(!openHelp){
      setOpenHelp(true);
    }
    else{
      setOpenHelp(false);
    }
  }

  const closeSideBar=()=>{
    setOpenSideMenu(false);//receiving procs
  }


  return (
    <div className={Style.sideBar}>
      <GrClose 
        className={Style.sideBar_closeBtn} 
        onClick={()=>closeSideBar()}
      />
          
          {/* sidebar box */}
      <div className={Style.sideBar_box}>
        <Image 
          src={images.logo2} 
          alt='logo' 
          height={150} 
          width={150}
        />
        <p>Discover the most outstanding articles on all topics of NFT and add to your own story</p>
        <div className={Style.sideBar_social}>
            <a href="#"><TiSocialFacebook/></a>
            <a href="#"><TiSocialLinkedin/></a>
            <a href="#"><TiSocialTwitter/></a>
            <a href="#"><TiSocialInstagram/></a>
            <a href="#"><TiSocialYoutube/></a>
        </div>
      </div>

               {/* sidebar menu */}
      <div className={Style.sideBar_menu}>
                   
                   {/* //discover menu */}
        <div>
          <div className={Style.sideBar_menu_box} 
          onClick={() => openDiscoverMenu()}>
              <p>Discover</p>
              <TiArrowSortedDown/>
          </div>

          {
            openDiscover && (
              <div>
              {discover.map((el,i)=>(
                <div key={i+1} className={Style.sideBar_discover}>
                  <Link href={{pathname: `${el.link}`}}>
                    {el.name}
                  </Link>
                </div>
              ))}
            </div>
            )
          }
        </div>


                    {/* help menu */}
        <div>
          <div className={Style.sideBar_menu_box}
           onClick={()=>openHelpMenu()}>
              <p>Help Center</p>
              <TiArrowSortedDown/>
          </div>
          
          {
            openHelp && (
              <div className={Style.sideBar_discover}>
                {helpCenter.map((el,i)=>(
                  <p key={i+1}>
                    <Link href={{pathname: `${el.link}`}}>{el.name}</Link>
                  </p>
                ))}
              </div>
            )
          }

        </div>

      </div>

               {/* sidebar button */}
      <div className={Style.sideBar_button}>
        <Button btnName="Create" handleClick={()=>{}}/>
        <Button btnName="Connect Wallet" handleClick={()=>{}}/>
      </div>
    </div>
  )
}

export default SideBar
