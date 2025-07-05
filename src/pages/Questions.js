import IranMap from "../components/IranMap";
import { useState } from "react";

function Questions() {
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleCategoriesHeight = () => {
    setIsMinimized(!isMinimized);
  };


  return (
    <div className="questions">
      <div className="container">
        {/* بخش بالایی (جستجو و مپ) */}
        <div className="hero d-flex row justify-content-between">
          <div className="search-part d-flex column justify-content-evenly align-items-center">
            <h1>
              سوالات <span>استان </span>خود را بیابید
            </h1>
            <div className="input">
              <input placeholder="نام استان را وارد کنید" />
            </div>
          </div>
          <div className="Map"></div>
        </div>

        {/* بخش اصلی صفحه */}
        <div className="second-part d-flex row justify-content-evenly">
          {/* بخش سمت راست (دسته‌بندی) */}
          <div
            className="right"
            style={{
              height: !isMinimized ? "10px" : "auto",
              overflow: "hidden",
              transition: "height 0.3s ease",
              
            }}
          >
            <h2 onClick={toggleCategoriesHeight} style={{ cursor: "pointer" }}>
              دسته بندی :
            </h2>
            <div className="Lessons d-flex column justify-content-evenly">
              <button>ریاضی</button>
              <button>فیزیک</button>
              <button>شیمی</button>
              <button>زیست</button>
              <button>هندسه</button>
            </div>
            <div className="Map">
              <IranMap />
            </div>
          </div>

          {/* بخش سمت چپ (فیلترها و کارت‌ها) */}
          <div className="left d-flex column">
            <div className="categories d-flex row justify-content-between">
              <div className="model d-flex row">
                <button>ترم یک</button>
                <button>ترم دو</button>
              </div>
              <div className="year">
                <select>
                  <option>1403-1404</option>
                  <option>1402-1403</option>
                  <option>1401-1402</option>
                  <option>1400-1401</option>
                  <option>1399-1400</option>
                </select>
              </div>
              <div className="files d-flex row justify-content-evenly f-wrap">
                <div className="box">
                  <img src="https://www.urduinc.com/Content/assets/images/encyclopedia/25.jpg" />
                  <h3>نام دبیر : رضا اسدی</h3>
                  <h3>نام مدرسه : هاروارد</h3>
                  <h3>نوع امتحان : ترم دو - داخلی</h3>
                  <div className="buttons">
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-eye"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                      </svg>
                    </button>
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-download"
                        viewBox="0 0 16 16"
                      >
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="box">
                  <img src="https://www.urduinc.com/Content/assets/images/encyclopedia/25.jpg" />
                  <h3>نام دبیر : رضا اسدی</h3>
                  <h3>نام مدرسه : هاروارد</h3>
                  <h3>نوع امتحان : ترم دو - داخلی</h3>
                  <div className="buttons">
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-eye"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                      </svg>
                    </button>
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-download"
                        viewBox="0 0 16 16"
                      >
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="box">
                  <img src="https://www.urduinc.com/Content/assets/images/encyclopedia/25.jpg" />
                  <h3>نام دبیر : رضا اسدی</h3>
                  <h3>نام مدرسه : هاروارد</h3>
                  <h3>نوع امتحان : ترم دو - داخلی</h3>
                  <div className="buttons">
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-eye"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                      </svg>
                    </button>
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-download"
                        viewBox="0 0 16 16"
                      >
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="box">
                  <img src="https://www.urduinc.com/Content/assets/images/encyclopedia/25.jpg" />
                  <h3>نام دبیر : رضا اسدی</h3>
                  <h3>نام مدرسه : هاروارد</h3>
                  <h3>نوع امتحان : ترم دو - داخلی</h3>
              <div className="class">
                <select>
                  <option>دهم</option>
                  <option>یازدهم</option>
                  <option>دوازدهم</option>
                </select>
              </div>
              <div className="Scientific-field">
                <select>
                  <option>ریاضی-فیزیک</option>
                  <option>تجربی</option>
                  <option>انسانی</option>
                </select>
              </div>
            </div>

            <div className="files d-flex row justify-content-evenly f-wrap">
              {/* کارت‌های نمونه */}
              {[1, 2, 3, 4].map((item) => (
                <div className="box" key={item}>
                  <img
                    src="https://www.urduinc.com/Content/assets/images/encyclopedia/25.jpg"
                    alt="نمونه سوال"
                  />
                  <h3>نام دبیر: رضا اسدی</h3>
                  <h3>نام مدرسه: طالقانی</h3>
                  <h3>نوع امتحان: ترم دو - داخلی</h3>
                  <div className="buttons">
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-eye"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                      </svg>
                    </button>
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-download"
                        viewBox="0 0 16 16"
                      >
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questions;
