import { HeroSectionOne } from "@/components/ui/HeroSectionOne";
import About_Me from "@/components/ui/About_Me";
import { SignupFormDemo } from "@/components/ui/Contact";
import Projects_Demo from "@/components/ui/Projects_Demo";
import Skills_Demo from "@/components/ui/Skills_Demo";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <div className="">
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}>
        <HeroSectionOne />
        <About_Me />
        <Projects_Demo />
        <Skills_Demo />
        <SignupFormDemo />
      </ThemeProvider>
    </div>
  );
}
