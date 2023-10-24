import React from "react";
import Raju from "../../Component/images/vol1-Raju Shete.png";
import baban from "../../Component/images/vol-baban.png";
import gaurav from "../../Component/images/vol-gaurav dahale.png";
import Keshav from "../../Component/images/vol-keshav kanhe.png";
import Narayn from "../../Component/images/volun-1 Gayatri Kanbale.png";
import Gaytri from "../../Component/images/volun2-akanksha dhone.png";
import Akansh from "../../Component/images/volun3-Narayan Mishra.png";
import ajim from "../../Component/images/ajim kaji.png";
import junaid from "../../Component/images/jk.png";



const Volunteer = () => {
  return (
    <div className=" flex items-center flex-col p-8 gap-8">
      <div>
        <h3 className="h3 text-1C6FB font-sans text-3xl font-bold">
        Our Volunteers
        </h3>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div class="w-full max-w-sm bg-white border-2 border-1C6FB rounded-lg shadow">
          <div class="flex flex-col items-center pb-10">
            <img
              class="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={Raju}
              alt="Bonnie image"
            />
            <h5 class="font-sans text-1C6FB font-bold mt-4 text-sm">
              Raju Shete
            </h5>
            <span class="font-sans text-1C6FB font-bold">
              Volunteer : OJAS009
            </span>
            <span class="font-sans text-1C6FB font-bold">PBN MAHARASHTRA</span>
          </div>
        </div>
        <div class="w-full max-w-sm bg-white border-2 border-1C6FB rounded-lg shadow">
          <div class="flex flex-col items-center pb-10">
            <img
              class="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={baban}
              alt="Bonnie image"
            />
            <h5 class="font-sans text-1C6FB font-bold mt-4">Baban Bhopale</h5>
            <span class="font-sans text-1C6FB font-bold">
              Volunteer : OJAS010
            </span>

            <span class="font-sans text-1C6FB font-bold">PBN MAHARASHTRA</span>
          </div>
        </div>
        <div class="w-full max-w-sm bg-white border-2 border-1C6FB rounded-lg shadow">
          <div class="flex flex-col items-center pb-10">
            <img
              class="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={gaurav}
              alt="Bonnie image"
            />
            <h5 class="font-sans text-1C6FB font-bold mt-4">Gaurav Dahale</h5>
            <span class="font-sans text-1C6FB font-bold">
              Volunteer : OJAS011
            </span>
            <span class="font-sans text-1C6FB font-bold">
              {" "}
              Jalna MAHARASHTRA
            </span>
          </div>
        </div>
        <div class="w-full max-w-sm bg-white border-2 border-1C6FB rounded-lg shadow">
          <div class="flex flex-col items-center pb-10">
            <img
              class="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={Keshav}
              alt="Bonnie image"
            />
            <h5 class="font-sans text-1C6FB font-bold mt-4 text-sm">
              Keshav kanhe
            </h5>
            <span class="font-sans text-1C6FB font-bold">
              Volunteer: OJAS012
            </span>
            <span class="font-sans text-1C6FB font-bold">
              Jintur MAHARASHTRA
            </span>
          </div>
        </div>

        <div class="w-full max-w-sm bg-white border-2 border-1C6FB rounded-lg shadow">
          <div class="flex flex-col items-center pb-10">
            <img
              class="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={Narayn}
              alt="Bonnie image"
            />
            <h5 class="font-sans text-1C6FB font-bold mt-4 text-sm">
            Ku. Gayatri Kanbale
            </h5>
            <span class="font-sans text-1C6FB font-bold">
              Volunteer : OJAS013
            </span>
            <span class="font-sans text-1C6FB font-bold">
            Purna
            Parbhani (MH)
            </span>
          </div>
        </div>

        <div class="w-full max-w-sm bg-white border-2 border-1C6FB rounded-lg shadow">
          <div class="flex flex-col items-center pb-10">
            <img
              class="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={Gaytri}
              alt="Bonnie image"
            />
            <h5 class="font-sans text-1C6FB font-bold mt-4">
            Ku.Akanksha Dhone
            </h5>
            <span class="font-sans text-1C6FB font-bold">
              Volunteer : OJAS014
            </span>
            <span class="font-sans text-1C6FB font-bold">
              Purna MAHARASHTRA
            </span>
          </div>
        </div>
        <div class="w-full max-w-sm bg-white border-2 border-1C6FB rounded-lg shadow">
          <div class="flex flex-col items-center pb-10">
            <img
              class="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={Akansh}
              alt="Bonnie image"
            />
            <h5 class="font-sans text-1C6FB font-bold mt-4 ">
            Narayan Mishra
            </h5>
            <span class="font-sans text-1C6FB font-bold">
              {" "}
              Volunteer : OJAS015
            </span>
           
            <span class="font-sans text-1C6FB font-bold">Delhi </span>
            <span class="font-sans text-1C6FB font-bold">UTTARPRADESH</span>
          </div>
        </div>



        <div class="w-full max-w-sm bg-white border-2 border-1C6FB rounded-lg shadow">
          <div class="flex flex-col items-center pb-10">
            <img
              class="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={ajim}
              alt="Bonnie image"
            />
            <h5 class="font-sans text-1C6FB font-bold mt-4 ">
            Ajim Kaji
            </h5>
            <span class="font-sans text-1C6FB font-bold">
              {" "}
              Volunteer : OJAS016
            </span>
           
            <span class="font-sans text-1C6FB font-bold">PBN MAHARASHTRA </span>
        
          </div>
        </div>

        
        <div class="w-full max-w-sm bg-white border-2 border-1C6FB rounded-lg shadow">
          <div class="flex flex-col items-center pb-10">
            <img
              class="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={junaid}
              alt="Bonnie image"
            />
            <h5 class="font-sans text-1C6FB font-bold mt-4 ">
    Junaid Khan
            </h5>
            <span class="font-sans text-1C6FB font-bold">
              {" "}
              Volunteer : OJAS017
            </span>
           
            <span class="font-sans text-1C6FB font-bold">Tech Support</span>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer ;
    ;
