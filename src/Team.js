import React from 'react';

import m1 from "./images/mm1.jpg"
import m2 from "./images/mm2.jpg"
import m3 from "./images/mm3.jpg"
import m5 from "./images/mm5.jpg"
import m6 from "./images/mm6.jpg"
import m7 from "./images/mm7.jpg"

function Team() {
  return (
    <div>
            
            
            <div class="team-section">
    <div class="inner-width">
      <h1>Rukovodioci KUD-a</h1>
      <div class="pers">


        <div class="pe">
          <img src = {m1}  alt=""></img>
          <div class="p-name">Husmira Tadžić</div>
          <div class="p-des">Predsjednica</div>

        </div>

        <div class="pe">
          <img src={m2}  alt=""></img>
          <div class="p-name">Adis Zahirovic</div>
          <div class="p-des">1. Zamjenik Predsjednice</div>
        </div>

        <div class="pe">
          <img src={m6}  alt=""></img>
          
          <div class="p-name">Senad Kmetaš</div>
          <div class="p-des">1. Zamjenik Predsjednic</div>
        </div>


        <div class="pe">
          <img src={m5}  alt=""></img>
          <div class="p-name">Semir Muratovic</div>
          <div class="p-des">Sekretar</div>

          </div>

          
        <div class="pe">
          <img src={m3}  alt=""></img>
          
          <div class="p-name">Almir Botić</div>
          <div class="p-des">Tehnički rukovodilac</div>
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



        <div class="pe">
          <img src={m7}  alt=""></img>
          
          <div class="p-name">Armin Ibišević</div>
          <div class="p-des">Omladinski predstavnik</div>
        </div>



      </div>

    </div>
  </div>
</div>
  );
}

export default Team;
