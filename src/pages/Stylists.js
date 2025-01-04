import styles_Karen from "./imgs/styles_Karen.JPG";
import styles_Nancy from "./imgs/styles_Nancy.JPG";
import styles_Stacy from "./imgs/styles_Stacy.JPG";
import styles_Steph from "./imgs/styles_Steph.JPG";
import salon_background from "./imgs/salon_background.jpg";

function Stylists() {
  return (
    <div class="relative items-center justify-center bg-maroon bg-cover">
      <div
        class="h-dvh bg-auto bg-center bg-cover bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${salon_background})` }}
      >
        <div class="absolute inset-0 z-20 flex items-center justify-center h-screen w-full bg-gray-900 bg-opacity-75"></div>
        <div class="absolute inset-0  z-30  flex flex-col items-center justify-center">
          <div class="grid grid-cols-4 gap-10 p-10">
            <div class="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md p-8">
              <div class="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                <img src={styles_Karen} alt="profile-picture" />
              </div>
              <div class="p-6 text-center">
                <h4 class="mb-2 block font-sans text-3xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  Karen Sarley
                </h4>
                <p class="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-lg font-medium leading-relaxed text-transparent antialiased">
                  Owner, 30 Years
                </p>
              </div>
            </div>

            <div class="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md p-8">
              <div class="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                <img src={styles_Stacy} alt="profile-picture" />
              </div>
              <div class="p-6 text-center">
                <h4 class="mb-2 block font-sans text-3xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  Stacy
                </h4>
                <p class="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-lg font-medium leading-relaxed text-transparent antialiased">
                  Stylist, 27 Years
                </p>
              </div>
            </div>

            <div class="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md p-8">
              <div class="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                <img src={styles_Nancy} alt="profile-picture" />
              </div>
              <div class="p-6 text-center">
                <h4 class="mb-2 block font-sans text-3xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  Nancy
                </h4>
                <p class="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-lg font-medium leading-relaxed text-transparent antialiased">
                  Stylist, 12 Years
                </p>
              </div>
            </div>

            <div class="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md p-8">
              <div class="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                <img src={styles_Steph} alt="profile-picture" />
              </div>
              <div class="p-6 text-center">
                <h4 class="mb-2 block font-sans text-3xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  Steph
                </h4>
                <p class="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-lg font-medium leading-relaxed text-transparent antialiased">
                  Stylist, 11 Years
                </p>
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
export default Stylists;
