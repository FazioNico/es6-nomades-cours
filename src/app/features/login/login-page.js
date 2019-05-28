export class LoginPage {
  constructor({selector = null, auth = null, googleProvider = null}) {
    this.root = selector;
    this.auth = auth;
    this.googleProvider = googleProvider;
    this.loadUI();
    this.loadEventUI()
  }

  loadUI() { 
    document.body.style.background = `none`;
    document.querySelector(this.root).innerHTML = `
      <h1>Welcome to an awesome app</h1>
      <button>login / signin</button>
    `;
  }

  loadEventUI() {
    document.querySelector(this.root + ' button').addEventListener('click', _ => this.login())
  }

  login() {
    this.auth.signInWithPopup(this.googleProvider)
        .then((result)=> {
          // This gives you a Google Access Token.
          // You can use it to access the Google API.
          let token = result.credential.accessToken;
          // The signed-in user info.
          let user = result.user;
          console.log('--->', user);
          // ...
        }).catch((error)=> {
          console.log('--->', error);
          // Handle Errors here.
          let errorCode = error.code;
          let errorMessage = error.message;
          // The email of the user's account used.
          let email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          let credential = error.credential;
          alert(errorMessage);
          // ...
        });
  }
}