import Cards from "./components/cards/Card";
import GlobalStyle from "./constants/styles/global";
import cantileverChair from "./assets/images/cantileverChair.png";
import comfortHandy from "./assets/images/comfortHandyChair.png";
import Navbar from "./components/nav";
import OfferCard from "./components/cards/OfferCard";
import vector from "./assets/icon/group-1.svg";
import vector2 from "./assets/icon/group-2.svg";
import cashback from "./assets/icon/cashback-1.svg";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto flex justify-center">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-40">
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
      <GlobalStyle />
    </>
  );
}

export default App;
