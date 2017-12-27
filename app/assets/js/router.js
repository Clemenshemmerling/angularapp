app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl : "assets/view/tutorial.html",
      controller: "tutorialCtrl"
    })
    .otherwise({
          redirectTo: '/'
    });
});
