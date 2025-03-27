import CarouselComponent from "@/components/CarouselComponent";
import Explore from "@/components/Explore";
import SubFooter from "@/components/SubFooter";
import OurObjective from "@/components/OurObjective";

export default function Home() {
  return (
    <div className="w-full">
      <CarouselComponent />
      <div className="relative">
        <Explore />
        <SubFooter />
        <OurObjective />
      </div>
    </div>
  );
}
