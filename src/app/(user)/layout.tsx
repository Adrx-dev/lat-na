import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/navbar";
import Container from "@/components/container";
import { GradientBackground } from "@/components/gradient";

import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Home | Lakambini Archives",
  description:
    "A platform for Grade XI Lakambini students to share academic insights, experiences, and stories that inspire our community.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      {children}
      <Footer />
    </>
  );
}
