import Header from "./Header";
import Footer from "./Footer";

// components/Layout.js
export default function Layout({ children }) {
    return (
        <div>
            <>
            <div className="min-h-screen flex flex-col">
              <Header />
              {children}
              <Footer />
            </div>
          </>
          </div>
      );
  }
  