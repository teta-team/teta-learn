function Contact() {
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
                  <input type="text" placeholder="نام و نام خانوادگی"></input>
                </label>
                <label>
                  <input type="tel" placeholder="شماره تلفن"></input>
                </label>
                <label>
                  <input type="email" placeholder="ایمیل"></input>
                </label>
                <select>
                  <option>ریاضی</option>
                  <option>هندسه</option>
                  <option>شیمی</option>
                  <option>فیزیک</option>
                  <option>سایر</option>
                </select>
              </div>
              <textarea placeholder="توضیحات را بنویسید"></textarea>
              <button type="submit">ارسال</button>
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
