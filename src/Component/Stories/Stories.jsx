import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

import { Link } from "react-router-dom";
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


import gsap from "gsap";



const socialIcons = [
  { Icon: FaFacebook, color: "text-blue-600", link: "#" },
  { Icon: FaTwitter, color: "text-blue-400", link: "#" },
  { Icon: FaInstagram, color: "text-pink-500", link: "#" },
  { Icon: FaYoutube, color: "text-red-600", link: "#" },
  { Icon: FaLinkedin, color: "text-blue-700", link: "#" },
];
// IMAGES
import Logo from "../../Images/Jaguar-logo.png";
import Banner from "../../Images/stories.jpg";

import menuImg1 from "../../Images/menupcr.jpg";
import menuImg2 from "../../Images/menupcr0.jpg";
import menuImg3 from "../../Images/menupcr2.jpg";
import menuImg4 from "../../Images/menupcr3.jpg";
import menuImg5 from "../../Images/menupcr4.jpg";

import menuImg6 from "../../Images/menupcr5.jpg";
import menuImg7 from "../../Images/menupcr6.jpg";
import menuImg8 from "../../Images/menupcr7.jpg";

import menuImg11 from "../../Images/menupcr10.jpg";

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
        link: "/aboutus/sustainability",
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









const Stories = () => {
   
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




// text animation
 const titleRef = useRef(null);
useEffect(() => {
  if (!titleRef.current) return;

  gsap.fromTo(
    titleRef.current,
    {
      opacity: 0,
      scale: 0.97,        // 🔽 less scale difference
      y: 60,              // 🔽 smaller rise
      transformOrigin: "50% 100%",
    },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 1,        // 🔽 slightly faster
      ease: "power2.out", // 🔽 softer ease
      delay: 0.15,
    }
  );
}, []);
// ======================================
 



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
    flex items-center justify-center
    text-white text-center
    px-4
    uppercase
  "
  style={{
    fontFamily: "Avenir, sans-serif",
    fontWeight: 900,
    fontSize: "54px",
    lineHeight: "64px",
    color: "rgb(255, 255, 255)",
  }}
>
  The roads we conquer,<br />
  the innovations we craft,<br />
  the journeys we power.<br />
  Welcome to the world of Zeetex.
</h1>


<div
  className="
    absolute bottom-2 left-1/2 -translate-x-1/2
    flex flex-col items-center
    animate-bounce
  "
>
  {/* LINE */}


  {/* ARROW (SVG) — 100% ATTACHED */}
<svg
  viewBox="0 0 24 140"
  className="h-[140px] w-[28px]"
  fill="none"
  stroke="white"
  strokeWidth="2.5"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  {/* FULL HEIGHT LINE */}
  <path d="M12 0 V120" />

  {/* ARROW HEAD */}
  <path d="M5 113 L12 120 L19 113" />
</svg>

</div>





      </div>

      {/* ========================== */}
 








    </section>
  );
};

export default Stories;
