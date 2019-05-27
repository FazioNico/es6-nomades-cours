export class Timer {

  constructor(selector) {
    this.root = selector;
    this.displayTme();
    setInterval(_=> this.displayTme(), 1000)
  } 


  displayTme() {
    // get current dateTime
    let dateTime = new Date();
    // write into time HTMLelement
    const time = document.getElementById(this.root);
    time.innerHTML = dateTime.toLocaleTimeString();
 
  }
}