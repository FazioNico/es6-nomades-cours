import { DashboardPage } from '../dashboard/dashboard-page';

export class LoginPage {
  constructor({selector = null}) {
    this.root = selector;
    this.loadUI();
    this.loadEventUI();
  }

  loadUI() {
    document.querySelector(this.root).innerHTML = `
      <h1>Welcome</h1>
      <form>
        <input type="email" placeholder="email" value="fazio@aa.ch"><br/>
        <input type="password" placeholder="password"><br/>
        <button>login</button>
      </form>
    `;
  }

  loadEventUI() {
    document.querySelector(this.root + ' form').addEventListener('submit', e => this.login(e))
  }

  login(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type=email]').value;
    console.log(email);
    new DashboardPage({
      selector: this.root,
      email
    })
  }
}