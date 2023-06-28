import { Box } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <Box minH={"80vh"}>

      {children}
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
