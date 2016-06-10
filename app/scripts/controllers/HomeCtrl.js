(function() {
    function HomeCtrl() {
    	console.log('hello');
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', HomeCtrl);
})();