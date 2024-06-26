"use client"

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitch () {
  const { theme, setTheme } = useTheme();
  const [margins, setMargins] = useState<{ left: string, right: string }>();

  useEffect(() => {
    if (theme === 'dark') {
      setMargins({ left: 'mr-auto', right: 'ml-1' });
    } else {
      setMargins({ left: 'mr-1', right: 'ml-auto' });
    }
  }, [theme]);

  return (
    <button 
      role="button"
      aria-label="Theme switch"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-[50px] h-[22px] rounded-[40px] border-2 dark:border-white border-black"
      name="theme switch"
      >
      {margins && (
        <div className={`w-[26px] h-[14px] ${margins.left} ${margins.right} bg-[#B519F4] rounded-[40px]`} />
      )}    
    </button>
  )
}