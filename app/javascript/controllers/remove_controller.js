import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="remove"
export default class extends Controller {
  removeWhenConfirm(e) {
    if (confirm("Are you sure you want to remove this element?") == true) {
      this.element.remove()
    }
  }
}
