import { Carousel, CarouselResponsiveOption } from "primereact/carousel";

export default function ResponsiveDemo({ values, template }: any) {
  const responsiveOptions: CarouselResponsiveOption[] = [
    {
      breakpoint: "1199px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "991px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "360px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  return (
    <div className="card max-w-[1440px] mx-auto w-full mt-[30px] ">
      <Carousel
        value={values}
        className=" -z-10 px-0"
        numScroll={1}
        numVisible={3}
        indicatorsContentClassName=" hidden"
        responsiveOptions={responsiveOptions}
        itemTemplate={template}
      />
    </div>
  );
}
