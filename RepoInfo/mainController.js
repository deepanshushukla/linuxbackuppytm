/**
 * Created by deepanshushukla on 2/9/17.
 */
var app = angular.module('userinfoapp');
app.controller('mainCtrl', function($scope,$http,$location) {

    $scope.currentPage =1;
    $scope.userRepo =[];
    $scope.loading=false;
    $scope.getUser =function(username){
        if(username) {
            $scope.loading = true;
            $scope.username = username;
            //$location.search('q', username);
            $http.get("https://api.github.com/search/users?q=" + username)
                .then(function (response) {
                    $scope.loading = false;
                    $scope.users = response.data.items;
                    if ($scope.userRepo && $scope.userRepo.length) {
                        $scope.userRepo.length = 0;
                        $scope.currentPage = 1;
                    }
                }, function (error) {
                    // Handle error here
                    console.log(error)
                    $scope.loading = false;
                });
        }
    }
    $scope.getUserDetail =function(id){
         $scope.username=id;
        // $location.search('q', id);
        $scope.loading=true;
        $http.get("https://api.github.com/search/repositories?q=user:"+id)
            .then(function(response) {
                $scope.loading=false;
                $scope.userRepoData = response.data.items;
                $scope.userRepoDataCount = response.data.total_count;
                $scope.callPaging();
            },function(error) {
                    console.log(error)
                    $scope.loading=false;
                });
    }
    $scope.callPaging =function(text){
        if(text && text=='prev'){
            $scope.currentPage =$scope.currentPage-1;
        }
        if(text && text=='next'){
            $scope.currentPage =$scope.currentPage+1;
        }
        var temparr =[]
        var start=($scope.currentPage-1)*10;
        for(var i=start;i<start+10;i++){
            if($scope.userRepoData[i]) {
                temparr.push($scope.userRepoData[i]);
            }
        }
        $scope.userRepo =temparr;

    }
    // console.log($location.search())
    // var query = $location.search().q;
    // if(query){
    //     $scope.getUser(query)
    // }

});