
import Hero from "../components/Hero";
import Header from "../components/Header";
import NavMenu from "../components/NavMenu";
import About from "../components/About";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <NavMenu title={"Ericky Dias"}/>
      <Header/>
      <Hero/>
      <About/>
    </>
  );
}
