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
            image="/assets/images/physics2.png"
          />
          <Lesson
            id="11"
            name="فیزیک 2"
            lesson="physics"
            image="/assets/images/physics.png"
          />
          <Lesson
            id="12"
            name="فیزیک 3"
            lesson="physics"
            image="/assets/images/physics1.png"
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
            image="/assets/images/chemistry1.png"
          />
          <Lesson
            id="11"
            name="شیمی 2"
            lesson="chemistry"
            image="/assets/images/chemistry2.png"
          />
          <Lesson
            id="12"
            name="شیمی 3"
            lesson="chemistry"
            image="/assets/images/chemistry.png"
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
            image="/assets/images/math2.png"
          />
          <Lesson
            id="11"
            name="ریاضی 2"
            lesson="math"
            image="/assets/images/math.png"
          />
          <Lesson
            id="12"
            name="ریاضی 3"
            lesson="math"
            image="/assets/images/math1.png"
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
            image="/assets/images/geometry2.png"
          />
          <Lesson
            id="11"
            name="هندسه 2"
            lesson="geometry"
            image="/assets/images/geometry.png"
          />
          <Lesson
            id="12"
            name="هندسه 3"
            lesson="geometry"
            image="/assets/images/geometry1.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Lessons;
