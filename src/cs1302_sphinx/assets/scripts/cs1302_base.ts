import * as bootstrap from "bootstrap";

interface Globals {
  tooltips: bootstrap.Tooltip[];
};

export const cs1302: Globals = {
  tooltips: [],
};

function enableToolTips(): void {
  const tooltipElements = Array.from(document.querySelectorAll("[data-bs-toggle=\"tooltip\"]"));
  for (const element of tooltipElements) {
    cs1302.tooltips.push(new bootstrap.Tooltip(element));
  };
};

export function main(): void {
  console.log("hello!");
  enableToolTips();
}; // main

document.addEventListener("DOMContentLoaded", main);
