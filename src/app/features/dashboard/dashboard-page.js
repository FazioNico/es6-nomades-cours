import { Timer } from "../../components/timer/timer";


export class DashboardPage {
  constructor({selector = null, email = null}) {
    this.root = selector;
    this.email = email;
    this.loadUI();
    new Timer('timer');
  }

  loadUI() {
    document.querySelector(this.root).innerHTML = `
      <div id="timer">13h</div>
      <h1>Hello ${this.email}</h1>
    `;
  }

}