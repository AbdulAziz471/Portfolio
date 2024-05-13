export default function Header() {
  return (
    <>
      <section className="max-w-screen-xl mx-auto">
        <header className="flex  bg-gray-50 backdrop-blur-[30px]  bg-white/30 shadow  flex-row justify-between   rounded-2xl items-center py-7 px-5 mt-3  ">
          <div>
            <p>AzizTariq</p>
          </div>
          <div className="flex list-none gap-8">
            <li>About US</li>
            <li>Projects </li>
            <li>Contact Us</li>
          </div>
          <div>
            <p>Contact Me</p>
          </div>
        </header>
      </section>
    </>
  );
}
