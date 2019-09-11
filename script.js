var app = angular.module('myApp', ['ngAnimate', 'ui.bootstrap', 'ngSanitize', 'ngRoute']);

app.config(function($routeProvider){
$routeProvider.when('/', {
		templateUrl: 'main.html'
	}).when('/ctarowtwo', {
		templateUrl: 'ctarowtwo.html'
	}).when('/ctarowfour', {
		templateUrl: 'ctarowfour.html'
	});
});

app.controller('myCtrl', function($scope, $interpolate, $sce) {

	$scope.selected = '';
	$scope.selected2 = '';
	$scope.selecteda = '';
	$scope.selectedb = '';
	$scope.selectedc = '';
	$scope.selectedd = '';

//640 ONCA ctas
	$scope.ctas = [
	{name:"GRAPHIC TEES", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/127/graphictees640.gif"},
	{name:"JEANS", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/120/jeans640.gif"},
	{name: "SHIRTS", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/121/shirts640.gif"},
	{name: "TEES", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/121/tees640.gif"},
	{name: "swim", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/121/swim640.gif"},
	{name: "tees & tanks", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/121/teestanks640.gif"},
	{name: "dresses", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/121/dresses640.gif"},
	{name: "shoes & accessories", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/121/shoesaccessories640.gif"},
	{name: "tanks", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/121/tanks640.gif"},
	{name: "magasiner maintenant", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/119/magasinermaintenant640.gif"},
	{name: "bebe garcon cache couches", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/120/bebegarconcachecouches640.gif"},
	{name: "nouveaux pour bebe", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/120/nouveauxpourbebe640.gif"},
	{name: "shorts", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/119/shorts640.gif"},
	{name: "baby girl bodysuits", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/120/bgbodysuits640.gif"},
	{name: "robes", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/119/robes640.gif"},
	{name: "bebe fille cache couches", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/120/bebefillecachecouches640.gif"},
	{name: "collection baignade", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/119/cb640.gif"},
	{name: "mode sport", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/119/modesport640.gif"},
	{name: "cache couches", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/120/cachecouches640.gif"},
	{name: "trouver un magasin", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/119/trouverunmagasin640.gif"},
	{name: "baby boy bodysuits", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/120/bbbodysuits640.gif"},
	{name: "tshirts", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/119/tshirts640.gif"},
	{name: "find a store", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/119/findastore640.gif"},
	{name: "debardeurs", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/121/debardeurs640.gif"},
	{name: "tshirts et debardeurs", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/121/tshirtsetdebardeurs640.gif"},
	{name: "shop now", url:"http://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/55/ON_CTA_Blue_ShopNow.gif"},
	{name: "polos", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/122/polos640.gif"},
	{name: "pants", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/122/pants640.gif"},
	{name: "pantalons", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/123/pantalons640.gif"},
	{name: "backtoschool", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/123/backtoschool640.gif"},
	{name: "shopswim", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/123/shopswim640.gif"},
	{name: "accessories", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/123/accessories640.gif"},
	{name: "tops", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/124/tops640.gif"},
	{name: "la rentree scolaire", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/124/larentreescolaire640.gif"},
	{name: "hauts", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/124/hauts640.gif"},
	{name: "accessoires", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/124/accessoires640.gif"},
	{name: "magasiner la collection baignade", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/124/magasinerlacb640.gif"},
	{name: "redfindstore", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/125/REDfindstore640.gif"},
	{name: "shoes", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/123/shoes640.gif"},
	{name: "jumpsuits", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/125/jumpsuits640.gif"},
	{name: "redtrouverunmagasin", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/125/REDtrouverunmagasin640.gif"},
	{name: "chaussures", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/124/chaussures640.gif"},
	{name: "combinaisons", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/126/combinaisons640.gif"},
	{name: "jeterunceilenligne", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/126/jeterunceilenligne640.gif"},
	{name: "sneak a peek", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/126/sneakapeek640.gif"},
	{name: "jumpsuits & rompers", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/126/jumpsuitsrompers640.gif"},
	{name: "combinaisons et barboteuses", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/126/combinaisonsetbarboteuses640.gif"},
	{name: "leggings", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/126/leggings640.gif"},
	{name: "bodysuits", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/126/bodysuits640.gif"},
	{name: "easy peasy essentials", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/126/easypeasyessentials640.gif"},
	{name: "rompers", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/126/rompers640.gif"},
	{name: "dresses & jumpsuits", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/126/dressesjumpsuits640.gif"},
	{name: "barboteuses", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/127/barboteuses640.gif"},
	{name: "indispensables", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/127/indispensables640.gif"},
	{name: "uniforme pour fille", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/127/uniformepourfille640.gif"},
	{name: "uniforme pour garcon", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/127/uniformepourgarcon640.gif"},
	{name: "robes et combinaisons", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/127/robesetcombinaisons640.gif"},
	{name: "activewear", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/127/activewear640.gif"},
	{name: "tshirts a imprime", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/128/tshirtsaimprime640.gif"},
	{name: "toddler boy graphic tees", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/128/tb_graphictees640.gif"},
	{name: "toddler girl graphic tees", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/128/tg_graphictees640.gif"},
	{name: "tout petit garcon tshirts imprime", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/128/tb_graphic_tees_FR_640.gif"},
	{name: "toutpetitfilletshirtsimprime", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/128/tg_graphic_tees_FR_640.gif"},
	{name: "chemises", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/129/chemises640.gif"},
	{name: "toddler dresses & jumpsuits", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/129/toddlerdressesjumpsuits640.gif"},
	{name: "baby dresses jumpsuits", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/129/babydressesjumpsuits640.gif"},
	{name: "robes et combinaisons pour bebe", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/129/robesetcombinaisonspourbebe640.gif"},
	{name: "robescombinaisonspourtoutpetit", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/129/robescombinaisonspourtoutpetit640.gif"},
	{name: "femme plus", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/129/femmeplus640.gif"},
	{name: "womens plus", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/129/womensplus640.gif"},
	{name: "sweatshirts & sweatpants", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/130/sweatshirtssweatpants640.gif"},
	{name: "chandails en coton", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/130/chandailsencoton640.gif"},
	{name: "jeter un coup dceil", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/132/jeteruncoupdceil640.gif"},
	{name: "test", url:"test.url"}
	];

//320 ONCA ctas
	$scope.ctas320 = [
	{name: "debardeurs", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/121/debardeurs320.gif"},
	{name: "tees", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/121/tees320.gif"},
	{name: "dresses", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/121/dresses320.gif"},
	{name: "tanks", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/121/tanks320.gif"},
	{name: "shorts", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/121/shortss320.gif"},
	{name: "robes", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/121/robes320.gif"},
	{name: "tshirts", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/121/tshirts320.gif"},
	{name: "tees & tanks", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/122/teesandtanks320.gif"},
	{name: "tshirts et debardeurs", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/121/tshirtsetdebardeurs320.gif"},
	{name: "swim", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/122/swim320.gif"},
	{name: "collection baignade", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/122/cb320.gif"},
	{name: "jeans", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/122/jeans320.gif"},
	{name: "shoes", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/123/shoes320.gif"},
	{name: "graphic tees", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/123/graphictees320.gif"},
	{name: "back to school", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/123/backtoschool320.gif"},
	{name: "tshirtsaimprime", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/124/tshirtsaimprime320.gif"},
	{name: "chaussures", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/124/chassures320.gif"},
	{name: "hauts", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/124/hauts320.gif"},
	{name: "accessoires", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/124/accessoires320.gif"},
	{name: "leggings", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/127/leggings320.gif"},
	{name: "one pieces", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/127/onepieces320.gif"},
	{name: "bodysuits", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/127/bodysuits320.gif"},
	{name: "unepieces", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/128/unepieces320.gif"},
	{name: "cache couches", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/128/cachecouches320.gif"},
	{name: "uniformes", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/129/uniformes320.gif"},
	{name: "uniform", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/129/uniform320.gif"},
	{name: "outerwear", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/131/outerwear320.gif"},
	{name: "vetements dexterieur", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/131/vetementsdexterieur320.gif"},
	{name: "test", url:"test.url"}
	];

//CTA 2x
	$scope.ctaStuff = function(site){
		$scope.cta1 = site;
	};

	$scope.ctaStuff2 = function(site){
		$scope.cta2 = site;
	};

	$scope.myFunc = function(){
		$scope.template = '<tr><td><table cellspacing="0" cellpadding="0" border="0"><tr><td class="block" style="padding-top: 4px;"><a href="%%=RedirectTo(@link_bkg_XXXXXX)=%%" target="_blank" alias="%%=v(@alias)=%%"><img alt="{{cta1.name}}" width="320" height="46" style="display:block; font-family:Helvetica,Arial,sans-serif; font-size:10px; color:#000000;" border="0" src="{{cta1.url}}" /></a></td><td class="block" style="padding-top: 4px;"><a href="%%=RedirectTo(@link_bkg_XXXXXX)=%%" target="_blank" alias="%%=v(@alias)=%%"><img alt="{{cta2.name}}" width="320" height="46" style="display:block; font-family:Helvetica,Arial,sans-serif; font-size:10px; color:#000000;" border="0" src="{{cta2.url}}" /></a></td></tr></table></td></tr>';
		$scope.myText = $sce.trustAsHtml($scope.template);
		$scope.concat = $interpolate($scope.template)($scope);
	};


//CTA 4x
	$scope.ctaStuffa = function(site){
		$scope.ctaa = site;
	};

	$scope.ctaStuffb = function(site){
		$scope.ctab = site;
	};

	$scope.ctaStuffc = function(site){
		$scope.ctac = site;
	};

	$scope.ctaStuffd = function(site){
		$scope.ctad = site;
	};

	$scope.myFuncfour = function(){
		$scope.templatetwo = '<tr><td><table cellspacing="0" cellpadding="0" border="0"><tr><td class="block" valign="top"><table border="0" cellspacing="0" cellpadding="0"><tr><td style="padding-top:4px;"><a href="%%=RedirectTo(@link_bkg_xxxxxx)=%%" target="_blank" alias="%%=v(@alias)=%%"><img src="{{ctaa.url}}" alt="{{ctaa.name}}" width="160" height="46" style="display:block; font-family:Helvetica,Arial,sans-serif; font-size:10px; color:#000000;" border="0" /></a></td><td style="padding-top:4px;"><a href="%%=RedirectTo(@link_bkg_xxxxxx)=%%" target="_blank" alias="%%=v(@alias)=%%"><img src="{{ctab.url}}" alt="{{ctab.name}}" width="160" height="46" style="display:block; font-family:Helvetica,Arial,sans-serif; font-size:10px; color:#000000;" border="0" /></a></td></tr></table></td><td class="block" valign="top"><table border="0" cellspacing="0" cellpadding="0"><tr><td style="padding-top:4px;"><a href="%%=RedirectTo(@link_bkg_xxxxxx)=%%" target="_blank" alias="%%=v(@alias)=%%"><img src="{{ctac.url}}" alt="{{ctac.name}}" width="160" height="46" style="display:block; font-family:Helvetica,Arial,sans-serif; font-size:10px; color:#000000;" border="0" /></a></td><td style="padding-top:4px;"><a href="%%=RedirectTo(@link_bkg_xxxxxx)=%%" target="_blank" alias="%%=v(@alias)=%%"><img src="{{ctad.url}}" alt="{{ctad.name}}" width="160" height="46" style="display:block; font-family:Helvetica,Arial,sans-serif; font-size:10px; color:#000000;" border="0" /></a></td></tr></table></td></tr></table></td></tr>';
		$scope.myTexttwo = $sce.trustAsHtml($scope.templatetwo);
		$scope.concattwo = $interpolate($scope.templatetwo)($scope);
	};
   


});



app.directive('compileTemplate', function($compile, $parse){
	return {
		link: function(scope, element, attr){
			var parsed = $parse(attr.ngBindHtml);
			function getStringValue() {
				return (parsed(scope) || '').toString();
			}

            // Recompile if the template changes
            scope.$watch(getStringValue, function() {
                $compile(element, null, -9999)(scope);  // The -9999 makes it skip directives so that we do not recompile ourselves
            });
        }
    }

});

