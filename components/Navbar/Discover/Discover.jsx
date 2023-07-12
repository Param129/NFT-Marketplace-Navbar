import React from 'react'
import Link from "next/link"

// internal imports 
import Style from "./Discover.module.css";

const Discover = () => {


           // DISCOVER NAVIGATION MENU
           // discover array contains all menu as object
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

  return (
    <div>
      {discover.map((el,i)=>(
        <div key={i+1} className={Style.discover}>
          <Link href={{pathname: `${el.link}`}}>
            {el.name}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Discover
