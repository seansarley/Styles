import salon_background from './imgs/salon_background.jpg';

function Services() {
    return (
        <div class = 'stylists' style = {{backgroundImage: `url(${salon_background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh' }}>
            <div class= 'header'>
                <h1>Services</h1>
            </div>
            <div class = 'tables'>
                <div class = 'row1'>
                <table>
                    <h1 class='table-header'>Haircuts</h1>
                    <tr>
                        <th>Service</th>
                        <th>Price ($) </th>
                    </tr>
                    <tr>
                        <td class = 'service'>Men</td>
                        <td class = 'price'>25</td>
                    </tr>
                    <tr>
                        <td class = 'service'>Women</td>
                        <td class = 'price'>35</td>
                    </tr>
                    <tr>
                        <td class = 'service'>Children</td>
                        <td class = 'price'>20</td>
                    </tr>
                </table>
                <table>
                    <h1 class='table-header'>Color</h1>
                    <tr>
                        <th>Service</th>
                        <th>Price ($) </th>
                    </tr>
                    <tr>
                        <td class = 'service'>Retouch</td>
                        <td class = 'price'>55</td>
                    </tr>
                    <tr>
                        <td class = 'service'>Full Color (Short Hair)</td>
                        <td class = 'price'>75</td>
                    </tr>
                    <tr>
                        <td class = 'service'>Full Color (Long Hair)</td>
                        <td class = 'price'>100</td>
                    </tr>
                </table>
                <table>
                    <h1 class='table-header'>Perms</h1>
                    <tr>
                        <th>Service</th>
                        <th>Price ($) </th>
                    </tr>
                    <tr>
                        <td class = 'service'>Regular</td>
                        <td class = 'price'>85</td>
                    </tr>
                    <tr>
                        <td class = 'service'>Long Hair</td>
                        <td class = 'price'>100</td>
                    </tr>
                    <tr>
                        <td class = 'service'>Spiral</td>
                        <td class = 'price'>125</td>
                    </tr>
                </table>
                </div>
                <div class = 'row2'>
                <table>
                    <h1 class='table-header'>Style</h1>
                    <tr>
                        <th>Service</th>
                        <th>Price ($) </th>
                    </tr>
                    <tr>
                        <td class = 'service'>Blowout</td>
                        <td class = 'price'>30</td>
                    </tr>
                    <tr>
                        <td class = 'service'>Flat Iron</td>
                        <td class = 'price'>25</td>
                    </tr>
                    <tr>
                        <td class = 'service'>Shampoo Set</td>
                        <td class = 'price'>25</td>
                    </tr>
                </table>
                <table>
                    <h1 class='table-header'>Wax</h1>
                    <tr>
                        <th>Service</th>
                        <th>Price ($) </th>
                    </tr>
                    <tr>
                        <td class = 'service'>Eyebrow</td>
                        <td class = 'price'>12</td>
                    </tr>
                    <tr>
                        <td class = 'service'>Lip</td>
                        <td class = 'price'>10</td>
                    </tr>
                    <tr>
                        <td class = 'service'>Chin</td>
                        <td class = 'price'>12</td>
                    </tr>
                </table>
                </div>
            </div>
        </div>
    );
}
export default Services;