import { useState } from "react";

// react icons
import { RiMenu3Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // handle menu toggle
  const handleMenuToggle = () => {
    setOpenMenu(!openMenu);
    setIsTransitioning(true);
  }
  return (
    <section>
      {/* Desktop */}
      <div className="text-white xl:p-8 xl:w-4/5 xl:my-0 xl:mx-auto xl:flex xl:items-center xl:justify-between">
        <div className="flex item-center justify-between">
          <div>
            <h1 className="font-semibold xl:text-xl xl:font-bold">JustAnotherUIKit</h1>
          </div>
          <div className="xl:hidden">
            <button onClick={handleMenuToggle}>
              {openMenu ? (
                <MdClose className="text-3xl" />
              ) : (
                <RiMenu3Fill className="text-3xl" /> 
              )}
            </button>
          </div>
        </div>
        <div className="hidden xl:block">
          <ul className="xl:flex xl:items-center xl:justify-between xl:gap-x-8">
            <li className="cursor-pointer xl:text-base xl:font-bold xl:leading-5">
              <a href="#Hero">Home</a>
            </li>
            <li className="cursor-pointer xl:text-base xl:font-extralight xl:leading-5">
              <a href="#About">About</a>
            </li>
            <li className="cursor-pointer xl:text-base xl:font-extralight xl:leading-5">
              <a href="#Contact">Contact</a>
            </li>
            <li className="cursor-pointer xl:text-base xl:font-extralight xl:leading-5">
              <a href="#Blog">Blog</a>
            </li>
          </ul>
        </div>
        {/* Mobile menu */}
        {openMenu ? (
          <div className={`absolute bg-black w-full ${isTransitioning ? 'transition-all duration-300' : ''}`}>
            <ul className="flex flex-col gap-y-3">
              <li className="cursor-pointer border-b-5 font-bold">
                <a href="#Home">Home</a>
              </li>
              <li className="cursor-pointer border-b-5">
                <a href="#About">About</a>
              </li>
              <li className="cursor-pointer border-b-5">
                <a href="#Contact">Contact</a>
              </li>
              <li className="cursor-pointer border-b-5">
                <a href="#Blog">Blog</a>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Navbar;
