import Cards from "./components/cards/Card";
import GlobalStyle from "./constants/styles/global";
import cantileverChair from "./assets/images/cantileverChair.png";
import comfortHandy from "./assets/images/comfortHandyChair.png";
import Navbar from "./components/nav";
import ShopGridCard from "./components/cards/ShopGridCard";
import bag from "./assets/images/bag.png";
import earpiece from "./assets/images/earpiece1.png";

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
      </div>
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
