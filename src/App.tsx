import { useEffect, useState } from "react";
import Navbar from "./Scenes/Navbar/index";
import { SelectedPage } from "./Scenes/shared/types";
import Home from "./Scenes/Home";
import Benefit from "./Scenes/Benefits";
import OurClasses from "./Scenes/OurClasses";
import ContactPage from "./Scenes/Contact";
import FooterPage from "./Scenes/Footer";


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="app bg-gray-20">

    <Navbar 
     isTopOfPage={isTopOfPage}
     selectedPage={selectedPage}
     setSelectedPage={setSelectedPage}
    />
    <Home setSelectedPage={setSelectedPage}/>
    <Benefit setSelectedPage={setSelectedPage}/>
    <OurClasses setSelectedPage={setSelectedPage}/>
    <ContactPage setSelectedPage={setSelectedPage} />
    <FooterPage  />
    </div>
  );
}

export default App;
