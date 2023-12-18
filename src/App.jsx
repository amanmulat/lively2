import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./view/Home";
import Contact from "./view/Contact";
import MainLayout from "./layout";
import Privacy from "./view/Privacy";
import Term from "./view/Term";
import Footer from "./layout/footer";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <>
      <SnackbarProvider maxSnack={3}>
        <Routes>
          <Route element={<Footer />}>
            <Route path="/" element={<Home />} />
            <Route element={<MainLayout />}>
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<Privacy />} />
              <Route path="/terms-condition" element={<Term />} />
            </Route>
          </Route>
        </Routes>
      </SnackbarProvider>
    </>
  );
}

export default App;
