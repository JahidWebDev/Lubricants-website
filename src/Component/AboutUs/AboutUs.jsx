import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaChevronDown,
  FaBars,
  FaTimes,
  FaChevronRight,
} from "react-icons/fa";

// Images
import Logo from "../../Images/Jaguar-logo.png";
import Banner from "../../Images/menupcr.jpg";
import bgimg from "../../Images/innov-imggg-1.jpg";
import tire from "../../Images/ZT-tire.png";
import tiretwo from "../../Images/ZT-tiretwo.png";
import indone from "../../Images/Product/indone.jpg";
import zeetex from "../../Images/Product/zeetex-est-img.jpg";
import launch from "../../Images/Product/tyre-launch.jpg";
import outro from "../../Images/Product/outro.jpg";
import idiadalogo from "../../Images/Product/idiada-logo-1.png";
import idiadamap from "../../Images/Product/idiada-map-01.png";
import world from "../../Images/world.jpg";

import menuImg1 from "../../Images/menupcr.jpg";
import menuImg2 from "../../Images/menupcr0.jpg";
import menuImg3 from "../../Images/menupcr2.jpg";
import menuImg4 from "../../Images/menupcr3.jpg";
import menuImg5 from "../../Images/menupcr4.jpg";
import menuImg6 from "../../Images/menupcr5.jpg";
import menuImg7 from "../../Images/menupcr6.jpg";
import menuImg8 from "../../Images/menupcr7.jpg";
import menuImg9 from "../../Images/menupcr8.jpg";
import menuImg10 from "../../Images/menupcr9.jpg";
import menuImg11 from "../../Images/menupcr10.jpg";
import menuImg12 from "../../Images/menupcr11.jpg";
import menuImg13 from "../../Images/menupcr12.jpg";
import menuImg14 from "../../Images/menupcr13.jpg";
import menuImg15 from "../../Images/menupcr14.jpg";

gsap.registerPlugin(ScrollTrigger);

const navItems = [
  {
    name: "Our Products",
    path: "/AboutUs",
    dropdown: [
      {
        title: "Passenger Tyres",
        image: menuImg1,
        link: "/products/petroleum",
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
    name: "Explore",
    path: "/explore",
    dropdown: [
      {
        title: "Company Overview",
        image: menuImg6,
        link: "/explore/overview",
        description: "Know more about our company.",
      },
      {
        title: "Sustainability",
        image: menuImg7,
        link: "/explore/sustainability",
        description: "Our commitment to sustainability.",
      },
      {
        title: "Innovation",
        image: menuImg8,
        link: "/explore/innovation",
        description: "Driving innovation globally.",
      },
      {
        title: "Global Presence",
        image: menuImg9,
        link: "/explore/global",
        description: "Our presence worldwide.",
      },
      {
        title: "Careers",
        image: menuImg10,
        link: "/explore/careers",
        description: "Join our team today.",
      },
    ],
  },
  {
    name: "Contact Us",
    path: "/contact-us",
    dropdown: [
      {
        title: "Sales Inquiry",
        image: menuImg11,
        link: "/contact/sales",
        description: "Reach our sales team.",
      },
      {
        title: "Technical Support",
        image: menuImg12,
        link: "/contact/support",
        description: "24/7 technical support.",
      },
      {
        title: "Distributor Network",
        image: menuImg13,
        link: "/contact/distributor",
        description: "Our global distributors.",
      },
      {
        title: "Media Contact",
        image: menuImg14,
        link: "/contact/media",
        description: "Press & media inquiries.",
      },
      {
        title: "Location Map",
        image: menuImg15,
        link: "/contact/location",
        description: "Find our locations.",
      },
    ],
  },
];




const socialIcons = [
  { Icon: FaFacebook, color: "text-blue-600", link: "#" },
  { Icon: FaTwitter, color: "text-blue-400", link: "#" },
  { Icon: FaInstagram, color: "text-pink-500", link: "#" },
  { Icon: FaYoutube, color: "text-red-600", link: "#" },
  { Icon: FaLinkedin, color: "text-blue-700", link: "#" },
];





const AboutUs = () => {
   
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);

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
  // ========================================================
const [hideNav, setHideNav] = useState(false);


useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY === 0) {
      // ✅ only show at very top
      setHideNav(false);
    } else {
      // ✅ hide everywhere else
      setHideNav(true);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);




 const titleRef = useRef(null);

  useEffect(() => {
    const lines = titleRef.current.querySelectorAll("span");

    gsap.fromTo(
      lines,
      { opacity: 0, y: 50 }, // start 50px below, invisible
      {
        opacity: 1,
        y: 0, // move to normal position
        duration: 1,
        ease: "power2.out",
        stagger: 0.2, // each line comes after 0.2s
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true, // smooth scroll animation
        },
      }
    );
  }, []);
// ======================================


  const containerRef = useRef(null);
  const tireRef = useRef([]);


  // NAV HIDE ON SCROLL
  useEffect(() => {
    const handleScroll = () => setHideNav(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // HERO TEXT ANIMATION
  useEffect(() => {
    if (!titleRef.current) return;
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, scale: 0.97, y: 60, transformOrigin: "50% 100%" },
      { opacity: 1, scale: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.15 }
    );
  }, []);

  // HORIZONTAL SCROLL SECTIONS + TIRES ROTATION
  useEffect(() => {
    const sections = containerRef.current;
    if (!sections || !sections.parentElement) return;

    const totalWidth = sections.scrollWidth - window.innerWidth;
    sections.parentElement.style.height = `${window.innerHeight + totalWidth}px`;

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

    tireRef.current.forEach((wheel) => {
      gsap.to(wheel, {
        rotation: (360 * sections.scrollWidth) / window.innerWidth,
        ease: "none",
        scrollTrigger: {
          trigger: sections,
          start: "top top",
          end: () => `+=${sections.scrollWidth}`,
          scrub: true,
        },
      });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

// =======================================
    const countRefs = useRef([]);

  useEffect(() => {
    countRefs.current.forEach((el) => {
      const end = el.getAttribute("data-end");

      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: end,
          duration: 1.8,
          ease: "power1.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        }
      );
    });
  }, []);


  return (
    <section>
      {/* HERO SECTION */}
      <div className="relative ">
     <div
  className="
    relative w-full h-screen
    bg-cover bg-center bg-no-repeat
    sm:bg-fixed
  "
  style={{ backgroundImage: `url(${Banner})` }}
>
</div>


  <div className="absolute inset-0 bg-black/40" />

        {/* NAVBAR */}

<nav
  className={`
    fixed top-0 left-0 w-full z-50
    transition-transform duration-500 ease-in-out
    ${hideNav ? "-translate-y-full" : "translate-y-0"}
    ${
      activeDropdown || sidebarOpen
        ? "bg-white shadow-md"
        : "bg-black/30 bg-gradient-to-b from-black/40 to-transparent"
    }
  `}
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
<h1
  ref={titleRef}
  className="
    absolute inset-0
    flex flex-col items-center justify-start
    text-center
    px-4
    pt-[400px]
    font-extrabold
    bg-clip-text text-transparent
    pointer-events-none
  "
  style={{
    fontFamily: "'Avenir LT Pro', sans-serif",
    lineHeight: "1.2",
    fontSize: "clamp(22px, 5vw, 80px)",
    backgroundImage: `url(${Banner})`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "150%",
    backgroundPosition: "center",
  }}
>
  <span className="">
    Driving innovation.<br />
    Creating impact.<br />
    Delivering value.
  </span>







</h1>






<section className=" overflow-x-hidden">
  {/* HERO */}
  <div className="relative w-screen h-screen overflow-hidden">
    {/* BACKGROUND */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${Banner})` }}
    />

    {/* OVERLAY */}
    <div className="absolute inset-0 bg-black/40" />

    {/* TEXT */}
     <div
      ref={titleRef}
      className="
        relative z-10
        w-full
        h-full
        flex items-center justify-center
        text-center
        px-4
      "
    >
      <h1
        className="
          font-extrabold
          text-white
        "
        style={{
          fontFamily: "'Avenir LT Pro', sans-serif",
          lineHeight: "1.5",
          fontSize: "clamp(22px, 5vw, 50px)",
        }}
      >
        <span>Zeetex powers global journeys    </span>
        <br />
        <span>with tyres, batteries & lubricants</span>
        <br />
        <span>built for safety, performance & progress</span>
      </h1>
    </div>

  </div>
</section>




      </div>

      {/* ========================== */}
 


<section className="relative w-full">
  <div className="relative h-screen overflow-hidden">
    <div
      ref={containerRef}
      className="sticky top-0 flex h-screen flex-nowrap"
    >
      {/* PAGE 1 */}
      <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-300 shrink-0">
        <div
          className="relative w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${bgimg})` }}
        >
          <div className="absolute inset-0 bg-blue-900/40" />
          <div className="relative z-10 w-full h-full px-10 lg:px-20">
            {/* LEFT BOTTOM */}
            <div className="absolute left-10 lg:left-20 bottom-20 text-white">
              <img src={Logo} alt="Logo" className="w-44 mb-8" />
              <h1 className="text-5xl lg:text-8xl font-bold leading-tight
                             bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700
                             bg-clip-text text-transparent">
                OUR <br />
                JOURNEY OF <br />
                INNOVATION & <br />
                PERFORMANCE
              </h1>
            </div>

            {/* TOP RIGHT TEXT */}
            <div className="absolute top-16 right-10 lg:right-20 max-w-xl">
              <p className="p-6 text-white" style={{ fontFamily: "avenir-lt-pro, sans-serif", fontSize: "18px", fontWeight: 600, lineHeight: "28px" }}>
                Since 2005, Zeetex has been delivering advanced tyres, batteries,
                and lubricants across 146+ countries. With a focus on safety,
                performance, and cutting-edge technology, we aim to create
                meaningful impact for customers and society worldwide.
              </p>
            </div>

            {/* BOTTOM RIGHT TYRE */}
            <img
              ref={(el) => {
                if (el && !tireRef.current.includes(el)) {
                  tireRef.current.push(el);
                }
              }}
              src={tire}
              alt="Tire"
              className="absolute bottom-14 right-32 w-80 drop-shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* PAGE 2 */}
      <div className="w-screen h-screen flex shrink-0">
        {/* LEFT SIDE */}
        <div className="w-1/2 flex flex-col justify-between bg-white px-8 lg:px-20 pb-16">
          <img
            src={zeetex}
            alt="Zeetex Car"
            className="w-full max-w-[760px] h-[440px] object-cover ml-auto mr-[-60px]"
          />
          <div className="mt-20">
            <h1 style={{ fontFamily: "'avenir-lt-pro', sans-serif", fontSize: "100px", fontWeight: 600, lineHeight: "100px", color: "rgb(202, 219, 255)" }}>2004</h1>
            <h2 style={{ fontFamily: "'Avenir', sans-serif", fontSize: "40px", fontWeight: 900, lineHeight: "40px", color: "rgb(27, 66, 152)" }}>ZEETEX WAS ESTABLISHED</h2>
            <p className="max-w-md" style={{ fontFamily: "'avenir-lt-pro', sans-serif", fontSize: "18px", fontWeight: 600, lineHeight: "28px", color: "rgb(35, 31, 32)" }}>
              Zeetex was established and introduced its first summer tyres,
              beginning a global journey.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-1/2 relative h-full overflow-hidden">
          <img src={indone} alt="Manufacturing" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute bottom-16 left-0 px-12 text-white">
            <h1 style={{ fontFamily: "'avenir-lt-pro', sans-serif", fontSize: "100px", fontWeight: 600, lineHeight: "100px", WebkitTextFillColor: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.6)" }}>2014</h1>
            <h2 className="mb-4" style={{ fontFamily: "'Avenir', sans-serif", fontSize: "40px", fontWeight: 900, lineHeight: "40px", color: "rgb(255, 255, 255)" }}>MANUFACTURING IN INDONESIA</h2>
            <p className="max-w-md whitespace-nowrap" style={{ fontFamily: "'avenir-lt-pro', sans-serif", fontSize: "18px", fontWeight: 600, lineHeight: "28px", color: "rgb(255, 255, 255)" }}>
              Zeetex extends manufacturing to Indonesia to keep up with the global demand.
            </p>
          </div>
        </div>
      </div>

      {/* PAGE 3 */}
<div className="w-screen h-[800px] shrink-0 bg-white relative px-8 lg:px-20 py-16">
  {/* LEFT CONTENT */}
  <div className="max-w-[1800px]">
    {/* IMAGE */}
    <div className="w-full h-[440px] overflow-hidden">
      <img
        src={launch}
        alt="Zeetex Car"
        className="w-full h-full object-cover"
      />
    </div>

    {/* TEXT CONTENT */}
    <div className="mt-20">
      <h1
        style={{
          fontFamily: "'avenir-lt-pro', sans-serif",
          fontSize: "100px",
          fontWeight: 600,
          lineHeight: "100px",
          color: "rgb(202, 219, 255)",
        }}
      >
        2022
      </h1>
      <h2
        style={{
          fontFamily: "'Avenir', sans-serif",
          fontSize: "40px",
          fontWeight: 900,
          lineHeight: "40px",
          color: "rgb(27, 66, 152)",
        }}
      >
        MAX PRODUCT LAUNCH
      </h2>
      <p
        className="whitespace-nowrap overflow-hidden"
        style={{
          fontFamily: "'avenir-lt-pro', sans-serif",
          fontSize: "18px",
          fontWeight: 600,
          lineHeight: "55px",
          color: "rgb(35, 31, 32)",
        }}
      >
        Zeetex launches the Max Range, proudly manufactured in Thailand for global markets.
      </p>
    </div>
  </div>
</div>



      {/* PAGE 4 */}
      <div className="w-screen h-screen relative shrink-0 overflow-hidden">
        <img src={outro} alt="Driving Forward" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 w-full h-full flex justify-between">
          <div className="flex items-end px-12 pb-16">
            <h1 className="uppercase" style={{ fontFamily: "'avenir-lt-pro', sans-serif", fontSize: "64px", fontWeight: 800, lineHeight: "72px", color: "rgba(255,255,255,0.9)" }}>
              DRIVING FORWARD.<br />TOGETHER.
            </h1>
          </div>
          <div className="flex items-start px-12 pt-16 max-w-xl text-right">
            <p style={{ fontFamily: "'avenir-lt-pro', sans-serif", fontSize: "18px", fontWeight: 500, lineHeight: "28px", color: "#ffffff" }}>
              At Zeetex, every mile is a promise of progress, and every innovation drives us closer to a smarter, safer future.<br /><br />
              Join us as we continue shaping the road ahead - one revolution at a time.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>



 <section className="relative bg-gradient-to-b from-[#061a3a] via-[#06142e] to-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Center Text */}
        <div className="text-center  max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-wide">
            TESTED &amp; TRUSTED
          </h2> 
          <p className="mt-6 font-avenir text-[18px] font-semibold leading-[30px] text-white">
  Zeetex tyres have displayed extra-ordinary performance in independent
  tests against top-tier brands at the IDIADA testing facility in Spain.
</p>

        </div>

        {/* Bottom Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left Content */}
          <div>
           <p className="mb-6 font-avenir text-[18px] font-semibold leading-[30px] tracking-widest text-white">
  THE FACILITY
</p>


            <img
              src={idiadalogo}
              alt="IDIADA Logo"
              className="w-56 mb-6"
            />
<p className="max-w-md font-avenir text-[18px] font-semibold leading-[30px] text-white">
  IDIADA is an Official Technical Service for European Homologation
  offering comprehensive tyre testing for homologation, development,
  and characterization, including rolling resistance, wet grip, noise
  emissions, and dynamic performance.
</p>

          </div>

          {/* Right Content */}
          <div className="relative">
           <p className="mb-6 text-[18px] font-semibold leading-[30px] tracking-widest text-white text-center lg:text-right font-avenir">
  TESTS CONDUCTED
</p>


            <img
              src={idiadamap}
              alt="IDIADA Global Tests Map"
              className="w-full max-w-xl ml-auto"
            />
          </div>
        </div>
      </div>
    </section>



<section className="relative text-white py-20 px-6 overflow-hidden">
  {/* Background */}
  <div
    className="absolute inset-0 bg-cover bg-center scale-105"
    style={{ backgroundImage: `url(${world})` }}
  />
  <div className="absolute inset-0 bg-black/75" />

  <div className="relative max-w-6xl mx-auto text-center">
    {/* Heading */}
    <h2 className="font-avenir font-black text-[54px] leading-[62px] mb-14">
      DRIVEN BY INNOVATION,<br />
      BACKED BY TRUST.
    </h2>

    {/* Tire Center */}
    <div className="relative my-16 flex justify-center">
      <img
        src={tiretwo}
        alt="Zeetex Tyre"
        className="w-[320px] md:w-[420px] drop-shadow-xl"
      />

     
    </div>

    {/* Stats */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
      {/* 145+ */}
     
<div className="text-center">
  <div className="flex items-baseline justify-center gap-1 font-avenirlt text-[69px] leading-[69px] font-semibold">
    <span
      ref={(el) => (countRefs.current[0] = el)}
      data-end="145"
    >
      0
    </span>
    <span>+</span>
  </div>

  <p className="mt-3 text-[22px] leading-[34px] font-semibold">
    Countries & Growing Worldwide
  </p>
</div>





      {/* 15 */}
      <div>
        <div
          ref={(el) => (countRefs.current[1] = el)}
          data-end="15"
          className="font-avenirlt text-[69px] leading-[69px] font-semibold"
        >
          0
        </div>
        <p className="mt-3 text-[22px] leading-[34px] font-semibold">
          Minutes per tyre sold globally
        </p>
      </div>

      {/* 5 */}
      <div>
        <div
          ref={(el) => (countRefs.current[2] = el)}
          data-end="5"
          className="font-avenirlt text-[69px] leading-[69px] font-semibold"
        >
          0
        </div>
        <p className="mt-3 text-[22px] leading-[34px] font-semibold">
          Year Manufacturing & Material Warranty
        </p>
      </div>
    </div>

    {/* Description */}
    <p className="max-w-3xl mx-auto text-[18px] leading-[30px] font-semibold mb-12">
      Zeetex delivers premium tyres with advanced silica, unique patterns,
      and superior control, backed by Thai innovation, global reach, full
      warranty, and a complete range for every mobility need.
    </p>

    {/* CTA */}
    <button className="px-10 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition font-semibold text-[18px] shadow-md">
      Find Dealers
    </button>
  </div>
</section>



    </section>
  );
};

export default AboutUs;
