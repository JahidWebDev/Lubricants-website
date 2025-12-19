import { useEffect, useState } from "react";

const PageLoader = ({ show }) => {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    if (show) {
      setVisible(true);
    } else {
      // fade-out শেষ হলে remove
      const timer = setTimeout(() => setVisible(false), 600);
      return () => clearTimeout(timer);
    }
  }, [show]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
       backgroundColor: "#1B4298"
, // navy blue

        zIndex: 9999,
        opacity: show ? 1 : 0,
        transition: "opacity 0.6s ease-in-out",
      }}
    />
  );
};

export default PageLoader;
