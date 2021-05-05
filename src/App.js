import vercelLogo from './vercel-logo.png';
import nextLogo from './nextjs-logo.png';
import githubLogo from './github-logo.png';
import "./styles/main.css"

function App() {
  return (
    <>
      <div className="bannerBackground" >
        <div className="vercel-banner">
          <img className="logo" src={vercelLogo} alt="Vercel logo" />
          <p>Deploy <b>Next.js</b> in seconds → </p>
        </div>
      </div>
      <div className="layout-container">
        <nav>
          <header className="next-header">
            <nav>
              <div className="next-header-top">
                <a id="nextlogo" href="#h"><img src={nextLogo} alt="Next.js logo" /></a>
                <a id="learn" href="#r">Learn</a>
              </div>
              <div className="next-header-nav">
                <ul>
                  <li><a href="#l">
                    Showcase</a></li>
                  <li><a href="#l">
                    Docs</a></li>
                  <li><a href="#l">
                    Blog </a></li>
                  <li><a href="#l">
                    Analytics </a></li>
                  <li><a href="#l">
                    Commerce  </a></li>
                  <li><a href="#l">
                    Entreprise  </a></li>
                  <li><img src=" " alt="Github logo" /></li>
                </ul>
              </div>
            </nav>
          </header>
        </nav>
        <div className="introduction">
          <h1>The React Framework for Production</h1>
          <p className="quick-presentation">Next.js gives you the best developer experience with all the features you need for
            production: hybrid static &amp; server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No
            config needed.</p>
          <div className="button-container">
            <div className="start-learning">
              <a id="learn" href="#s">Start Learning</a>
            </div>
            <div className="documentation">
              <a id="documentation" href="#s">Documentation</a>
            </div>
          </div>
          <div className="license-github">
            <a id="license" href="#t">License: MIT</a>
            <a id="github" href="#t">Github</a>
          </div>
        </div>
        <div className="why-nextjs">
          <h2>Why Next.js</h2>
          <h3 className="small-description">The world’s leading companies use and love Next.js</h3>
          <div className="grid-features-cards">
            <div>
              <h3>Image Optimization</h3>
              <p>
                &lt;Image&gt; and Automatic Image Optimization with instant builds.
              </p>
              <a href="#d">Documentation →</a>
            </div>
            <div>
              <h3>Internationalization</h3>
              <p>Built-in Domain &amp; Subdomain Routing and Automatic Language detection.</p>

              <a href="#d">Documentation →</a>
            </div>
            <div>
              <h3>Next.js Analytics</h3>
              <p>A true lighthouse score based on real visitor data &amp; page-by-page insights</p>

              <a href="#d">Documentation →</a>
            </div>
            <div>
              <h3>Zero Config</h3>
              <p>Automatic compilation and bundling. Optimized for production from the start.</p>

              <a href="#d">Documentation →</a>
            </div>
            <div>
              <h3>Hybrid: SSG and SSR</h3>
              <p>Pre-render pages at build time (SSG) or request time (SSR) in a single project.</p>

              <a href="#d">Documentation →</a>
            </div>
            <div>
              <h3>Incremental Static Regeneration</h3>

              <p>Add and update statically pre-rendered pages incrementally after build time.</p>

              <a href="#d">Documentation →</a>
            </div>
            <div>
              <h3>TypeScript Support</h3>
              <p>Automatic TypeScript configuration and compilation.</p>

              <a href="#d">Documentation →</a>
            </div>
            <div>
              <h3>Fast Refresh</h3>
              <p>Fast, reliable live-editing experience, as proven at Facebook scale.</p>

              <a href="#d">Documentation →</a>
            </div>
            <div>
              <h3>File-system Routing</h3>
              <p>Every component in the pages directory becomes a route.</p>

              <a href="#d">Documentation →</a>
            </div>
            <div>
              <h3>API Routes</h3>
              <p>Optionally create API endpoints to provide backend functionality.</p>

              <a href="#d">Documentation →</a>
            </div>
            <div>
              <h3>Built-in CSS Support</h3>
              <p>Create component-level styles with CSS modules. Built-in Sass support.</p>

              <a href="#d">Documentation →</a>
            </div>
            <div>
              <h3>Code-splitting and Bundling</h3>
              <p>Optimized bundle splitting algorithm created by the Google Chrome team.</p>

              <a href="#d">Documentation →</a>
            </div>
            <div>
              <h3>And More.</h3>
              <p>Support for <a href="#m">environment variables</a>, <a href="#m">preview mode</a>, <a href="#m">custom head tags</a>, <a href="#m">automatic polyfills</a>, and more.</p>
            </div>
          </div>
        </div>
        <h2>Who's Using Next.js ?</h2>
        <h3 className="small-description">We’re honored some of the most talented creatives out there build with Next.js</h3>
        <div className="slides-container">
          <div className="fade">
          </div>
          <div className="slides">
            <div className="slide"><img src="https://nextjs.org/_next/image?url=%2Fstatic%2Fimages%2Fshowcase-thumbnails%2Ftiktok.jpg&w=3840&q=75" alt=""></img></div>
            <div className="slide"><img src="https://nextjs.org/_next/image?url=%2Fstatic%2Fimages%2Fshowcase-thumbnails%2Fshowcases-02.jpg&w=1200&q=75" alt=""></img></div>
            <div className="slide"><img src="https://nextjs.org/_next/image?url=%2Fstatic%2Fimages%2Fshowcase-thumbnails%2Ftwitch.jpg&w=1920&q=75" alt=""></img></div>
            <div className="slide"><img src="https://nextjs.org/_next/image?url=%2Fstatic%2Fimages%2Fshowcase-thumbnails%2Fshowcases-17.jpg&w=1080&q=75" alt=""></img></div>
            <div className="slide"><img src="https://nextjs.org/_next/image?url=%2Fstatic%2Fimages%2Fshowcase-thumbnails%2Fnike.jpg&w=828&q=75" alt=""></img></div>
            <div className="slide"><img src="https://nextjs.org/_next/image?url=%2Fstatic%2Fimages%2Fshowcase-thumbnails%2Frealtor.jpg&w=3840&q=75" alt=""></img></div>
            <div className="slide"><img src="https://nextjs.org/_next/image?url=%2Fstatic%2Fimages%2Fshowcase-thumbnails%2Fatt.jpg&w=750&q=75" alt=""></img>          </div>

          </div>
        </div>
        <div className="learn-section">
          <h2>Learn Next.js</h2>
          <h3 className="small-description">Learn Next.js step-by-step and earn points ✨.</h3>
          <div className="img-container">
            <img src="https://nextjs.org/_next/image?url=%2Fstatic%2Fimages%2Flearn.png&w=1920&q=75" alt="">
            </img>
          </div>
          <div className="button-container">
            <div className="start-learning">
              <a id="learn" href="#s">Get Started</a>
            </div>
          </div>

        </div>
        <div className="nl-section">
          <h2>Next.js is getting better every day — don’t miss out on all the action.</h2>
          <h3 className="nl-description">Join the Next.js newsletter and stay updated on new releases and features, guides, and case studies.</h3>
          <form className="email-form">
            <div className="button-container">
              <label for="email-input-field" className="email-input-label">
                <span className="email-icon"><svg width="15" height="15" viewBox="0 0 15 11" aria-label="closed email"><g transform="translate(-598.000000, -418.000000) translate(560.000000, 404.000000) translate(23.000000, 0.000000) translate(15.000000, 13.000000) translate(0.000000, 1.000000)" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0.5" y="0.5" width="14" height="10" rx="2"></rect><path d="M1.175 1.135L7.5 5.5" stroke-linecap="square"></path><path d="M14.04.912L7.5 5.5" stroke-linecap="square"></path></g></svg></span>
                <div className="input-container"><input className="input-email" type="email" id="email-input-field" placeholder="you@domain.com"></input></div>
              </label>
              <div className="start-learning">
                <button type="submit" className=""><span >Subscribe</span></button>
              </div>
            </div>
          </form>
        </div>

      </div>
      <footer className="footer">
        <div className="footer__background">
          <div className="layout-container footer__container">
            <div>
              <nav className="footer__nav">
                <ul className="footer__groups">
                  <li className="footer__group">
                    <h4 className="footer__group__title">General Resources</h4>
                    <ul className="footer__group__ul">
                      <li className="footer__group__li"><a href="#l" className="footer__group__a">Docs</a></li>
                      <li className="footer__group__li"><a href="#l" className="footer__group__a">Docs</a></li>
                      <li className="footer__group__li"><a href="#l" className="footer__group__a">Docs</a></li>
                      <li className="footer__group__li"><a href="#l" className="footer__group__a">Docs</a></li>
                      <li className="footer__group__li"><a href="#l" className="footer__group__a">Docs</a></li>
                      <li className="footer__group__li"><a href="#l" className="footer__group__a">Docs</a></li>
                    </ul>
                  </li>
                  <li className="footer__group">
                    <h4 className="footer__group__title">More</h4>
                    <ul className="footer__group__ul">
                      <li className="footer__group__li"><a href="#l" className="footer__group__a">Docs</a></li>
                      <li className="footer__group__li"><a href="#l" className="footer__group__a">Docs</a></li>
                      <li className="footer__group__li"><a href="#l" className="footer__group__a">Docs</a></li>
                      <li className="footer__group__li"><a href="#l" className="footer__group__a">Docs</a></li>
                      <li className="footer__group__li"><a href="#l" className="footer__group__a">Docs</a></li>
                    </ul>
                  </li>
                  <li className="footer__group">
                    <h4 className="footer__group__title">About Vercel</h4>
                    <ul className="footer__group__ul">
                      <li className="footer__group__li"><a href="#l" className="footer__group__a">Docs</a></li>
                      <li className="footer__group__li"><a href="#l" className="footer__group__a">Docs</a></li>
                      <li className="footer__group__li"><a href="#l" className="footer__group__a">Docs</a></li>
                    </ul>
                  </li>
                  <li className="footer__group">
                    <h4 className="footer__group__title">Legal</h4>
                    <ul className="footer__group__ul">
                      <li className="footer__group__li"><a href="#l" className="footer__group__a">Docs</a></li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="copyright">
              <a href="#l" title="Go to the Vercel website" className="vercel-logo"><svg height="20" viewBox="0 0 283 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z" fill="#000"></path></svg></a>
              <div className="copyright__text">Copyright © 2021 Vercel, Inc. All rights reserved.</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
