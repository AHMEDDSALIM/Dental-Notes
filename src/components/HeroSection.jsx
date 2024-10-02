import { Link } from "react-router-dom";
import HEROIMAGE from "../assets/case-management.png";

export default function HeroSection() {
  return (
    <div
      id="home"
      className="w-10/12 mx-auto lg:grid lg:grid-cols-2 items-center overflow-x-hidden md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5"
      data-aos="fade-right"
      data-aos-duration="800"
    >
      {/* Text Section */}
      <div className="py-14 md:py-0 pr-2 md:mb-14">
        <h1 className="text-3xl font-semibold text-blue-900 lg:text-3xl xl:text-5xl">
          <span className="block w-full">
            Streamline Your Dental Practice with Ease
          </span>
        </h1>
        <p className="py-4 text-lg text-gray-500 md:py-6 2xl:py-8 2xl:pr-5">
          Effortlessly manage patient records and treatment history, all in one
          place. Our cutting-edge system ensures efficiency and security.
        </p>
        <div className="mt-4">
          <Link
            to="/signup"
            className="px-5 py-3 md:px-8 text-lg tracking-wider text-white bg-blue-500 rounded-lg hover:bg-blue-800 transition-all"
          >
            <span>Get Started</span>
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="pb-10 md:pb-0 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
        <img
          id="heroImg1"
          className="lg:w-full sm:w-4/6 sm:mx-auto transition-all duration-300 ease-in-out hover:scale-105 drop-shadow-xl"
          src={HEROIMAGE}
          alt="Dental practice management"
          width="500"
          height="488"
        />
      </div>
    </div>
  );
}