import { useEffect, useRef } from "react";
import { gsap } from 'gsap';

function Loader({onFinished}) {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const content = textRef.current.innerText;
    textRef.current.innerHTML = content
      .split("")
      .map((l, i) => `<span class="letter" style="display: inline-block; opacity: 0;">${l === " " ? "&nbsp;" : l}</span>`)
      .join("");

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 2,
          delay: 3.5,
          onComplete: () => {
            if (onFinished) onFinished();
          }
        });
      }
    });

    tl.fromTo(svgRef.current,
      { scale: 0, rotate: 0 },
      { scale: 1, rotate: 360, duration: 1.2, ease: "back.out(1.7)" }
    )
    .to(svgRef.current, {
      x: 280,
      duration: 0.6,
      ease: "power2.inOut"
    }, "+=0.2")
    .fromTo(".letter",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.5,
        ease: "power2.out"
      },
      "-=0.6");
  }, [onFinished]);

  return (
    <div ref={containerRef} className="loader-container">
      <div className="loader-content">
          <svg
  ref={svgRef}
  className="loader-butterfly"
  viewBox="0 0 100 100"
  xmlns="./images/butterfly.png"
>
 <path className="wing left-wing"
            d="M50 80 Q 10 60 20 20 Q 45 30 50 80 Z"
            fill="#F08080" />
          <path className="wing right-wing"
            d="M50 80 Q 90 60 80 20 Q 55 30 50 80 Z"
            fill="#F08080" />
        </svg>
        <h1 ref={textRef} className="loader-text">Marée</h1>
        
      </div>
    </div>
  );
}

export default Loader;