import FeaturedBlog from "../../Components/FeaturedBlog/FeaturedBlog";
import Slider from "../../Components/Slider/Slider";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Slider />
      <FeaturedBlog />
    </div>
  );
};

export default Home;
