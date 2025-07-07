import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Button,
  Form,
  FormControl,
  Offcanvas,
  Collapse,
} from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  FaBars,
  FaSearch,
  FaHeart,
  FaUser,
  FaShoppingCart,
  FaHome,
  FaArrowLeft,
} from "react-icons/fa";
import logofish from "./assets/logofish.png";
import './Navbar.css'

const CustomNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showSidebar, setShowSidebar] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);

  const handleShowSidebar = () => setShowSidebar(true);
  const handleCloseSidebar = () => {
    setShowSidebar(false);
    setExpandedCategory(null);
  };

  const toggleCategory = (category) => {
    setExpandedCategory((prev) => (prev === category ? null : category));
  };

  const slugify = (text) =>
    text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

  const isActive = (path) => location.pathname === path;

  const categories = [
    { name: "Aquarium Tanks", subcategories: ["3ft Bluevin Tank", "Nano Acrylic Tank", "Rimless Cube", "Premium Tank"] },
    { name: "Aqua Plants", subcategories: ["Amazon Sword", "Java Moss", "Anubias Nana", "Dwarf Hairgrass"] },
    { name: "Planted Aquarium Kits", subcategories: ["Nano Planted Kit", "Premium Setup Kit", "Bluevin Complete Kit", "Starter Kit with Soil"] },
    { name: "Aquarium Lighting", subcategories: ["LED Nano Light", "RGB Plant Light", "Clip Spectrum Light", "Slim LED Light"] },
    { name: "Aquarium Decor", subcategories: ["Natural Driftwood", "Ceramic Cave Tunnel", "Pebble Pack", "Resin Castle"] },
    { name: "Live Fish", subcategories: ["Neon Tetra", "Guppy Fish", "Goldfish", "Tetras"] },
    { name: "Fish Foods", subcategories: ["TetraBits Complete", "Hikari Goldfish Food", "Optimum Betta Food", "Taiyo Guppy Mini Bits"] },
    { name: "Water Conditioners & Supplements", subcategories: ["Seachem Prime", "API Stress Coat", "Bio-Bact Bacteria", "Plant Health Supplement"] },
    { name: "Aquarium Filters", subcategories: ["Hang-On Filter", "Internal Power Filter", "Sponge Filter", "Canister Filter"] },
    { name: "Breeding Accessories", subcategories: ["Suction Breeding Box", "Shrimp Net Trap", "Egg Incubator Mesh", "Guppy Breeding Trap"] },
  ];

  return (
    <>
      {/* XXL - Laptop 1440px and above */}
      <>
        <Navbar className="py-2 bg-light-blue shadow-sm d-none d-xxl-flex position-sticky top-0" style={{ zIndex: 999 }}>
          <Container fluid className="ms-5 me-5 justify-content-between">
            <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
              <img src={logofish} alt="Bluevin" style={{ height: "55px", width: "auto" }} />
            </Navbar.Brand>

            <Form className="mx-auto" style={{ width: "600px" }}>
              <div style={{
                display: "flex", border: "1px solid #ccc", borderRadius: "999px",
                overflow: "hidden", height: "45px", backgroundColor: "#f8f9fa"
              }}>
                <FormControl
                  type="search"
                  placeholder="Search a Product"
                  className="border-0 shadow-none"
                  style={{
                    flex: 1, paddingLeft: "20px", fontSize: "1rem",
                    borderRadius: "999px 0 0 999px", backgroundColor: "#f8f9fa"
                  }}
                />
                <div style={{
                  width: "50px", display: "flex", alignItems: "center",
                  justifyContent: "center", borderLeft: "2px solid #cce0ff",
                  backgroundColor: "#f2f2f2"
                }}>
                  <FaSearch color="black" size={20} />
                </div>
              </div>
            </Form>

            <div className="d-flex align-items-center gap-3">
              <Link to="/wishlist" className="text-dark text-decoration-none">
                <FaHeart className="me-1" /> Wishlist
              </Link>
              <Link to="/profile" className="text-dark text-decoration-none">
                <FaUser className="me-1" /> Account
              </Link>
              <Link to="/cart" className="text-dark text-decoration-none">
                <FaShoppingCart />
              </Link>
            </div>
          </Container>
        </Navbar>

        <Navbar bg="dark" variant="dark" className="d-none d-xxl-flex" style={{ height: "60px", position: "relative" }}>
          <Container fluid className="ms-5 me-5 position-relative">
            <div className="d-flex align-items-center" style={{ zIndex: 2 }}>
              <Button variant="primary" className="fw-bold text-white" onClick={handleShowSidebar}>
                <FaBars className="me-2" /> BROWSE ALL CATEGORIES
              </Button>
            </div>
            <div className="position-absolute start-50 top-50 translate-middle">
              <Nav className="fw-semibold d-flex align-items-center justify-content-center">
                <Nav.Link as={Link} to="/" className="text-white top-nav-hover mx-3">Home</Nav.Link>
                <Nav.Link as={Link} to="/shop" className="text-white top-nav-hover mx-3">Shop</Nav.Link>
                <Nav.Link as={Link} to="/track" className="text-white top-nav-hover mx-3">Track Your Order</Nav.Link>
                <Nav.Link as={Link} to="/aboutus" className="text-white top-nav-hover mx-3">About Us</Nav.Link>
              </Nav>
            </div>
          </Container>
        </Navbar>
      </>

      {/* Tablet + 1024px */}
      <Navbar className="py-2 bg-light-blue shadow-sm d-none d-md-flex d-xxl-none position-sticky top-0" style={{ zIndex: 999 }}>
        <Container fluid className="ms-3 me-3">
          <div className="d-flex align-items-center gap-2 me-3">
            <img src={logofish} alt="Bluevin" style={{ height: "40px", width: "auto" }} />
            <Button variant="link" onClick={handleShowSidebar} className="text-dark p-0">
              <FaBars size={22} />
            </Button>
          </div>
          <Button variant="link" onClick={() => navigate("/search")} className="text-dark p-0 ms-auto me-3">
            <FaSearch size={22} />
          </Button>
          <div className="d-flex align-items-center gap-3">
            <Link to="/wishlist" className="text-dark text-decoration-none">
              <FaHeart /> Wishlist
            </Link>
            <Link to="/profile" className="text-dark text-decoration-none">
              <FaUser /> Account
            </Link>
            <Link to="/cart" className="text-dark text-decoration-none">
              <FaShoppingCart />
            </Link>
          </div>
        </Container>
      </Navbar>

      {/* Mobile */}
      <Navbar className="py-2 bg-light-blue shadow-sm d-flex d-md-none position-sticky top-0" style={{ zIndex: 999 }}>
        <Container fluid className="ms-1 me-1">
          <Button variant="link" onClick={handleShowSidebar} className="text-dark p-0">
            <FaBars size={22} />
          </Button>
          <div className="d-flex flex-column align-items-center text-center">
            <img src={logofish} alt="Bluevin" style={{ height: "40px", width: "auto" }} />
          </div>
          <Button variant="link" onClick={() => navigate("/search")} className="text-dark p-0">
            <FaSearch size={22} />
          </Button>
        </Container>
      </Navbar>

      {/* Mobile Bottom Nav */}
      <div className="mobile-bottom-nav d-md-none" style={{ position: "fixed", bottom: 0, left: 0, right: 0, background: "grey", borderTop: "1px solid #ccc", display: "flex", justifyContent: "space-around", padding: "10px 0", zIndex: 1000 }}>
        <Button variant="link" className={`nav-icon ${isActive("/search") ? "text-primary" : "text-dark"}`} onClick={() => navigate("/search")}>
          <FaSearch size={20} />
        </Button>
        <Button variant="link" className={`nav-icon ${isActive("/wishlist") ? "text-primary" : "text-dark"}`} onClick={() => navigate("/wishlist")}>
          <FaHeart size={20} />
        </Button>
        <Button variant="link" className={`nav-icon ${isActive("/cart") ? "text-primary" : "text-dark"}`} onClick={() => navigate("/cart")}>
          <FaShoppingCart size={20} />
        </Button>
        <Button variant="link" className={`nav-icon ${isActive("/profile") ? "text-primary" : "text-dark"}`} onClick={() => navigate("/profile")}>
          <FaUser size={20} />
        </Button>
        <Button variant="link" className={`nav-icon ${isActive("/") ? "text-primary" : "text-dark"}`} onClick={() => navigate("/")}>
          <FaHome size={20} />
        </Button>
      </div>

      {/* Sidebar */}
      <Offcanvas show={showSidebar} onHide={handleCloseSidebar} placement="start">
        <Offcanvas.Header className="border-bottom">
          <Button variant="link" className="text-primary fw-bold fs-5 d-flex align-items-center text-decoration-none" onClick={handleCloseSidebar} style={{ padding: 0 }}>
            <FaArrowLeft className="me-2" size={20} /> BACK
          </Button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column fw-semibold">
            {categories.map((category) => (
              <div key={category.name} className="mb-2">
                <div onClick={() => toggleCategory(category.name)} className="d-flex justify-content-between align-items-center fs-5 text-primary" style={{ cursor: "pointer" }}>
                  {category.name}
                  <span>{expandedCategory === category.name ? "-" : "+"}</span>
                </div>
                <Collapse in={expandedCategory === category.name}>
                  <div className="ps-3">
                    {category.subcategories.map((sub, idx) => (
                      <div key={idx} className="py-1 text-dark small" style={{ cursor: "pointer" }} onClick={() => { navigate(`/category/${slugify(sub)}`); handleCloseSidebar(); }}>
                        {sub}
                      </div>
                    ))}
                  </div>
                </Collapse>
              </div>
            ))}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CustomNavbar;
