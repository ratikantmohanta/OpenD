import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import homeImage from "../../assets/home-img.png";
import Gallery from "./Gallery";
import Minter from "./Minter";
import { opend_backend } from "../../../declarations/opend_backend";
import CURRENT_USER_ID from "../index";

function Header() {
  const [userOwnedGallery, setOwnedGallery] = useState();
  const [listingGallery, setListingGallery] = useState();

  async function getNFTs() {
    const userNFTIds = await opend_backend.getOwnedNFTs(CURRENT_USER_ID);
    setOwnedGallery(<Gallery title="My NFTs" ids={userNFTIds} role="collection"/>);

    const listedNFTIds = await opend_backend.getListedNFTs();
    console.log(listedNFTIds);
    setListingGallery(<Gallery title="Discover" ids={listedNFTIds} role="discover"/>);

  };

  useEffect(() => {
    getNFTs();
  }, []);

  return (
    <Router forceRefresh={true}>
      <div className="app-root-1">
        <header className="Paper-root AppBar-root AppBar-positionStatic AppBar-colorPrimary Paper-elevation4">
          <div className="Toolbar-root Toolbar-regular header-appBar-13 Toolbar-gutters">
            <div className="header-left-4"></div>
            <img className="header-logo-11" src={logo} />
            <div className="header-vertical-9"></div>
            <Link to="/">
              <h5 className="Typography-root header-logo-text">OpenD</h5>
            </Link>
            <div className="header-empty-6"></div>
            <div className="header-space-8"></div>
            <button className="ButtonBase-root Button-root Button-text header-navButtons-3">
              <Link to="/discover">
                Discover
              </Link>
            </button>
            <button className="ButtonBase-root Button-root Button-text header-navButtons-3">
              <Link to="/minter">
                Minter
              </Link>
            </button>
            <button className="ButtonBase-root Button-root Button-text header-navButtons-3">
              <Link to="/collection">
                My NFTs
              </Link>
            </button>
          </div>
        </header>
      </div>
      <Routes>
        <Route exact path="/" element={<img className="bottom-space" src={homeImage} />} />

        <Route path="/discover" element={listingGallery} />

        <Route path="/minter" element={<Minter />} />

        <Route path="/collection" element={userOwnedGallery} />

      </Routes>
    </Router >
  );
}

export default Header;
