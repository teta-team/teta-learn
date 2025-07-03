import Channel from "../components/Channels";
import User from "../components/Users";

function Chat() {
  return (
    <>
      <div className="chat container d-flex row justify-content-evenly">
        <div className="Channels ">
          <div className="title d-flex row justify-content-center align-items-center">
            <h3>کانال ها</h3>
          </div>
          <ul>
            <Channel
              image="https://www.filimo.com/shot/wp-content/uploads/2022/05/spong-bob-03.jpg"
              name="باب اسفنجی"
            />
            <Channel
              image="https://www.filimo.com/shot/wp-content/uploads/2022/05/spong-bob-03.jpg"
              name="باب اسفنجی"
            />
            <Channel
              image="https://www.filimo.com/shot/wp-content/uploads/2022/05/spong-bob-03.jpg"
              name="باب اسفنجی"
            />
          </ul>
        </div>
        <div className="Message-section d-flex column justify-content-between">
          <div className="Messages ">
            <div className="title d-flex row justify-content-center align-items-center">
              <h3>پیام ها</h3>
            </div>

            <div className="Message">
              <div className="img-name d-flex row align-items-center ">
                <img src="https://cdn-icons-png.flaticon.com/512/10015/10015419.png" />
                <h4>امیرحسین شریفی</h4>
              </div>
              <div className="file">
                <h5>
                  زن شایع تو همه سختی هاش کنارش بود قبل ازدواجشون حتی موقع هایی
                  که رفیقای شایع منم مث زن شایع پشتتم خب حرف دلم اینه بهت نگفته
                  بودم و چون ادم رکی هستم تو صورتت میگم چه بخوای چه نخوای هم
                  نمیزارم جدا شیم بهوونه هم میتونم بگم چون شما خیلی میدونیدپشتس
                  نبودن
                </h5>
              </div>
            </div>
          </div>
          <div className="Send-section d-flex row justify-content-evenly">
            <input placeholder="پیام خود را وارد کنید"></input>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-mic"
                viewBox="0 0 16 16"
              >
                <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5" />
                <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3" />
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-paperclip"
                viewBox="0 0 16 16"
              >
                <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="Contacts">
          <div className="title d-flex row justify-content-center align-items-center">
            <h3>مخاطبین</h3>
          </div>
          <ul>
            <User
              image="https://api2.zoomg.ir/media/2020-8-c096e211-9250-4699-ac85-83a53d511ae9-66cc7d092b5676090d01cef9"
              name="پاتریک"
            />
          </ul>
        </div>
      </div>
    </>
  );
}

export default Chat;
