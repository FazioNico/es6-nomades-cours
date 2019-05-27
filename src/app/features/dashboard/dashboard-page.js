

export class DashboardPage {
  constructor({selector = null, email = null}) {
    this.root = selector;
    this.email = email;
    this.loadUI();
  }

  loadUI() {
    document.querySelector(this.root).innerHTML = `
      <div id="timer></div>
      <h1>Hello ${this.email}</h1>
    `;
  }
}