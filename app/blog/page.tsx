import React from 'react'
import { AuroraBackgroundDemo } from '@/components/ui/Blog/HeroSection';
import { ThemeProvider } from 'next-themes';
import { TracingBeamDemo } from '@/components/ui/Blog/TracingBeamDemo';
// import { CompareDemo } from '@/components/ui/Blog/CompareDemo';
// import { FeaturesSectionDemo } from '@/components/ui/Blog/FeaturesSectionDemo';
// import { TimelineDemo } from '@/components/ui/TimelineDemo';

const Blogpage = () => {
  return (
    <div className="">
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}>
        <AuroraBackgroundDemo />
        <TracingBeamDemo />
        {/* <TimelineDemo /> */}
        {/* <CompareDemo /> */}
        {/* <FeaturesSectionDemo />  */}
      </ThemeProvider>
    </div>
  );
}

export default Blogpage
