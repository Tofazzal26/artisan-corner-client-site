import FeaturedBlog from "../../Components/FeaturedBlog/FeaturedBlog";
import NewArrivals from "../../Components/NewArrivals/NewArrivals";
import Slider from "../../Components/Slider/Slider";

const Home = () => {
  return (
    <div className="px-2">
      <div className="container mx-auto">
        <Slider />
        <NewArrivals />
        <FeaturedBlog />
      </div>
    </div>
  );
};

export default Home;
