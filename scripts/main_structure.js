class Main_overlay extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="menu_overlay">
            <ul class="nav_items">
                <li class="nav_item"><a href="../pages/about.html">Haqqımızda</a></li>
                <li class="nav_item"><a href="../pages/services.html">Xidmətlər</a></li>
                <li class="nav_item"><a href="../pages/projects.html">Lahiyələr</a></li>
                <li class="nav_item"><a href="#">Enerjilər</a></li>
                <li class="nav_item"><a href="#">Əlaqə</a></li>
            </ul>
        </div>
        <div class="search_overlay">
            <form onsubmit="event.preventDefault();" role="search">
                <label for="search">Search for stuff</label>
                <input type="search" name="search" id="search" placeholder="Axtar...">
                <button type="submit">Get</button>
            </form>
        </div>
        `;
  }
}

customElements.define("main-overlay", Main_overlay);

class Main_header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header>
            <nav class="container_fluid primary_nav_wrapper">
                <div class="container primary_nav">
                    <div class="logo"><a href="../index.html"><img src="../logos/metrix_logo.png" alt=""></a></div>
                    <ul class="nav_items">
                        <li class="nav_item"><a href="../pages/about.html">Haqqımızda</a></li>
                        <li class="nav_item"><a href="../pages/services.html">Xidmətlər</a></li>
                        <li class="nav_item"><a href="../pages/projects.html">Lahiyələr</a></li>
                        <li class="nav_item"><a href="#">Enerjilər</a></li>
                        <li class="nav_item"><a href="#">Əlaqə</a></li>
                    </ul>
                    <button class="search_btn" name="btn_toggle" data-toggle="null"><img src="../logos/search_logo.png"
                            alt=""></button>
                    <div class="hamburger_menu" name="btn_toggle" data-toggle="null">
                        <span class="bar top"></span>
                        <span class="bar middle"></span>
                        <span class="bar bottom"></span>
                    </div>
                </div>
            </nav>

            <!-- Slider main container -->
            <div class="container_fluid swiper banner_slider">
                <!-- Additional required wrapper -->
                <div class="swiper-wrapper">
                    <!-- Slides -->
                    <div class="swiper-slide slide_1">
                        <div class="container_fluid slider_text_wrapper">
                            <div class="container slider_text_area">
                                <div class="slider_text_container">
                                    <div class="slider_caption">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Incidunt, officiis!
                                    </div>
                                    <p class="slider_text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Iure, deleniti unde!
                                        Culpa
                                        expedita
                                        omnis provident illo suscipit maiores, eius explicabo.</p>
                                    <div class="btn"><a href="#">Ətraflı</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide slide_2">
                        <div class="container_fluid slider_text_wrapper">
                            <div class="container slider_text_area">
                                <div class="slider_text_container">
                                    <div class="slider_caption">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Incidunt, officiis!
                                    </div>
                                    <p class="slider_text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Iure, deleniti unde!
                                        Culpa
                                        expedita
                                        omnis provident illo suscipit maiores, eius explicabo.</p>
                                    <div class="btn"><a href="#">Ətraflı</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide slide_3">
                        <div class="container_fluid slider_text_wrapper">
                            <div class="container slider_text_area">
                                <div class="slider_text_container">
                                    <div class="slider_caption">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Incidunt, officiis!
                                    </div>
                                    <p class="slider_text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Iure, deleniti unde!
                                        Culpa
                                        expedita
                                        omnis provident illo suscipit maiores, eius explicabo.</p>
                                    <div class="btn"><a href="#">Ətraflı</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- If we need pagination -->
                <div class="swiper-pagination"></div>

            </div>
        </header>
        `;
  }
}

customElements.define("main-header", Main_header);

class Main_footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
      <div class="container">
          <div class="footer_nav">
              <ul class="footer_links">
                  <li><a href="#">Menyular</a></li>
                  <li><a href="#">Haqqımızda</a></li>
                  <li><a href="#">Missiyamız</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Əlaqə</a></li>
              </ul>
              <ul class="footer_links">
                  <li><a href="#">Enerjilər</a></li>
                  <li><a href="#">Xidmətlər</a></li>
                  <li><a href="#">Layihələr</a></li>
              </ul>
              <ul class="footer_links">
                  <li><a href="#">Faydalı linklər</a></li>
                  <li><a href="#">Şikayət və təkliflər</a></li>
                  <li><a href="#">Şərtlər və qaydalar</a></li>
                  <li><a href="#">FAQ</a></li>
              </ul>
              <ul class="footer_links social">
                  <li><a href="#"><i class="fa-brands fa-square-facebook"></i></a></li>
                  <li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
                  <li><a href="#"><i class="fa-brands fa-square-twitter"></i></a></li>
                  <li><a href="#"><i class="fa-brands fa-square-instagram"></i></a></li>
                  <li><a href="#"><i class="fa-brands fa-square-youtube"></i></a></li>
              </ul>
          </div>
          <div class="footer_text">
              <div class="copyright">© 2023 Bütün hüquqlar qorunur.</div>
              <div class="footer_logo"><img src="images/proton-logo.svg" alt=""></div>
          </div>
      </div>
  </footer>
          `;
  }
}

customElements.define("main-footer", Main_footer);
