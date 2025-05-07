import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/header/navbar";

export default function WithNavLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
