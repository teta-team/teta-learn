import React from "react";
import ImageSlider from "../components/ImageSlider";
import Category from "../components/Category";
import supabase from "../supabase";
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
            image="./assets/images/physics.png"
          />
          <Category
            id="chemistry"
            name="شیمی"
            image="./assets/images/chemistry.png"
          />
          <Category id="math" name="ریاضی" image="./assets/images/math.png" />
          <Category
            id="geometry"
            name="هندسه"
            image="./assets/images/geometry.png"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
