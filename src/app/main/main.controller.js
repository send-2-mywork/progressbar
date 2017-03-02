(function() {
  'use strict';

  angular
    .module('progress3')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope/*$timeout , webDevTec, toastr*/) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1488393243263;

    // Settings
    $scope.settings = {
      "buttons":[28,49,-22,-8],
      "bars":[12,54,68],
      "limit":200
    }

    // Default settings
    $scope.defaults = {
      barNames: [],
      limit: false
    }
    var barLength = $scope.settings.bars.length;
    if(barLength){
      for(var i=0;i<barLength; i++){
        var progressbarName = 'Progressbar#' + parseInt(i + 1);
        $scope.defaults.barNames.push(progressbarName);
      }
    }

    $scope.defaults.progressBarselected = $scope.defaults.barNames[0];

    // Button Click Functio
    $scope.btnClick = function(btnVal){
      var barName = $scope.defaults.progressBarselected;
      var barProps = barName.split('#');
      var barCount = parseInt(barProps[1]) - 1;
      var newBarName = barProps[0] + '#' + barCount;

      var getActiveBar = document.getElementById(newBarName);
      var barInnerVal = getActiveBar.childNodes[1].innerText.split('%')[0]; // Get value
      
      var barStyle = getActiveBar.childNodes[1].style.width;
      var barText = getActiveBar.childNodes[1].innerText;
      var total;

      /*console.log($scope.defaults.limit);
      if($scope.defaults.limit){
        var temp = (parseInt(barInnerVal) + btnVal);
        var getTotal = (temp * $scope.settings.limit) / 100;
        console.log(getTotal);
        //total = getTotal;
        total = parseInt(barInnerVal) + btnVal;  
      } else {
        total = parseInt(barInnerVal) + btnVal;  
      }*/
      
      total = parseInt(barInnerVal) + btnVal;
      
      if(btnVal > 0){
        if(total >= 100){
          getActiveBar.childNodes[1].style.width = '100%';
          getActiveBar.childNodes[1].innerText = '100%';
          progressStatusColor(total, getActiveBar);
        } else {
          getActiveBar.childNodes[1].style.width = total + '%';
          getActiveBar.childNodes[1].innerText = total + '%';
          progressStatusColor(total, getActiveBar);
        }
      } else {
        if(total >= 0){
          getActiveBar.childNodes[1].style.width = total + '%';
          getActiveBar.childNodes[1].innerText = total + '%';
          progressStatusColor(total, getActiveBar);
        } else {
          getActiveBar.childNodes[1].style.width = '0%';
          getActiveBar.childNodes[1].innerText = '0%';
          progressStatusColor(total, getActiveBar);
        }
      }
      
    }

    var progressStatusColor = function(total, getActiveBar){
      var genCol = [];
      genCol.push('#'+(Math.random()*0xFFFFFF<<0).toString(16));
      if(total < 30){
        getActiveBar.childNodes[1].style.backgroundColor = genCol[0];
      } else if(total < 50) {
        getActiveBar.childNodes[1].style.backgroundColor = genCol[0];
      } else if(total < 75){
        getActiveBar.childNodes[1].style.backgroundColor = genCol[0];
      } else if(total < 90) {
        getActiveBar.childNodes[1].style.backgroundColor = genCol[0];
      } else {
        getActiveBar.childNodes[1].style.backgroundColor = genCol[0];
      }
    }


  }
})();
