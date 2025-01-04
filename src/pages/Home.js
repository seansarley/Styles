import salon_background from "./imgs/salon_background.jpg";

function Home() {
  return (
    <div class="relative items-center justify-center">
      <div
        class="h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${salon_background})` }}
      ></div>
      <div class="absolute inset-0 z-20 flex items-center justify-center h-screen w-full bg-gray-900 bg-opacity-75"></div>
      <div class="absolute inset-0  z-30  flex flex-col items-center justify-center">
        <div
          class="shadow-2xl rounded-lg w-4/5 h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${salon_background})` }}
        >
          <div class="grid grid-cols-12 gap-1">
            <div class="relative my-6 px-8 col-span-7">
              <div class="border-l-4 border-gray-400 py-20 px-5 mx-2 absolute left-0">
                <p class="italic text-maroon text-6xl uppercase text-center font-semibold ">
                  Styles &
                </p>
                <p class="italic text-maroon text-5xl uppercase text-center font-semibold ">
                  You Inc
                </p>
              </div>
              <div class="relative border-gray-400 border-t-4 bottom-0 py-1 px-4 w-3/5"></div>
            </div>
            <div class="col-span-5 h-96">
              <div class="relative bg-maroon h-full w-full bg-opacity-90 rounded-tr-lg rounded-br-lg">
                <div class="p-8">
                  <p class="text-white text-3xl mb-4">
                    Locally owned small business. Celebrating 30 years of
                    servicing the community. Stop by today via appointment or
                    walk-ins welcome!
                  </p>
                </div>
                <div class="p-8">
                  <p class="text-white text-xl mb-4">(717) 932-2255</p>
                  <p class="text-white text-xl mb-4">
                    659 Wyndamere Rd, Lewisberry, PA{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer class="bottom-0 left-0 z-20 w-full p-4 bg-maroon shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <span class="text-sm text-white sm:text-center dark:text-gray-400">
          © <a>Styles & </a>
          You Inc.
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:text-gray-400 sm:mt-0">
          <li>
            <a class="me-5">(717)932-2255</a>
          </li>
          <li>
            <a class="me-5">659 Wyndamere Rd, Lewisberry, PA</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
export default Home;
