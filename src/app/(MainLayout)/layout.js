import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer/";

export const metadata = {
  title: "Ecommerce",
  description: "E-commerce App Using Next.Js Framework && React.js Library",
};

export default function RootLayout({ children }) {
  return (
    <>
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}
