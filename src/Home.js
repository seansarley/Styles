import salon_inside from './imgs/salon_inside.JPG';
import salon_background from './imgs/salon_background.jpg';

function Home() {
    return (
        <div style = {{backgroundImage: `url(${salon_background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh' }}>
            <div class = 'home'>
                <div class = 'img'>
                    <img src = {salon_inside} alt = 'inside' class ='inside'/>
                </div>
                <div class = 'description'>
                    <p>Locally owned small business run by owner, Karen Sarley.
                    <br/>
                    Celebrating 30 years of bringing you the best service!
                    <br/>
                    Follow us on <a class = 'social' href = 'https://www.facebook.com/StylesAndYou/'><b>Facebook</b></a>!</p>
                </div>
            </div>
        </div>
    );
}
export default Home;