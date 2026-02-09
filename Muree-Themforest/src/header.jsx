// easy 
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'

function Header() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
    });
  }, []);

  const handleMouseEnter = (e) => {
    const btn = e.currentTarget;
    const fill = btn.querySelector('.fill-layer');
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    fill.style.left = `${x}px`;
    fill.style.top = `${y}px`;
  }

  return (
    <>
      <div className="hero1" style={{ position: 'relative', marginBottom: '30px' }}>
        <img data-aos="fade-left" src="/images/bgmar1.png" className="bg bird" alt="Bird" />
        <img src="/images/bigleafbg.png" className="bg leaf-2" alt="Leaf 2" />
        <img data-aos="fade-down" src="/images/cloudbg.png" className="bg cloud-1" alt="Cloud 1" />
        <img data-aos="fade-right" src="/images/cyclebg.png" className="bg cycle" alt="Cycle" />
        <img data-aos="fade-down" src="/images/greencloudbg.png" className="bg cloud-2" alt="Cloud 2" />
        <img data-aos="fade-left" src="/images/leaf2bg.png" className="bg leaf-3" alt="Leaf 3" />
        <img data-aos="fade-left" src="/images/leaf3bg.png" className="bg leaf-4" alt="Leaf 4" />
        <img data-aos="fade-right" src="/images/leaf4bg.png" className="bg leaf-5" alt="Leaf 5" />
        <img data-aos="fade-left" src="/images/h3leaf.png" className="bg leaf-skin" alt="Leaf Skin" />
        <img src="/images/pinkdotbg.png" className="bg dot" alt="Dot" />
        <img src="/images/pinkdotbg.png" className="bg dot2" alt="Dot 2" />
        <img src="/images/pinkdotbg.png" className="bg dot3" alt="Dot 3" />
        <img src="/images/pinkdotbg.png" className="bg dot4" alt="Dot 4" />
        <img data-aos="fade-down" src="/images/butterflybg.png" className="bg fly" alt="Butterfly" />

        <div className="texth1">
          <h1 className="logotext">
            <img src="/images/logo maree.png" alt="Marée Logo" style={{ maxWidth: '400px', width: '100%' }} />
          </h1>
          <p className="subText">Welcome to Marée, a brand new illustration & design portfolio just waiting for your work to start populating its templates!</p>
          <button className="hero-btn" onMouseEnter={handleMouseEnter}>
            <span className="fill-layer"></span>
            <span className="btn-text">PURCHASE</span>
          </button>
        </div>
      </div>

      <div className="layout">
        <Card style={{ border: 'none', backgroundColor: 'transparent' }}>
          <div className="main-card">
            <img className="card-img" src="/images/image2.jpg" alt="Main Home" />
          </div>
          <Card.Body><Card.Title className="titlee" style={{ textAlign: 'center' }}>Main Home</Card.Title></Card.Body>
        </Card>

        <Card style={{ border: 'none', backgroundColor: 'transparent' }}>
          <div className="main-card">
            <img className="card-img2" src="/images/image1.jpg" alt="Floating Portfolio" />
          </div>
          <Card.Body><Card.Title className="titlee" style={{ textAlign: 'center' }}>Floating Portfolio</Card.Title></Card.Body>
        </Card>

        <Card style={{ border: 'none', backgroundColor: 'transparent' }}>
          <div className="main-card">
            <img className="card-img3" src="/images/image3.jpg" alt="Portfolio Pinterest" />
          </div>
          <Card.Body><Card.Title className="titlee" style={{ textAlign: 'center' }}>Portfolio Pinterest</Card.Title></Card.Body>
        </Card>
      </div>

      <div className="layout">
        <Card style={{ border: 'none', backgroundColor: 'transparent' }}>
          <div className="main-card">
            <img className="card-img4" src="/images/image4.jpg" alt="Animated Slider" />
          </div>
          <Card.Body><Card.Title className="titlee" style={{ textAlign: 'center' }}>Animated Slider</Card.Title></Card.Body>
        </Card>

        <Card style={{ border: 'none', backgroundColor: 'transparent' }}>
          <div className="main-card">
            <img className="card-img5" src="/images/image5.jpg" alt="Portfolio Metro" />
          </div>
          <Card.Body><Card.Title className="titlee" style={{ textAlign: 'center' }}>Portfolio Metro</Card.Title></Card.Body>
        </Card>

        <Card style={{ border: 'none', backgroundColor: 'transparent' }}>
          <div className="main-card">
            <img className="card-img6" src="/images/image6.jpg" alt="Portfolio Gallery" />
          </div>
          <Card.Body><Card.Title className="titlee" style={{ textAlign: 'center' }}>Portfolio Gallery</Card.Title></Card.Body>
        </Card>
      </div>

      <div className="layout3">
        <Card style={{ border: 'none', backgroundColor: 'transparent' }}>
          <div className="main-card">
            <img className="card-img7" src="/images/image7.jpg" alt="Interactive Links" />
          </div>
          <Card.Body><Card.Title className="titlee" style={{ textAlign: 'center' }}>Interactive Links</Card.Title></Card.Body>
        </Card>

        <Card style={{ border: 'none', backgroundColor: 'transparent' }}>
          <div className="main-card">
            <img className="card-img8" src="/images/image8.jpg" alt="Split Slider Showcase" />
          </div>
          <Card.Body><Card.Title className="titlee" style={{ textAlign: 'center' }}>Split Slider Showcase</Card.Title></Card.Body>
        </Card>

        <Card style={{ border: 'none', backgroundColor: 'transparent' }}>
          <div className="main-card">
            <img className="card-img9" src="/images/image9.jpg" alt="Portfolio Carousel" />
          </div>
          <Card.Body><Card.Title className="titlee" style={{ textAlign: 'center' }}>Portfolio Carousel</Card.Title></Card.Body>
        </Card>
      </div>

      <div className="hero3">
        <img data-aos="fade-right" src="/images/h3leafright.png" alt="Leaf Right" className="h3-2" />
        <img data-aos="fade-right" src="/images/h3petal.png" alt="Petal" className="h3-3" />
        <img data-aos="fade-down" src="/images/h3letter.png" alt="Letter" className="h3-4" />
        <img src="/images/h3man.png" alt="Man" className="h3-5" />
        <img data-aos="fade-down" src="/images/h3fly.png" alt="Fly" className="h3-6" />
        <img data-aos="fade-up" src="/images/h3bird.png" alt="Bird" className="h3-7" />
        <img data-aos="fade-up" src="/images/h3leafsmall.png" alt="Small Leaf" className="h3-8" />

        <div className="texth3">
          <p>Your new folio with a professional layout collection and quite a cheerful <span className="pers">personality!</span></p>
        </div>
        <button className="hero3-btn" onMouseEnter={handleMouseEnter}>
          <span className="fill-layer"></span>
          <span className="btn-text">PURCHASE</span>
        </button>
      </div>
    </>
  );
}

export default Header;