"use client"

import { Container, Logotype } from "@/shared/components";
import OpenBurgerMenuButton from "./components/OpenBurgerMenuButton";
import FunctionalButtons from "./components/FunctionalButtons";
import BurgerMenu from "./components/BurgerMenu";
import {useEffect, useState} from "react";

export default function Header () {
  const [burgerDisplay, setBurgerDisplay] = useState("hidden");
  const [industriesSmDisplay, setIndustriesSmDisplay] = useState(false);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    setTimeout(() => {
      handleScroll()
    }, 200);

    window.addEventListener("scroll", handleScroll, { passive: true, capture: true});
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  });

  return (
    <>
      <header className={`fixed z-20 w-full py-4 ${scrollY >= 128 && "bg-white dark:bg-black transition duration-500 ease-in-out"}`}>
        <Container>
          <div className={"flex items-center"}>
            <Logotype />
            <OpenBurgerMenuButton openButtonClick={() => setBurgerDisplay("block")} />
            <div className={"hidden ml-auto md:block"}>
              <FunctionalButtons 
                anchorsClick={() => burgerDisplay === "block" && setBurgerDisplay("hidden")}
              />
            </div>
          </div>
        </Container>
        <BurgerMenu 
          anchorsClick={() => burgerDisplay === "block" && setBurgerDisplay("hidden")}
          industriesSmDisplay={industriesSmDisplay}
          industriesSmClick={() => setIndustriesSmDisplay(!industriesSmDisplay)}
          industriesSmLinkClick={() => {
            setBurgerDisplay("hidden");
            setIndustriesSmDisplay(!industriesSmDisplay);
          }}
          closeButtonClick={() => setBurgerDisplay("hidden")}
          display={burgerDisplay}
        />
      </header>
      <div className={"w-full h-20"}></div>
    </>
  );
}