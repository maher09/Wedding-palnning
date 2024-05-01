"use client";
import React, { useEffect, useState } from 'react';
import Link from "next/link";

//pages imports
import AboutUs from './about/page';
import CardCompColored from './cardCompColored/page';
import CardCompNoColored from './cardCompNoColored/page';
import Cart from './cart/page';
import CheckList from './checkList/page';
import HairMakeup from './hairMakeup/page';
import HoneyMoon from './honeyMoon/page';
import Index from './pages/Index';
import InvitationCards from './invitationCards/page';
import Venue from './venue/page';
////////////////

//Component imports
import Bookreservation from './components/Bookreservation';
import Buycard from './components/Buycard';
import Footer from './components/Footer';
import NavbarRegistered from './components/NavbarRegistered';
///////////////




 function Home() {
  return (
    <main>
        
      
        <Index/>
    
        
        
       
        

    </main>
  );
}
export default Home;