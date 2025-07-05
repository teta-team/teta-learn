import { useRef } from "react";
// import supabase from "../supabase";

function Contact() {
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const lessonRef = useRef(null);
  const textRef = useRef(null);

  async function handleClick() {
    const userName = nameRef.current.value;
    const userPhone = phoneRef.current.value;
    const userEmail = emailRef.current.value;
    const userLesson = lessonRef.current.value;
    const userText = textRef.current.value;

    if (
      userName === "" ||
      userPhone === "" ||
      userEmail === "" ||
      userText === ""
    ) {
      alert("لطفا مقادیر لازم را پر کنید!");
    } else {
      // const { data, error } = await supabase
      //   .from("requests")
      //   .insert([
      //     {
      //       name: userName,
      //       phone: userPhone,
      //       email: userEmail,
      //       lesson: userLesson,
      //       text: userText,
      //     },
      //   ])
      //   .select();

      nameRef.current.value = "";
      phoneRef.current.value = "";
      emailRef.current.value = "";
      lessonRef.current.value = "ریاضی";
      textRef.current.value = "";

      alert("درخواست شما ارسال شد");
    }
  }

  return (
    <div className="contact">
      <div className="container">
        <div className="board">
          <div className="title">
            <div className="befor-text"></div>
            <div className="text">
              <h1>نظرات و پیشنهادات خود را با ما به اشتراک بگذارید</h1>
            </div>
            <div className="after-text"></div>
          </div>
          <div className="screen">
            <div className="top"></div>
            <div className="right">
              <div className="inputs">
                <label>
                  <input
                    type="text"
                    placeholder="نام و نام خانوادگی"
                    ref={nameRef}
                    required
                  ></input>
                </label>
                <label>
                  <input
                    type="tel"
                    placeholder="شماره تلفن"
                    ref={phoneRef}
                    required
                  ></input>
                </label>
                <label>
                  <input
                    type="email"
                    placeholder="ایمیل"
                    ref={emailRef}
                    required
                  ></input>
                </label>
                <select ref={lessonRef}>
                  <option>ریاضی</option>
                  <option>هندسه</option>
                  <option>شیمی</option>
                  <option>فیزیک</option>
                  <option>سایر</option>
                </select>
              </div>
              <textarea
                placeholder="توضیحات را بنویسید"
                ref={textRef}
                required
              ></textarea>
              <button type="submit" onClick={handleClick}>
                ارسال
              </button>
            </div>
            <div className="left">
              <img
                src="./assets/images/Sent Message-cuate.svg"
                alt="ارتباط با ما"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
