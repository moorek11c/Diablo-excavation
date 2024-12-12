import Main from "../../Main/Main";
// import About from "../../About/About";
import ImagePreviewSection from "../../ImagePreviewSection/ImagePreviewSection";

function HomePage() {
  return (
    <div>
      <section className="viewport">
        <Main />
      </section>
      <ImagePreviewSection />
      {/* <About /> */}
    </div>
  );
}

export default HomePage;
