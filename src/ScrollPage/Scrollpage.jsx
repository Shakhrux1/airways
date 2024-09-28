import { useEffect } from "react"; 
import ReactGA from "react-ga";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import moduleName from "../icon/videoplayback.mp4";
import "./style.css";

ReactGA.initialize("UA-XXXXXXXXX-X");

const Scrollpage = () => {
  const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  };

    useEffect(() => {
      logPageView();
      gsap.registerPlugin(ScrollTrigger);

      const t = gsap.fromTo(
        ".flip-element",
        {
          scale: 1,
          x: "0px",
          y: '-55px'
        },
        {
          scale: 0.4,
          x: "300px",
          transformOrigin: "center center",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "+=200%",
            pin: true,
            scrub: 1.5,
            markers: false,
          },
        }
      );

      ScrollTrigger.create({
        start: () => t.scrollTrigger.end,
        end: "center center",
        endTrigger: ".flip-target",
        pin: true,
        pinSpacing: false,
        markers: false,
      });

      const t2 = gsap.fromTo(
        '.scrolBox',
        { 
          y: '500px',
          x: '100px'
        },
        {
          y: "500px",
          x: '100px', 
          transformOrigin: "top top",
          scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: "+=500%",
          }
        }
      );
      const t3 = gsap.fromTo(
        '.video-overlay-text',
        {
          
          opacity: 0, 
          x: '-1000%', 
        },
        {
          
          opacity: 1, 
          x: '15%', 
          duration: 100, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".flip-element",
            start: 'top center', 
            end: "+=230%", 
            scrub: 1,
            markers: false, 
          }
        }
      );
      

      return () => {
        // ScrollTriggerlarni o'chirish
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }, []);

  return (
    <>
      <div className="hidden">
        <div className="hero gradient-green">
          <div className="scrolBox">
            <h1>salom xurmatli mijoz</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eius
              aliquam explicabo recusandae praesentium error.
            </p>
          </div>
          <div className="flip-element gradient-blue">
            <video src={moduleName} autoPlay muted loop></video>
            <h1 className="video-overlay-text">Welcome to Shox Airways</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Scrollpage;
