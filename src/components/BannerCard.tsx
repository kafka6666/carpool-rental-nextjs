interface BannerCardProps {
  img: string;
  title: string;
  text: string;
  backgroundColor?: string;
}

const BannerCard = ({ img, title, text, backgroundColor = "#f5f5f5" }: BannerCardProps) => {
  return (
    <div className="">
      <div
        className="h-[30vh] lg:h-[70vh] bg-no-repeat bg-center bg-cover relative flex justify-center items-center"
        style={{ backgroundImage: `url(${img})`, backgroundColor }}
      >
        <div className="content-[''] absolute top-0 right-0 bottom-0 left-0 bg-black opacity-40"></div>

        <div className="w-full lg:w-[70%] text-white">
          <h1 className="text-2xl lg:text-7xl font-medium text-orange-500 mb-2 lg:mb-5">
            {title}
          </h1>
          <h2 className="text-lg md:text-4xl leading-6 md:leading-[55px]">
            {text}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;