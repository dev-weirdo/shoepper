import Hero from "../components/Hero";
import Card from "../components/Card";
import Accordion from "../components/Accordion";

function Home() {
  return (
    <div>
      <Hero />
      <div className="flex gap-4 max-w-fit mx-auto">
        <Card />
        <Card />
        <Card />
      </div>
      <Accordion />
    </div>
  );
}



export default Home;
