import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="autoresize"
export default class extends Controller {
  resize(e) {
    this.element.style.height = "auto";
    this.element.style.height = (this.element.scrollHeight) + 'px';
  }
}
