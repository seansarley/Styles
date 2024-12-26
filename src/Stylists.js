import styles_Karen from './imgs/styles_Karen.JPG';
import styles_Nancy from './imgs/styles_Nancy.JPG';
import styles_Stacy from './imgs/styles_Stacy.JPG';
import styles_Steph from './imgs/styles_Steph.JPG';
import salon_background from './imgs/salon_background.jpg';



function Stylists() {
    return(
        <div class = 'stylists' style = {{backgroundImage: `url(${salon_background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh' }}>
                <div class= 'header'>
                    <h1>Stylists</h1>
                </div>
                <div class = 'card'>
                    <img src={styles_Karen} alt = 'Karen' class = 'stylist_img'/>
                    <div class = 'stylist_name'>
                        <h1>Karen</h1>
                        <h1>Owner, 30 years</h1>
                    </div>
                </div>
                <div class = 'card'>
                    <img src={styles_Nancy} alt = 'Nancy' class = 'stylist_img'/>
                    <div class = 'stylist_name'>
                        <h1>Nancy</h1>
                        <h1>Employee, 12 years</h1>
                    </div>
                </div>
                <div class = 'card'>
                    <img src={styles_Stacy} alt = 'Stacy' class = 'stylist_img'/>
                    <div class = 'stylist_name'>
                        <h1>Stacy</h1>
                        <h1>Employee, 27 years</h1>
                    </div>
                </div>
                <div class = 'card'>
                    <img src={styles_Steph} alt = 'Steph' class = 'stylist_img'/>
                    <div class = 'stylist_name'>
                        <h1>Steph</h1>
                        <h1>Employee, 11 years</h1>
                    </div>
                </div>
        </div>
    );
}
export default Stylists;