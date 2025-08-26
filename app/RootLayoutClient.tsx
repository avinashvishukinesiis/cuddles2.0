"use client";

import Footer from "@/components/Footer/Footer";
import MotionWrapper from "@/components/MotionWrapper";
import NavBar from "@/components/NavBar/Navbar";
import { usePathname } from "next/navigation";


type RootLayoutClientProps = {
    children: React.ReactNode;
};

export default function RootLayoutClient({ children }: RootLayoutClientProps) {
    const pathname = usePathname();

    const noHeaderFooterRoutes = ["/studio"];
    const shouldShowHeaderFooter = !noHeaderFooterRoutes.some(route =>
        pathname.startsWith(route)
    );

    return (
        <>
            <NavBar />
            <main className={`h-max min-h-[200px] md:min-h-[500px] ${shouldShowHeaderFooter ? "mt-[65px] md:mt-[81px]" : ""} box-border`}>
                <MotionWrapper>
                    {children}
                    <Footer />
                </MotionWrapper>
            </main>
        </>
    );
}