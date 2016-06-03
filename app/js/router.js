/**
 * 页面（视图）路由定义。有必要时可为路由定义控制器，较为复杂的控制逻辑可以单独出来，页面很多的可以分子目录。
 * Created by Hunter on 16/3/21.
 */
'use strict';
define(['app'], function (app) {

        app.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider) {

            // Set the following to true to enable the HTML5 Mode
            // You may have to set <base> tag in index and a routing configuration in your server
            $locationProvider.html5Mode(true).hashPrefix('!');

            // defaults to dashboard
            $urlRouterProvider.otherwise('/app');

            //
            // Application Routes
            // -----------------------------------
            $stateProvider
                .state('app', {
                    url: '/app',
                   // abstract: true,
                    templateUrl: '404.html',
                    controller: 'AppController'
                    //按需加载
                   // resolve: helper.resolveFor('fastclick', 'modernizr', 'icons', 'screenfull', 'animo', 'sparklines', 'slimscroll', 'classyloader', 'toaster', 'whirl')
                })
                /*.state('app.dashboard', {
                    url: '/dashboard',
                    title: 'Dashboard',
                    templateUrl: helper.basepath('dashboard.html'),
                    resolve: helper.resolveFor('flot-chart', 'flot-chart-plugins')
                })
                .state('app.dashboard_v2', {
                    url: '/dashboard_v2',
                    title: 'Dashboard v2',
                    templateUrl: helper.basepath('dashboard_v2.html'),
                    controller: ["$rootScope", function ($rootScope) {
                        $rootScope.app.layout.isCollapsed = true;
                    }],
                    resolve: helper.resolveFor('flot-chart', 'flot-chart-plugins')
                })
                .state('app.dashboard_v3', {
                    url: '/dashboard_v3',
                    title: 'Dashboard v3',
                    templateUrl: helper.basepath('dashboard_v3.html'),
                    resolve: helper.resolveFor('flot-chart', 'flot-chart-plugins', 'vector-map', 'vector-map-maps')
                })
                .state('app.widgets', {
                    url: '/widgets',
                    title: 'Widgets',
                    templateUrl: helper.basepath('widgets.html'),
                    resolve: helper.resolveFor('loadGoogleMapsJS', function () {
                        return loadGoogleMaps();
                    }, 'ui.map')
                })
                .state('app.buttons', {
                    url: '/buttons',
                    title: 'Buttons',
                    templateUrl: helper.basepath('buttons.html')
                })
                .state('app.colors', {
                    url: '/colors',
                    title: 'Colors',
                    templateUrl: helper.basepath('colors.html')
                })
                .state('app.localization', {
                    url: '/localization',
                    title: 'Localization',
                    templateUrl: helper.basepath('localization.html')
                })
                .state('app.infinite-scroll', {
                    url: '/infinite-scroll',
                    title: 'Infinite Scroll',
                    templateUrl: helper.basepath('infinite-scroll.html'),
                    resolve: helper.resolveFor('infinite-scroll')
                })
                .state('app.navtree', {
                    url: '/navtree',
                    title: 'Nav Tree',
                    templateUrl: helper.basepath('nav-tree.html'),
                    resolve: helper.resolveFor('angularBootstrapNavTree')
                })
                .state('app.nestable', {
                    url: '/nestable',
                    title: 'Nestable',
                    templateUrl: helper.basepath('nestable.html'),
                    resolve: helper.resolveFor('ng-nestable')
                })
                .state('app.sortable', {
                    url: '/sortable',
                    title: 'Sortable',
                    templateUrl: helper.basepath('sortable.html'),
                    resolve: helper.resolveFor('htmlSortable')
                })*/
        }]);
    return app;
});