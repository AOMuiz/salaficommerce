import Cards from "./components/cards/Card";
import GlobalStyle from "./constants/styles/global";
import { colors } from "./constants/colors";
import cantileverChair from "./assets/images/cantileverChair.png";
import comfortHandy from "./assets/images/comfortHandyChair.png";
import Navbar from "./components/nav";
import Button from "./components/button";
import lamp from "./assets/lamp.png";
import armchair from "./assets/armchair.png";
import Hero from "./components/hero";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero
        lampImgSrc={lamp}
        armChairImgSrc={armchair}
        text="Best Furniture For Your Castle..."
        title="New Furniture Collection Trends in 2020."
        subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labor illum veritatis, repudiandae eligendi."
      />
      <div className="container mx-auto flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-40">
          <Cards
            imgSrc={cantileverChair}
            title="Cantilever chair"
            code="Code - Y523201"
            price="$42.0"
          />
          <Cards
            imgSrc={comfortHandy}
            title="Comfort Handy Craft"
            code="Code - Z3456"
            price="$32.0"
          />
        </div>
      </div>
      <Button name="Show more" color={colors.offBlue} />
      <Button name="Proceed To Checkout" />
      <Button
        name="This is a long cart and it is even longer"
        color={colors.offPurple}
      />
      <Footer
        contact="Contact Info"
        address="17 Princess Road, London, Greater London NW1 8JR, UK"
        h1="Hekto"
      />
      <GlobalStyle />
    </>
  );
}

export default App;
