import Navbar from "./sections/navbar";
import Header from "./sections/header";

import Skills from "./sections/skills";
import Projects from "./sections/projects";
import Footer from "./sections/footer";
import Services from "./sections/services";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
};

export default App;
