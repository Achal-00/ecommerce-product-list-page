import "./globals.css";
import StyledComponentsRegistry from "./lib/registry";

export const metadata = {
  title: "Ecommerce",
  description: "Ecommerce product list",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
