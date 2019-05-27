import { LoginPage } from './features/login/login-page';
import '../theme/colors.css';
import '../theme/styles.css';
export class MyApp{
  constructor({selector = null}) {
    this.root = selector;
    console.log('hello');
    
  }
  start() {
    new LoginPage({selector: this.root})
  }
}
new MyApp({selector: 'app'}).start();