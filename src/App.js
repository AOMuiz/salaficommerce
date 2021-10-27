import Cards from "./components/cards/Cards";
import GlobalStyle from "./constants/Styles/global";
import cantileverChair from "./assets/chair.png";
import comfortHandy from "./assets/image-1169.png";
import executiveSeat from "./assets/image-3.png";
import Button from "./components/Button/Buttons";
import Hero from "./components/hero/Hero";
import chair from "./assets/sofa.png";

function App() {
  return (
    <>
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
          <Cards
            imgSrc={executiveSeat}
            title="Executive Seat chair"
            code="Code - A4566"
            price="$26.0"
          />
          <div>
            <Button name="Shop Now" handleClick="shop now clicked" />
            <Button name="Add To Cart" />
            <Button name="Update Cart" />
            <Button name="Sign Up" />
          </div>
          <div>
            <Hero img={chair} />
          </div>
        </div>
      </div>
      <GlobalStyle />
    </>
  );
}

export default App;
