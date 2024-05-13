import azizblue from "../assets/azizblue.png";
import Typewriter from "typewriter-effect";

export default function Bannar() {
  return (
    <>
      <section className=" flex justify-between px-10 items-center max-w-screen-xl mx-auto py-20">
        <div>
          <p className="text-[50px]">
            Hi, My name is
            <span className="text-[#3860d8] font-bold">Abdul Aziz</span>{" "}
          </p>
          <div className="text-[50px]">
            <span>i am a </span>{" "}
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Frontend Developer ")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Website Developer ")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Software Developer ")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Shopify App Developer")

                  .start();
              }}
            />
          </div>
          <div className="flex py-3">
            <a
              href="#"
              className="px-6 py-3 border-transparent hover:border-lime-100 border-2 rounded-lg  bg-blue-600  block font-light hover:bg-transparent  hover:boder-1 text-white  "
            >
              Dwonload CV
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center   w-[400px] image-background">
          <img className="w-[350px] " src={azizblue} alt="" />
        </div>
      </section>
    </>
  );
}
