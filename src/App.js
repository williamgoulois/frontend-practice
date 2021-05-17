import { ReactComponent as NintendoLogo } from './assets/nintendo/nintendo.svg'
import { ReactComponent as LoginLogo } from './assets/nintendo/login.svg'
import { ReactComponent as MenuLogo } from './assets/nintendo/menu.svg'
import { ReactComponent as ArrowRight } from './assets/nintendo/arrow-right.svg'
import { ReactComponent as HeartSpark } from './assets/nintendo/heart-spark.svg'
import { ReactComponent as Calendar } from './assets/nintendo/calendar.svg'
import { ReactComponent as Players } from './assets/nintendo/players.svg'
import { ReactComponent as Dpad } from './assets/nintendo/dpad.svg'
import { ReactComponent as Publisher } from './assets/nintendo/publisher.svg'
import { ReactComponent as Size } from './assets/nintendo/db.svg'
import { ReactComponent as Lang } from './assets/nintendo/lang.svg'
import { ReactComponent as Tv } from './assets/nintendo/tv.svg'
import { ReactComponent as Tabletop } from './assets/nintendo/tabletop.svg'
import { ReactComponent as Handheld } from './assets/nintendo/handheld.svg'
import { ReactComponent as Esrb } from './assets/nintendo/esrb.svg'
import { ReactComponent as Online } from './assets/nintendo/online.svg'
import { ReactComponent as EsrbPrivacy} from './assets/nintendo/esrb-privacy.svg'
import { ReactComponent as Facebook} from './assets/nintendo/facebook.svg'
import { ReactComponent as Instagram} from './assets/nintendo/instagram.svg'
import { ReactComponent as Twitter} from './assets/nintendo/twitter.svg'
import { ReactComponent as Youtube} from './assets/nintendo/youtube.svg'
import hero from './assets/nintendo/hero.jpeg'
import goldCoin from './assets/nintendo/gold-coin.png'
import videoPlaceholder from './assets/nintendo/video-placeholder.jpeg'
import screenshot1 from './assets/nintendo/screenshot01.jpeg'
import screenshot2 from './assets/nintendo/screenshot02.jpeg'
import screenshot3 from './assets/nintendo/screenshot03.jpeg'
import screenshot4 from './assets/nintendo/screenshot04.jpeg'
import zelda from './assets/nintendo/zelda.jpeg'
import superMarioParty from './assets/nintendo/super-mario-party.jpeg'
import superSmashBros from './assets/nintendo/super-smash-bros.jpeg'
import marioKart from './assets/nintendo/mario-kart.jpeg'
import rocketLeague from './assets/nintendo/rocket-league.jpeg'

function App() {
  return (
    <>
      <header className="header">
        <div className="header__nintendo-bg">
          <span>
            <NintendoLogo className="header__nintendo header__svg" />
          </span>
        </div>
        <div className="header__right">
          <span>
            <LoginLogo className="header__login header__svg" />
          </span>
          <span className="header__login-text">Log in</span>
          <span>
            <MenuLogo className="header__menu header__svg" />
          </span>
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
            <span>
              <ArrowRight className="buy-digital__arrow-right" />
            </span>
          </a>
          <div className="buy-points">
            <img src={goldCoin} alt="Gold coin" className="buy-points__coin" />
            <a className="buy-points__text" href="#b" alt="About gold points">Eligible for up to 150 points</a>
          </div>
          <a className="text-arrow buy-points__link" href="#b" alt="Buy physical copy of Minecraft">
            <div className="text-arrow__text">Buy physical</div>
            <span>
              <ArrowRight className="text-arrow__arrow" />
            </span>
          </a>
          <a className="add-wishlist" href="#b" alt="Add Minecraft to wishlist">
            <span>
              <HeartSpark className="add-wishlist__heart" />
            </span>
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

            <div className="specification-table">
              <div className="specification-table__row">
                <span className="specification-table__span"><Calendar className="specification-table__svg" />
                </span>
                <div className="specification-table__text"><span className="specification-table__title small-title">Release Date:</span>June 20, 2018</div>
              </div>
              <div className="specification-table__row">
                <span className="specification-table__span"><Players className="specification-table__svg" />
                </span>
                <div className="specification-table__text"><span className="specification-table__title small-title">Players:</span>up to 8 players</div>
              </div>
              <div className="specification-table__row">
                <span className="specification-table__span"><Dpad className="specification-table__svg" />
                </span>
                <div className="specification-table__text"><span className="specification-table__title small-title">Genre:</span>Adventure, Simulation, Action, Strategy</div>
              </div>
              <div className="specification-table__row">
                <span className="specification-table__span"><Publisher className="specification-table__svg" />
                </span>
                <div className="specification-table__text"><span className="specification-table__title small-title">Publisher:</span>Mojang</div>
              </div>
              <div className="specification-table__row">
                <span className="specification-table__span"><Size className="specification-table__svg" />
                </span>
                <div className="specification-table__text"><span className="specification-table__title small-title">Game file size:</span>1.1 GB</div>
              </div>
              <div className="specification-table__row">
                <span className="specification-table__span"><Lang className="specification-table__svg" />
                </span>
                <div className="specification-table__text"><span className="specification-table__title small-title">Supported Languages:</span>Japanese, English, French, German, Italian, Spanish, Korean, Dutch, Portuguese, Russian, Chinese</div>
              </div>
            </div>
          </div>
          <div className="play-modes">
            <div className="play-modes__title small-title">Supported Play Modes:</div>
            <div className="play-modes__images">
              <div className="play-modes__mode">
                <Tv className="play-modes__svg" />
                TV mode
              </div>
              <div className="play-modes__mode">
                <Tabletop className="play-modes__svg" />
                Tabletop mode
              </div>
              <div className="play-modes__mode">
                <Handheld className="play-modes__svg" />
                Handheld mode
              </div>
            </div>
            <small className="play-modes__disclaimer">Software compatibility and play experience may differ on Nintendo Switch Lite. Additional accessories may be required (sold separately). See <a className="play-modes__support-link" href="#m">support</a> for details.</small>
          </div>
          <div className="rating">
            <div className="rating__title small-title">ESRB Rating:</div>
            <a className="esrb" href="#e" alt="ESRB rating">
              <Esrb className="esrb__svg" />
              <small className="esrb__description">
                Fantasy Violence, Music downloads not rated by the ESRB.
                <hr className="esrb__separation"></hr>
                Users Interact
              </small>
            </a>

          </div>
          <div className="online">
            <Online className="online__svg" />
            <div className="online__description">Play online, access classic Super NES™ games, and more with a Nintendo Switch Online membership.</div>
            <a className="text-arrow online__link" href="#m" alt="Learn more about nintendo online">
              <div className="text-arrow__text">Learn more</div>
              <span>
                <ArrowRight className="text-arrow__arrow" />
              </span>
            </a>
            <div className="small-title">This game supports:</div>
            <div className="online__features">
              <a className="online__button" href="#o" alt="Online play">Online play</a>
              <a className="online__button" href="#o" alt="Save Data Cloud">Save Data Cloud</a>
            </div>
          </div>

          <small className="legal">
            <p>*MSRP: Manufacturer's Suggested Retail Price. Actual price may vary. See retailer for details.</p>

            <p>Nintendo Switch Online membership (sold separately) and Nintendo Account required for online play. Not available in all countries. Internet access required for online features. Terms apply. <a className="legal__link" href="#o">nintendo.com/switch-online</a></p>

            <p>Mojang © 2009-2018. "Minecraft" is a trademark of Mojang Synergies AB.</p>
          </small>

        </div>
      </section>
      <section className="other-games">
          <div className="recommandation">
        <div className="container">
            <div className="recommandation__title title">Customers who viewed this game also viewed</div>
        </div>

            <div className="slider">
              <ul className="game-list">
                <li className="game-card">
                  <a href="#g" alt="Zelda game page"><img src={zelda} className="game-card__img" alt="Zelda game"></img></a>
                  <div className="game-card__date">03/03/17</div>
                  <a className="game-card__title small-title" href="#g" alt="Zelda game page">The Legend of Zelda™: Breath of the Wild</a>
                  <div className="game-card__price small-title">$59.99</div>
                  <div className="game-card__bottom">
                    <div className="text underline">
                      Nintendo Switch
                    </div>
                    <span>
                      <HeartSpark className="game-card__heart" />
                    </span>
                  </div>
                </li>
                <li className="game-card">
                  <a href="#g" alt="Super Mario Party game page"><img src={superMarioParty} className="game-card__img" alt="Zelda game"></img></a>
                  <div className="game-card__date">10/05/18</div>
                  <a className="game-card__title small-title" href="#g" alt="Zelda game page">Super Mario Party™</a>
                  <div className="game-card__price small-title">$59.99</div>
                  <div className="game-card__bottom">
                    <div className="text underline">
                      Nintendo Switch
                    </div>
                    <span>
                      <HeartSpark className="game-card__heart" />
                    </span>
                  </div>
                </li>
                <li className="game-card">
                  <a href="#g" alt="Super Smash Bros Ultimate game page"><img src={superSmashBros} className="game-card__img" alt="Zelda game"></img></a>
                  <div className="game-card__date">07/12/18</div>
                  <a className="game-card__title small-title" href="#g" alt="Super Smash Bros Ultimate game page">Super Smash Bros Ultimate™</a>
                  <div className="game-card__price small-title">$59.99</div>
                  <div className="game-card__bottom">
                    <div className="text underline">
                      Nintendo Switch
                    </div>
                    <span>
                      <HeartSpark className="game-card__heart" />
                    </span>
                  </div>
                </li>
                <li className="game-card">
                  <a href="#g" alt="Mario Kart game page"><img src={marioKart} className="game-card__img" alt="Mario Kart game"></img></a>
                  <div className="game-card__date">04/28/17</div>
                  <a className="game-card__title small-title" href="#g" alt="Zelda game page">Mario Kart™ 8 Deluxe</a>
                  <div className="game-card__price small-title">$59.99</div>
                  <div className="game-card__bottom">
                    <div className="text underline">
                      Nintendo Switch
                    </div>
                    <span>
                      <HeartSpark className="game-card__heart" />
                    </span>
                  </div>
                </li>
                <li className="game-card">
                  <a href="#g" alt="Rocket League game page"><img src={rocketLeague} className="game-card__img" alt="Rocket League game"></img></a>
                  <div className="game-card__date">11/14/17</div>
                  <a className="game-card__title small-title" href="#g" alt="Zelda game page">Rocket League®</a>
                  <div className="game-card__price small-title">$0.00</div>
                  <div className="game-card__bottom">
                    <div className="text underline">
                      Nintendo Switch
                    </div>
                    <span>
                      <HeartSpark className="game-card__heart" />
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="viewed-games">
        <div className="container">
            <div className="viewed-games__title title">Your recently viewed items</div>
        </div>

            <div className="slider">
              <ul className="game-list">
                <li className="game-card">
                  <a href="#g" alt="Super Mario Party game page"><img src={superMarioParty} className="game-card__img" alt="Zelda game"></img></a>
                  <div className="game-card__date">10/05/18</div>
                  <a className="game-card__title small-title" href="#g" alt="Zelda game page">Super Mario Party</a>
                  <div className="game-card__price small-title">$59.99</div>
                  <div className="game-card__bottom">
                    <div className="text underline">
                      Nintendo Switch
                    </div>
                    <span>
                      <HeartSpark className="game-card__heart" />
                    </span>
                  </div>
                </li>
                <li className="game-card">
                  <a href="#g" alt="Minecraft game page"><img src={hero} className="game-card__img" alt="Minecraft game"></img></a>
                  <div className="game-card__date">06/20/18</div>
                  <a className="game-card__title small-title" href="#g" alt="Minecraft game page">Minecraft</a>
                  <div className="game-card__price small-title">$29.99</div>
                  <div className="game-card__bottom">
                    <div className="text underline">
                      Nintendo Switch
                    </div>
                    <span>
                      <HeartSpark className="game-card__heart" />
                    </span>
                  </div>
                </li>
              </ul>
            </div>
        </div>
      </section>
      <footer className="footer">
{/*
<div className="footer-site">
        <nav className="footer__nav">
          <div className="footer__links">
            <div className="dropdown">
              <div className="dropdown__title"></div>
              <svg className="dropdown__svg"></svg>
            </div>
          </div>
        </nav>
        </div>
        */}    <div className="footer-nintendo">
      <div className="footer-nintendo__container">
        <div className="footer-nintendo__social">
          <div className="footer-nintendo__left">
          <div className="footer-nintendo__contact">
            <a className="footer-nintendo__contact-link small-title" href="#c" alt="Contact us link">Contact us</a>
            <a className="footer-nintendo__contact-link small-title" href="#c" alt="Give us a feedback on the website">Website Feedback</a>
              </div>
          <div className="footer-nintendo__social-links">
            <Facebook className="footer-nintendo__svg"/>
            <Instagram className="footer-nintendo__svg"/>
            <Twitter className="footer-nintendo__svg"/>
            <Youtube className="footer-nintendo__svg"/>
            </div>

              </div>
        <EsrbPrivacy className="footer-nintendo__esrb"/>
          </div>
        <small className="footer-nintendo__legal"><p>© 2021 Nintendo. Games are property of their respective owners.</p>
          <p>Nintendo of America Inc. | Headquarters are in Redmond, Washington, USA | Support</p></small>
        </div>
        </div>
      </footer>
      <div className="sticky-footer">
      </div>
    </>
  );
}

export default App;
