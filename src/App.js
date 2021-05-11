import { ReactComponent as NintendoLogo } from './assets/nintendo/nintendo.svg'
import { ReactComponent as LoginLogo } from './assets/nintendo/login.svg'
import { ReactComponent as MenuLogo } from './assets/nintendo/menu.svg'
import { ReactComponent as ArrowRight } from './assets/nintendo/arrow-right.svg'
import { ReactComponent as HeartSpark } from './assets/nintendo/heart-spark.svg'
import { ReactComponent as Calendar } from './assets/nintendo/calendar2.svg'
import { ReactComponent as Players } from './assets/nintendo/players.svg'
import { ReactComponent as Dpad } from './assets/nintendo/dpad.svg'
import { ReactComponent as Publisher } from './assets/nintendo/publisher.svg'
import { ReactComponent as Size } from './assets/nintendo/db.svg'
import { ReactComponent as Lang } from './assets/nintendo/lang.svg'
import hero from './assets/nintendo/hero.jpeg'
import goldCoin from './assets/nintendo/gold-coin.png'
import videoPlaceholder from './assets/nintendo/video-placeholder.jpeg'
import screenshot1 from './assets/nintendo/screenshot01.jpeg'
import screenshot2 from './assets/nintendo/screenshot02.jpeg'
import screenshot3 from './assets/nintendo/screenshot03.jpeg'
import screenshot4 from './assets/nintendo/screenshot04.jpeg'

function App() {
  return (
    <>
      <header className="header">
        <div className="header__nintendo-bg">
          <NintendoLogo className="header__nintendo header__svg" />
        </div>
        <div className="header__right">
          <LoginLogo className="header__login header__svg" />
          <span className="header__login-text">Log in</span>
          <MenuLogo className="header__menu header__svg" />
        </div>
      </header>
      <div className="hero">
        <img src={hero} alt="Big Minecraft lanscape" className="hero__img"></img>
      </div>
      <section className="buy">
        <div className="container">
          <div className="text underline">
            Nintendo Switch
          </div>
          <div className="title">
            Minecraft
          </div>
          <div className="text">
            Available now
          </div>
          <div className="title">
            $29.99
          </div>
          <a className="buy-digital" href="#b" alt="Buy digital copy of Minecraft">
            <div className="buy-digital__text">Buy digital
            </div>
            <ArrowRight className="buy-digital__arrow-right" />
          </a>
          <div className="buy-points">
            <img src={goldCoin} alt="Gold coin" className="buy-points__coin" />
            <a className="buy-points__text" href="#b" alt="About gold points">Eligible for up to 150 points</a>
          </div>
          <a className="text-arrow" href="#b" alt="Buy physical copy of Minecraft">
            <div className="text-arrow__text">Buy physical</div>
            <ArrowRight className="text-arrow__arrow" />
          </a>
          <a className="add-wishlist" href="#b" alt="Add Minecraft to wishlist">
            <HeartSpark className="add-wishlist__heart" />
            <div className="add-wishlist__text">Add to wishlist</div>
          </a>
        </div>
      </section>
      <section className="carousel">
        <div className="container">
          <div className="carousel-grid"      >
            <img className="carousel-grid__img carousel-grid__video" src={videoPlaceholder} alt="Minecraft video"></img>
            <img className="carousel-grid__img" src={screenshot1} alt="Minecraft screenshot"></img>
            <img className="carousel-grid__img" src={screenshot2} alt="Minecraft screenshot"></img>
            <img className="carousel-grid__img" src={screenshot3} alt="Minecraft screenshot"></img>
            <img className="carousel-grid__img" src={screenshot4} alt="Minecraft screenshot"></img>
          </div>
        </div>
      </section>
      <section className="description">
        <div className="container">
          <div className="presentation">
            <div className="fade"></div>
            <div className="title">Create, explore and survive alone or with friends.</div>
            <div className="presentation__text">
              <p>The new Minecraft is here! Featuring the latest game updates like Update Aquatic, cross-platform play and access to a multitude of content through the Minecraft Marketplace.</p>

              <p>Current owners of <a className="presentation__link" href="#m">Minecraft: Nintendo Switch Edition</a> will be able to upgrade to the new version of Minecraft by downloading it from the eShop for free!</p>

              <p>After June 21st 2018, <a className="presentation__link" href="#m">"Minecraft: Nintendo Switch Edition" (2017)</a> will no longer be available for purchase from the Nintendo eShop. Existing owners can continue to play. *Existing owners will be able to re-download this version if needed.</p>

              <p>Players of <a className="presentation__link" href="#m">"Minecraft: Nintendo Switch Edition" (2017)</a> will be able to convert their worlds to "Minecraft" (2018), but should expect the process to take some time. There is currently no way for Minecraft: Wii U Edition worlds to transfer to "Minecraft" (2018) on Nintendo Switch.</p>

              <p>While The Super Mario Mash-Up Pack is pre-installed with the game, to access the remaining DLC packs included with the base game purchase you must download them from the in-game store.</p>

              {/* TODO: Add Read more */}
              {/* <p>A Microsoft Account is free and by signing in on device allows Minecraft players on Nintendo Switch to play with others on non-Nintendo devices. It also enables the portability of Minecoins and in-game store purchases to other devices.</p>

              <p>You can purchase Minecoins in Nintendo eShop. Minecoins let you buy content in our in-game store, safely and securely. Minecoins are kept in your virtual wallet and can be used in Minecraft on other devices if you have a Microsoft Account.</p>

              <p>Minecraft is a game about placing blocks and going on adventures.</p>

              <p>Explore randomly generated worlds and build amazing things from the simplest of homes to the grandest of castles. Play in creative mode with unlimited resources or mine deep into the world in survival mode, crafting weapons and armor to fend off the dangerous mobs.</p> */}
            </div>

          </div>
          <div className="specification">

          </div>
          <div className="play-modes">

          </div>
          <div className="rating">

          </div>
          <div className="online">

          </div>

          <small className="legal">

          </small>

        </div>
      </section>
      <section className="other-games">
        <div className="container">
          <div className="recommandation">
            <div className="slider">
              <ul className="game-list">
                {/* <li className="game-card"></li> */}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <nav className="footer__nav">
          <div className="footer__links">
            <div className="dropdown">
              <div className="dropdown__title"></div>
              <svg className="dropdown__svg"></svg>
            </div>
          </div>
        </nav>
      </footer>
      <div className="sticky-footer">
      </div>
    </>
  );
}

export default App;
