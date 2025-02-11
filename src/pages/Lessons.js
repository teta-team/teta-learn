import Lesson from "../components/Lesson";

function Lessons() {
  return (
    <div className="lessons">
      <div className="container">
        <div className="title physics-title">
          <h2>فیزیک</h2>
          <div className="under-line"></div>
        </div>
        <div className="d-flex row justify-content-evenly align-items-center">
          <Lesson
            id="10"
            name="فیزیک 1"
            lesson="physics"
            image="https://icons.veryicon.com/png/o/miscellaneous/stationery-icons/physics-9.png"
          />
          <Lesson
            id="11"
            name="فیزیک 2"
            lesson="physics"
            image="https://cdn-icons-png.flaticon.com/512/306/306335.png"
          />
          <Lesson
            id="12"
            name="فیزیک 3"
            lesson="physics"
            image="https://cdn-icons-png.freepik.com/512/5190/5190400.png"
          />
        </div>

        <div className="title chemistry-title">
          <h2>شیمی</h2>
          <div className="under-line"></div>
        </div>
        <div className="d-flex row justify-content-evenly align-items-center">
          <Lesson
            id="10"
            name="شیمی 1"
            lesson="chemistry"
            image="https://cdn-icons-png.flaticon.com/512/7812/7812701.png"
          />
          <Lesson
            id="11"
            name="شیمی 2"
            lesson="chemistry"
            image="https://cdn-icons-png.flaticon.com/512/8540/8540907.png"
          />
          <Lesson
            id="12"
            name="شیمی 3"
            lesson="chemistry"
            image="https://cdn-icons-png.freepik.com/256/2387/2387545.png?semt=ais_hybrid"
          />
        </div>

        <div className="title math-title">
          <h2>ریاضی</h2>
          <div className="under-line"></div>
        </div>
        <div className="d-flex row justify-content-evenly align-items-center">
          <Lesson
            id="10"
            name="ریاضی 1"
            lesson="math"
            image="https://cdn-icons-png.freepik.com/256/1739/1739515.png?semt=ais_hybrid"
          />
          <Lesson
            id="11"
            name="ریاضی 2"
            lesson="math"
            image="https://cdn-icons-png.flaticon.com/512/746/746960.png"
          />
          <Lesson
            id="12"
            name="ریاضی 3"
            lesson="math"
            image="https://cdn-icons-png.freepik.com/256/3655/3655612.png?semt=ais_hybrid"
          />
        </div>

        <div className="title geometry-title">
          <h2>هندسه</h2>
          <div className="under-line"></div>
        </div>
        <div className="d-flex row justify-content-evenly align-items-center">
          <Lesson
            id="10"
            name="هندسه 1"
            lesson="geometry"
            image="https://cdn-icons-png.freepik.com/512/4408/4408120.png"
          />
          <Lesson
            id="11"
            name="هندسه 2"
            lesson="geometry"
            image="https://cdn-icons-png.flaticon.com/512/3941/3941113.png"
          />
          <Lesson
            id="12"
            name="هندسه 3"
            lesson="geometry"
            image="https://cdn-icons-png.flaticon.com/512/2322/2322659.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Lessons;
