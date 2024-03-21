"use client"

import { Container, Logotype } from "@/shared/components";
import OpenBurgerMenuButton from "./components/OpenBurgerMenuButton";
import FunctionalButtons from "./components/FunctionalButtons";
import BurgerMenu from "./components/BurgerMenu";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header () {
  const router = useRouter();

  const [right, setRight] = useState("right-[-100%]");

  const functionalButtonsHandler = (isBurger: boolean, type: "about" | "services" | "contacts") => {
    document.body.style.overflowY = "scroll";
    if (isBurger) {
      setRight("right-[-100%]");

      if (type === "about") {
        router.push("/#about"); 
      } else if (type === "services") {
        router.push("/#services");
      } else if (type === "contacts") {
        router.push("/#whatWeCanDo");
      }
    } else {
      if (type === "about") {
        router.push("/#about"); 
      } else if (type === "services") {
        router.push("/#services");
      } else if (type === "contacts") {
        router.push("/#whatWeCanDo");
      }
    }
  }

  const openButtonClick = () => {
    setRight("right-0");
  };

  const closeButtonClick = () => {
    setRight("right-[-100%]");
  };

  return (
    <>
      <header className="relative py-4">
        <Container>
          <div className="flex items-center">
            <Logotype />
            <OpenBurgerMenuButton openButtonClick={openButtonClick} />
            <div className="hidden ml-auto md:block">
              <FunctionalButtons 
                aboutClick={() => functionalButtonsHandler(false, "about")}
                servicesClick={() => functionalButtonsHandler(false, "services")}
                contactsClick={() => functionalButtonsHandler(false, "contacts")}
              />
            </div>
          </div>
        </Container>
        <BurgerMenu 
          aboutClick={() => functionalButtonsHandler(true, "about")}
          servicesClick={() => functionalButtonsHandler(true, "services")}
          contactsClick={() => functionalButtonsHandler(true, "contacts")}
          closeButtonClick={closeButtonClick}
          right={right}
        />
      </header>
    </>
  );
}