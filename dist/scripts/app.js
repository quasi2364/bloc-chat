(function() {   
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
        });
        
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            });  
    }
    
    angular
        .module('blocChat', ['firebase', 'ui.router', 'ui.bootstrap'])
        .config(config);
})();

