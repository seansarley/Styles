import salon_background from "./imgs/salon_background.jpg";

function Services() {
  return (
    <div class="relative items-center justify-center">
      <div
        class="h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${salon_background})` }}
      >
        <div class="absolute inset-0 z-20 flex items-center justify-center h-screen w-full bg-gray-900 bg-opacity-75"></div>
        <div class="absolute inset-0  z-30  flex flex-col items-center justify-center">
          <div class="grid grid-cols-1 gap-20">
            <div class="grid grid-cols-3 gap-20">
              <div class="bg-white">
                <div class="overflow-x-auto border-x border-t">
                  <table class="table-auto w-full">
                    <thead class="border-b">
                      <tr class="bg-maroon text-white">
                        <th class="text-left p-4 font-medium">Haircuts</th>
                        <th class="text-left p-4 font-medium">Price ($)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="border-b hover:bg-gray-50">
                        <td class="p-4">Woman's Haircut</td>
                        <td class="p-4">35</td>
                      </tr>
                      <tr class="border-b hover:bg-gray-50">
                        <td class="p-4">Man's Haircut</td>
                        <td class="p-4">25</td>
                      </tr>
                      <tr class="border-b hover:bg-gray-50">
                        <td class="p-4">Children's Haircut</td>
                        <td class="p-4">20</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="bg-white">
                <div class="overflow-x-auto border-x border-t">
                  <table class="table-auto w-full">
                    <thead class="border-b">
                      <tr class="bg-maroon text-white">
                        <th class="text-left p-4 font-medium">Perms</th>
                        <th class="text-left p-4 font-medium">Price ($)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="border-b hover:bg-gray-50">
                        <td class="p-4">Regular</td>
                        <td class="p-4">100</td>
                      </tr>
                      <tr class="border-b hover:bg-gray-50">
                        <td class="p-4">Long Hair</td>
                        <td class="p-4">115</td>
                      </tr>
                      <tr class="border-b hover:bg-gray-50">
                        <td class="p-4">Sprial</td>
                        <td class="p-4">125</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="bg-white">
                <div class="overflow-x-auto border-x border-t">
                  <table class="table-auto w-full">
                    <thead class="border-b">
                      <tr class="bg-maroon text-white">
                        <th class="text-left p-4 font-medium">Perms</th>
                        <th class="text-left p-4 font-medium">Price ($)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="border-b hover:bg-gray-50">
                        <td class="p-4">Regular</td>
                        <td class="p-4">100</td>
                      </tr>
                      <tr class="border-b hover:bg-gray-50">
                        <td class="p-4">Long Hair</td>
                        <td class="p-4">115</td>
                      </tr>
                      <tr class="border-b hover:bg-gray-50">
                        <td class="p-4">Sprial</td>
                        <td class="p-4">125</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-20">
              <div class="bg-white">
                <div class="overflow-x-auto border-x border-t">
                  <table class="table-auto w-full">
                    <thead class="border-b">
                      <tr class="bg-maroon text-white">
                        <th class="text-left p-4 font-medium">Colors</th>
                        <th class="text-left p-4 font-medium">Price ($)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="border-b hover:bg-gray-50">
                        <td class="p-4">Short Hair</td>
                        <td class="p-4">75</td>
                      </tr>
                      <tr class="border-b hover:bg-gray-50">
                        <td class="p-4">Long Hair</td>
                        <td class="p-4">100</td>
                      </tr>
                      <tr class="border-b hover:bg-gray-50">
                        <td class="p-4">Highlight Short Hair</td>
                        <td class="p-4">85</td>
                      </tr>
                      <tr class="border-b hover:bg-gray-50">
                        <td class="p-4">Highlight Long Hair</td>
                        <td class="p-4">125</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="bg-white">
                <div class="overflow-x-auto border-x border-t">
                  <table class="table-auto w-full">
                    <thead class="border-b">
                      <tr class="bg-maroon text-white">
                        <th class="text-left p-4 font-medium">Waxes</th>
                        <th class="text-left p-4 font-medium">Price ($)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="border-b hover:bg-gray-50">
                        <td class="p-4">Lip</td>
                        <td class="p-4">10</td>
                      </tr>
                      <tr class="border-b hover:bg-gray-50">
                        <td class="p-4">Chin</td>
                        <td class="p-4">12</td>
                      </tr>
                      <tr class="border-b hover:bg-gray-50">
                        <td class="p-4">Eyebrow</td>
                        <td class="p-4">12</td>
                      </tr>
                      <tr class="border-b hover:bg-gray-50">
                        <td class="p-4">Full</td>
                        <td class="p-4">25</td>
                      </tr>
                    </tbody>
                  </table>
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
export default Services;
