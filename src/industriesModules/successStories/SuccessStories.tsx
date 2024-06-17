import {Container, Section} from "@/shared/components";

import SviyLight from "./images/SviyLight.png";
import SviyDark from "./images/SviyDark.png";

import Image from "next/image";

export default function SuccessStories () {
  // const sliderRef = useRef<any>();
  //
  // const handlePrev = useCallback(() => {
  //   if (!sliderRef.current) return;
  //   sliderRef.current.swiper.slidePrev();
  // }, []);
  //
  // const handleNext = useCallback(() => {
  //   if (!sliderRef.current) return;
  //   sliderRef.current.swiper.slideNext();
  // }, []);
  //
  // const stories = [
  //   {
  //     name: "[ Sviy ]",
  //     type: "Marketplace",
  //     description: "Sviy is an eCommerce local food online marketplace that values the quality, freshness, and naturalness of food. Also, this is the platform where people are interested in supporting local production and the economy."
  //   },
  // ]

  return (
    <Section>
      <Container>
        <h2 className={"mb-8 text-[40px] md:mb-20 md:text-[64px]"}>Success Stories</h2>
        {/*<div className={"flex flex-col items-center justify-between md:hidden"}>*/}
        {/*  <Swiper*/}
        {/*    pagination={true}*/}
        {/*    modules={[Pagination]}*/}
        {/*    className={"rounded-0"}*/}
        {/*    spaceBetween={20}*/}
        {/*  >*/}
        {/*    {stories.map((story) => (*/}
        {/*      <SwiperSlide key={story.name}>*/}
        {/*        <div className={"w-full h-[228px] mb-5 bg-gray-600"}></div>*/}
        {/*        <div className={"text-left"}>*/}
        {/*          <h3 className={"text-2xl text-[#3892F5]"}>{story.name}</h3>*/}
        {/*          <h4*/}
        {/*            className={"mt-6 mb-10 text-[32px] text-transparent bg-clip-text bg-gradient-to-r from-[#3892F5FF] via-[#B519F4FF] to-[#F10BD0FF]"}>*/}
        {/*            {story.type}*/}
        {/*          </h4>*/}
        {/*          <p>{story.description}</p>*/}
        {/*        </div>*/}
        {/*      </SwiperSlide>*/}
        {/*    ))}*/}
        {/*  </Swiper>*/}
        {/*</div>*/}
        {/*<div className={"hidden md:flex md:flex-col md:items-center"}>*/}
        {/*  <Swiper*/}
        {/*    ref={sliderRef}*/}
        {/*    pagination={{*/}
        {/*      type: undefined,*/}
        {/*    }}*/}
        {/*    modules={[Pagination]}*/}
        {/*    spaceBetween={24}*/}
        {/*  >*/}
        {/*    {stories.map((story) => (*/}
        {/*      <SwiperSlide className={"rounded-[20px] pb-10"} key={story.name}>*/}
        {/*        <div className={"xl:flex xl:flex-row-reverse"}>*/}
        {/*          <div className={"w-full h-[442px] mb-5 bg-gray-600 xl:mb-0"}></div>*/}
        {/*          <div className={"text-left"}>*/}
        {/*            <h3 className={"text-[24px] text-[#3892F5]"}>{story.name}</h3>*/}
        {/*            <h4*/}
        {/*              className={"mt-6 mb-10 text-[48px] text-transparent bg-clip-text bg-gradient-to-r from-[#3892F5FF] via-[#B519F4FF] to-[#F10BD0FF]"}>*/}
        {/*              {story.type}*/}
        {/*            </h4>*/}
        {/*            <p>{story.description}</p>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </SwiperSlide>*/}
        {/*    ))}*/}
        {/*    <div*/}
        {/*      className={"absolute bottom-[0px] left-1/2 transform -translate-x-1/2 flex justify-between w-full px-10"}>*/}
        {/*      <div*/}
        {/*        className="swiper-button-prev flex items-center gap-4 text-[24px] cursor-pointer hover:text-[#F10BD0]"*/}
        {/*        onClick={handlePrev}>*/}
        {/*        <SpriteSVG name='prevButton'/>*/}
        {/*        <p>Previous</p>*/}
        {/*      </div>*/}
        {/*      <div*/}
        {/*        className="swiper-button-next flex items-center gap-4 text-[24px] cursor-pointer hover:text-[#F10BD0]"*/}
        {/*        onClick={handleNext}>*/}
        {/*        <p>Next</p>*/}
        {/*        <SpriteSVG name='nextButton'/>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </Swiper>*/}
        {/*</div>*/}
        <div className={"flex flex-col gap-5 xl:flex-row-reverse"}>
          <Image className={"hidden w-full xl:w-1/2 dark:block"} src={SviyDark} alt={"Sviy marketplace"} />
          <Image className={"block w-full xl:w-1/2 dark:hidden"} src={SviyLight} alt={"Sviy marketplace"} />
          <div className={"text-left"}>
            <h3 className={"text-2xl text-[#3892F5]"}>[ Sviy ]</h3>
            <h4
              className={"mt-6 mb-10 text-[32px] text-transparent bg-clip-text bg-gradient-to-r from-[#3892F5FF] via-[#B519F4FF] to-[#F10BD0FF] md:text-[48px]"}>
              Marketplace
            </h4>
            <p className={"md:text-xl"}>
              Sviy is an eCommerce local food online marketplace that values the quality, freshness, and naturalness
              of food. Also, this is the platform where people are interested in supporting local production and the
              economy.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}