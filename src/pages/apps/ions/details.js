import { useEffect, useState } from "react";
import data from "./data.json";
import "../../../assets/css/App.css"

function IonDetails() {
  function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  const atomicNum = getQueryParam("atomicNum");
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const atom = data.atoms.find((a) => a.atomicNum == atomicNum);
    document.title = `اطلاعات اتم ${atom.name}`;
    if (atom) {
      const electronConfigurations = data.electronConfigurations;
      const configuration = electronConfigurations[atom.atomicNum];
      let circles = "";
      switch (atom.tableGroup) {
        case 1:
          circles = `
            <div class="g-box">
              <div class="circle"></div>
            </div>
          `;
          break;
        case 2:
          circles = `
            <div class="g-box">
              <div class="circle"></div>
            </div>
            <div class="g-box">
              <div class="circle"></div>
            </div>
          `;
          break;
        case 3:
          circles = `
            <div class="g-box">
              <div class="circle"></div>
            </div>
            <div class="g-box">
              <div class="circle"></div>
            </div>
            <div class="g-box">
              <div class="circle"></div>
            </div>
          `;
          break;
        case 4:
          circles = `
            <div class="g-box">
              <div class="circle"></div>
            </div>
            <div class="g-box">
              <div class="circle"></div>
            </div>
            <div class="g-box">
              <div class="circle"></div>
            </div>
            <div class="g-box">
              <div class="circle"></div>
            </div>
          `;
          break;
        case 5:
          circles = `
            <div class="g-box">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
            <div class="g-box">
              <div class="circle"></div>
            </div>
            <div class="g-box">
              <div class="circle"></div>
            </div>
            <div class="g-box">
              <div class="circle"></div>
            </div>
          `;
          break;
        case 6:
          circles = `
            <div class="g-box">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
            <div class="g-box">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
            <div class="g-box">
              <div class="circle"></div>
            </div>
            <div class="g-box">
              <div class="circle"></div>
            </div>
          `;
          break;
        case 7:
          circles = `
            <div class="g-box">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
            <div class="g-box">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
            <div class="g-box">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
            <div class="g-box">
              <div class="circle"></div>
            </div>
          `;
          break;
        case 8:
          circles = `
            <div class="g-box">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
            <div class="g-box">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
            <div class="g-box">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
            <div class="g-box">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          `;
          break;
      }

      const details = `
        <div class="details">
          <div class = "box">
            <h2>${atom.symbol}</h2>
            <div class="nums">
              <sup>${atom.symbol == "H" ? 1 : atom.atomicNum * 2}</sup>
              <sub>${atom.atomicNum}</sub>
            </div>
          </div>
          <div class="name">
            <h1>نام اتم: ${atom.name}</h1>
          </div>
          <div class="layers">
            <h1>زیر لایه های اتم ${atom.name}:</h1>
            <p>${configuration ? configuration : "error"}</p>
            <h2>دسته: ${atom.group}</h2>
          </div>
          <div class="teif">
            <h1>طیف نشری اتم ${atom.name}: </h1>
            <img id="spectrum-image" src="${
              atom.spectrum
            }" onload="showDetails()" />
          </div>
          <div class="lweis">
            <h1>ساختار الکترون نقطه ای اتم ${atom.name}: </h1>
            <div class="shape">
              <h2>${atom.symbol}</h2>
              ${circles}
            </div>
          </div>
        </div>
      `;

      document.getElementById("details").innerHTML = details;
      window.showDetails = () => {
        document.getElementById("details").style.display = "block";
        setLoader(false);
      };
    } else {
      console.error("Atom not found");
    }
  }, []);

  return (
    <>
      {loader ? (
        <div id="loader-box">
          <div class="loader"></div>
        </div>
      ) : (
        ""
      )}
      <div id="details" style={{ display: "none" }}></div>
    </>
  );
}

export default IonDetails;
