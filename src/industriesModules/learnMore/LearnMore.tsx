"use client"

import {Container, Post, Section, TransparentButton} from "@/shared/components";
import {Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import {useCallback, useRef} from "react";
import SpriteSVG from "@/landingModules/latestProjects/images/SpriteSVG";

export default function LearnMore () {
  const sliderRef = useRef<any>();

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const posts = [
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      href: "/news",
      category: "AI",
      date: "20.08.2024",
      heading: "Lorem ipsum dolor sit amet consectetur.",
    },
  ]

  return (
    <Section>
      <Container>
        <div className={"flex flex-col md:flex-row md:items-end md:justify-between md:mb-20 xl:block"}>
          <h2 className={"mb-12 text-[40px] md:mb-0 md:max-w-[500px] md:text-[64px] xl:max-w-full"}>
            Learn more about ecommerce app development
          </h2>
          <div className={"hidden md:block xl:hidden"}>
            <TransparentButton type={"link"} text={"All news"} uppercase={true} href={"/news"}/>
          </div>
        </div>
        <div className={"flex flex-col items-center md:hidden"}>
          <Swiper
            pagination={true}
            modules={[Pagination]}
            spaceBetween={20}
          >
            {posts.map((post) => (
              <SwiperSlide className={"flex flex-col items-center justify-center rounded-[20px]"} key={post.heading}>
                <Post
                  href={post.href}
                  category={post.category}
                  date={post.date}
                  heading={post.heading}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={"hidden md:flex md:flex-col md:items-center xl:hidden"}>
          <Swiper
            ref={sliderRef}
            pagination={{
              type: undefined,
            }}
            modules={[Pagination]}
            spaceBetween={24}
            slidesPerView={2}
          >
            {posts.map((post) => (
              <SwiperSlide
                className={"pb-10 rounded-[20px]"} key={post.heading}>
                <div className={"mx-auto w-fit"}>
                  <Post
                    href={post.href}
                    category={post.category}
                    date={post.date}
                    heading={post.heading}
                  />
                </div>
              </SwiperSlide>
            ))}
            <div
              className={"absolute bottom-[0px] left-1/2 transform -translate-x-1/2 flex justify-between w-full px-10"}>
              <div
                className="swiper-button-prev flex items-center gap-4 text-[24px] cursor-pointer hover:text-[#F10BD0]"
                onClick={handlePrev}>
                <SpriteSVG name='prevButton'/>
                <p>Previous</p>
              </div>
              <div
                className="swiper-button-next flex items-center gap-4 text-[24px] cursor-pointer hover:text-[#F10BD0]"
                onClick={handleNext}>
                <p>Next</p>
                <SpriteSVG name='nextButton'/>
              </div>
            </div>
          </Swiper>
        </div>
        <div className={"hidden xl:flex xl:items-center xl:justify-between"}>
          {posts.map((post) => (
            <Post
              key={post.heading}
              href={post.href}
              category={post.category}
              date={post.date}
              heading={post.heading}
            />
          ))}
        </div>
        <div className={"flex flex-col items-center mt-12 md:hidden xl:flex"}>
          <TransparentButton type={"link"} text={"All news"} uppercase={true} href={"/news"}/>
        </div>
      </Container>
    </Section>
  )
}