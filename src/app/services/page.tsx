import BannerCard from "@/components/BannerCard";
import SubFooter from "@/components/SubFooter";
import { serviceList } from "@/constants/appdata";
import Service from "@/components/Service";

const Services = () => {
  return (
    <div>
      <BannerCard
        img="/service-banner.jpg"
        title="Services"
        text="Experience elevated travel with CarPool: Where style, comfort, and safety meet for every occasion. Travel in sophistication and peace of mind."
      />
      <div className="mb-5">
        {serviceList?.map((service, index) => (
          <div key={index}>
            <Service service={service} />
          </div>
        ))}
      </div>
      <SubFooter />
    </div>
  );
};

export default Services;