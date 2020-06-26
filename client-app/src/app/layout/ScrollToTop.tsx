import { useLocation } from "react-router-dom";
import { useEffect, Fragment } from "react";
import React from "react";

const ScrollToTop: React.FC = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <Fragment>{children}</Fragment>;
};

export default ScrollToTop;