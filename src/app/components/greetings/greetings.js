export class Greetings {
  constructor({root, email}) {
    this.root = root;
    this.email = email;
    this.display();
    setInterval(_=> this.display(), 60 * 60 * 100)
  }

  display() {
    const time = new Date();
    let greetings;
    switch (true) {
      case time.getHours() > 6 :
        greetings = 'Good morning';
        break;
      case time.getHours() > 12 :
        greetings = 'Hello';
        break;
      case time.getHours() > 20 :
        greetings = 'Good evening';
        break;
      default:
        greetings = 'Hello'
        break;
    }
    document.querySelector(this.root).innerHTML = `
      ${greetings} ${this.email}
    `;
  } 
}