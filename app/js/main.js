/**
 * Created by Hunter on 2016/3/23.
 * 配置文件路径，初始化模块
 */
'use strict';

!function(){
    //config requirejs
    require.config({
        baseUrl: 'js',
        paths: {
            //一些库文件
            'components':['../bower_components/'],
            'domReady':'../bower_components/require-domReady/domReady',
            'jquery':'../bower_components/jquery/dist/jquery.min',
            'angular': '../bower_components/angular/angular.min',
            'html5':'../bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min',
            'angular-route': '../bower_components/angular-ui-router/angular-ui-router.min',
            'resource':'../bower_components/angular-resource/angular-resource.min',
            'ocLazyLoad': '../bower_components/ocLazyLoad/dist/ocLazyLoad.require.min',
            //js文件
            'app':'app',
            'router':'router'
        },
        shim: {//为没有采用AMD规则define()定义的js，配置依赖关系
            'angular': {
                deps:['jquery'],
                exports: 'angular'
            },
            'ocLazyLoad':{
                deps:['angular']
            },
            'angular-route': {
                deps: ['angular'],
                exports: 'angular-route'
            },
            'resource':{
                deps: ['angular']
            }
        },
        priority: ['angular'],
        urlArgs: "bust=" + (new Date()).getTime()  //防止读取缓存，调试用
    })
    // 手动初始化myModule模块
    require(['require',
            'angular',
            'app',
            'angular-route',
            'resource',
            'jquery',
            'router'],
        function(require,angular){
            require(['domReady!'],function(document){
                angular.bootstrap(document,['myApp']);
            });
    })
}();