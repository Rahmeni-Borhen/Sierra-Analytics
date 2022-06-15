import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarBrand,
} from "mdb-react-ui-kit";

import { useSelector , useDispatch } from "react-redux";
import { setLogout } from "../redux/features/authSlice";
import image from "../images/logo.png"
import './Header.css'
const Header = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setLogout());
  };
  const {user} = useSelector((state)=> ({...state.auth}));


  return (
    <MDBNavbar fixed="top" expand="lg" style={{ backgroundColor: "#000000" }}>
      <MDBContainer>
        <MDBNavbarBrand
          href="/"
          style={{ color: "#ffffff", fontWeight: "600", fontSize: "22px" }}
        >
          <img className="img-nav" src={image}/>

        </MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          aria-expanded="false"
          aria-label="Toogle navigation"
          onClick={() => setShow(!show)}
          style={{ color: "#ffffff" }}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse show={show} navbar >
            <MDBNavbarNav right fullWidth={false} className="mb-2 nb-1g-0" >
            {user?.result?._id && (
              <h5 className="txt" style={{ marginRight: "30px", marginTop: "27px", color: "#F0F8FF" }}>
                Connecté en tant que: {user?.result?.name}
              </h5>
               )}
                <MDBNavbarItem >
                <MDBNavbarLink href="/">
                    <p className="header-text" >Accueil</p>
                </MDBNavbarLink>
                </MDBNavbarItem>
                {user?.result?._id && (
              <>
                <MDBNavbarItem>
                  <MDBNavbarLink href="/dashboard">
                    <p className="header-text">Tableau de bord</p>
                  </MDBNavbarLink>
                </MDBNavbarItem>
              </>
            )}
            {user?.result?.isAdmin && (
              <>
                <MDBNavbarItem>
                  <MDBNavbarLink href="/Users">
                    <p className="header-text">utilisateurs</p>
                  </MDBNavbarLink>
                </MDBNavbarItem>
              </>
            )}

            {user?.result?._id ? (
              <MDBNavbarItem>
                <MDBNavbarLink href="/login">
                <p className="header-text" onClick={() => handleLogout()}>
                    Déconnecter
                  </p>
                </MDBNavbarLink>
              </MDBNavbarItem>
            ) : (
              <MDBNavbarItem>
                <MDBNavbarLink href="/login">
                  <p className="header-text">Connexion</p>
                </MDBNavbarLink>
              </MDBNavbarItem>
            )}

            </MDBNavbarNav>
        </MDBCollapse>
        </MDBContainer>
        </MDBNavbar>
  );
};

export default Header;