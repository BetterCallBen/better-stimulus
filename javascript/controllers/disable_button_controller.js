import { Controller } from "stimulus";

// Connects to data-controller="disable-button"
export default class extends Controller {
  static targets = ["resetBtn", "clickButton"];
  connect() {}

  disable(event) {
    event.currentTarget.innerText = "Bingo";
    event.currentTarget.classList.remove("btn-primary");
    this.resetBtnTarget.classList.remove("d-none");
  }

  reset() {
    this.resetBtnTarget.classList.add("d-none");
    this.clickButtonTarget.innerText = "Click me!";
    this.clickButtonTarget.classList.add("btn-primary");
  }
}
