function Navbar () {
    return (
    <div class="container">
    <nav class="nav">
    <div class = "nav-heading">
        <h1 class="nav-heading1">Styles &</h1>
        <h1 class="nav-heading2">You Inc.</h1>
    </div>
    <div class="nav-info">
        <p>659 Wyndamere Road, Lewisberry, PA 17339</p>
        <p>(717) 932-2255</p>
    </div>
      <div class="nav-routes">
        <ul class="nav-links">
          <li class="nav-item">
            <a class="nav-link" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="Stylists">Stylists</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="Services">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="Booking">Booking</a>
          </li>
        </ul>
      </div>
    </nav>
    </div>
    );
    }
    export default Navbar;