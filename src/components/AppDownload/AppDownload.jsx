import React from 'react';
import './AppDownload.css';
import { assets } from '../../assets/frontend_assets/assets';

const AppDownload = () => (
  <section className="app-download" id="app-download">
    <h2 className="app-download-title">
      For a Better Experience,<br />Download the Tomato App
    </h2>
    <div className="app-download-platforms">
      <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
        <img src={assets.play_store} alt="Download on Google Play" />
      </a>
      <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
        <img src={assets.app_store} alt="Download on App Store" />
      </a>
    </div>
  </section>
);

export default AppDownload;
