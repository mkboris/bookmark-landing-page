import { Toaster } from "react-hot-toast";

import Header from "./components/Header/Header";
import MainEl from "./components/MainEl/MainEl";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Toaster
        gutter={12}
        containerStyle={{ margin: "0.5rem" }}
        toastOptions={{
          success: {
            duration: 4000,
            iconTheme: {
              primary: "var(--SoftBlue)",
              secondary: "var(--White)",
            },
          },
          style: {
            fontSize: "1rem",
            maxWidth: "31.25rem",
            padding: "1rem 1.5rem",
          },
          ariaProps: {
            role: "status",
            "aria-live": "polite",
            "aria-atomic": "true",
          },
        }}
      />
      <Header />
      <MainEl />
      <Footer />
    </>
  );
}

export default App;
