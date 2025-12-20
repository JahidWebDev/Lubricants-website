import { useState, useEffect, useRef } from "react";
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

import img1 from "../../Images/menupcr.jpg";
import img2 from "../../Images/menupcr.jpg"; // replace with actual hover images
import img3 from "../../Images/menupcr.jpg";
import img4 from "../../Images/menupcr.jpg";

const products = [
  {
    id: 1,
    title: "ZT5000 MAX",
    desc: "Engineered for safety, grip, and everyday reliability.",
    image: img1,
    hoverImage: "", // fallback to default image
    tags: ["Passenger", "Performance"],
    active: true,
  },
  {
    id: 2,
    title: "HP5000 MAX",
    desc: "Engineered for grip, comfort, and confidence.",
    image: img2,
    hoverImage: img2,
    tags: ["Comfort", "High Performance"],
  },
  {
    id: 3,
    title: "SU5000 MAX",
    desc: "Engineered for SUV power and everyday comfort.",
    image: img3,
    hoverImage: img3,
    tags: ["Fuel-Efficient", "SUV"],
  },
  {
    id: 4,
    title: "HT5000 MAX",
    desc: "Engineered for smooth comfort and lasting performance.",
    image: img4,
    hoverImage: img4,
    tags: ["Highway Terrain", "Stability"],
  },
];
const socialIcons = [
  {
    Icon: FaFacebook,
    color: "group-hover:text-[#1877F2]",
    link: "https://www.facebook.com",
  },
  {
    Icon: FaTwitter,
    color: "group-hover:text-[#1DA1F2]",
    link: "https://www.twitter.com",
  },
  {
    Icon: FaInstagram,
    color: "group-hover:text-pink-500",
    link: "https://www.instagram.com",
  },
  {
    Icon: FaYoutube,
    color: "group-hover:text-[#FF0000]",
    link: "https://www.youtube.com",
  },
  {
    Icon: FaLinkedin,
    color: "group-hover:text-[#0A66C2]",
    link: "https://www.linkedin.com",
  },
];

// IMAGES
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
import menuImg12 from "../../Images/menupcr11.jpg"; // ✅ fixed
import menuImg13 from "../../Images/menupcr12.jpg";
import menuImg14 from "../../Images/menupcr13.jpg"; // ✅ fixed
import menuImg15 from "../../Images/menupcr14.jpg";

const navItems = [
  {
    name: "Our Products",
    path: "/OurProducts",
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

const OurProducts = () => {
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

  return (
    <section>
      {/* HERO SECTION */}
      <div className="relative ">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat
             sm:bg-top md:bg-center lg:bg-center
             w-full h-[40svh] sm:h-[80svh] lg:h-[400px]
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

        <h1
          className="absolute left-80 top-70 text-white"
          style={{
            fontFamily: "'Avenir LT Pro', sans-serif",
            fontWeight: 800,
            lineHeight: "73.87px",
            color: "rgb(255, 255, 255)",
            fontSize: "clamp(16px, 5vw, 45px)", // scales from 24px (mobile) to 45px (desktop)
          }}
        >
          Passenger Car Tyres
        </h1>
      </div>

      {/* ========================== */}
     <section className="bg-white py-16 pt-100">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

      {/* LEFT SIDE */}
      <div>
        <h2 className="text-4xl font-bold text-orange-500 mb-10">
          Find Your Tyre
        </h2>

        {/* FILTERS */}
        <div className="space-y-6 max-w-sm">
          {/* Width */}
          <div className="flex items-center justify-between border-b pb-3 text-gray-400 cursor-pointer">
            <span>Width</span>
            <span className="text-xl">⌄</span>
          </div>

          {/* Ratio */}
          <div className="flex items-center justify-between border-b pb-3 text-gray-400 cursor-pointer">
            <span>Ratio</span>
            <span className="text-xl">⌄</span>
          </div>

          {/* Rim Diameter */}
          <div className="flex items-center justify-between border-b pb-3 text-gray-400 cursor-pointer">
            <span>Rim Diameter</span>
            <span className="text-xl">⌄</span>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-4 mt-12">
          <button className="px-10 py-3 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition">
            Reset
          </button>

          <button className="px-10 py-3 rounded-full bg-gray-200 text-black font-medium hover:bg-gray-300 transition">
            Apply
          </button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div>
      <p
  className="
    font-avenir
    text-[15px]
    font-normal
    leading-[25px]
    text-[#231F20]
    max-w-xl
  "
>
  Every journey deserves grip you can trust, comfort that moves with you,
  and control that never blinks. Zeetex passenger tyres are engineered to
  balance performance with safety, delivering confident traction and fuel
  efficiency across every mile. Wherever the road leads, we make sure you
  drive ahead with confidence.
</p>


        <button className="mt-10 px-12 py-4 bg-blue-800 text-white rounded-full font-medium hover:bg-blue-900 transition">
          Download Catalogue
        </button>
      </div>

    </div>
  </div>
</section>
<section className="py-14 px-6 bg-white">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {products.map((product) => (
      <a
        key={product.id}
        href={`/product/${product.title.replace(/\s+/g, "-").toLowerCase()}`}
        className="
          group block rounded-3xl
          bg-white border border-gray-200
          transition-all duration-300 ease-out
          hover:-translate-y-1 hover:shadow-2xl
          hover:bg-[#193CB8]
        "
      >
        {/* Image box */}
        <div
          className="
            bg-gray-100
            rounded-2xl group-hover:rounded-3xl
            m-4 mx-auto
            flex items-center justify-center
            h-65 w-[94%]
            overflow-hidden
            transition-all duration-300 ease-out
            group-hover:bg-white
          "
        >
          <img
            src={product.image}
            alt={product.title}
            className="
              w-72 object-contain
              transition-transform duration-300 ease-out
              group-hover:scale-105
            "
          />
        </div>

        {/* Content */}
        <div className="px-5 pb-6 transition-all duration-300 ease-out">
          <h4
            className="
              text-2xl font-extrabold mb-2 text-blue-700
              transition-colors duration-300
              group-hover:text-white
            "
          >
            {product.title}
          </h4>

          <p
            className="
              text-base leading-relaxed mb-4
              text-gray-900
              transition-colors duration-300 ease-out
              group-hover:text-white
            "
          >
            {product.desc}
          </p>

          <div className="flex flex-wrap gap-2">
            {product.tags.map((tag, idx) => (
              <span
                key={idx}
                className="
                  text-sm px-4 py-1 rounded-full
                  border border-gray-300 text-gray-900
                  transition-all duration-300
                  group-hover:border-white
                  group-hover:text-white
                "
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    ))}
  </div>
</section>








    </section>
  );
};

export default OurProducts;
