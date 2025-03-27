import TitleText from "./TitleText";
import { homeCards } from "@/constants/appdata";
import Image from "next/image";

const OurObjective = () => {
  return (
    <div className="bg-teal-50 dark:bg-gray-900 pt-12 mb-10">
      <TitleText>
        <span className="text-gray-900 font-extrabold">Our Objective</span>
      </TitleText>
      <div className="mx-10 md:mx-[10%] mt-8">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 justify-center gap-10">
          {homeCards?.map((car, index) => (
            <div key={index} className="rounded shadow-lg bg0-white">
              <div className="w-full relative">
                <Image 
                    src={car.img} 
                    alt="" 
                    className="w-full object-cover rounded-sm" 
                    width={1000} 
                    height={1000} />
              </div>
              <div className="font-bold text-xl mb-2 text-orange-500 p-2">
                {car.title}
              </div>
              <p className="text-gray-500 text-base p-2">{car.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurObjective;