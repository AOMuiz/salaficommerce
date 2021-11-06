import Cards from "./components/cards/Card";
import GlobalStyle from "./constants/styles/global";
import cantileverChair from "./assets/images/cantileverChair.png";
import comfortHandy from "./assets/images/comfortHandyChair.png";
import Navbar from "./components/nav";
import ShopGridCard from "./components/cards/ShopGridCard";
import bag from "./assets/images/bag.png";
import earpiece from "./assets/images/earpiece1.png";
import OfferCard from "./components/cards/OfferCard";
import vector from "./assets/icon/group-1.svg";
import vector2 from "./assets/icon/group-2.svg";
import cashback from "./assets/icon/cashback-1.svg";
import FashionItemCard from "./components/cards/FashionItemCard";
import image from "./assets/images/rect.png";
import image2 from "./assets/images/rect-2.png";
import lamp from "./assets/lamp.png";
import armchair from "./assets/armchair.png";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Rectangle from "./components/rectangle";

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
        <div>
          <OfferCard
            url={vector}
            title="24/7 Support"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
          />
          <OfferCard
            url={vector2}
            title="24/7 Support"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
          />
          <OfferCard
            url={cashback}
            title="24/7 Support"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
          />
        </div>
      </div>
      <div>
        <FashionItemCard
          img={image}
          title="My Chair"
          price1="$200"
          price2="$100"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
           in est adipiscing in phasellus non in justo."
        />

        <FashionItemCard
          img={image2}
          title="My Room"
          price1="$2,000"
          price2="$1,000"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
           in est adipiscing in phasellus non in justo."
        />
      </div>
      <Footer
        contact="Contact Info"
        address="17 Princess Road, London, Greater London NW1 8JR, UK"
        h1="Hekto"
      />
      <Rectangle />
      <GlobalStyle />
      <div>
        <ShopGridCard
          url={bag}
          name="A beautiful bag"
          price="$26,000"
          price2="$24,000"
        />
        <ShopGridCard
          url={earpiece}
          name="A beautiful earpiece"
          price="$16,000"
          price2="$14,000"
        />
      </div>
    </>
  );
}

export default App;
