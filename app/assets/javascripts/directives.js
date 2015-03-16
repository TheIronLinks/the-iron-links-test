(function () {
    'use strict';
    angular.module('tilAPP')
      .directive('cardDirective', function() {
        return {
          restrict: 'E',
          scope: {
            data: '='
          },
          templateUrl: 'assets/cardStack.directive.html',
          link: function(scope, element, attrs) {

            //=====================CARD SLIDER=====================

            element.find('li[data-trait=\'1\']').attr('data-state', 'selected');

            element.find('li[data-trait=\'2\'],li[data-trait=\'3\'],li[data-trait=\'4\']').css('display', 'none');

            element.find('.fa.fa-5x.fa-caret-left,.fa.fa-5x.fa-caret-right').on('click',function(){
              var comingFrom = element.find('li[data-state=\'selected\']').data('trait');
              var goingTo;
              if($(this).attr('rel') === 'left'){
                if(comingFrom === 1){
                  goingTo = 4;
                }else{
                  goingTo = comingFrom - 1;
                }
              }else if($(this).attr('rel') === 'right'){
                if(comingFrom === 4){
                  goingTo = 1;
                }else{
                  goingTo = comingFrom + 1;
                }
              }
              element.find('li[data-state=\'selected\']').css('display', 'none');
              element.find('li[data-state=\'selected\']').attr('data-state', comingFrom);
              element.find('li[data-trait='+goingTo+']').css('display', 'inline-block');
              element.find('li[data-trait='+goingTo+']').attr('data-state', 'selected');
            });

            //=====================CARD SPREAD=====================

            element.find('.fa.fa-2x.fa-ellipsis-v').on('click',function(){
              //var firstCard = element.find('li[data-state=\'selected\']').data('trait');
              var firstCard = 1;
              var secondCard = 2;
              var thirdCard = 3;
              var fourthCard = 4;
              console.log(element);

              element.find('li[data-trait='+firstCard+']')
                .css({
                  'z-index':'4',
                  'top':'120px'
                });
              element.find('li[data-trait='+secondCard+']')
                .css({
                  'z-index':'3',
                  'top':'80px',
                  'display':'inline-block'
                });
              element.find('li[data-trait='+thirdCard+']')
                .css({
                  'z-index':'2',
                  'top':'40px',
                  'display':'inline-block'
                });
              element.find('li[data-trait='+fourthCard+']')
                .css({
                  'z-index':'1',
                  'display':'inline-block'
                });
              element.find('ul')
                .css({
                  'height':'520px'
                });
              element.find('.fa.fa-2x.fa-ellipsis-v, .fa.fa-5x.fa-caret-left, .fa.fa-5x.fa-caret-right, .fa.fa-lg.fa-flip-horizontal.fa-expand')
                .css({
                  'display':'none'
                });
            });

            //=====================CARD DETAIL=====================

            element.find('.fa.fa-lg.fa-flip-horizontal.fa-expand').on('click',function(){
              element.find('ul')
                .css({
                  'position':'static',
                  'top':'50px',
                  'height':'60vh'
                });
            });

          }
        };
    });

})();