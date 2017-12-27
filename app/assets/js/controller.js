var config = {
  apiKey: "AIzaSyCNmQrhhe0sMBVO1KgDveaTpCF4HdIM8Mg",
  authDomain: "miapp-ceb53.firebaseapp.com",
  databaseURL: "https://miapp-ceb53.firebaseio.com",
  projectId: "miapp-ceb53",
  storageBucket: "",
  messagingSenderId: "280292452420"
};
firebase.initializeApp(config);

var app = angular.module("myApp", ["ngRoute", "firebase"]);

app.controller("tutorialCtrl", function ($scope) {

  $(document).ready(function () {
    function autoplay() {
      $('.carousel.carousel-slider').carousel({fullWidth: true});
      $('.carousel.carousel-slider').carousel('next');
      setTimeout(autoplay, 4500);
    }
    autoplay();
    console.log("funciona");
  });

});

app.controller("registrarseCtrl", function ($scope, $rootScope, $location) {
  console.log("registrate");
});

app.controller("iniciarsesionCtrl", function ($scope, $rootScope, $location) {
  console.log("inicia sesión");
});
