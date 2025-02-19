import { useEffect } from "react";
import data from "./data.json";

function IonDetails() {
  function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  const atomicNum = getQueryParam("atomicNum");

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
      <h1>دسته: ${atom.group}</h1>
          </div>
          <div class="teif">
            <h1>طیف نشری اتم ${atom.name}: </h1>
            <img src="${atom.spectrum}" width="40%" />
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
      document.getElementById("details").innerHTML = "";
      document.getElementById("details").innerHTML += details;
    } else {
      console.error("Atom not found");
    }
  }, []);

  return <div id="details"></div>;
}

export default IonDetails;
