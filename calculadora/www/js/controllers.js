angular.module('starter.controllers', [])

.controller('DashCtrl', function($log, $scope, LocalStorage, Calculator, $stateParams) {
  $log.log($stateParams);
  $scope.result = $stateParams.op || '';


  //LocalStorage.set("demo", {hola:"mundo"});

  $scope.calc = function(n){
    if(n === '=') {
      var ops = LocalStorage.get("operaciones") || [];
      ops.push($scope.result);
      LocalStorage.set("operaciones", ops);
      $scope.result = Calculator.evaluate($scope.result);
    } else {
      $scope.result += (n == 'x') ? '*' : n;
    }
  }
})

.controller('ChatsCtrl', function($scope, Chats, LocalStorage) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  //
  $scope.ops = LocalStorage.get("operaciones");

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
