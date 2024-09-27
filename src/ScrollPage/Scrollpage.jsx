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
        y:'-55px'
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
          scrub: 2.5,
          markers: false,
        },
      }
    );

    ScrollTrigger.create({
      start: () => t.scrollTrigger.end,
      end: "center center",
      endTrigger: ".flip-target",
      pin:true,
      pinSpacing: false,
      markers: false,
    });
    const t2 = gsap.fromTo(
      '.scrolBox',
      { 
        y:'600px',
        x:'100px'
      },
      {
        y:"600px",
         x:'100px', 
        transformOrigin:"top top",
        scrollTrigger:{
          trigger:'.hero',
          start:'top top',
          end:"+=500%",
          

        }
      }
    )

    return () => {
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <>
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
        </div>
      </div>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur obcaecati corrupti consequuntur aspernatur architecto veniam ab ratione illo quae fugit odit ullam, doloremque voluptates voluptatibus sapiente, dolor alias minima voluptate non praesentium dolores in aliquid amet necessitatibus! Tempora accusantium fugiat deleniti? Minus dolorem quae non esse, nemo provident, suscipit vero iusto, laborum assumenda soluta perferendis necessitatibus. Nobis eos dignissimos quis reprehenderit qui tenetur recusandae eum exercitationem, velit, ex molestiae illum aliquam quo possimus neque aut est quas dicta necessitatibus fugiat officia facilis! Modi illum eos quibusdam ducimus sed rerum rem laudantium voluptate esse perferendis? Unde amet rerum voluptatem officiis architecto velit illo quia deleniti. Porro numquam, laudantium sequi dolorum autem, vel quia adipisci suscipit quae nulla similique! Molestiae quidem repellat doloremque. Deserunt iure asperiores molestias voluptatem sapiente assumenda quisquam quae quis sequi perspiciatis? Laboriosam modi at nostrum ipsa vero saepe mollitia quas corporis sit porro nobis hic blanditiis laborum asperiores, voluptates praesentium expedita perferendis esse rerum nemo eius. Aspernatur repellendus cum, esse culpa consequatur similique nisi dolorum quisquam! Dicta at atque, totam itaque explicabo nobis laborum unde quas magnam et molestiae minima eum pariatur beatae natus, illo impedit amet ipsam. Illum vero accusamus quidem, rem velit cupiditate repellendus laudantium assumenda, commodi nostrum ullam nemo iusto repellat maiores minima perferendis? Magni, ipsum. Sed saepe alias similique earum tempora culpa ex error facilis ducimus facere veniam, fugiat repellendus ipsam deleniti voluptas eum. Tempora quam amet, fugiat saepe, doloribus inventore natus voluptates deleniti iure eius fuga aliquid, nulla perferendis hic aperiam quos voluptatum reprehenderit non nam. Rem quisquam aut repellendus magni cumque. Natus sunt reiciendis quisquam sint, fugiat maiores ex ipsa tempora facere error nobis rem eveniet aperiam consectetur quaerat, cum sed blanditiis quia accusamus quam odit nihil a exercitationem. Error aliquid voluptates nemo, ipsam aperiam facilis doloremque repellendus nisi quisquam sequi officia. Eum corrupti, similique doloribus unde autem officia, voluptas aliquid facilis deleniti commodi explicabo temporibus reprehenderit sint illum mollitia ullam aliquam repellat velit architecto veritatis vero saepe veniam eos? Illo quas totam velit! Ex magnam veritatis, quasi, aliquid corrupti illum tempore nisi qui, laudantium modi corporis alias dicta! Accusantium distinctio repellat culpa reprehenderit eos iste quasi minus magni nam libero repellendus explicabo, ipsum repudiandae modi. Tempore iure facilis rerum officiis, ab eligendi nam nostrum, aspernatur quos magnam minima praesentium ducimus cum veritatis vitae ratione laudantium molestiae autem impedit blanditiis expedita quibusdam quis doloremque dolorum? Tempore adipisci debitis aliquam alias, libero repellat. Ipsam odit quae autem eligendi. Repudiandae dolore sint veniam voluptate omnis quisquam non mollitia dolorem aspernatur, molestias expedita quod alias fugit obcaecati ipsam facere? Hic repudiandae aspernatur amet dolores officiis eaque ipsum sunt, laborum dolore autem quaerat consequuntur quia, aperiam unde? Accusamus mollitia modi obcaecati enim eius sit error repellendus animi ea repellat, dolorum asperiores beatae consequuntur, neque praesentium omnis exercitationem culpa, odit libero consectetur magni. Labore officia eum nisi incidunt animi voluptate, perferendis est. Ab nam suscipit vero molestias necessitatibus, dolore, minus, obcaecati sit tempora possimus aliquam exercitationem voluptate ex similique delectus neque! Sint optio illo iure ipsum voluptas!
    </>
  );
};

export default Scrollpage;
