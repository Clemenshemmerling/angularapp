app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl : "assets/view/tutorial.html",
      controller: "tutorialCtrl"
    })
    .when("/registrarse", {
      templateUrl : "assets/view/registrarse.html",
      controller: "registrarseCtrl"
    })
    .when("/login", {
      templateUrl : "assets/view/iniciar-sesion.html",
      controller: "iniciarsesionCtrl"
    })
    .otherwise({
          redirectTo: '/'
    });
});
