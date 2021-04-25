
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#btn-switch-normal").addEventListener("click", () => {
    const injectScript = `
      document.querySelector("body").style.filter = "";`;
    chrome.tabs.executeScript({ code: injectScript });

  });

  document
    .querySelector("#btn-switch-protanopia")
    .addEventListener("click", () => {
      const injectScript = `
    document.querySelector("body").style.filter = "url('#protanopia')";`;
      chrome.tabs.executeScript({ code: injectScript });

    });

  document
    .querySelector("#btn-switch-protanomaly")
    .addEventListener("click", () => {
      const injectScript = `
    document.querySelector("body").style.filter = "url('#protanomaly')";`;
      chrome.tabs.executeScript({ code: injectScript });

    });

  document
    .querySelector("#btn-switch-deuteranopia")
    .addEventListener("click", () => {
      const injectScript = `
    document.querySelector("body").style.filter = "url('#deuteranopia')";`;
      chrome.tabs.executeScript({ code: injectScript });

    });

  document
    .querySelector("#btn-switch-deuteranomaly")
    .addEventListener("click", () => {
      const injectScript = `
    document.querySelector("body").style.filter = "url('#deuteranomaly')";`;
      chrome.tabs.executeScript({ code: injectScript });

    });

  document
    .querySelector("#btn-switch-tritanopia")
    .addEventListener("click", () => {
      const injectScript = `
    document.querySelector("body").style.filter = "url('#tritanopia')";`;
      chrome.tabs.executeScript({ code: injectScript });
    });

  document
    .querySelector("#btn-switch-tritanomaly")
    .addEventListener("click", () => {
      const injectScript = `
    document.querySelector("body").style.filter = "url('#tritanomaly')";`;
      chrome.tabs.executeScript({ code: injectScript });

    });

  document
    .querySelector("#btn-switch-achromatopsia")
    .addEventListener("click", () => {
      const injectScript = `
    document.querySelector("body").style.filter = "url('#achromatopsia')";`;
      chrome.tabs.executeScript({ code: injectScript });

    });

  document
    .querySelector("#btn-switch-achromatomaly")
    .addEventListener("click", () => {
      const injectScript = `
    document.querySelector("body").style.filter = "url('#achromatomaly')";`;
      chrome.tabs.executeScript({ code: injectScript });

    });

  const injectFilterScript = `
      if (!document.querySelector("#colorize-filters")) {
          const f = document.createElement("div");
          f.id = "colorize-filters";
          f.style.display = "none";
          f.innerHTML = \`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
          <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1">
          <defs>
              <filter id="protanopia">
              <feColorMatrix
                  in="SourceGraphic"
                  type="matrix"
                  values="0.567, 0.433, 0,     0, 0
                          0.558, 0.442, 0,     0, 0
                          0,     0.242, 0.758, 0, 0
                          0,     0,     0,     1, 0"/>
              </filter>
              <filter id="protanomaly">
              <feColorMatrix
                  in="SourceGraphic"
                  type="matrix"
                  values="0.817, 0.183, 0,     0, 0
                          0.333, 0.667, 0,     0, 0
                          0,     0.125, 0.875, 0, 0
                          0,     0,     0,     1, 0"/>
              </filter>
              <filter id="deuteranopia">
              <feColorMatrix
                  in="SourceGraphic"
                  type="matrix"
                  values="0.625, 0.375, 0,   0, 0
                          0.7,   0.3,   0,   0, 0
                          0,     0.3,   0.7, 0, 0
                          0,     0,     0,   1, 0"/>
              </filter>
              <filter id="deuteranomaly">
              <feColorMatrix
                  in="SourceGraphic"
                  type="matrix"
                  values="0.8,   0.2,   0,     0, 0
                          0.258, 0.742, 0,     0, 0
                          0,     0.142, 0.858, 0, 0
                          0,     0,     0,     1, 0"/>
              </filter>
              <filter id="tritanopia">
              <feColorMatrix
                  in="SourceGraphic"
                  type="matrix"
                  values="0.95, 0.05,  0,     0, 0
                          0,    0.433, 0.567, 0, 0
                          0,    0.475, 0.525, 0, 0
                          0,    0,     0,     1, 0"/>
              </filter>
              <filter id="tritanomaly">
              <feColorMatrix
                  in="SourceGraphic"
                  type="matrix"
                  values="0.967, 0.033, 0,     0, 0
                          0,     0.733, 0.267, 0, 0
                          0,     0.183, 0.817, 0, 0
                          0,     0,     0,     1, 0"/>
              </filter>
              <filter id="achromatopsia">
              <feColorMatrix
                  in="SourceGraphic"
                  type="matrix"
                  values="0.299, 0.587, 0.114, 0, 0
                          0.299, 0.587, 0.114, 0, 0
                          0.299, 0.587, 0.114, 0, 0
                          0,     0,     0,     1, 0"/>
              </filter>
              <filter id="achromatomaly">
              <feColorMatrix
                  in="SourceGraphic"
                  type="matrix"
                  values="0.618, 0.320, 0.062, 0, 0
                          0.163, 0.775, 0.062, 0, 0
                          0.163, 0.320, 0.516, 0, 0
                          0,     0,     0,     1, 0"/>
              </filter>
          </defs>
          </svg>
          \`
          document.querySelector("body").appendChild(f);
      };
      `;
  chrome.tabs.executeScript({ code: injectFilterScript });
});