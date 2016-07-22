var app = angular.module('myApp',['ui.router']);

app.config([
		'$stateProvider',
		'$urlRouterProvider',
		function($stateProvider, $urlRouterProvider){

			$stateProvider
				.state('home', {
					url: '/home',
					templateUrl: '/home.html',
					controller: 'homeCtrl'
				});
			$urlRouterProvider.otherwise('home');
		}]);

app.config([
		'$stateProvider',
		'$urlRouterProvider',
		function($stateProvider, $urlRouterProvider){

			$stateProvider
				.state('about', {
					url: '/about',
					templateUrl: '/about.html',
					controller: 'sliderCtrl'
				});
		}]);

app.config([
		'$stateProvider',
		'$urlRouterProvider',
		function($stateProvider, $urlRouterProvider){

			$stateProvider
				.state('contact', {
					url: '/contact',
					templateUrl: '/contact.html',
					controller: 'mainCtrl'
				});
		}]);

app.config([
		'$stateProvider',
		'$urlRouterProvider',
		function($stateProvider, $urlRouterProvider){

			$stateProvider
				.state('info', {
					url: '/info',
					templateUrl: '/info.html',
					controller: 'mainCtrl'
				});
		}]);

app.config([
		'$stateProvider',
		'$urlRouterProvider',
		function($stateProvider, $urlRouterProvider){

			$stateProvider
				.state('gallery', {
					url: '/gallery',
					templateUrl: '/gallery.html',
					controller: 'mainCtrl'
				});
		}]);

app.controller('sliderCtrl', ['$scope', function($scope){
	$scope.fxLogo = function(){
		$('.wp1').waypoint(function() {
			$('.wp1').addClass('animated fadeInLeft');
			}, {
				offset: '75%'
		});

		$('#featuresSlider').flickity({
			cellAlign: 'left',
			contain: true,
			prevNextButtons: false
		});

		$('#showcaseSlider').flickity({
			cellAlign: 'left',
			contain: true,
			prevNextButtons: false,
			imagesLoaded: true
		});
	}

	$scope.aboutBackground = function(){
		$('.texture-overlay')
			.fadeIn(4000)
			.css({ 'background': 'rgba(0, 21, 255, 0.1) url("img/diamond-light.png")', 'opacity' : '0.5' });
		$('body').css({ 
			'background': 'url("img/blur-bg.jpg")', 
			'background-size' : 'cover', 
			'background-repeat': 'no-repeat',
			'background-attachment': 'fixed'
		 });
	}


}]);

app.controller('navCtrl', ['$scope', function($scope){
	$scope.navToggle = function(){
		$(".nav-toggle").toggleClass("active");
		$(".overlay-boxify").toggleClass("open");
	}
}]);

app.controller('mainCtrl', ['$scope', function($scope){
	var audio = new Audio('http://incompetech.com/music/royalty-free/mp3-royaltyfree/Suave%20Standpipe.mp3');
	audio.volume = 0.2;

	$scope.loadPacks = function(){
		$('.wp2').waypoint(function() {
			$('.wp2').addClass('animated fadeInDown');
		}, {
			offset: '75%'
		});
	}

	$scope.soundStart = function() {
        audio.play();
	}

	$scope.hideAlertBox = function(){
		$('.alertBox').fadeOut(2000);
	}

}]);

app.controller('homeCtrl', ['$scope', function($scope){
	var comments = [
		{name: 'luis', city: 'oakland', comment: 'this is a really good ice cream parlor!!!'},
		{name: 'john', city: 'san leandro', comment: 'this is a really good ice cream parlor!!!'},
		{name: 'bernie', city: 'vallejo', comment: 'this is a really good ice cream parlor!!!'},
		{name: 'antio', city: 'san francisco', comment: 'this is a really good ice cream parlor!!!'},
		{name: 'lopez', city: 'san jose', comment: 'this is a really good ice cream parlor!!!'},
		{name: 'mimi', city: 'san leandro', comment: 'this is a really good ice cream parlor!!!'}
	];

	$scope.homeBackground = function(){
		$('.texture-overlay')
			.css({ 
				'background': 'url("img/batthern.png")', 
				'background-color' : 'rgba(34, 61, 110, 0.34)',
				'opacity': '1' 
			});

		$('body')
			.css({ 
				'background': 'url("img/mount.jpg")', 
				'background-size' : 'cover', 
				'background-repeat': 'no-repeat',
				'background-attachment': 'fixed'
			 });
	}

}]);

console.log('angular initiated');