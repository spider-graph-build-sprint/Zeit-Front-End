import React from 'react';
import './Nav.scss';

function Nav() {
  return (
   <div class="navWrapper">
      <nav class="navigation">
         <div>
         <div class="logo">
               <a class="inline-anchor" href="https://better-reads-marketing.netlify.com"><img class="logo__img" src=""/></a>
            </div>
         </div>

         <div class="nav-links">
         <a href="">Discover</a>
         <a href="/about-us.html">About Us</a>
         <a href="mailto: amerrzi@gmail.com">Contact</a>
         </div>
      </nav>
   </div>
  );
}

export default Nav;