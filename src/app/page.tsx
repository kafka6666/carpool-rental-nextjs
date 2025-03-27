import CarouselComponent from "@/components/CarouselComponent";
import Explore from "@/components/Explore";
import SubFooter from "@/components/SubFooter";
import OurObjective from "@/components/OurObjective";

export default function Home() {
  return (
    <div className="w-full">
      <div className="relative">
        <CarouselComponent />
        <Explore />
        <SubFooter />
        <OurObjective />
      </div>
    </div>
  );
}
