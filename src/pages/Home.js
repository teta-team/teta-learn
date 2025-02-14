import React from "react";
import ImageSlider from "../components/ImageSlider";
import Category from "../components/Category";

function Home() {
  return (
    <>
      <section>
        <div className="container">
          <ImageSlider />
        </div>
      </section>

      <div className="container">
        <div className="category-title">
          <h2>دسته بندی ها</h2>
          <div className="under-line"></div>
        </div>
        <div className="categories d-flex row f-wrap">
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
    </>
  );
}

export default Home;
