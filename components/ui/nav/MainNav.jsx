import React, { useState, useEffect } from "react";
import Nav from "./nav";
import { useRouter } from 'next/router';

function MainNav() {
  const router = useRouter();
  const isHomePage = router.pathname === '/';
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`pt-6 pb-6 sticky top-0 left-0 right-0 z-40 transition-colors duration-300 ${
      (!isHomePage || scrolled) ? 'bg-[#1C1E53]' : 'bg-transparent'
    }`}>
      <Nav />
    </div>
  );
}

export default MainNav;
