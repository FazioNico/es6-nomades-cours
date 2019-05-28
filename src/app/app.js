import { LoginPage } from './features/login/login-page';
import { DashboardPage } from './features/dashboard/dashboard-page';
import '../theme/colors.css';
import '../theme/styles.css';

export class MyApp{
  constructor({selector = null}) {
    this.root = selector;
    console.log('hello');
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyCs35yK8j8Bvr4wjNL1zaOs5ohO4p-LTOw",
      authDomain: "fir-fb-ba1f3.firebaseapp.com",
      databaseURL: "https://fir-fb-ba1f3.firebaseio.com",
      projectId: "fir-fb-ba1f3",
      storageBucket: "fir-fb-ba1f3.appspot.com",
      messagingSenderId: "989834761689",
      appId: "1:989834761689:web:69e12fde7f619e13"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // utilisation de fb realtime db
    this.database = firebase.database();
    this.auth = firebase.auth();
    this.googleProvider = new firebase.auth.GoogleAuthProvider();

  }
  start() {

    this.auth.onAuthStateChanged((user) => {
      if (user) {
        new DashboardPage({
          selector: this.root,
          email: user.email,
          auth: this.auth
        })
      }
      else {
        new LoginPage({
          selector: this.root,
          auth: this.auth,
          googleProvider: this.googleProvider
        });
      }
    });
    
  }
}
new MyApp({selector: 'app'}).start();