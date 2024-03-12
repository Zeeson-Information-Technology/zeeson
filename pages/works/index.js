import Link from "next/link";
import React from "react";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import Footer from "../../components/ui/Footer";
import Main from "../../components/Main";
import MainNav from "../../components/ui/nav/MainNav";
import Button from "../../components/ui/Button";
import LetBuildSomething from "../../components/LetBuildSomething";

function Work() {
  return (
    <main>
      <MainNav />
      <section className="bg-[#F4F6FC] py-[3rem] md:py-[4rem]">
        <div className="max-w-[80%] md:max-w-[60%] laptop:max-w-[40%] mx-auto text-center">
          <h2 className="text-[20px]">What we created</h2>
          <h3 className="text-3xl font-[600] py-[1rem]">Our Work Portfolio</h3>
          <p>
            We help teams create great digital products by providing them with
            tools and technology to make the design-to-code process universally
            accessible.
          </p>
          <div className="md:text-xl flex items-center justify-center gap-4 mt-4 md:gap-8">
            <Link href={"/"}>
              <BsFacebook className="cursor-pointer" />
            </Link>
            <Link href={"/"}>
              <BsTwitter className="cursor-pointer" />
            </Link>
            <Link href={"/"}>
              <BsInstagram className="cursor-pointer" />
            </Link>
            <Link href={"/"}>
              <BsLinkedin className="cursor-pointer" />
            </Link>
          </div>
        </div>
      </section>
      <Main />
      <div className=" max-w-[80%] md:max-w-[60%] laptop:max-w-[40%] mx-auto text-center">
        <LetBuildSomething />
      </div>
      <Footer />
    </main>
  );
}

export default Work;
