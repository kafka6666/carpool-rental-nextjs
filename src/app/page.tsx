import CarouselComponent from "@/components/CarouselComponent";
import Explore from "@/components/Explore";

export default function Home() {
  return (
    <div className="w-full">
      <CarouselComponent />
      <div className="relative">
        <Explore />
      </div>
    </div>
  );
}
