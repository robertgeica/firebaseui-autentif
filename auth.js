const firebaseConfig = {
                apiKey: "AIzaSyA_tzhAFK61r5NrcXKrFst62SFFP884L7M",
                authDomain: "mylibrary-26c0e.firebaseapp.com",
                databaseURL: "https://mylibrary-26c0e.firebaseio.com",
                projectId: "mylibrary-26c0e",
                storageBucket: "mylibrary-26c0e.appspot.com",
                messagingSenderId: "990145479699",
                appId: "1:990145479699:web:e31e8d82262eeacb672be6"
            };

firebase.initializeApp(firebaseConfig);


const ui = new firebaseui.auth.AuthUI(firebase.auth());
const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult(authResult, redirectUrl) {
      return true;
    }
  },

  signInFlow: 'popup',
  signInSuccessUrl: './index.html',
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ],
};
ui.start('#firebaseui-auth-container', uiConfig);