import React, { useEffect, useRef, useState } from "react";
import data from "./jerms.json";

function JermMoli() {
  const [mode, setMode] = useState("jtm");
  const atoms = Object.keys(data);
  const inputRef = useRef(null);
  const answerRef = useRef(null);
  const atomsBoxRef = useRef(null);
  const unitRef = useRef(null);

  const handleModeChange = (event) => {
    setMode(event.target.value);
    inputRef.current.value = "";
    answerRef.current.innerText = "";
  };

  useEffect(() => {
    const handleInputChange = () => {
      const num = parseFloat(inputRef.current.value);
      const atom = atomsBoxRef.current.value;
      const jerm = data[atom];
      const unit = unitRef.current.value;
      let result;

      if (isNaN(num)) {
        answerRef.current.innerText = "";
        return;
      }

      switch (mode) {
        case "jtm":
          result = unit === "g" ? num / jerm : (num * 1000) / jerm;
          if (result !== undefined) {
            answerRef.current.innerText = `${result.toFixed(3)} mol ${atom}`;
          }
          break;

        case "mtj":
          result = unit === "mol" ? num * jerm : "";
          if (result !== undefined) {
            answerRef.current.innerText = `${result.toFixed(3)} g ${atom} = ${(
              result / 1000
            ).toFixed(3)} kg ${atom}`;
          }
          break;

        case "atj":
          result = unit === "atom" ? num / (6.022 * 10 ** 23) : "";
          if (result !== undefined) {
            const base = result.toExponential().split("e");
            const coefficient = parseFloat(base[0]).toFixed(3);
            const exponent = parseInt(base[1]);
            answerRef.current.innerHTML = `${coefficient} × 10<sup>${exponent}</sup> mol${atom}`;
          }
          break;

        case "jta":
          result =
            unit === "g"
              ? (num * 6.022 * 10 ** 23) / jerm
              : (num * 60000 * 6.022 * 10 ** 23) / jerm;
          if (result !== undefined) {
            const base = result.toExponential().split("e");
            const coefficient = parseFloat(base[0]).toFixed(3);
            const exponent = parseInt(base[1]);
            answerRef.current.innerHTML = `${coefficient} × 10<sup>${exponent}</sup> atom${atom}`;
          }
          break;

        default:
          break;
      }
    };

    const currentInput = inputRef.current;
    if (currentInput) {
      currentInput.addEventListener("input", handleInputChange);
    }

    return () => {
      if (currentInput) {
        currentInput.removeEventListener("input", handleInputChange);
      }
    };
  }, [mode]);

  return (
    <div className="JermMoli">
      <div className="container d-flex column align-items-center">
        <div className="mode">
          <select onChange={handleModeChange} value={mode}>
            <option value="jtm">جرم به مول</option>
            <option value="mtj">مول به جرم</option>
            <option value="atj">اتم به مول</option>
            <option value="jta">جرم به اتم</option>
          </select>
        </div>
        <div className="body">
          <form className="d-flex row align-items-center">
            <input ref={inputRef} type="number" placeholder="مقدار" />
            <select ref={unitRef}>
              {mode === "jtm" && (
                <>
                  <option value="g">g</option>
                  <option value="kg">kg</option>
                </>
              )}
              {mode === "mtj" && <option value="mol">mol</option>}
              {mode === "atj" && <option value="atom">atom</option>}
              {mode === "jta" && (
                <>
                  <option value="g">g</option>
                  <option value="kg">kg</option>
                </>
              )}
            </select>
            <select ref={atomsBoxRef}>
              {atoms.map((atom, index) => (
                <option key={index} value={atom}>
                  {atom}
                </option>
              ))}
            </select>
            <span> = </span>
            <p ref={answerRef}></p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default JermMoli;
