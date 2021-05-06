import { ReactComponent as Logo } from './assets/monogram/monogram.svg'
import { ReactComponent as Bag } from './assets/monogram/bag.svg'
import { ReactComponent as Menu } from './assets/monogram/menu.svg'
import { ReactComponent as Instagram } from './assets/monogram/instagram.svg'
import { ReactComponent as Twitter } from './assets/monogram/twitter.svg'
import { ReactComponent as Facebook } from './assets/monogram/facebook.svg'
import { ReactComponent as Youtube } from './assets/monogram/youtube.svg'
import traveler from "./assets/monogram/traveler.jpg"
import modulesHero from "./assets/monogram/modules-hero.jpg"
import moduleImg from "./assets/monogram/module.jpg"

function App() {
  return (
    <>
      <header className="header">
        <nav className="header__navbar">
          <Logo />

          <div className="header__right">
            <Menu className="header__svg" />
            <Bag className="header__svg" />
          </div>
        </nav>
      </header>

      <div className="container">
        <div className="product">
          <img alt="" src={traveler} className="product__img"></img>
          <div className="product__info">
            <span className="product__title">Traveler Console [Pre-Order]</span>
            <span className="product__price">$399.00</span>
          </div>
        </div>
        <div className="product">
          <img alt="" src={traveler} className="product__img"></img>
          <div className="product__info">
            <span className="product__title">Traveler Console [Pre-Order]</span>
            <span className="product__price">$399.00</span>
          </div>
        </div>
        <div className="product">
          <img alt="" src={traveler} className="product__img"></img>
          <div className="product__info">
            <span className="product__title">Traveler Console [Pre-Order]</span>
            <span className="product__price">$399.00</span>
          </div>
        </div>
      </div>
      <div className="hero-container">
        <img alt="" src={modulesHero} className="hero-img"></img>
      </div>
      <div className="container">
        <div className="product">
          <img alt="" src={moduleImg} className="product__img"></img>
          <div className="product__info">
            <span className="product__title">Monogram Module [Pre-Order]</span>
            <span className="product__price">$149.00</span>
          </div>
        </div>
        <div className="product">
          <img alt="" src={moduleImg} className="product__img"></img>
          <div className="product__info">
            <span className="product__title">Monogram Module [Pre-Order]</span>
            <span className="product__price">$149.00</span>
          </div>
        </div>
        <div className="product">
          <img alt="" src={moduleImg} className="product__img"></img>
          <div className="product__info">
            <span className="product__title">Monogram Module [Pre-Order]</span>
            <span className="product__price">$149.00</span>
          </div>
        </div>
        <div className="product">
          <img alt="" src={moduleImg} className="product__img"></img>
          <div className="product__info">
            <span className="product__title">Monogram Module [Pre-Order]</span>
            <span className="product__price">$149.00</span>
          </div>
        </div>
        <div className="product">
          <img alt="" src={moduleImg} className="product__img"></img>
          <div className="product__info">
            <span className="product__title">Monogram Module [Pre-Order]</span>
            <span className="product__price">$149.00</span>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="container">
          <div className="newsletter">
            <span className="newsletter__title">Subscribe to Monogram</span>
            <p className="newsletter__description">Master productivity with Creative Console and get all the latest Monogram news</p>
            <form className="newsletter__form">
              <label for="email-input-field" className="newsletter__label">
                <input className="newsletter__input" type="email" id="email-input-field" placeholder="Email Address"></input>
              </label>
              <div className="newsletter__submit">
                <button type="submit" className="newsletter__button" disabled><span>Submit</span></button>
              </div>
            </form>
          </div>
          <div className="social">
            <a href="#r" className="social__link"><Instagram className="social__svg" /></a>
            <a href="#r" className="social__link"><Twitter className="social__svg" /></a>
            <a href="#r" className="social__link"><Facebook className="social__svg" /></a>
            <a href="#r" className="social__link"><Youtube className="social__svg" /></a>
          </div>
          <div className="sitemap">
            <nav className="sitemap__nav">
              <ul className="sitemap__groups">
                <li className="sitemap__group">
                  <div className="sitemap__group__title">Monogram</div>
                  <address>305 King St. W.<br></br>Suite 502<br></br>Kitchener, ON<br></br>Canada</address>
                </li>
                <li className="sitemap__group">
                  <div className="sitemap__group__title">Quick Links</div>
                  <ul className="sitemap__group__ul">
                    <li className="sitemap__group__li"><a href="#l" className="sitemap__group__a">Home</a></li>
                    <li className="sitemap__group__li"><a href="#l" className="sitemap__group__a">How it Works</a></li>
                    <li className="sitemap__group__li"><a href="#l" className="sitemap__group__a">Shop</a></li>
                    <li className="sitemap__group__li"><a href="#l" className="sitemap__group__a">Download</a></li>
                  </ul>
                </li>
                <li className="sitemap__group">
                  <div className="sitemap__group__title">Help</div>
                  <ul className="sitemap__group__ul">
                    <li className="sitemap__group__li"><a href="#l" className="sitemap__group__a">FAQs</a></li>
                    <li className="sitemap__group__li"><a href="#l" className="sitemap__group__a">Support</a></li>
                    <li className="sitemap__group__li"><a href="#l" className="sitemap__group__a">Shipping and Sales</a></li>
                    <li className="sitemap__group__li"><a href="#l" className="sitemap__group__a">Palette Support</a></li>
                  </ul>
                </li>
                <li className="sitemap__group">
                  <div className="sitemap__group__title">Information</div>
                  <ul className="sitemap__group__ul">
                    <li className="sitemap__group__li"><a href="#l" className="sitemap__group__a">About Us</a></li>
                    <li className="sitemap__group__li"><a href="#l" className="sitemap__group__a">Work with us</a></li>
                    <li className="sitemap__group__li"><a href="#l" className="sitemap__group__a">Privacy Policy</a></li>
                    <li className="sitemap__group__li"><a href="#l" className="sitemap__group__a">Terms of Use</a></li>
                    <li className="sitemap__group__li"><a href="#l" className="sitemap__group__a">Terms of Sale</a></li>
                    <li className="sitemap__group__li"><a href="#l" className="sitemap__group__a">Press Kit</a></li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <p className="copyright">
            <div className="copyright__text">© Monogram 2021</div>
            <div className="copyright__captcha">Protected by reCAPTCHA -</div>
            <a href="#r" className="copyright__link">Privacy</a>
            {" - "}
            <a href="#r" className="copyright__link">Terms</a>
          </p>
        </div>

      </footer>
    </>
  );
}

export default App;
