function Navbar () {
    return (
      <>
      <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"></link>
      <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"></link>
      <nav class="sticky top-0 z-50 w-full flex flex-wrap items-center justify-between px-2 py-5 navbar-expand-lg bg-maroon">
        <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start ">
            <a class="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="/">Styles & You Inc.</a>
          </div>
          <div class="lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none hidden bg-blueGray-800" id="example-collapse-navbar">
            <ul class="flex flex-col lg:flex-row list-none mr-auto">
              <li class="flex items-center">
                <a class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="/">
                  About</a>
              </li>
            </ul>
            <ul class="flex flex-col lg:flex-row list-none lg:ml-auto items-center">
              <li class="inline-block relative">
                <a class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="/Stylists">
                  Stylists
                </a>
              </li>
              <li class="inline-block relative">
                <a class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="/Services">
                  Services
                </a>
              </li>
              <li class="flex items-center">
                <a class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="https://www.facebook.com/StylesAndYou/" target="_blank"><i class="lg:text-blueGray-200 text-blueGray-400 fab fa-facebook text-lg leading-lg"></i><span class="lg:hidden inline-block ml-2">Share</span></a>
              </li>
              <li class="flex items-center">
                <a class="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150" href="https://www.google.com/forms/about/" target="_blank">
                  Booking
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </>
    );
    }
    export default Navbar;