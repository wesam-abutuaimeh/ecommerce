import AuthFooter from "@/components/organisms/AuthFooter";
export const metadata = {
  title: "Ecommerce - log in or sign up",
  descriptiom: "Ecommerce Website",
};
export default function RootLayout({ children }) {
  return (
    <>
      <div>
        {children}
        <AuthFooter />
      </div>
    </>
  );
}
