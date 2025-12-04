import CosmicBackground from "./CosmicBackground";
import CosmicFog from "./CosmicFog";

export default function Footer() {
  return (
    <footer className="footer-container bg-black">
      <CosmicBackground>
        <CosmicFog />

        <div className="footer-line" />

        <div className="footer-inner">
          
          <div className="footer-block footer-logo-block">
            {/* ⭐ LOGO HERE */}
            <img
              src="/logo.png"
              alt="Auric Street Logo"
              className="footer-logo"
            />

            <h3 className="footer-title gold-glow">
              Auric Street - US Futures & Forex Trading Hub
            </h3>

            <p className="footer-text">
              South India’s first premium trading hub teaching US Futures &
              Forex with discipline, structure and a 60-day funded trader
              roadmap.
            </p>
          </div>

          <div className="footer-block">
            <h3 className="footer-subtitle">Contact</h3>
            <p className="footer-text">📞 +91 6282939341</p>
            <p className="footer-text">📧 auricstreet@gmail.com</p>
            <p className="footer-text">
    📍 Square 1 Building, 2nd Floor,<br />
       Opposite UST Technopark Phase II,<br />
       Thiruvananthapuram, Kerala - 695583
  </p>
             <div className="footer-social">
              <h3 className="footer-subtitle">Connect</h3>
  <a href="https://www.instagram.com/auricstreet?igsh=MWo5bjV2cjkzM2NteA==" target="_blank"><i className="fa-brands fa-instagram"></i></a>
  <a href="https://wa.me/+916282939341" target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
  <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
    <a href="https://discord.gg/jDkERK8mY" target="_blank"><i className="fa-brands fa-discord"></i></a>
<a href="#" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
  <a href="https://maps.google.com/?q=location" target="_blank"><i className="fa-solid fa-location-dot"></i></a>
</div>
          </div>

          <div className="footer-block">
           <div className="footer-block">
    <h4 className="footer-subtitle">Quick Links</h4>
    <a href="" className="footer-nav">Home</a>
    <a href="/about" className="footer-nav">About</a>
    <a href="/dashboard" className="footer-nav">Auric Dashboard V1</a>
    <a href="/curriculum" className="footer-nav">Curriculum</a>
    <a href="/contact" className="footer-nav">Contact</a>

  </div>

          </div>
        </div>

        <div className="footer-credit">
          Made with ❤️ by{" "}
          <span className="gold-gradient font-bold">Abiii</span> &{" "}
          <span className="gold-gradient font-bold ml-1">Dohnuss</span>
        </div>
      </CosmicBackground>
    </footer>
  );
}
