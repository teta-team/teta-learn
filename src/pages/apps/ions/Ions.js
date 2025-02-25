import { useState, useEffect } from "react";
import data from "./data.json";

function IonsApp() {
  const [firstSelected, setFirstSelected] = useState(null);
  const [secondSelected, setSecondSelected] = useState(null);
  const [firstIon, setFirstIon] = useState(null);
  const [secondIon, setSecondIon] = useState(null);
  const [firstLastLayer, setFirstLastLayer] = useState(null);
  const [secondLastLayer, setSecondLastLayer] = useState(null);
  const [resultLeft, setResultLeft] = useState("");
  const [resultRight, setResultRight] = useState("");

  const handleClick = (atom) => {
    if (atom.status === 0) {
      alert("پیوند یونی تشکیل نمیدهد");
      return;
    }

    if (!firstSelected) {
      setFirstSelected(atom.symbol);
      setFirstIon(atom.ion);
      setFirstLastLayer(atom.tableGroup);
    } else {
      setSecondSelected(atom.symbol);
      setSecondIon(atom.ion);
      setSecondLastLayer(atom.tableGroup);
    }
  };

  const handleContextMenu = (e, atomicNum) => {
    e.preventDefault();
    window.location = `/chemistry/ion/details?atomicNum=${atomicNum}`;
  };

  const handleCombine = () => {
    if (!firstSelected || !secondSelected) {
      setResultLeft("لطفا دو عنصر انتخاب کنید");
      setResultRight("");
      return;
    }

    if (
      (firstSelected === "H" && secondSelected === "O") ||
      (firstSelected === "O" && secondSelected === "H")
    ) {
      setResultLeft("");
      setResultRight("H<sub>2</sub>O");
      return;
    }

    if (firstIon === secondIon) {
      setResultLeft("این دو عنصر پیوند یونی تشکیل نمی دهند");
      setResultRight("");
    } else if (firstSelected === "H" || secondSelected === "H") {
      if (firstSelected === "H") {
        setResultLeft(secondSelected);
        setResultRight(
          `H${secondIon[0] === "1" ? "" : `<sub>${secondIon[0]}</sub>`}`
        );
      } else {
        setResultLeft(firstSelected);
        setResultRight(
          `H${firstIon[0] === "1" ? "" : `<sub>${firstIon[0]}</sub>`}`
        );
      }
    } else if (firstIon[1] === secondIon[1]) {
      setResultLeft("این دو عنصر پیوند یونی تشکیل نمی دهند");
      setResultRight("");
    } else {
      if (firstIon[0] === secondIon[0]) {
        setResultLeft(
          firstLastLayer < secondLastLayer ? firstSelected : secondSelected
        );
        setResultRight(
          firstLastLayer < secondLastLayer ? secondSelected : firstSelected
        );
      } else if (Math.abs(firstIon[0] - secondIon[0]) < 3) {
        setResultLeft(
          `${firstSelected}${
            secondIon[0] === "1" ? "" : `<sub>${secondIon[0]}</sub>`
          }`
        );
        setResultRight(
          `${secondSelected}${
            firstIon[0] === "1" ? "" : `<sub>${firstIon[0]}</sub>`
          }`
        );
      }
    }
  };

  const handleClear = () => {
    setFirstSelected(null);
    setSecondSelected(null);
    setFirstIon(null);
    setSecondIon(null);
    setFirstLastLayer(null);
    setSecondLastLayer(null);
    setResultLeft("");
    setResultRight("");
  };

  return (
    <div id="ions">
      <div id="invoke">
        <div>
          <p id="first-box">{firstSelected}</p>
          <p style={{ margin: "0 3px" }}>+</p>
          <p id="second-box">{secondSelected}</p>
          <p>=</p>
          <div id="result">
            <p id="left" dangerouslySetInnerHTML={{ __html: resultLeft }} />
            <p id="right" dangerouslySetInnerHTML={{ __html: resultRight }} />
          </div>
        </div>
        <div className="buttons">
          <button id="clear" onClick={handleClear}>
            پاک کردن
          </button>
          <button id="invoker" onClick={handleCombine}>
            ترکیب
          </button>
        </div>
      </div>

      <div id="table">
        {data.atoms.map((atom) => (
          <button
            key={atom.atomicNum}
            className={`box ${atom.group} ${
              atom.status === 0 ? "disallow" : ""
            }`}
            id={atom.atomicNum}
            onClick={() => handleClick(atom)}
            onContextMenu={(e) => handleContextMenu(e, atom.atomicNum)}
          >
            <p className="group">{atom.tableGroup}</p>
            <span>
              <sub>{atom.atomicNum}</sub>
              <h2>{atom.symbol}</h2>
              <sup>{atom.ion === "#" ? "" : atom.ion}</sup>
            </span>
            <p>{atom.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default IonsApp;
