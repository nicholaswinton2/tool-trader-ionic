angular.module('ionicApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "partials/tabs.html"
    })
    .state('tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "partials/home.html",
        }
        // 'search': {
        //   templateUrl: "partials/navsearch.html"
        // }
      }
    })
    .state('tabs.toolRental', {
      url: "/toolRental",
      views: {
        'home-tab': {
          templateUrl: "partials/toolRental.html"
        }
      }
    })
    .state('tabs.facts2', {
      url: "/facts2",
      views: {
        'home-tab': {
          templateUrl: "partials/facts2.html"
        }
      }
    })
    .state('tabs.messages', {
      url: "/messages",
      views: {
        'messages-tab': {
          templateUrl: "partials/messages.html"
        }
      }
    })
    .state('tabs.navstack', {
      url: "/navstack",
      views: {
        'messages-tab': {
          templateUrl: "partials/nav-stack.html"
        }
      }
    })
    .state('tabs.profile', {
      url: "/profile",
      views: {
        'profile-tab': {
          templateUrl: "partials/profile.html"
        }
      }
    })
    .state('tabs.calendar', {
      url: "/calendar",
      views: {
        'calendar-tab': {
          templateUrl: "partials/calendar.html"
        }
      }
    });

   $urlRouterProvider.otherwise("/tab/home");

})
