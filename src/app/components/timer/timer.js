export class Timer {

  constructor(selector) {
    this.root = selector;
    this.displayTme();
    this.interval = setInterval(_=> this.displayTme(), 1000)
  } 


  displayTme() {
    // get current dateTime
    let dateTime = new Date();
    // write into time HTMLelement
    const time = document.getElementById(this.root);
    if (!time) {
      return clearInterval(this.interval);
    }
    time.innerHTML = dateTime.toLocaleTimeString();
 
  }
}