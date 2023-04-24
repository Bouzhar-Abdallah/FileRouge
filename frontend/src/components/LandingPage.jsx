import React from "react";
import Standings from "../features/standings/Standings";

export default function LandingPage() {
  return (
    <div>
      <div className="h-[400px] mt-20 bg-gradient-to-r to-[#A054DE] from-[#681FA2] w-screen">
        <div className="relative  top-24 ml-6">
          <div className="absolute top-0 left-0">
            <Standings />
          </div>
        </div>
        <div className="w-full flex justify-end pr-[250px] mt-10 p-10">
          <div className="flex">
            <img
              className="h-[350px]"
              src="https://res.cloudinary.com/doy8hfzvk/image/upload/v1682364605/336646202_1421281878625301_8022052025783521497_n_cnjeme.jpg"
              alt=""
            />
            <div className="w-[350px] p-5 ml-2 text-darkBlue bg-white">
              <h1 className="font-normal text-xl ">
                Back in action tonight as Raja host 𝐉𝐒𝐒 at Mohammed V Stadium
              </h1>
              <h3 className="font-thin text-sm my-2">24/04/2023 18:00</h3>
              <p className="mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                delectus sit officia reiciendis cum. Quas incidunt rerum
                distinctio nostrum sunt ad necessitatibus exercitationem nobis,
                nemo soluta dolorem omnis facilis nam!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mr-24">
        <div className="mt-10 flex justify-end">
          <div className="flex">
            <div className="border-2 border-gradient2 w-[400px] p-5">
              <h1 className="font-normal text-xl ">
                Coupe de la CAF: L’AS FAR en ballotage défavorable lors du
                retour
              </h1>
              <h3 className="font-thin text-sm my-2">24/04/2023 18:00</h3>
              <p className="mt-5">
                Dimanche s’est jouée la première manche des quarts de finale de
                la Coupe de la CAF. L’AS FAR a raté sa première sortie suite à
                sa défaite face à l’USMA (2-0). Décevante, l’AS FAR a présenté
                une très mauvaise copie. Monastiérienne et Mimosas se sont
                neutralisés (0-0). Les Ivoiriens auront l’avantage d’accueillir
                les Tunisiens en match retour. Les coéquipiers d’El Karti et de
                Chibi n’ont égalisé qu’aux ultimes secondes du match. 
              </p>
            </div>
            <div className="flex flex-col justify-between mx-2">
              <img
                className="w-24"
                src="https://res.cloudinary.com/doy8hfzvk/image/upload/v1682365804/336795599_611896134144301_5516463246924772926_n_qsw7td.jpg"
                alt=""
              />
              <img
                className="w-24"
                src="https://res.cloudinary.com/doy8hfzvk/image/upload/v1682365789/336773491_606109894490743_5905293963803435814_n_crk38k.jpg"
                alt=""
              />
              <img
                className="w-24"
                src="https://res.cloudinary.com/doy8hfzvk/image/upload/v1682365783/336794829_754671626245541_9157692965639158207_n_ojc1qv.jpg"
                alt=""
              />
              <img
                className="w-24"
                src="https://res.cloudinary.com/doy8hfzvk/image/upload/v1682365901/342821069_237147692164016_7829439149782420204_n_hm4nrx.jpg"
                alt=""
              />
            </div>
            <img
              className="h-[400px]"
              src="https://res.cloudinary.com/doy8hfzvk/image/upload/v1682365787/337288867_6852983931400581_1993846923991982083_n_t6dlpn.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
