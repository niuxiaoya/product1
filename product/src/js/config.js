/**
 * Created by lenovo on 2017/4/27.
 */
angular.module("app")
.config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise("group");
        $stateProvider
            .state({
                name:"home",
                url:"/home",
                templateUrl:"page/home.html"
            })
            .state({
                name:"group",
                url:"/group",
                templateUrl:"page/group.html"
            })
            .state({
                name:"praty",
                url:"/praty",
                templateUrl:"page/praty.html"
            })
            .state({
                name:"resident",
                url:"/resident",
                templateUrl:"page/resident.html"
            })
            //.state({
            //    name:"group.introduce",
            //    url:"/introduce",
            //    templateUrl:"page/introduce.html"
            //}

    });