import React from 'react';
import m4 from "./images/mm4.jpg"
import m5 from "./images/mm5.jpg"

function Team() {
  return (
    <div>
            
            
            <div class="team-section">
    <div class="inner-width">
      <h1>Treneri</h1>
      <div class="pers">


        <div class="pe">
          <img src = {m4}  alt=""></img>
          <div class="p-name">Mersiha Botić</div>

        </div>

        <div class="pe">
        <img src={m5}  alt=""></img>
          <div class="p-name">Semir Muratovic</div>+
        </div>

        <div class="pe">
          <img src={m4}  alt=""></img>
          <div class="p-name">Neila Kauković</div>
        </div>

        


          {/*<div class="p-sm">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>

          
        <div class="pe">
          <img src={m4}  alt=""></img>
          
          <div class="p-name">Mersiha Botić</div>
          <div class="p-des">Trenerica</div>
        </div>
          */}


      </div>

    </div>
  </div>
</div>
  );
}

export default Team;
