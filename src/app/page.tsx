import BudgetContact from "@/Components/BudgetContact";
import Card from "@/Components/Card";
import Development_approach from "@/Components/Development_approach";
import Digitalmarketing from "@/Components/Digitalmarketing";
import Footer from "@/Components/Footer";
import Great_software from "@/Components/Great_software";
import Hero_section from "@/Components/Hero_section";
import Navbar from "@/Components/Navbar";
import Projects from "@/Components/Projects";
import WebDevelopment from "@/Components/WebDevelopment";
import Image from "next/image";
export default function Home() {
  return (
    <main className="">
      <Hero_section/>
      <Card/>
      <Projects/>
      <Great_software/>
      <Development_approach/>
    </main>
  );
}
