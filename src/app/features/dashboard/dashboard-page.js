import { Timer } from "../../components/timer/timer";
import { Greetings } from "../../components/greetings/greetings"; 
import { skeleton } from "./dashboard-ui";
import { Background } from '../../components/background/background';

export class DashboardPage {
  constructor({selector = null, email = null, auth = null}) {
    this.root = selector;
    this.email = email;
    this.auth = auth;
    this.loadUI();
    this.loadEventsUI();
    new Timer('timer');
    new Greetings({root: this.root + ' h1', email: this.email})
    new Background({root: this.root});
  }

  loadUI() {
    document.querySelector(this.root).innerHTML = `
      ${skeleton({email: this.email})}
    `;
  }

  loadEventsUI() {
    document.querySelector(this.root + ' button').addEventListener('click', async (e) => {
      await this.auth.signOut().catch(err => err);
    })
  }
}