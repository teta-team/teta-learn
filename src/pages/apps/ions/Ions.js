import { useEffect } from "react";
import data from "./data.json";

function IonsApp() {
  useEffect(() => {
    const atoms = data.atoms;
    const table = document.getElementById("table");
    table.innerHTML = "";
    atoms.map((atom) => {
      const box = `
                    <button class="box ${atom.group} ${
        atom.status == 0 ? "disallow" : ""
      }" id="${atom.atomicNum}">
                        <p class="group">${atom.tableGroup}</p>
                        <span>
                            <sub>${atom.atomicNum}</sub>
                            <h2>${atom.symbol}</h2>
                            <sup>${atom.ion == "#" ? "" : atom.ion}</sup>
                        </span>
                        <p>${atom.name}</p>
                    </button>
                `;
      table.innerHTML += box;
    });

    const firstBox = document.getElementById("first-box");
    const secondBox = document.getElementById("second-box");
    const resultLeft = document.getElementById("left");
    const resultRight = document.getElementById("right");
    const buttons = document.querySelectorAll(".box");
    let firstSelected = null;
    let firstIon = null;
    let secondIon = null;
    let firstLastLayer = null;
    let secondLastLayer = null;

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const symbol = button.querySelector("h2").textContent;
        const ion = button.querySelector("sup").textContent;
        const lastLayer = button.querySelector(".group").textContent;
        if (button.classList.contains("disallow")) {
          alert("پیوند یونی تشکیل نمیدهد");
        } else {
          if (!firstSelected) {
            firstSelected = symbol;
            firstBox.textContent = symbol;
            firstIon = ion;
            firstLastLayer = lastLayer;
          } else {
            secondBox.textContent = symbol;
            secondIon = ion;
            secondLastLayer = lastLayer;
          }
        }
      });
      button.addEventListener("contextmenu", (e) => {
        const atomicNum = button.querySelector("sub").textContent;
        e.preventDefault();
        window.location = `/chemistry/ion/details?atomicNum=${atomicNum}`;
      });
    });

    const invokerButton = document.getElementById("invoker");
    invokerButton.addEventListener("click", () => {
      if (firstSelected && secondBox.textContent) {
        if (firstIon === secondIon) {
          resultLeft.textContent = "این دو عنصر پیوند یونی تشکیل نمی دهند";
          resultRight.textContent = "";
        } else if (
          firstBox.textContent === "H" ||
          secondBox.textContent === "H"
        ) {
          if (firstBox.textContent === "H") {
            resultLeft.innerHTML = secondBox.textContent;
            resultRight.innerHTML = `H<sub>${
              secondIon[0] == 1 ? "" : secondIon[0]
            }</sub>`;
          } else if (secondBox.textContent === "H") {
            resultLeft.innerHTML = firstBox.textContent;
            resultRight.innerHTML = `H<sub>${
              firstIon[0] == 1 ? "" : firstIon[0]
            }</sub>`;
          }
        } else if (firstIon === secondIon) {
          resultLeft.textContent = "این دو عنصر پیوند یونی تشکیل نمی دهند";
          resultRight.textContent = "";
        } else if (firstIon[1] === secondIon[1]) {
          resultLeft.textContent = "این دو عنصر پیوند یونی تشکیل نمی دهند";
          resultRight.textContent = "";
        } else {
          if (firstIon[0] == secondIon[0]) {
            if (firstLastLayer < secondLastLayer) {
              resultLeft.textContent = firstBox.textContent;
              resultRight.textContent = secondBox.textContent;
            } else {
              resultLeft.textContent = secondBox.textContent;
              resultRight.textContent = firstBox.textContent;
            }
          } else if (
            firstIon[0] - secondIon[0] < 3 ||
            firstIon[0] - secondIon[0] > -3
          ) {
            if (firstLastLayer < secondLastLayer) {
              resultLeft.innerHTML = `${firstBox.textContent}<sub>${
                secondIon[0] == 1 ? "" : secondIon[0]
              }</sub>`;
              resultRight.innerHTML = `${secondBox.textContent}<sub>${
                firstIon[0] == 1 ? "" : firstIon[0]
              }</sub>`;
            } else {
              resultLeft.innerHTML = `${secondBox.textContent}<sub>${
                firstIon[0] == 1 ? "" : firstIon[0]
              }</sub>`;
              resultRight.innerHTML = `${firstBox.textContent}<sub>${
                secondIon[0] == 1 ? "" : secondIon[0]
              }</sub>`;
            }
          }
        }
      } else {
        resultLeft.textContent = "لطفا دو عنصر انتخاب کنید";
        resultRight.textContent = "";
      }
    });

    const clear = document.getElementById("clear");
    clear.addEventListener("click", () => {
      resultLeft.innerHTML = "";
      resultRight.innerHTML = "";
      firstBox.innerHTML = "";
      secondBox.innerHTML = "";
      firstSelected = null;
      firstIon = null;
      secondIon = null;
      firstLastLayer = null;
      secondLastLayer = null;
    });
  }, []);
  return (
    <div id="ions">
      <div id="invoke">
        <div>
          <p id="first-box" />
          <p style={{ margin: "0 3px" }}>+</p>
          <p id="second-box" />
          <p> = </p>
          <div id="result">
            <p id="left" />
            <p id="right" />
          </div>
        </div>
        <div className="buttons">
          <button id="clear">پاک کردن</button>
          <button id="invoker">ترکیب</button>
        </div>
      </div>
      <div id="table" />
    </div>
  );
}

export default IonsApp;
