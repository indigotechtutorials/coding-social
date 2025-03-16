import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="slides"
export default class extends Controller {
  static targets = ["slide"]
  static values = { currentSlide: { type: Number, default: 0 }}
  
  currentSlideValueChanged() {
    this.showCurrentSlide()
  }
  
  showCurrentSlide() {
    this.slideTargets.forEach((target, idx) => {
      console.log("Checking idx for", idx, (idx == this.currentSlideValue))
      if (idx == this.currentSlideValue) {
        target.classList.remove("hidden")
      } else {
        if (!target.classList.contains("hidden")) {
          target.classList.add("hidden")
        }
      }
    })
  }

  previous(e) {
    e.preventDefault()
    if (this.currentSlideValue == 0) {
      this.currentSlideValue = this.maxSlide
    } else {
      this.currentSlideValue -= 1
    }
  }

  next(e) {
    e.preventDefault()
    if (this.currentSlideValue == this.maxSlide) {
      this.currentSlideValue = 0
    } else {
      this.currentSlideValue += 1
    }   
  }

  get maxSlide() {
    return (this.slideTargets.length - 1)
  }
}
