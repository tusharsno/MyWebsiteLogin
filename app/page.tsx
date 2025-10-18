// import { HeroSectionOne } from "@/components/ui/HeroSectionOne";
import { HeroSectionOne } from "@/components/ui/HeroSectionOne";
// import AboutMe from "@/components/ui/AboutMe";
import About_Me from "@/components/ui/About_Me";
import { SignupFormDemo } from "@/components/ui/Contact";
// import { CarouselDemo } from "@/components/ui/Projects";
import Projects_Demo from "@/components/ui/Projects_Demo";
// import { StickyScrollRevealDemo } from "@/components/ui/Skills";
import Skills_Demo from "@/components/ui/Skills_Demo";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <div className="">
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}>
        <HeroSectionOne />
        {/* <AboutMe /> */}
        <About_Me />
        {/* <CarouselDemo /> */}
        <Projects_Demo />
        {/* <StickyScrollRevealDemo /> */}
        <Skills_Demo />
        <SignupFormDemo />
      </ThemeProvider>
    </div>
  );
}
