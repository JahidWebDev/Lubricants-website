// Home.jsx
// Home.jsx
import { useState, useEffect, useRef } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const socialIcons = [
  { Icon: FaFacebook, color: "text-blue-600", link: "#" },
  { Icon: FaTwitter, color: "text-blue-400", link: "#" },
  { Icon: FaInstagram, color: "text-pink-500", link: "#" },
  { Icon: FaYoutube, color: "text-red-600", link: "#" },
  { Icon: FaLinkedin, color: "text-blue-700", link: "#" },
];
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, Draggable);

// IMAGES
import Logo from "../../Images/Jaguar-logo.png";
import Banner from "../../Images/devon.jpg";
import Bannertwo from "../../Images/1zeetex-main-image-new-file-1.jpg";
import Car from "../../Images/ZT-body.png";
import tire from "../../Images/ZT-tire.png";
import warranty from "../../Images/warranty-icon-1.png";
import dealerbg from "../../Images/dealerbg1_1.jpg";
import dealerImage from "../../Images/Lucid_Realism_highresolution_stock_photo_of_a_diverse_assortme_2-1.jpg";
import sm1 from "../../Images/sm0001a1.jpg";
import sm2 from "../../Images/sm0001a2.jpg";
import sm3 from "../../Images/sm0001a3.jpg";
import sm4 from "../../Images/sm0001a4.jpg";
import sm5 from "../../Images/sm0001a5.jpg";
import sm6 from "../../Images/sm0001a6.jpg";

import menuImg1 from "../../Images/menupcr.jpg";
import menuImg2 from "../../Images/menupcr0.jpg";
import menuImg3 from "../../Images/menupcr2.jpg";
import menuImg4 from "../../Images/menupcr3.jpg";
import menuImg5 from "../../Images/menupcr4.jpg";

import menuImg6 from "../../Images/menupcr5.jpg";
import menuImg7 from "../../Images/menupcr6.jpg";
import menuImg8 from "../../Images/menupcr7.jpg";


import menuImg11 from "../../Images/menupcr10.jpg";

// IMAGES
import eventsMain from "../../Images/menucontactus-1.jpg";
import auto from "../../Images/menucontactus-1.jpg";
import launch from "../../Images/menucontactus-1.jpg";
import drift from "../../Images/menucontactus-1.jpg";

import TyreLeft from "../../Images/catthumb.jpg";
import BatLeft from "../../Images/vat-thumb-lub.jpg";
import LubeLeft from "../../Images/catthumb.jpg";
const dealerCards = [
  {
    img: dealerImage,
    title: "Auto Stop Sole Proprietorship LLC",
    location: "Abu Dhabi",
  },
  {
    img: dealerImage,
    title: "Speedy Tyre Trading",
    location: "Dubai",
  },
  {
    img: dealerImage,
    title: "Desert Wheel Garage",
    location: "Sharjah",
  },
];

const navItems = [
  {
    name: "Our Products",
    path: "/products",
    dropdown: [
      {
        title: "Passenger Tyres",
        image: menuImg1,
        link: "/products/passenger-tyres",
        description: "Reliable petroleum solutions.",
        buttonText: "Explore Passenger Tyres",
      },

      {
        title: "Petroleum Products",
        image: menuImg2,
        link: "/products/petroleum",
        description: "Reliable petroleum solutions.",
        buttonText: "View Petroleum",
      },
      {
        title: "Lubricants",
        image: menuImg3,
        link: "/products/lubricants",
        description: "Premium lubricants for industries.",
      },
      {
        title: "Specialty Gases",
        image: menuImg4,
        link: "/products/gases",
        description: "High purity specialty gases.",
      },
      {
        title: "Agricultural Products",
        image: menuImg5,
        link: "/products/agriculture",
        description: "Solutions for modern agriculture.",
      },
    ],
  },
  {
    name: "AboutUs",
    path: "/aboutus",
    dropdown: [
      {
        title: "About Us",
        image: menuImg6,
        link: "/aboutus/overview",
        description: "Driven by innovation, trusted worldwide. Zeetex delivers tyres, batteries, and lubricants designed for every road, in over 145+ countries.",
        buttonText: "Learn More",
      },
      {
        title: "Stories",
        image: menuImg7,
        link: "/stories/sustainability",
        description: "Discover the latest Zeetex stories innovations, milestones, and events around the world.",
       buttonText: "Explore",
      },
      {
        title: "Find a Dealer",
        image: menuImg8,
        link: "/aboutus/innovation",
        description: "Driving innovation globally.",
         buttonText: "Explore",
      },
      
    ],
  },
  {
    name: "Contact Us",
    path: "/contact",
    dropdown: [
      {
        title: "Contact Us",
        image: menuImg11,
        link: "/contact/sales",
        description: "Reach our sales team.",
        buttonText: "Connect now",
      },
    ],
  },
];


const categories = ["Tyres", "Batteries", "Lubricants"];
const images = {
  Tyres: [TyreLeft, TyreLeft, TyreLeft],
  Batteries: [BatLeft, BatLeft, BatLeft],
  Lubricants: [LubeLeft, LubeLeft, LubeLeft],
};

const imagestwo = [sm1, sm2, sm3, sm4, sm5, sm6];

// Register the plugin
const CARD_WIDTH = 320;

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);

  // ==============================

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const [activeDropdown, setActiveDropdown] = useState(null);

  const activeItem = navItems.find((item) => item.name === activeDropdown);
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Duplicate content for seamless infinite scroll
    slider.innerHTML += slider.innerHTML;
    const totalWidth = CARD_WIDTH * imagestwo.length;

    // Continuous smooth scroll
    gsap.to(slider, {
      scrollLeft: totalWidth,
      duration: imagestwo.length * 3, // 3s per card
      ease: "linear",
      repeat: -1, // infinite loop
      modifiers: {
        scrollLeft: (value) => value % totalWidth, // seamless reset
      },
    });
  }, []);

  // =============================

  const [activeTab, setActiveTab] = useState("Events");

  const cardsRef = useRef(null);
  const scrollAnim = useRef(null);

  useEffect(() => {
    const cards = cardsRef.current;
    if (!cards) return;

    const items = cards.children;
    const cardWidth = items[0].offsetWidth;
    const overlap = 80; // how much next card peeks
    const step = cardWidth - overlap;
    const totalWidth = step * items.length;

    // 🔹 Slow autoplay (left to right)
    scrollAnim.current = gsap.to(cards, {
      x: `-${totalWidth}px`,
      duration: items.length * 10,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
    });

    // 🔹 Fade-in cards
    gsap.set(items, { opacity: 0 });

    gsap.to(items, {
      opacity: 1,
      stagger: 0.2,
      duration: 0.5,
      ease: "power2.out",
    });

    // 🔹 Pause/resume on hover
    const handleMouseEnter = () => scrollAnim.current.pause();
    const handleMouseLeave = () => scrollAnim.current.resume();
    cards.addEventListener("mouseenter", handleMouseEnter);
    cards.addEventListener("mouseleave", handleMouseLeave);

    // 🔹 Draggable with snap
    const draggable = Draggable.create(cards, {
      type: "x",
      edgeResistance: 0.8,
      inertia: true,
      onPress: () => scrollAnim.current.pause(),
      snap: (value) => Math.round(value / step) * step,
    })[0];

    // 🔹 Stop autoplay after 10s but keep draggable
    const timeout = setTimeout(() => {
      scrollAnim.current.pause(); // stop the animation
    }, 10000);

    return () => {
      cards.removeEventListener("mouseenter", handleMouseEnter);
      cards.removeEventListener("mouseleave", handleMouseLeave);
      scrollAnim.current.kill();
      draggable.kill();
      clearTimeout(timeout);
    };
  }, []);

  // =================================================
  const [imgLoaded, setImgLoaded] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    // Trigger text animation slightly after image begins loading
    const timer = setTimeout(() => setTextVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const [active, setActive] = useState("Tyres");

  const [slide, setSlide] = useState(false);

  const wrapperRef = useRef(null);
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  const triggerSlide = (cat) => {
    setSlide(true);
    setTimeout(() => {
      setActive(cat);
      setSlide(false);
    }, 900);
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const sections = containerRef.current;
    const totalWidth = sections.scrollWidth - window.innerWidth;

    // Dynamically set parent height for vertical scroll after horizontal scroll
    sections.parentElement.style.height = `${
      window.innerHeight + totalWidth
    }px`;

    // Horizontal scroll animation
    gsap.to(sections, {
      x: -totalWidth,
      ease: "none",
      scrollTrigger: {
        trigger: sections,
        start: "top top",
        end: () => `+=${totalWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    return () => {
  ScrollTrigger.getAll()
    .filter(t => t.trigger === sections)
    .forEach(t => t.kill());
};

  }, []);
  const tireRef = useRef([]);

  useEffect(() => {
    if (!containerRef.current || !tireRef.current.length) return;

    const wheels = tireRef.current;

    wheels.forEach((wheel) => {
      gsap.to(wheel, {
        rotation: (360 * containerRef.current.scrollWidth) / window.innerWidth, // proportional rotation
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${containerRef.current.scrollWidth}`,
          scrub: true,
        },
      });
    });
  }, []);

  // GSAP Infinite Loop Scroll for Cards
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const items = container.children;
    const totalWidth = Array.from(items).reduce(
      (acc, el) =>
        acc + el.offsetWidth + parseInt(getComputedStyle(el).marginRight),
      0
    );

    // Clone items for infinite loop
    Array.from(items).forEach((el) =>
      container.appendChild(el.cloneNode(true))
    );

    gsap.to(container, {
      x: `-=${totalWidth}px`,
      ease: "none",
      duration: 10,
      repeat: -1,
    });

    const handleWheel = (e) => {
      gsap.to(container, {
        x: `+=${e.deltaY}px`,
        duration: 0.5,
        ease: "power1.out",
      });
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  // =============================================
  const handleMouseMove = (e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    requestAnimationFrame(() => {
      btn.style.transform = `translate(${x * 0.04}px, ${
        y * 0.04
      }px) scale(1.05)`;
    });
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "translate(0px, 0px) scale(1)";
  };

  return (
    <section>
      {/* HERO SECTION */}
      <div className="relative min-h-[954px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat
             sm:bg-top md:bg-center lg:bg-center
             w-full h-[100svh] sm:h-[80svh] lg:h-[954px]
             transition-all duration-500"
          style={{ backgroundImage: `url(${Banner})` }}
        ></div>

        {/* NAVBAR */}

        <nav
          className={`relative z-50 transition-colors duration-300 ${
            activeDropdown || sidebarOpen
              ? "bg-white shadow-md"
              : "bg-black/30 bg-gradient-to-b from-black/40 to-transparent"
          }`}
        >
          <div className="max-w-[1300px] mx-auto px-6 py-4 relative flex items-center justify-between">
            {/* LOGO */}
            <img src={Logo} alt="Logo" className="h-16 w-auto" />

            {/* NAV ITEMS */}
            <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 space-x-7">
              {navItems.map((item) => (
                <div
                  className="relative group"
                  key={item.name}
                  onMouseEnter={() => setActiveDropdown(item.name)} // show immediately
                >
                  <button
                    className={`
      flex items-center space-x-2
      px-3 py-2 rounded-md
      text-[15px] font-medium
      transition-all duration-300
      ${activeDropdown ? "text-black" : "text-white"}
    `}
                  >
                    <span>{item.name}</span>
                    <FaChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${
                        activeDropdown === item.name
                          ? "rotate-180 text-black"
                          : "text-white"
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>

            {/* SOCIAL ICONS */}
            <div>
              <div className="hidden md:flex items-center space-x-5">
                {socialIcons.map(({ Icon, color, link }, idx) => (
                  <a
                    key={idx}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                group p-2 rounded-full transition-all duration-300
                ${
                  activeDropdown
                    ? "bg-black/5 hover:bg-black/10"
                    : "bg-white/10 hover:bg-white/20"
                }
              `}
                  >
                    <Icon
                      size={20}
                      className={`
                  transition-colors duration-300
                  ${activeDropdown ? "text-black" : "text-white"}
                  ${color}
                `}
                    />
                  </a>
                ))}
              </div>

              {/* MOBILE HAMBURGER */}
              <button
                className="lg:hidden text-white text-2xl p-2"
                onClick={() => setSidebarOpen(true)}
              >
                <FaBars />
              </button>
            </div>

            {/* SINGLE FIXED CENTER DROPDOWN */}
            {activeDropdown && activeItem && (
              <div
                className="
              absolute top-full left-1/2 -translate-x-1/2
              w-[145.80%] h-[500px]
              bg-white/95 backdrop-blur-lg
             
           
              z-50 flex overflow-hidden
            "
                onMouseEnter={() => setActiveDropdown(activeDropdown)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {/* LEFT MENU */}
                <div className="group w-[300px] bg-[#ededed] border-r border-gray-200">
                  {activeItem.dropdown.map((sub, index) => (
                    <button
                      key={index}
                      onMouseEnter={() => setHoveredIndex(index)}
                      className={`
      w-full text-left px-6 py-4 pl-10
      font-['Avenir',sans-serif]
      text-[15px] font-bold leading-[22.5px]
      text-[#080808]

      ${
        hoveredIndex === index ||
        (hoveredIndex === null && activeIndex === index)
          ? "bg-white"
          : ""
      }

      hover:text-[rgb(27,66,152)]
      transition-colors duration-200
    `}
                    >
                      {sub.title}
                    </button>
                  ))}
                </div>

                {/* RIGHT IMAGE + TEXT + BUTTON */}
                <div className="flex-1 relative overflow-hidden">
                  {/* Image changes based on hoveredIndex */}
                  <img
                    src={
                      hoveredIndex !== null
                        ? activeItem.dropdown[hoveredIndex].image
                        : activeItem.dropdown[0].image
                    }
                    alt={
                      hoveredIndex !== null
                        ? activeItem.dropdown[hoveredIndex].title
                        : activeItem.dropdown[0].title
                    }
                    className="w-full h-full object-cover transition-all duration-500"
                  />

                  {/* Overlay with text & button */}
                  <div className="absolute inset-0 bg-black/40 flex items-center px-10">
                    <div className="text-white max-w-lg">
                      {/* Description */}
                      <p className="text-sm mb-2 opacity-90">
                        {hoveredIndex !== null
                          ? activeItem.dropdown[hoveredIndex].description
                          : activeItem.dropdown[0].description}
                      </p>

                      {/* Title */}
                      <h2 className="text-3xl  font-bold leading-snug mb-7">
                        {hoveredIndex !== null
                          ? activeItem.dropdown[hoveredIndex].title
                          : activeItem.dropdown[0].title}
                      </h2>

                      {/* Button per item */}
                      <Link
                        to={
                          hoveredIndex !== null
                            ? activeItem.dropdown[hoveredIndex].link
                            : activeItem.dropdown[0].link
                        }
                        className="px-10 py-4  bg-blue-600 hover:bg-blue-700 rounded-full text-sm font-semibold transition"
                      >
                        {hoveredIndex !== null
                          ? activeItem.dropdown[hoveredIndex].buttonText ||
                            "Explore Products"
                          : activeItem.dropdown[0].buttonText ||
                            "Explore Products"}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* MOBILE SIDEBAR */}
            {/* MOBILE SIDEBAR */}
            <div
              className={`fixed top-0 left-0 w-80 h-full shadow-2xl bg-white z-50 transform transition-transform duration-300 ${
                sidebarOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              {/* Sidebar Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-300">
                <img src={Logo} alt="Logo" className="h-12 w-auto" />
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="text-gray-800 text-2xl p-1 transition-transform duration-500 hover:text-gray-600 hover:rotate-[190deg]"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Sidebar Menu */}
              <div className="flex flex-col mt-4">
                {navItems.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col ${
                      sidebarOpen ? `animate-rise-in` : `animate-rise-out`
                    }`}
                    style={{
                      animationDelay: `${idx * 200}ms`, // stagger appearance
                      fontSize: `${16 + idx * 2}px`, // gradually increasing font size
                    }}
                  >
                    <button
                      onClick={() =>
                        openSubmenuIndex === idx
                          ? setOpenSubmenuIndex(null)
                          : setOpenSubmenuIndex(idx)
                      }
                      className="flex items-center justify-between px-6 py-4 font-semibold text-gray-800 hover:bg-gray-100 rounded-md transition"
                    >
                      {item.name}
                      {item.dropdown && item.dropdown.length > 0 && (
                        <FaChevronRight
                          className={`transition-transform duration-300 text-gray-800 ${
                            openSubmenuIndex === idx ? "rotate-90" : ""
                          }`}
                        />
                      )}
                    </button>

                    {/* Nested Submenu */}
                    {item.dropdown && item.dropdown.length > 0 && (
                      <div
                        className={`overflow-hidden transition-max-height duration-300 ${
                          openSubmenuIndex === idx ? "max-h-[500px]" : "max-h-0"
                        }`}
                      >
                        {item.dropdown.map((sub, subIdx) => (
                          <Link
                            key={subIdx}
                            to={sub.link || "#"}
                            className="block pl-12 pr-6 py-3 text-gray-800 text-base hover:bg-gray-100 rounded-md transition"
                            onClick={() => setSidebarOpen(false)}
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile overlay */}
            {sidebarOpen && (
              <div
                className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
                onClick={() => setSidebarOpen(false)}
              />
            )}
          </div>
        </nav>

        {/* HERO CONTENT CENTER */}
        <div
          className="relative z-40 flex items-end justify-center text-center 
                mt-[300px] sm:mt-[400px] md:mt-[500px] lg:mt-[600px] px-4"
        >
          <div>
            <h2 className="text-white text-base sm:text-lg md:text-xl font-semibold drop-shadow-lg">
              Built to Ride. Ready to Roll.
            </h2>
            <button className="mt-4 sm:mt-6 px-6 sm:px-8 py-2 sm:py-3 bg-white text-black rounded-full text-sm sm:text-base font-medium shadow-lg hover:bg-[#0094de] hover:text-white transition">
              Explore
            </button>
          </div>
        </div>
      </div>

      {/* PRODUCT SECTION */}
      <section className="w-full bg-white py-26 select-none sticky top-0">
        <div className="text-center max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1F4AA8]">
            YOUNG, BOLD, AND ALREADY EVERYWHERE.
          </h1>
          <p className="mt-6 mb-4 text-gray-700 text-lg leading-relaxed">
            In just 20 years, Zeetex has expanded to 145+ countries.
          </p>
        </div>

        {/* CATEGORY BUTTONS */}
        <div className="flex justify-center mt-8">
          <div className="flex bg-gray-100 rounded-full px-3 py-2 shadow-sm gap-2 backdrop-blur-xl">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => triggerSlide(item)}
                className={`px-6 py-2 rounded-full font-medium transition-all text-sm ${
                  active === item
                    ? "bg-white shadow-md text-blue-700"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* IMAGE SLIDER */}
        <div
          ref={wrapperRef}
          className="mt-8 w-full overflow-hidden perspective-[2000px]"
        >
          <div
            className={`flex justify-center items-center gap-6 transition-all duration-900 ${
              slide
                ? "translate-x-[120%] opacity-0"
                : "translate-x-0 opacity-100"
            }`}
          >
            <div className="flex-1 max-w-[25%] rounded-2xl overflow-hidden shadow-xl opacity-70 scale-95 -rotate-2 hover:rotate-0 hover:opacity-90 hover:scale-100 cursor-pointer transition-all duration-[900ms]">
              <img
                src={images[active][0]}
                className="w-full h-[300px] object-cover"
              />
            </div>

            <div className="flex-1 max-w-[50%] rounded-3xl overflow-hidden cursor-pointer transition-all duration-900 hover:scale-[1.08] hover:-translate-y-3 hover:shadow-[0_40px_80px_rgba(0,0,0,0.55)]">
              <img
                src={images[active][1]}
                className="w-full h-[420px] object-cover"
              />
            </div>

            <div className="flex-1 max-w-[25%] rounded-2xl overflow-hidden shadow-xl opacity-70 scale-95 rotate-2 hover:rotate-0 hover:opacity-90 hover:scale-100 cursor-pointer transition-all duration-[900ms]">
              <img
                src={images[active][2]}
                className="w-full h-[300px] object-cover"
              />
            </div>
          </div>

          <div className="mt-14 text-center">
            {active === "Tyres" && (
              <>
                <h2 className="text-xl font-semibold text-gray-800">
                  Tyres that own the road.
                </h2>
                <button className="mt-3 text-blue-700 font-semibold hover:underline">
                  Explore Tyres
                </button>
              </>
            )}
            {active === "Batteries" && (
              <>
                <h2 className="text-xl font-semibold text-gray-800">
                  Batteries that keep you moving.
                </h2>
                <button className="mt-3 text-blue-700 font-semibold hover:underline">
                  Explore Batteries
                </button>
              </>
            )}
            {active === "Lubricants" && (
              <>
                <h2 className="text-xl font-semibold text-gray-800">
                  Lubricants that power through.
                </h2>
                <button className="mt-3 text-blue-700 font-semibold hover:underline">
                  Explore Lubricants
                </button>
              </>
            )}
          </div>
        </div>
      </section>

      {/* SECOND HERO */}
      <section className="relative w-full h-screen overflow-hidden select-none">
        <img
          src={Bannertwo}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        <div className="relative z-20 h-full flex items-center pl-80">
          <div className="text-white max-w-xl">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              TYRES THAT <br /> DEFY LIMITS
            </h1>
            <button className="mt-8 px-10 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all">
              Explore
            </button>
          </div>
        </div>

        <div className="absolute right-80 top-1/3 max-w-sm text-white text-opacity-90 leading-relaxed text-md">
          <p>
            Unleash the fury with Zeetex tyres. Engineered for grip, built for
            confidence, ready to turn every road into your arena.
          </p>
        </div>
      </section>
      <section className="relative w-full  h-[500vh]">
        <div className="relative h-screen overflow-hidden">
          <div
            ref={containerRef}
            className="sticky top-0 flex h-screen flex-nowrap"
          >
            {/* PAGE 1 */}
            <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-300 shrink-0">
              <div className="w-full px-20">
                {/* LEFT CONTENT */}
                <div className="lg:pl-20 text-gray-900">
                  <div className="flex mt-30 justify-between">
                    <h1 className="text-3xl md:text-5xl mt-20 font-semibold leading-snug">
                      Tyres designed to own the asphalt.
                    </h1>
                    <img
                      src={warranty}
                      alt="Badge"
                      className="relative right-[50px] top-[30px] w-28 md:w-32"
                    />
                  </div>

                  <h2 className="text-5xl md:text-8xl pt-7 mb-5 font-bold text-blue-700">
                    SU5000 MAX
                  </h2>

                  {/* FEATURES */}
                  <div className="space-y-6 pt-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 border-2 border-orange-500 rounded-full flex items-center justify-center text-2xl">
                        🛞
                      </div>
                      <p className="text-lg font-semibold">
                        MAXIMISED ROAD CONTACT
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 border-2 border-orange-500 rounded-full flex items-center justify-center text-2xl">
                        ⚙️
                      </div>
                      <p className="text-lg font-semibold">
                        ENGINEERED FOR COMFORT
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 border-2 border-orange-500 rounded-full flex items-center justify-center text-2xl">
                        🚀
                      </div>
                      <p className="text-lg font-semibold">
                        SPORTY LOOKS, SERIOUS PERFORMANCE
                      </p>
                    </div>
                  </div>

                  <button className="mt-4 px-10 py-3 bg-blue-700 text-white rounded-full text-lg font-semibold hover:bg-blue-800 transition shadow-lg">
                    Explore
                  </button>
                </div>

                {/* RIGHT SIDE */}
                <div>
                  <div className="relative flex justify-center items-center h-full">
                    <img
                      src={Car}
                      alt="Car Model"
                      className="max-w-[1200px] relative left-30 bottom-40 object-contain drop-shadow-2xl"
                    />

                    {/* TIRES */}
                    <img
                      ref={(el) => el && tireRef.current.push(el)}
                      src={tire}
                      alt="Tire"
                      className="absolute bottom-45 right-10 md:right-67 h-36 w-20 md:h-40 md:w-70 object-contain drop-shadow-xl"
                    />
                    <img
                      ref={(el) => {
  if (el && !tireRef.current.includes(el)) {
    tireRef.current.push(el);
  }
}}

                      src={tire}
                      alt="Tire"
                      className="absolute bottom-45 right-10 md:right-245 h-36 w-20 md:h-40 md:w-70 object-contain drop-shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* PAGE 2 */}
            <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-300 shrink-0">
              <div className="w-full px-20">
                {/* LEFT CONTENT */}
                <div className="lg:pl-20 text-gray-900">
                  <div className="flex mt-30 justify-between">
                    <h1 className="text-3xl md:text-5xl mt-20 font-semibold leading-snug">
                      Tyres designed to own the asphalt.
                    </h1>
                    <img
                      src={warranty}
                      alt="Badge"
                      className="relative right-[50px] top-[30px] w-28 md:w-32"
                    />
                  </div>

                  <h2 className="text-5xl md:text-8xl pt-7 mb-5 font-bold text-blue-700">
                    SU5000 MAX
                  </h2>

                  {/* FEATURES */}
                  <div className="space-y-6 pt-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 border-2 border-orange-500 rounded-full flex items-center justify-center text-2xl">
                        🛞
                      </div>
                      <p className="text-lg font-semibold">
                        MAXIMISED ROAD CONTACT
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 border-2 border-orange-500 rounded-full flex items-center justify-center text-2xl">
                        ⚙️
                      </div>
                      <p className="text-lg font-semibold">
                        ENGINEERED FOR COMFORT
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 border-2 border-orange-500 rounded-full flex items-center justify-center text-2xl">
                        🚀
                      </div>
                      <p className="text-lg font-semibold">
                        SPORTY LOOKS, SERIOUS PERFORMANCE
                      </p>
                    </div>
                  </div>

                  <button className="mt-4 px-10 py-3 bg-blue-700 text-white rounded-full text-lg font-semibold hover:bg-blue-800 transition shadow-lg">
                    Explore
                  </button>
                </div>

                {/* RIGHT SIDE */}
                <div>
                  <div className="relative flex justify-center items-center h-full">
                    <img
                      src={Car}
                      alt="Car Model"
                      className="max-w-[1200px] relative left-30 bottom-40 object-contain drop-shadow-2xl"
                    />

                    {/* TIRES */}
                    <img
                      ref={(el) => el && tireRef.current.push(el)}
                      src={tire}
                      alt="Tire"
                      className="absolute bottom-45 right-10 md:right-67 h-36 w-20 md:h-40 md:w-70 object-contain drop-shadow-xl"
                    />
                    <img
                      ref={(el) => el && tireRef.current.push(el)}
                      src={tire}
                      alt="Tire"
                      className="absolute bottom-45 right-10 md:right-245 h-36 w-20 md:h-40 md:w-70 object-contain drop-shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* PAGE 3 */}
            <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-300 shrink-0">
              <div className="w-full px-20">
                {/* LEFT CONTENT */}
                <div className="lg:pl-20 text-gray-900">
                  <div className="flex mt-30 justify-between">
                    <h1 className="text-3xl md:text-5xl mt-20 font-semibold leading-snug">
                      Tyres designed to own the asphalt.
                    </h1>
                    <img
                      src={warranty}
                      alt="Badge"
                      className="relative right-[50px] top-[30px] w-28 md:w-32"
                    />
                  </div>

                  <h2 className="text-5xl md:text-8xl pt-7 mb-5 font-bold text-blue-700">
                    SU5000 MAX
                  </h2>

                  {/* FEATURES */}
                  <div className="space-y-6 pt-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 border-2 border-orange-500 rounded-full flex items-center justify-center text-2xl">
                        🛞
                      </div>
                      <p className="text-lg font-semibold">
                        MAXIMISED ROAD CONTACT
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 border-2 border-orange-500 rounded-full flex items-center justify-center text-2xl">
                        ⚙️
                      </div>
                      <p className="text-lg font-semibold">
                        ENGINEERED FOR COMFORT
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 border-2 border-orange-500 rounded-full flex items-center justify-center text-2xl">
                        🚀
                      </div>
                      <p className="text-lg font-semibold">
                        SPORTY LOOKS, SERIOUS PERFORMANCE
                      </p>
                    </div>
                  </div>

                  <button className="mt-4 px-10 py-3 bg-blue-700 text-white rounded-full text-lg font-semibold hover:bg-blue-800 transition shadow-lg">
                    Explore
                  </button>
                </div>

                {/* RIGHT SIDE */}
                <div>
                  <div className="relative flex justify-center items-center h-full">
                    <img
                      src={Car}
                      alt="Car Model"
                      className="max-w-[1200px] relative left-30 bottom-40 object-contain drop-shadow-2xl"
                    />

                    {/* TIRES */}
                    <img
                      ref={(el) => el && tireRef.current.push(el)}
                      src={tire}
                      alt="Tire"
                      className="absolute bottom-45 right-10 md:right-67 h-36 w-20 md:h-40 md:w-70 object-contain drop-shadow-xl"
                    />
                    <img
                      ref={(el) => el && tireRef.current.push(el)}
                      src={tire}
                      alt="Tire"
                      className="absolute bottom-45 right-10 md:right-245 h-36 w-20 md:h-40 md:w-70 object-contain drop-shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HORIZONTAL LOOP CARD SECTION */}
      <section className="relative w-full h-screen flex items-start justify-center overflow-hidden">
        {/* Background Image */}
        <img
          src={dealerbg}
          alt="Dealer Background"
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover 
      transition-all duration-[1500ms] ease-out
      ${
        imgLoaded
          ? "opacity-100 scale-100 blur-0"
          : "opacity-0 scale-110 blur-md"
      }
    `}
        />

        {/* Overlay Layer */}

        {/* TEXT AREA – TOP CENTER */}
        <div className="absolute top-24 z-20 text-center px-6 w-full">
          <h1
            className={`
        text-4xl md:text-6xl font-extrabold text-blue-800 drop-shadow-lg
        transition-all duration-[900ms]
        ${
          textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }
      `}
          >
            FIND US ACROSS THE REGION
          </h1>

          <p
            className={`
        mt-4 text-black text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md
        transition-all duration-[900ms] delay-200
        ${
          textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }
      `}
          >
            Wherever the road takes you, there’s a trusted Zeetex dealer nearby.
          </p>
        </div>

        {/* --- BOTTOM LEFT CARD SLIDER --- */}
        <div className=" mt-[500px]   w-[500px]">
          {" "}
          {/* fixed bottom-left */}
          <div
            ref={cardsRef}
            className="flex relative will-change-transform cursor-grab select-none"
            style={{ paddingRight: "100px" }} // first card starts at left
          >
            {dealerCards.map((card, index) => (
              <div
                key={index}
                className="w-[400px] bg-white/90 backdrop-blur-xl rounded-4xl p-6 shadow-2xl border border-white/30 flex-shrink-0 flex flex-col justify-between relative z-[999]"
                style={{ marginLeft: index === 0 ? 0 : `+40px` }} // overlap by 20px
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-50 rounded-xl object-cover"
                />
                <div className="mt-4 flex-1">
                  <h3 className="text-xl font-bold">{card.title}</h3>
                  <p className="text-gray-600">{card.location}</p>
                </div>
                <button className="mt-4 w-[100px] py-2 bg-[#1F4AA8] text-white rounded-full shadow-md">
                  View
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative  bg-[#1b1e1f] text-white py-20">
        <div className="max-w-[1800px] mx-auto px-6">
          {/* TITLE */}
          <h1 className="text-center text-4xl md:text-5xl font-bold">
            WHAT&apos;S HAPPENING AT ZEETEX
          </h1>
          <p className="text-center text-gray-400 mt-4">
            Stay up to speed with everything new, bold, and rolling at Zeetex.
          </p>

          {/* TABS */}
          <div className="flex justify-center mt-16 gap-4 z-10 relative">
            {["Events", "Testimonials", "Blogs"].map((tab) => (
              <button
                key={tab}
                onMouseEnter={() => setActiveTab(tab)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className={`px-12 py-3 rounded-full text-sm font-medium
        cursor-pointer transition-transform duration-300 will-change-transform hover:text-blue-800
        ${
          activeTab === tab
            ? "bg-white text-black shadow-lg"
            : "bg-white/10 text-white hover:bg-white/20"
        }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* CONTENT AREA */}
          <div className="mt-16 max-h-[1000px]">
            {/* EVENTS */}

            {activeTab === "Events" && (
              <div className="grid grid-cols-12 gap-5">
                {/* LEFT BIG FEATURE CARD */}
                <div className="col-span-12 lg:col-span-6 relative rounded-3xl overflow-hidden group h-[600px]">
                  <img
                    src={eventsMain}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-6 left-6 z-10 text-white max-w-xs">
                    <h3 className="text-2xl font-semibold leading-tight">
                      Events & Highlights
                    </h3>
                    <p className="mt-2 text-sm text-gray-200">
                      Latest moments, launches & global presence
                    </p>

                    <button className="mt-4 inline-flex items-center gap-2 px-6 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 transition rounded-full">
                      Explore
                    </button>
                  </div>
                </div>

                {/* RIGHT SIDE GRID */}
                <div className="  col-span-12 lg:col-span-6 grid grid-cols-6 grid-rows-2 gap-4">
                  {/* Card 1 */}
                  <div className="col-span-3 row-span-1 relative rounded-2xl overflow-hidden group h-[280px]">
                    <img
                      src={auto}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <h4 className="absolute bottom-4 left-4 text-sm font-semibold text-white">
                      Zeetex UAE
                    </h4>
                  </div>

                  {/* Card 2 */}
                  <div className="col-span-3 row-span-3 relative rounded-2xl overflow-hidden group h-[600px]">
                    <img
                      src={launch}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <h4 className="absolute bottom-4 left-4 text-sm font-semibold text-white">
                      Zeetex Qatar
                    </h4>
                  </div>

                  {/* Card 3 – Feature Vertical */}
                  <div className="col-span-3 row-span-3 relative rounded-2xl overflow-hidden group h-[300px]">
                    <img
                      src={drift}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <h4 className="absolute bottom-5 left-5 text-base font-semibold text-white">
                      Zeetex Iraq
                    </h4>
                  </div>
                </div>
              </div>
            )}

            {/* TESTIMONIALS */}
            {activeTab === "Testimonials" && (
              <div className="grid grid-cols-12 gap-5">
                {/* LEFT BIG FEATURE CARD */}
                <div className="col-span-12 lg:col-span-6 relative rounded-3xl overflow-hidden group h-[600px]">
                  <img
                    src={eventsMain}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  <div className="absolute bottom-6 left-6 z-10 text-white max-w-xs">
                    <h3 className="text-2xl font-semibold leading-tight">
                      Testimonials
                    </h3>
                    <p className="mt-2 text-sm text-gray-200">
                      What our global partners say about us
                    </p>
                    <button className="mt-4 px-6 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 transition rounded-full">
                      Explore
                    </button>
                  </div>
                </div>

                {/* RIGHT SIDE GRID */}
                <div className="col-span-12 lg:col-span-6 grid grid-cols-6 grid-rows-2 gap-4">
                  {/* Card 1 */}
                  <div className="col-span-3 row-span-1 relative rounded-2xl overflow-hidden group h-[280px]">
                    <img
                      src={auto}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <h4 className="absolute bottom-4 left-4 text-sm font-semibold text-white">
                      Zeetex UAE
                    </h4>
                  </div>

                  {/* Card 2 */}
                  <div className="col-span-3 row-span-1 relative rounded-2xl overflow-hidden group h-[280px]">
                    <img
                      src={launch}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <h4 className="absolute bottom-4 left-4 text-sm font-semibold text-white">
                      Zeetex Qatar
                    </h4>
                  </div>

                  {/* Card 3 – Vertical Feature */}
                  <div className="col-span-3 row-span-2 relative rounded-2xl overflow-hidden group h-[300px] w-[870px]">
                    <img
                      src={drift}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <h4 className="absolute bottom-5 left-5 text-base font-semibold text-white">
                      Zeetex Iraq
                    </h4>
                  </div>
                </div>
              </div>
            )}

            {/* BLOGS  */}
            {activeTab === "Blogs" && (
              <div className="grid grid-cols-12 gap-6">
                {/* LEFT BIG CARD */}
                <div
                  className="col-span-12 md:col-span-6 relative rounded-3xl overflow-hidden group
                    cursor-pointer min-h-[380px] md:min-h-[420px] lg:min-h-[600px]
                    transition-transform duration-300 hover:scale-[1.02] active:scale-[0.97]"
                >
                  <img
                    src={eventsMain}
                    alt="Events"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  <div className="absolute bottom-6 left-6 max-w-sm z-10">
                    <h3 className="text-2xl font-semibold text-white">
                      Events
                    </h3>
                    <p className="mt-2 text-gray-200">
                      See where Zeetex rolls next
                    </p>

                    <button
                      className="mt-4 px-6 py-2 rounded-full text-sm font-medium
                     bg-blue-600 text-white
                     transition-all duration-300
                     hover:bg-blue-700 hover:scale-105
                     active:scale-95"
                    >
                      Explore
                    </button>
                  </div>
                </div>

                {/* RIGHT SIDE - FLEX */}
                <div className="col-span-12 md:col-span-6 flex flex-wrap gap-4">
                  {/* CARD 2 — FULL / WIDE (TOP) */}
                  <div
                    className="relative rounded-3xl overflow-hidden group cursor-pointer
               order-1 w-full
               h-[220px] md:h-[300px]
               transition-transform duration-300 hover:scale-[1.03] active:scale-[0.96]"
                  >
                    <img
                      src={launch}
                      alt="5000 Max Series Launch Lebanon"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <h4 className="absolute bottom-4 left-4 text-sm font-semibold text-white z-10">
                      5000 Max Series Launch Lebanon
                    </h4>
                  </div>

                  {/* CARD 1 — LEFT BOTTOM */}
                  <div
                    className="relative rounded-3xl overflow-hidden group cursor-pointer
               order-2 w-[48%] md:w-[48%]
               h-[200px] md:h-[280px]
               transition-transform duration-300 hover:scale-[1.03] active:scale-[0.96]"
                  >
                    <img
                      src={auto}
                      alt="Automechanica 2024"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <h4 className="absolute bottom-4 left-4 text-sm font-semibold text-white z-10">
                      Automechanica 2024
                    </h4>
                  </div>

                  {/* CARD 3 — RIGHT BOTTOM */}
                  <div
                    className="relative rounded-3xl overflow-hidden group cursor-pointer
               order-3 w-[48%] md:w-[50%]
               h-[200px] md:h-[280px]
               transition-transform duration-300 hover:scale-[1.03] active:scale-[0.96]"
                  >
                    <img
                      src={drift}
                      alt="Zeetex Drift Championship"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <h4 className="absolute bottom-4 left-4 text-sm font-semibold text-white z-10">
                      Zeetex Drift Championship
                    </h4>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* ================================== */}

      <section className="relative py-30 w-full bg-gradient-to-b from-black to-gray-900 py- overflow-hidden">
        {/* Heading */}
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase">
            Join the Ride on Social
          </h2>
          <p className="text-gray-300 mt-4 max-w-xl mx-auto">
            What drives us is what connects us. Stay tuned with Zeetex.
          </p>
        </div>

        {/* Slider */}
        <div ref={sliderRef} className="flex gap-8 px-10 overflow-hidden">
          {[...imagestwo, ...imagestwo].map((img, index) => (
            <div
              key={index}
              className="min-w-[280px] bg-white rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={img}
                alt="Zeetex Social"
                className="w-full h-[320px] object-cover"
              />

              <div className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Zeetex MEA
                  </p>
                  <p className="text-xs text-gray-500">@zeetexmea</p>
                </div>

                <span className="text-pink-600 text-xl">📷</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Home;
