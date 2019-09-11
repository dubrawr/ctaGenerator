var app = angular.module('myApp', ['ngAnimate', 'ui.bootstrap', 'ngSanitize']);

app.controller('myCtrl', function($scope, $interpolate, $sce) {
	$scope.selected = '';
	$scope.selected2 = '';
	$scope.ctas = [
	{name:"graphictees", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/127/graphictees640.gif"},
	{name:"jeans", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/120/jeans640.gif"},
	{name: "shirts", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/121/shirts640.gif"},
	{name: "tees", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/121/tees640.gif"},
	{name: "swim", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/121/swim640.gif"},
	{name: "teestanks", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/121/teestanks640.gif"},
	{name: "dresses", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/121/dresses640.gif"},
	{name: "shoesaccessories", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/121/shoesaccessories640.gif"},
	{name: "tanks", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/121/tanks640.gif"},
	{name: "magasinermaintenant", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/119/magasinermaintenant640.gif"},
	{name: "bebegarconcachecouches", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/120/bebegarconcachecouches640.gif"},
	{name: "nouveauxpourbebe", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/120/nouveauxpourbebe640.gif"},
	{name: "shorts", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/119/shorts640.gif"},
	{name: "babygirlbodysuits", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/120/bgbodysuits640.gif"},
	{name: "robes", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/119/robes640.gif"},
	{name: "bebefillecachecouches", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/120/bebefillecachecouches640.gif"},
	{name: "collectionbaignade", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/119/cb640.gif"},
	{name: "modesport", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/119/modesport640.gif"},
	{name: "cachecouches", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/120/cachecouches640.gif"},
	{name: "trouverunmagasin", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/119/trouverunmagasin640.gif"},
	{name: "babyboybodysuits", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/120/bbbodysuits640.gif"},
	{name: "tshirts", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/119/tshirts640.gif"},
	{name: "findastore", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/119/findastore640.gif"},
	{name: "debardeurs", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/121/debardeurs640.gif"},
	{name: "tshirtsetdebardeurs", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/121/tshirtsetdebardeurs640.gif"},
	{name: "shopnow", url:"http://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/55/ON_CTA_Blue_ShopNow.gif"},
	{name: "polos", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/122/polos640.gif"},
	{name: "pants", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/122/pants640.gif"},
	{name: "pantalons", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/123/pantalons640.gif"},
	{name: "backtoschool", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/123/backtoschool640.gif"},
	{name: "shopswim", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/123/shopswim640.gif"},
	{name: "accessories", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/123/accessories640.gif"},
	{name: "tops", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/124/tops640.gif"},
	{name: "larentreescolaire", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/124/larentreescolaire640.gif"},
	{name: "hauts", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/124/hauts640.gif"},
	{name: "accessoires", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/124/accessoires640.gif"},
	{name: "magasinerlacollectionbaignade", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/124/magasinerlacb640.gif"},
	{name: "redfindstore", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/125/REDfindstore640.gif"},
	{name: "shoes", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/123/shoes640.gif"},
	{name: "jumpsuits", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/125/jumpsuits640.gif"},
	{name: "redtrouverunmagasin", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/125/REDtrouverunmagasin640.gif"},
	{name: "chaussures", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/124/chaussures640.gif"},
	{name: "combinaisons", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/126/combinaisons640.gif"},
	{name: "jeterunceilenligne", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/126/jeterunceilenligne640.gif"},
	{name: "sneakapeek", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/126/sneakapeek640.gif"},
	{name: "jumpsuitsrompers", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/126/jumpsuitsrompers640.gif"},
	{name: "combinaisonsetbarboteuses", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/126/combinaisonsetbarboteuses640.gif"},
	{name: "leggings", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/126/leggings640.gif"},
	{name: "bodysuits", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/126/bodysuits640.gif"},
	{name: "easypeasyessentials", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/126/easypeasyessentials640.gif"},
	{name: "rompers", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/126/rompers640.gif"},
	{name: "dressesjumpsuits", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/126/dressesjumpsuits640.gif"},
	{name: "barboteuses", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/127/barboteuses640.gif"},
	{name: "indispensables", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/127/indispensables640.gif"},
	{name: "uniformepourfille", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/127/uniformepourfille640.gif"},
	{name: "uniformepourgarcon", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/127/uniformepourgarcon640.gif"},
	{name: "robesetcombinaisons", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/127/robesetcombinaisons640.gif"},
	{name: "activewear", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/127/activewear640.gif"},
	{name: "tshirtsaimprime", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/128/tshirtsaimprime640.gif"},
	{name: "toddlerboygraphictees", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/128/tb_graphictees640.gif"},
	{name: "toddlergirlgraphictees", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/128/tg_graphictees640.gif"},
	{name: "toutpetitgarcontshirtsimprime", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/128/tb_graphic_tees_FR_640.gif"},
	{name: "toutpetitfilletshirtsimprime", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/128/tg_graphic_tees_FR_640.gif"},
	{name: "chemises", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/129/chemises640.gif"},
	{name: "toddlerdressesjumpsuits", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/129/toddlerdressesjumpsuits640.gif"},
	{name: "babydressesjumpsuits", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/129/babydressesjumpsuits640.gif"},
	{name: "robesetcombinaisonspourbebe", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/129/robesetcombinaisonspourbebe640.gif"},
	{name: "robescombinaisonspourtoutpetit", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/129/robescombinaisonspourtoutpetit640.gif"},
	{name: "femmeplus", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/129/femmeplus640.gif"},
	{name: "womensplus", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/129/womensplus640.gif"},
	{name: "sweatshirtssweatpants", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/130/sweatshirtssweatpants640.gif"},
	{name: "chandailsencoton", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/130/chandailsencoton640.gif"},
	{name: "jeteruncoupdceil", url:"https://image.email.oldnavy.ca/lib/fe9f13707564037f75/m/132/jeteruncoupdceil640.gif"},
	{name: "test", url:"test.url"},
	];


	$scope.ctaStuff = function(site){
		$scope.cta1 = site;
	};

	$scope.ctaStuff2 = function(site){
		$scope.cta2 = site;
	};

	$scope.myFunc = function(){
		$scope.template = '<tr><td><table cellspacing="0" cellpadding="0" border="0"><tr><td class="block" style="padding-top: 4px;"><a href="%%=RedirectTo(@linkPrimary_YYYYY_W_FR)=%%" target="_blank" alias="%%=v(@alias)=%%"><img alt="{{cta1.name}}" width="320" height="46" style="display:block; font-family:Helvetica,Arial,sans-serif; font-size:10px; color:#000000;" border="0" src="{{cta1.url}}" /></a></td><td class="block" style="padding-top: 4px;"><a href="%%=RedirectTo(@linkPrimary_YYYYY_M_FR)=%%" target="_blank" alias="%%=v(@alias)=%%"><img alt="{{cta2.name}}" width="320" height="46" style="display:block; font-family:Helvetica,Arial,sans-serif; font-size:10px; color:#000000;" border="0" src="{{cta2.url}}" /></a></td></tr></table></td></tr>';
		$scope.myText = $sce.trustAsHtml('<tr><td><table cellspacing="0" cellpadding="0" border="0"><tr><td class="block" style="padding-top: 4px;"><a href="%%=RedirectTo(@linkPrimary_YYYYY_W_FR)=%%" target="_blank" alias="%%=v(@alias)=%%"><img alt="{{cta1.name}}" width="320" height="46" style="display:block; font-family:Helvetica,Arial,sans-serif; font-size:10px; color:#000000;" border="0" src="{{cta1.url}}" /></a></td><td class="block" style="padding-top: 4px;"><a href="%%=RedirectTo(@linkPrimary_YYYYY_M_FR)=%%" target="_blank" alias="%%=v(@alias)=%%"><img alt="{{cta2.name}}" width="320" height="46" style="display:block; font-family:Helvetica,Arial,sans-serif; font-size:10px; color:#000000;" border="0" src="{{cta2.url}}" /></a></td></tr></table></td></tr>');
		$scope.concat = $interpolate($scope.template)($scope);
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
