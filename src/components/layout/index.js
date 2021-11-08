import Navbar from "../../components/nav";
import Footer from "../../components/footer";
import lamp from "../../assets/images/lamp.png";
import armchair from "../../assets/images/armchair.png";
import Hero from "../../components/hero";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Hero
        lampImgSrc={lamp}
        armChairImgSrc={armchair}
        text="Best Furniture For Your Castle..."
        title="New Furniture Collection Trends in 2020."
        subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labor illum veritatis, repudiandae eligendi."
      />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
