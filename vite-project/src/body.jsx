import React from "react";

function Body() {
  return (
    <section className="body-section flex jcSb">
      <div className="header-container">
        <div className="mobile-img-container">
        < img src='image-hero-mobile.png' alt='image-hero-mobile.png' className="mobille-img"/>

        </div>
        <h1>Make remote work</h1>
        <p>
          Get your team in sync, no matter you location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="learn-btn pointer">Learn more</button>
        <div className="flex atc logo-container">
          <img src="client-databiz.png" alt="client-databiz.png" />
          <img src="client-audiophile.png" alt="client-audiophile.png" />
          <img src="client-meet.png" alt="client-meet.png" />
          <img src="client-maker.png" alt="client-maker.png" /> 
        </div>
      </div>
      <div className="img-container">
        <img src="image-hero-desktop.png" className="img" alt="image-hero-desktop.png"/>
      </div>
    </section>
  );
}

export default Body;
