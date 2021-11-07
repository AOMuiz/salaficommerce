import Layout from "../../components/layout";
import Cards from "../../components/cards/Card";
import ShopGridCard from "../../components/cards/ShopGridCard";
import OfferCard from "../../components/cards/OfferCard";

import vector from "../../assets/icon/group-1.svg";
import vector2 from "../../assets/icon/group-2.svg";
import cashback from "../../assets/icon/cashback-1.svg";
import bag from "../../assets/images/bag.png";
import earpiece from "../../assets/images/earpiece1.png";
import cantileverChair from "../../assets/images/cantileverChair.png";
import comfortHandy from "../../assets/images/comfortHandyChair.png";

const HomeScreen = () => {
  return (
    <Layout>
      <div className="py-5">
        <h3 className="text-center text-5xl py-3 text-blue-800">
          Featured Products
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
          <Cards
            imgSrc={comfortHandy}
            title="Comfort Handy Craft"
            code="Code - Z3456"
            price="$32.0"
          />
          <Cards
            imgSrc={comfortHandy}
            title="Comfort Handy Craft"
            code="Code - Z3456"
            price="$32.0"
          />
        </div>
      </div>
      <div className="py-3">
        <h3 className="text-center text-5xl py-3 text-blue-800">
          Trending Products
        </h3>
        <section className="flex justify-around items-center">
          <ShopGridCard
            url={bag}
            name="A beautiful bag"
            price="$26,000"
            price2="$24,000"
          />
          <ShopGridCard
            url={bag}
            name="A beautiful bag"
            price="$26,000"
            price2="$24,000"
          />
          <ShopGridCard
            url={earpiece}
            name="A beautiful Head Phone"
            price="$26,000"
            price2="$24,000"
          />
          <ShopGridCard
            url={earpiece}
            name="A beautiful Head Phone"
            price="$26,000"
            price2="$24,000"
          />
        </section>
      </div>
      <div className="py-3">
        <h3 className="text-center text-5xl py-3 text-blue-800">
          What Shopex Offer
        </h3>
        <section className="flex justify-around items-center">
          <OfferCard
            url={cashback}
            title="24/7 Support"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
          />
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
        </section>
      </div>
    </Layout>
  );
};

export default HomeScreen;
