"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    // CarouselNext,
    // CarouselPrevious,
  } from "@/components/ui/carousel"
  import { Card, CardContent } from "@/components/ui/card";
  import { profile } from "@/constants/appdata";
  // import AutoPlay from "embla-carousel-autoplay";

const CarouselComponent = () => {
  return (
    <Carousel 
    //   plugins={[AutoPlay({
    //   delay: 3000
    // })]}
    >
        <CarouselContent>
            {
              profile.map((item, index) => (
                <CarouselItem 
                  key={index}
                  style={{
                    backgroundImage: `url(${item.img})`
                  }}
                  className="w-full h-full bg-cover bg-center pt-5 bg-no-repeat relative pointer-events-none"
                  >
                    <div className="absolute top-0 bottom-0 right-0 left-0 bg-[rgba(0,0,0,0.6)] opacity-90"></div>
                    <div className="">
                      <Card className="bg-transparent border-none">
                        <CardContent className="flex items-center justify-center p-6">
                          <div 
                            className="h-[40vh] md:h-[60vh] flex lg:justify-center items-center flex-col relative"
                          >
                            <h3 
                              className="mb-1 lg:mb-5 flex items-center gap-6 text-2xl lg:text-5xl"
                            >
                              <span 
                                className="font-bold text-orange-700 dark:text-orange-500"
                                >
                                  {item.title}
                              </span>
                            </h3>
                            <p className="text-white text-sm md:text-4xl text-center w-10/12 md:w-8/12">
                              <i className={"fad fa-" + item.icon}></i>
                              <span className="text-white">{item.text}</span>
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                </CarouselItem>
              ))
            }
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
    </Carousel>
  )
}

export default CarouselComponent