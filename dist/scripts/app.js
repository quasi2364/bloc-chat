(function() {   
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
        });
        
        $stateProvider
            .state('state3', {
                url: '/collection',
                controller: 'CollectionCtrl as collection',
                templateUrl: '/templates/collection.html'
            });  
    }
    
    angular
        .module('bloctime', ['firebase', 'ui.router'])
        .config(config);
})();

