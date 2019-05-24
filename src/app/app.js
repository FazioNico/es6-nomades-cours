
class MyApp{
  constructor({selector = null}) {
    this.root = selector
  }

  start() {
    new LoginPage({selector: this.root})
  }
}

class LoginPage {
  constructor({selector = null}) {
    this.root = selector;
    this.loadUI();
    this.loadEventUI();
  }

  loadUI() {
    document.querySelector(this.root).innerHTML = `
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

class DashboardPage {
  constructor({selector = null, email = null}) {
    this.root = selector;
    this.email = email;
    this.loadUI();
  }

  loadUI() {
    document.querySelector(this.root).innerHTML = `
      <h1>Hello ${this.email}</h1>
    `;
  }
}

new MyApp({selector: 'app'}).start();