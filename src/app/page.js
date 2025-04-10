import Image from "next/image";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import PromoSlider from "./components/PromoSlider";
import FeaturedProducts from "./components/productSlider";
import FeaturedGrid from "./components/FeatureGrid";

export default function Home() {
  return (
    <div className="justify-center items-center flex flex-col" >
    <HeroBanner />
    <PromoSlider />
    <FeaturedProducts />
    <FeaturedGrid />
    </div>
  );
}
