
import Hero from "../components/Hero";
import Header from "../components/Header";
import NavMenu from "../components/NavMenu";
import About from "../components/About";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <NavMenu title={"Ericky Dias"}/>
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <Footer/>
    </>
  );
}
