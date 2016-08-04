var app = angular.module('spectrum', []);

app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.spectrums = [
    {red: 100, blue: 255, green: 200, changeGreen: $scope.changeGreen, changeRed : $scope.changeRed, changeBlue: $scope.changeBlue},
    {red: 100, blue: 100, green: 255, changeGreen: $scope.changeGreen, changeRed : $scope.changeRed, changeBlue: $scope.changeBlue },
    {red: 100, blue: 255, green: 255, changeGreen: $scope.changeGreen, changeRed : $scope.changeRed, changeBlue: $scope.changeBlue },
    {red: 100, blue: 255, green: 100, changeGreen: $scope.changeGreen, changeRed : $scope.changeRed, changeBlue: $scope.changeBlue },
    ]


    $scope.getSpectrumColor = function (red, green, blue) {
        return {'background': 'rgb(' + red +',' +  blue + ',' + green + ')'};
  };


  $scope.changeGreen = function(item, change){
    item.green += change;
  }

  $scope.changeRed = function(item, change){
    item.red += change;
  }

  $scope.changeBlue = function(item, change){
    item.blue += change;
  }

}]);
