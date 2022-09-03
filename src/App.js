import Author from "./components/authorSection";
import Footer from "./components/footer";
import Header from "./components/header";
import IconSection from "./components/iconSection";
import SecunSection from "./components/SecunSection";

function App() {
  return (
    <div className="App">
      <Header bg/>
      <IconSection />
      <SecunSection bg/>
      <Author radius={50} />
      <Footer />
    </div>
  );
}

export default App;