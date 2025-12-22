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
import bgimg from "../../Images/innov-imggg-1.jpg";
import Car from "../../Images/ZT-body.png";
import tire from "../../Images/ZT-tire.png";
import warranty from "../../Images/warranty-icon-1.png";
import Logo from "../../Images/Jaguar-logo.png";
import Banner from "../../Images/menupcr.jpg";
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
        <span>Zeetex powers global journeys</span>
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
 


    <section className="relative w-full  h-[500vh]">
        <div className="relative h-screen overflow-hidden">
          <div
            ref={containerRef}
            className="sticky top-0 flex h-screen flex-nowrap"
          >
            {/* PAGE 1 */}
            <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-300 shrink-0">
             <div
        className="relative w-screen h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bgimg})` }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-blue-900/40" />

        <div className="relative z-10 w-full h-full px-10 lg:px-20">

          {/* LEFT BOTTOM */}
          <div className="absolute left-10 lg:left-20 bottom-20 text-white">
            <img src={Logo} alt="Logo" className="w-45 mb-8" />

          <h1
  className="text-5xl lg:text-8xl font-bold leading-tight
             bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700
             bg-clip-text text-transparent"
>
  OUR <br />
  JOURNEY OF <br />
  INNOVATION & <br />
  PERFORMANCE
</h1>

          </div>

          {/* TOP RIGHT TEXT */}
<div className="absolute top-16 right-10 lg:right-20 max-w-xl">
  <p
    className="p-6 text-white"
    style={{
      fontFamily: "avenir-lt-pro, sans-serif",
      fontSize: "18px",
      fontWeight: 600,
      lineHeight: "28px",
      color: "rgb(255,255,255)",
    }}
  >
    Since 2005, Zeetex has been delivering advanced tyres, batteries,
    and lubricants across 146+ countries. With a focus on safety,
    performance, and cutting-edge technology, we aim to create
    meaningful impact for customers and society worldwide.
  </p>
</div>



          {/* BOTTOM RIGHT TYRE */}
<div className="relative w-full h-full">
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





    </section>
  );
};

export default AboutUs;
