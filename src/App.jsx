import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';

const MaréePortfolio = () => {
  const [showElements, setShowElements] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Check for mobile screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animate elements on load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowElements(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Portfolio items with proper images
  const portfolioItems = [
    {
      id: 1,
      title: "Main Home",
      image: "https://images.unsplash.com/photo-1542744173-8e7655c90953?w=800",
      description: "Projects made with love"
    },
    {
      id: 2,
      title: "Portfolio",
      image: "https://images.unsplash.com/photo-1504674900247-08769ae3810d?w=800",
      description: "hello"
    },
    {
      id: 3,
      title: "Portfolio Pinterest",
      image: "https://images.unsplash.com/photo-1551288049-bebda07e12901?w=800",
      description: "Share the experience"
    },
    {
      id: 4,
      title: "Animated Slides",
      image: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?w=800",
      description: "Ziggy"
    },
    {
      id: 5,
      title: "Portfolio Metro",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c4?w=800",
      description: "A"
    },
    {
      id: 6,
      title: "Portfolio Gallery",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800",
      description: "Q"
    },
    {
      id: 7,
      title: "Interactive Links",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
      description: "Love songs"
    },
    {
      id: 8,
      title: "Split Slider Showcase",
      image: "https://images.unsplash.com/photo-1551882608-91343c0b8d57?w=800",
      description: "The first step is to know your goals"
    },
    {
      id: 9,
      title: "Portfolio Carousel",
      image: "https://images.unsplash.com/photo-1551434678-e076c2238b5b?w=800",
      description: "Carve out ideas"
    }
  ];

  return (
    <div className="marée-portfolio">
      {/* Decorative elements - Positioned exactly as in the ThemeForest preview */}
      <div className="decoration top-left">
        <div className="leaf leaf-1"></div>
        <div className="heart"></div>
      </div>
      
      <div className="decoration top-right">
        <div className="leaf leaf-2"></div>
        <div className="leaf leaf-3"></div>
        <div className="bird"></div>
      </div>
      
      <div className="decoration bottom-left">
        <div className="leaf leaf-4"></div>
        <div className="leaf leaf-5"></div>
        <div className="heart heart-2"></div>
      </div>
      
      <div className="decoration bottom-right">
        <div className="leaf leaf-6"></div>
        <div className="leaf leaf-7"></div>
        <div className="heart heart-3"></div>
      </div>

      {/* Header */}
      <header className="marée-header">
        <TransitionGroup>
          <CSSTransition in={showElements} timeout={500} classNames="fade">
            <h1 className="marée-title">Marée</h1>
          </CSSTransition>
        </TransitionGroup>
        <TransitionGroup>
          <CSSTransition in={showElements} timeout={700} classNames="fade">
            <p className="marée-subtitle">Welcome to Marée, a brand new illustration & design portfolio just waiting for your work to start populating its templates!</p>
          </CSSTransition>
        </TransitionGroup>
      </header>

      {/* Portfolio Grid */}
      <Container fluid className="portfolio-grid">
        <Row className="g-4">
          {portfolioItems.map((item, index) => (
            <Col xs={12} sm={6} lg={4} key={item.id}>
              <TransitionGroup>
                <CSSTransition 
                  in={showElements} 
                  timeout={500 + (index * 100)} 
                  classNames="card-transition"
                >
                  <Card 
                    className={`portfolio-card ${activeCard === item.id ? 'active' : ''}`}
                    onMouseEnter={() => setActiveCard(item.id)}
                    onMouseLeave={() => setActiveCard(null)}
                  >
                    <div className="card-image-wrapper">
                      <Card.Img 
                        variant="top" 
                        src={item.image} 
                        alt={item.title}
                        className="portfolio-image"
                      />
                      <div className="card-overlay">
                        <span className="card-title">{item.title}</span>
                      </div>
                    </div>
                    <Card.Body className="card-content">
                      <Card.Title className="card-description">{item.description}</Card.Title>
                    </Card.Body>
                  </Card>
                </CSSTransition>
              </TransitionGroup>
            </Col>
          ))}
        </Row>
      </Container>

      {/* CTA Section */}
      <Container className="cta-section">
        <TransitionGroup>
          <CSSTransition in={showElements} timeout={1000} classNames="fade">
            <div className="cta-content">
              <h2>Your brand new folio with a professional layout collection and quite a cheerful personality!</h2>
              <button className="cta-button">PURCHASE</button>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </Container>

      {/* Bottom decoration - Character illustration */}
      <div className="decoration bottom-center">
        <div className="illustration">
          <div className="character">
            <div className="character-head"></div>
            <div className="character-body"></div>
            <div className="character-guitar"></div>
            <div className="character-bench"></div>
          </div>
          <div className="heart heart-4"></div>
          <div className="leaf leaf-9"></div>
          <div className="leaf leaf-10"></div>
        </div>
      </div>
      
      {/* Additional decorative elements for better animation effect */}
      <div className="floating-elements">
        <div className="floating-leaf leaf-11"></div>
        <div className="floating-leaf leaf-12"></div>
        <div className="floating-leaf leaf-13"></div>
        <div className="floating-leaf leaf-14"></div>
        <div className="floating-leaf leaf-15"></div>
      </div>
    </div>
  );
};

export default MaréePortfolio;