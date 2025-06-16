import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import ContactUs from "./components/ContacUs";
import Gallery from "./components/Gallery";
import MobileServices from "./components/MobileServices";
import Header from "./components/Header";
import PortfolioPage from "./portfolio/page";
export default function Home() {
  return (
    <>
   <HeroSection/>
    <div className="hidden md:block">
    <Services />
  </div>
  <div className="block md:hidden">
    <MobileServices />
  </div>  
   
   <Gallery/>
   <div id="portfolio">
    <PortfolioPage></PortfolioPage>
   </div>
   <div id="contact">
       <ContactUs></ContactUs>
   </div>
   </>
  );
}
