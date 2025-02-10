import React from "react";
import Menu from "../components/Menu";
import ImageSlider from "../components/ImageSlider";
import Category from "../components/Category";
import Footer from "../components/Footer";

function Home() {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRx5lxKmCM302TFRm9AlH5iOoCBIjD_RKwUP2M8KqK70aOF4EXeRRllpy7V2EIZTDhVmw&usqp=CAU",
    "https://wallpapersok.com/images/high/4k-nature-waterfall-vca0x9gctkousu5t.jpg",
  ];
  return (
    <>
      <header>
        <div className="container">
          <Menu />
        </div>
      </header>

      <section>
        <div className="container">
          <ImageSlider images={images} />
        </div>
      </section>

      <div className="container">
        <div className="category-title">
          <h2>دسته بندی ها</h2>
          <div className="under-line"></div>
        </div>
        <div className="categories d-flex row justify-content-between">
          <Category
            id="physics"
            name="فیزیک"
            image="https://cdn-icons-png.flaticon.com/512/306/306335.png"
          />
          <Category
            id="chemistry"
            name="شیمی"
            image="https://cdn-icons-png.freepik.com/256/2387/2387545.png?semt=ais_hybrid"
          />
          <Category
            id="math"
            name="ریاضی"
            image="https://cdn-icons-png.flaticon.com/512/746/746960.png"
          />
          <Category
            id="geometry"
            name="هندسه"
            image="https://cdn-icons-png.flaticon.com/512/3941/3941113.png"
          />
        </div>
      </div>

      <div className="container">
        <div className="last-lessons-title">
          <h2>آخرین دروس</h2>
          <div className="under-line"></div>
        </div>
        <div className="last-lessons"></div>
      </div>

      <div className="container">
        <div className="last-games-title">
          <h2>آخرین بازی ها</h2>
          <div className="under-line"></div>
        </div>
        <div className="last-games"></div>
      </div>

      <div className="container">
        <div className="ranking-title">
          <h2>دانش آموزان برتر</h2>
          <div className="under-line"></div>
        </div>
        <div className="ranking"></div>
      </div>

      <footer>
        <div className="container">
          <Footer />
        </div>
      </footer>
    </>
  );
}

export default Home;
