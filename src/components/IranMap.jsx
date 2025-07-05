import React, { useState, useEffect } from "react";
import iranProvinces from "../data/iranProvinces";
import iranBorder, { caspianD, persianGulfD } from "../data/IranMapData";
import styles from "../assets/css/IranMap.module.css";

const useMouse = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handle(e) {
      setMousePosition({
        x: e.pageX,
        y: e.pageY,
      });
    }
    const mapEffect = document.querySelector("svg");
    mapEffect.addEventListener("mousemove", handle);
    return () => document.removeEventListener("mousemove", handle);
  }, [setMousePosition]);

  return mousePosition;
};

const IranMap = ({ onProvinceSelect }) => {
  const { x, y } = useMouse();
  const [provinces] = useState(() => iranProvinces);
  const [provinceName, setProvinceName] = useState("");
  const [mapZoom, setMapZoom] = useState(false);
  const [selectedProvince, setSelectedProvince] = useState(null);

  const handleProvinceClick = (provinceId) => {
    setSelectedProvince(provinceId);
    const province = provinces.find((p) => p.id === provinceId);
    if (onProvinceSelect && province) {
      onProvinceSelect(province.name);
    }
  };

  useEffect(() => {
    if (selectedProvince) {
      const province = provinces.find((p) => p.id === selectedProvince);
      console.log("استان انتخاب شده:", province?.name);
    }
  }, [selectedProvince]);

  return (
    <div className="iran-map">
      <span
        className={styles.show_title}
        style={{
          left: `${x + 5}px`,
          top: `${y + 5}px`,
          zIndex: 999,
        }}
      >
        {provinceName}
      </span>

      <div className={styles.container}>
        <div className={styles.map}>
          <button
            className={
              mapZoom
                ? `${styles.zoom_btn} ${styles.zoom_out}`
                : `${styles.zoom_btn} ${styles.zoom_in}`
            }
            onClick={() => setMapZoom(!mapZoom)}
          />
          <svg
            className={
              mapZoom ? `${styles.svg} ${styles.map_zoom}` : styles.svg
            }
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="20 0 970 960"
            enableBackground="new 20 0 970 960"
            xmlSpace="preserve"
          >
            <g className={styles.border}>
              <path className={styles.iran} d={iranBorder} />
            </g>
            <g className={styles.province}>
              {provinces.map((province) => (
                <path
                  key={province.id}
                  className={`${province.className} ${
                    selectedProvince === province.id ? styles.selected : ""
                  }`}
                  d={province.d}
                  onMouseOver={() => setProvinceName(province.name)}
                  onMouseLeave={() => setProvinceName("")}
                  onClick={() => handleProvinceClick(province.id)}
                />
              ))}
            </g>
            <g className={styles.sea}>
              <path className={styles.caspian} d={caspianD} />
              <path
                className={styles.persian_gulf}
                onMouseOver={() => setProvinceName("جزایر خلیج فارس")}
                onMouseLeave={() => setProvinceName("")}
                d={persianGulfD}
              />
            </g>
            <g className={styles.lake}>
              <path
                className={styles.jazmourian}
                d="M735.39 728.39C739.32 725.48 744.5 726.12 749.09 726.06C748.87 730.23 748.85 734.76 746.25 738.27C744.31 740.9 742.24 743.89 739.07 745.09C735.82 743 735.87 738.59 734.78 735.26C734.53 733.01 733.02 729.97 735.39 728.39Z"
              />
              <path
                className={styles.qom}
                d="M392.53 316.41C396.15 319.51 400.05 322.33 403.25 325.88C405.56 328.37 405.6 331.94 406.17 335.09C399.76 335.2 393.56 333.51 387.51 331.56C390.12 326.86 392.05 321.79 392.53 316.41Z"
              />
              <path
                className={styles.urmia}
                d="M70.94 100.38C76.66 94.04 88.01 97.27 90.48 105.14C89.12 111.83 86.35 118.54 87.47 125.5C88.3 127.83 90.56 129.3 92.62 130.47C95.27 131.9 98.3 130.53 101.12 130.96C104.02 131.89 105.83 134.55 107.85 136.66C105.87 138.36 103.19 140.92 105.12 143.69C109.33 148.8 115.47 152.4 118.27 158.65C118.78 159.5 118.71 160.29 118.05 161.03C115.6 163.09 112.39 164.01 109.96 166.1C109.61 169.05 109.9 172.04 109.99 175C107 174.4 103.25 174.51 101.33 171.69C96.74 164.74 92.82 157.11 86.45 151.56C83.31 148.97 83.19 144.67 81.91 141.1C80.21 136.23 78.11 131.51 76.67 126.55C75.23 125.31 73.66 124.19 72.49 122.68C71.82 120.64 71.96 118.4 72.41 116.33C73.48 112.43 78.57 111.08 79.29 107.06C79.94 102.3 74.03 101.97 70.94 100.38Z"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default IranMap;
