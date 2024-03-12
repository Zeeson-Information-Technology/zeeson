import React from "react";
import Footer from "../components/ui/Footer";
import MainNav from "../components/ui/nav/MainNav";
function Privacy() {
  return (
    <main>
      <MainNav />
      <div className=" max-w-[80%] md:max-w-[60%] mx-auto my-[6rem]">
        <div className="max-w-[500px] text-center mx-auto">
          <h2 className="text-4xl font-[600] mb-4">Privacy Policy</h2>
          <p>
            When you’re ready to go beyond prototyping in Figma, Webflow’s ready
            to help you bring your
          </p>
        </div>
        <div className="mt-10 ">
          <div className="mb-8">
            <h3 className="text-3xl font-[600] mb-4">Lorem ipsum dolor.</h3>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            <p>
              Sunt in culpa qui officia deserunt mollit anim id est laborum. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-[600] mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h3>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <ul className="mb-4 list-disc">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Privacy;
