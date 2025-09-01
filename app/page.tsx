import { EarlyEducationSection } from "@/components/Early-education/EarlyEducation";
import HeroSection from "@/components/HeroSection/HeroSection";
import LetsConnect from "@/components/LetsConnect/letsConnect";




export default function Home() {
  return (
     <div className="flex flex-col gap-[20px] font-ohno">
      <HeroSection/>
      <EarlyEducationSection/>
      <LetsConnect/>
     </div>
  );
}
