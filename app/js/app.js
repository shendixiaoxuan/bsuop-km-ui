/**
 * Created by Hunter on 2016/3/23.
 * 配置路由并返回myModule模块
 */
define(['angular'],function(angular){
    'use strict';
    var app = angular.module('myApp', ['ui.router','ngResource'])

    app.config(function($controllerProvider,$compileProvider,$resourceProvider,$filterProvider,$provide){
        app.register = {
            //得到$controllerProvider的引用
            controller : $controllerProvider.register,
            //同样的，这里也可以保存directive／filter／service的引用
            directive: $compileProvider.directive,
            filter: $filterProvider.register,
            factory:$provide.factory,
            service:$provide.service,
            constant:$provide.constant,
            value:$provide.value
        };
        $resourceProvider.defaults.stripTrailingSlashes = false;
    })

   /* app.run(["$rootScope", function ($rootScope){
        // Scope Globals
        // -----------------------------------
        $rootScope.app = {
            name: 'Angle',
            description: 'Angular Bootstrap Admin Template',
            year: ((new Date()).getFullYear()),
            layout: { //布局
                isFixed: true,
                isCollapsed: false,
                isBoxed: false,
                isRTL: false,
                horizontal: false,
                isFloat: false,
                asideHover: false,
                theme: null
            },
            useFullLayout: false,//全屏效果
            hiddenFooter: false,
            viewAnimation: 'ng-fadeInUp'
        };
        $rootScope.user = {
            name:     'John',
            job:      'ng-developer',
            picture:  'app/img/user/02.jpg'
        };
    }]);*/
     return app;
})