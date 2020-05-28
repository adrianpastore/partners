var appServices = angular.module('appServices', []);
var appMessage = angular.module('appMessage', []);
var appLoading = angular.module('appLoading', []);
var appAnchorSmoothScroll = angular.module('appAnchorSmoothScroll', []);

// if full stack
var urlBaseAuth = window.location.origin + '/auth/';
var urlBaseNoAuth = window.location.origin + '/noauth/';

var ncrIntegration = {
  url: "",
  apiKey: "",
  user: "",
  password: "",
  auth: ""
}

// var url = "https://stagingchatbot.herokuapp.com";
// var urlBaseAuth =  url+ '/auth/';
// var urlBaseNoAuth = url + '/noauth/';

angular
  .module('app', [
    'ngMaterial',
    'oc.lazyLoad',
    'ui.router',
    'angular-loading-bar',
    'appServices',
    'appMessage',
    'appLoading',
    'appAnchorSmoothScroll',
    'ngFileUpload',
    'ngImgCrop',
    'ngOpenFB',
    'ngMap',
    'ui.mask',
    'ui.utils.masks',
    'angular-jwt',
    'chart.js',
    'ngSanitize',
    'com.2fdevs.videogular',
    'com.2fdevs.videogular.plugins.controls',
    'com.2fdevs.videogular.plugins.overlayplay',
    'angular-sortable-view',
    'angular.filter',
    'infinite-scroll',
    'chart.js',
    'ngMdBadge',
    'rw.moneymask',
    'ngMaterialCollapsible',
    'angular-google-analytics',
    'md.data.table',
    'ngFileSaver',
    'jkAngularCarousel'
  ])

  
  .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$locationProvider',
    '$httpProvider', '$mdThemingProvider', 'uiMask.ConfigProvider', 'cfpLoadingBarProvider', 
    'AnalyticsProvider',
    function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $locationProvider,
      $httpProvider, $mdThemingProvider, uiMaskConfigProvider, cfpLoadingBarProvider, AnalyticsProvider) {
      cfpLoadingBarProvider.latencyThreshold = 500;
      uiMaskConfigProvider.allowInvalidValue(true);

      $mdThemingProvider.definePalette('paletteBuscar', {
        '50': 'rgba(255,255,255,0.87)',
        '100': 'rgba(255,255,255,0.87)',
        '200': 'rgba(255,255,255,0.87)',
        '300': 'rgba(255,255,255,0.87)',
        '400': 'rgba(255,255,255,0.87)',
        '500': 'rgba(255,255,255,0.87)',
        '600': 'rgba(255,255,255,0.87)',
        '700': 'rgba(255,255,255,0.87)',
        '800': 'rgba(255,255,255,0.87)',
        '900': 'rgba(255,255,255,0.87)',
        'A100': 'rgba(255,255,255,0.87)',
        'A200': 'rgba(255,255,255,0.87)',
        'A400': 'rgba(255,255,255,0.87)',
        'A700': 'rgba(255,255,255,0.87)',
        'contrastDefaultColor': 'dark',
        'contrastDarkColors': ['50', '100', '200', '300', '400', 'A100'],
        'contrastLightColors': undefined
      });

      $mdThemingProvider.theme('inputSearchBar')
        .primaryPalette('paletteBuscar')
        .dark();

      $ocLazyLoadProvider.config({
        debug: false,
        events: true,
      });

      $urlRouterProvider.otherwise('/principal/home');
      // $urlRouterProvider.otherwise('/wizard');

      $httpProvider.interceptors.push('TokenInterceptor');

      AnalyticsProvider.setAccount('UA-56076067-4'); 

      // Track all routes (default is true).
      AnalyticsProvider.trackPages(true);

      // Track all URL query params (default is false).
      AnalyticsProvider.trackUrlParams(true);

      // Ignore first page view (default is false).
      // Helpful when using hashes and whenever your bounce rate looks obscenely low.
      // AnalyticsProvider.ignoreFirstPageLoad(true);

      // URL prefix (default is empty).
      // Helpful when the app doesn't run in the root directory.
      //AnalyticsProvider.trackPrefix('my-application');
      

      // Change the default page event name.
      // Helpful when using ui-router, which fires $stateChangeSuccess instead of $routeChangeSuccess.
      AnalyticsProvider.setPageEvent('$stateChangeSuccess');

      // RegEx to scrub location before sending to analytics.
      // Internally replaces all matching segments with an empty string.
      AnalyticsProvider.setRemoveRegExp(/\/\d+?$/);
      
      // AnalyticsProvider.delayScriptTag(true);


      $stateProvider
        .state('principal', {
          url: '/principal',
          controller: 'mainController',
          templateUrl: 'scripts/features/main/main.html',
          resolve: {
            loadMyDirectives: function ($ocLazyLoad) {
              return $ocLazyLoad.load(
                {
                  name: 'app',
                  files: [
                    'scripts/features/main/main.controller.js',
                    'scripts/features/order/order.service.js',
                    'scripts/features/order/order.factory.js',
                    'scripts/directives/header/header.directive.js',
                    'scripts/directives/sidebar/sidebar.directive.js',
                    'scripts/features/order-list/order-list.directive.js',
                    'scripts/features/category/category.service.js',
                    'scripts/features/broadcast/broadcast.service.js',
                    'scripts/features/broadcast/broadcast.factory.js',
                    'scripts/features/setup-ncr/setup-ncr.service.js',
                    'scripts/features/setup-ncr/setup-ncr.factory.js',
                    'scripts/features/order/order.directive.js',
                    'scripts/features/toast-message/toast-message.factory.js',
                    'scripts/features/subscribe-module-dialog/subscribe-module-dialog.controller.js',
                    'scripts/features/subscribe-module-dialog/page-module.service.js',
                    'scripts/features/subscribe-module-dialog/page-module.factory.js',
                    'scripts/directives/module-blocked/module-blocked.controller.js',
                    'scripts/directives/module-blocked/module-blocked.directive.js',
                    'scripts/features/bill/bill.factory.js',
                    'scripts/features/bill/bill.service.js'                    
                  ]
                })
            },
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/order/order.service.js',
                  'scripts/features/order/order.factory.js',
                  'scripts/features/order-home/order-home.controller.js',
                  'scripts/features/establishment/establishment-units.service.js',
                  'scripts/features/establishment/establishment-units.factory.js',
                  'scripts/features/page/page.service.js',
                  'scripts/features/page/page.factory.js',
                  'scripts/features/client/client.service.js',
                  'scripts/features/client/client.factory.js',
                  'scripts/features/client/client-dialog-data.controller.js',
                  'scripts/features/user/user.factory.js',
                  'scripts/features/user/user.service.js',
                ]
              })
            }
          }
        })
        .state('principal.home', {
          url: '/home',
          templateUrl: 'scripts/features/main/main-home.html',
          onExit: ['$rootScope', function ($rootScope) {
            $rootScope.isHomePage = false;
          }],
          resolve: {
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/user-ref/user-ref.service.js',
                  'scripts/features/user-ref/user-ref.factory.js',
                ]
              })
            }
          }
        })
        .state('principal.users', {
          url: '/users',
          templateUrl: 'scripts/features/main/main-home.html',
          onExit: ['$rootScope', function ($rootScope) {
            $rootScope.isHomePage = false;
          }],
          resolve: {
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/user-ref/user-ref.service.js',
                  'scripts/features/user-ref/user-ref.factory.js',
                ]
              })
            }
          }
        })
        .state('wizard', {
          url: '/wizard',
          controller: 'wizardController',
          templateUrl: 'scripts/features/wizard/wizard.html',
          resolve: {
            loadMyDirectives: function ($ocLazyLoad) {
              return $ocLazyLoad.load(
                {
                  name: 'app',
                  files: [
                    'js/togeojson.js',
                    'https://maps.googleapis.com/maps/api/js?key=AIzaSyBiTQRu8S5T0eyXZaIrLSGhp-FP3fvbTqw&libraries=places',
                    'scripts/features/wizard/wizard.directive.js',
                    'scripts/features/establishment/establishment.directive.js'
                  ]
                })
            },
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/establishment/establishment.controller.js',
                  'scripts/dialogs/dialog-address/dialog-address.controller.js',
                  'scripts/dialogs/dialog-phone/dialog-phone.controller.js',
                  'scripts/directives/video-tour/video-tour.directive.js',
                  'scripts/features/establishment/establishment.service.js',
                  'scripts/features/establishment/establishment.factory.js',
                  'scripts/features/user-ref/user-ref.service.js',
                  'scripts/features/user-ref/user-ref.factory.js',
                  'scripts/features/establishment/establishment-units.service.js',
                  'scripts/features/establishment/establishment-units.factory.js',
                  'scripts/features/wizard/wizard.controller.js',
                  'scripts/dialogs/dialog-region/dialog-region.controller.js',
                  'scripts/dialogs/dialog-region/dialog-region-address-manual.controller.js',
                  'js/xlsx.js',
                  'js/jszip.js',
                  'scripts/dialogs/dialog-region/dialog-add-region.controller.js',
                  'scripts/dialogs/dialog-radius/dialog-radius.controller.js',
                  'scripts/dialogs/dialog-hours/dialog-hours.controller.js',
                  'scripts/dialogs/dialog-payment/dialog-payment.controller.js'
                ]
              })
            }
          }
        })
        .state('access', {
          templateUrl: 'scripts/features/access/access.html',
          controller: 'accessController',
          url: '/access',
          resolve: {
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/access/access.controller.js'
                ]
              })
            }
          }
        })
        .state('password-reset', {
          templateUrl: 'scripts/features/password-reset/password-reset.html',
          controller: 'passwordResetController',
          url: '/password-reset/{token}',
          resolve: {
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/password-reset/password-reset.controller.js',
                  'scripts/features/password-reset/password-reset.factory.js',
                  'scripts/features/password-reset/password-reset.service.js',
                  'scripts/features/login/login.controller.js',
                  'scripts/features/login/login.service.js',
                  'scripts/features/login/login.factory.js',
                  'scripts/features/login/login.directive.js'
                ]
                
              })
            }
          }
        })
        .state('login', {
          templateUrl: 'scripts/features/login/login.html',
          controller: 'loginController',
          url: '/login',
          resolve: {
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/login/login.controller.js',
                  'scripts/features/login/login.service.js',
                  'scripts/features/login/login.factory.js',
                  'scripts/features/login/login.directive.js',
                  'scripts/features/establishment/establishment.service.js',
                  'scripts/features/establishment/establishment.factory.js',
                  'https://www.google.com/recaptcha/api.js?render=6Lduq8cUAAAAAOwG3xMn77SsqR886E9bLLx7LBhA',
                  'js/conversation-chat-login.js'
                ]
              })
            }
          }
        })
        // .state('mautic', {
        //   templateUrl: 'views/mauticform.html',
          // controller: 'loginController',
          // url: '/mautic',
          // resolve: {
          //   loadMyFiles: function ($ocLazyLoad) {
          //     return $ocLazyLoad.load({
          //       name: 'app',
          //       files: [
          //         'scripts/features/login/login.controller.js',
          //         'scripts/features/establishment/establishment.service.js',
          //         'scripts/features/establishment/establishment.factory.js',
          //       ]
          //     })
          //   }
        //   }
        // })
        .state('principal.account', {
          templateUrl: 'scripts/features/account/account-list.html',
          controller: 'accountController',
          url: '/account',
          resolve: {
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/user/user.service.js',
                  'scripts/features/user/user.factory.js',
                  'scripts/features/payment/payment.service.js',
                  'scripts/features/payment/payment.factory.js',
                  'scripts/features/establishment/establishment.service.js',
                  'scripts/features/establishment/establishment.factory.js',
                  'scripts/features/account/account.controller.js',
                ]
              })
            }
          }
        })
        .state('principal.subscription', {
          templateUrl: 'scripts/features/subscription/subscription-list.html',
          controller: 'subscriptionListController',
          url: '/account/subscription',
          resolve: {
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/establishment/establishment.service.js',
                  'scripts/features/establishment/establishment.factory.js',
                  'scripts/features/payment/payment.service.js',
                  'scripts/features/payment/payment.factory.js',
                  'scripts/features/subscription/subscription.controller.js'
                ]
              })
            }
          }
        })
        .state('principal.subscription-invoice', {
          templateUrl: 'scripts/features/invoice/invoice.html',
          controller: 'invoiceController',
          url: '/account/subscription/invoice/{id}',
          resolve: {
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/payment/payment.service.js',
                  'scripts/features/payment/payment.factory.js',
                  'scripts/features/invoice/invoice.controller.js'
                ]
              })
            }
          }
        })
        .state('principal.print-invoice', {
          templateUrl: 'scripts/features/invoice/invoice.html',
          controller: 'invoiceController',
          url: '/account/subscription/invoice/print/{id}',
          resolve: {
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/payment/payment.service.js',
                  'scripts/features/payment/payment.factory.js',
                  'scripts/features/invoice/invoice.controller.js'
                ]
              })
            }
          }
        })
        .state('principal.broadcast', {
          templateUrl: 'scripts/features/broadcast/broadcast-list.html',
          controller: 'broadCastController',
          url: '/broadcast',
          resolve: {
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/broadcast/broadcast.service.js',
                  'scripts/features/broadcast/broadcast.factory.js',
                  'scripts/features/broadcast/broadcast.controller.js'
                ]
              })
            }
          }
        })
        .state('principal.broadcast-new', {
          templateUrl: 'scripts/features/broadcast/broadcast-new.html',
          controller: 'broadCastNewController',
          url: '/broadcast-new',
          resolve: {
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/broadcast/broadcast.service.js',
                  'scripts/features/broadcast/broadcast.factory.js',
                  'scripts/features/broadcast/broadcast.controller.js'
                ]
              })
            }
          }
        })
        .state('principal.message', {
          templateUrl: 'scripts/features/message/message.html',
          controller: 'messageController',
          url: '/messages',
          resolve: {
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/message/message.service.js',
                  'scripts/features/message/message.factory.js',
                  'scripts/features/message/message.controller.js'
                ]
              })
            }
          }
        })
        .state('principal.categoria', {
          templateUrl: 'scripts/features/category/category-list.html',
          controller: 'category-list.controller',
          url: '/categoria',
          resolve: {
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/category/category.controller.js',
                  'scripts/features/category/category.service.js',
                  'scripts/features/category/category.factory.js'
                ]
              })
            }
          }
        })
        .state('principal.categoria-editar', {
          templateUrl: 'scripts/features/category/category-edit.html',
          controller: 'category.controller',
          url: '/categoria/{id}',
          resolve: {
            loadMyDirectives: function ($ocLazyLoad) {
              return $ocLazyLoad.load(
                {
                  name: 'app',
                  files: [
                    'scripts/features/product/product.directive.js',
                    'scripts/features/additional/additional.directive.js'
                  ]
                })
            },
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/category/category.controller.js',
                  'scripts/features/product/product.controller.js',
                  'scripts/features/additional/additional.controller.js',
                  'scripts/features/category/category.service.js',
                  'scripts/features/product/product.service.js',
                  'scripts/features/additional/additional.service.js',
                  'scripts/features/category/category.factory.js',
                  'scripts/features/product/product.factory.js',
                  'scripts/features/additional/additional.factory.js',
                  'scripts/features/item-availability/item-availability.controller.js',
                  'scripts/features/item-availability/item-availability.directive.js',
                  'scripts/features/item-out/item-out.controller.js',
                  'scripts/features/item-out/item-out.directive.js'
                ]
              })
            }
          }
        })
        .state('principal.produto-editar-2v', {
          templateUrl: 'scripts/features/product/product-edit.html',
          controller: 'produtoController-directive',
          url: '/produto/{id}',
          resolve: {
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/category/category.service.js',
                  'scripts/features/product/product.service.js',
                  'scripts/features/product/product.factory.js',
                  'scripts/features/product/product.controller.js',
                  'scripts/features/product/product.directive.js',
                  'scripts/features/item-availability/item-availability.controller.js',
                  'scripts/features/item-availability/item-availability.directive.js',
                  'scripts/features/item-out/item-out.controller.js',
                  'scripts/features/item-out/item-out.directive.js'
                ]
              })
            }
          }
        })
        .state('principal.establishment', {
          templateUrl: 'scripts/features/establishment/establishment-edit.html',
          controller: 'establishmentController',
          url: '/establishment',
          resolve: {
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'js/togeojson.js',
                  'https://maps.googleapis.com/maps/api/js?key=AIzaSyBiTQRu8S5T0eyXZaIrLSGhp-FP3fvbTqw&libraries=places',
                  'scripts/features/establishment/establishment.directive.js',
                  'scripts/directives/video-tour/video-tour.directive.js',
                  'scripts/dialogs/dialog-address/dialog-address.controller.js',
                  'scripts/dialogs/dialog-phone/dialog-phone.controller.js',
                  'scripts/dialogs/dialog-radius/dialog-radius.controller.js',
                  'scripts/dialogs/dialog-region/dialog-region.controller.js',
                  'scripts/dialogs/dialog-region/dialog-region-address-manual.controller.js',
                  'js/xlsx.js',
                  'js/jszip.js',
                  'scripts/dialogs/dialog-region/dialog-add-region.controller.js',
                  'scripts/dialogs/dialog-hours/dialog-hours.controller.js',
                  'scripts/dialogs/dialog-payment/dialog-payment.controller.js',
                  'scripts/features/establishment/establishment.service.js',
                  'scripts/features/establishment/establishment.factory.js',
                  'scripts/features/establishment/establishment.controller.js',
                  'scripts/features/user-ref/user-ref.service.js',
                  'scripts/features/user-ref/user-ref.factory.js',
                  'scripts/features/establishment/establishment-units.service.js',
                  'scripts/features/establishment/establishment-units.factory.js',
                  'scripts/features/product/product.controller.js',
                  'scripts/features/product/product.directive.js',
                ]
              })
            }
          }
        })
        .state('principal.establishment-unavailability', {
          templateUrl: 'scripts/features/establishment-unavailability/establishment-unavailability.html',
          controller: 'establishmentUnavailabilityController',
          url: '/establishment-unavailability',
          resolve: {
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/establishment-unavailability/establishment-unavailability.controller.js',
                  'scripts/features/establishment-unavailability/establishment-unavailability.service.js',
                  'scripts/features/establishment-unavailability/establishment-unavailability.factory.js',
                  'scripts/features/establishment-unavailability/establishment-unavailability-dialog.html',
                  // 'scripts/features/establishment-unavailability/establishment-unavailability-dialog.controller.js',
                  'scripts/features/user-ref/user-ref.service.js',
                  'scripts/features/user-ref/user-ref.factory.js'
                ]
              })
            }
          }
        })
        .state('principal.additional-edit', {
          templateUrl: 'scripts/features/additional/additional-edit.html',
          controller: 'additionalController',
          url: '/additional/{id}',
          resolve: {
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/additional/additional.service.js',
                  'scripts/features/additional/additional.factory.js',
                  'scripts/features/additional/additional.controller.js',
                  'scripts/features/category/category.service.js',
                  'scripts/features/category/category.factory.js',
                  'scripts/features/item-out/item-out.controller.js',
                  'scripts/features/item-out/item-out.directive.js'
                ]
              })
            }
          }
        })
        .state('principal.order', {
          templateUrl: 'scripts/features/order-list/order-list.html',
          controller: 'orderListController',
          url: '/order',
          resolve: {
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/order/order.service.js',
                  'scripts/features/order/order.factory.js',
                  'scripts/features/order-list/order-list.controller.js',
                  'scripts/features/user-ref/user-ref.service.js',
                  'scripts/features/user-ref/user-ref.factory.js'
                ]
              })
            }
          }
        })
        .state('principal.order-edit', {
          templateUrl: 'scripts/features/order/order-edit.html',
          controller: 'orderController',
          url: '/order/{id}',
          resolve: {
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/order/order.service.js',
                  'scripts/features/order/order.factory.js',
                  'scripts/features/order/order.controller.js',
                  'scripts/features/category/category.service.js',
                  'scripts/features/category/category.factory.js',
                  'scripts/features/product/product.service.js',
                  'scripts/features/product/product.factory.js',
                  'scripts/features/client/client.service.js',
                  'scripts/features/client/client.factory.js',
                  'scripts/features/client/client-dialog-data.controller.js',
                  'scripts/features/user-ref/user-ref.service.js',
                  'scripts/features/user-ref/user-ref.factory.js',
                  'scripts/features/establishment/establishment.service.js',
                  'scripts/features/establishment/establishment.factory.js',
                  'scripts/features/user-ref/user-ref.service.js',
                  'scripts/features/user-ref/user-ref.factory.js',
                  'scripts/features/order-product-pizza-dialog/order-product-pizza-dialog.controller.js',
                  'scripts/features/order-product-combo-dialog/order-product-combo-dialog.controller.js',
                  'scripts/features/order-product-promotion-dialog/order-product-promotion-dialog.controller.js',
                  'scripts/dialogs/dialog-unit-default/dialog-unit-default.controller.js'
                ]
              })
            }
          }
        })
        .state('principal.order-ticket', {
          templateUrl: 'scripts/features/ticket/ticket.html',
          controller: 'ticketController',
          url: '/order-ticket',
          resolve: {
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/ticket/ticket.service.js',
                  'scripts/features/ticket/ticket.factory.js',
                  'scripts/features/ticket/ticket.controller.js',
                  'scripts/features/user-ref/user-ref.service.js',
                  'scripts/features/user-ref/user-ref.factory.js',
                ]
              })
            }
          }
        })
        .state('principal.satisfactionSurvey', {
          templateUrl: 'scripts/features/report-analysis/report-analysis.html',
          controller: 'analysis.controller',
          url: '/report/analysis',
          resolve: {
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'https://maps.googleapis.com/maps/api/js?key=AIzaSyBiTQRu8S5T0eyXZaIrLSGhp-FP3fvbTqw&libraries=visualization',
                  'scripts/features/establishment/establishment.service.js',
                  'scripts/features/establishment/establishment.factory.js',
                  'scripts/features/report/report.service.js',
                  'scripts/features/report/report.factory.js',
                  'scripts/features/user-ref/user-ref.service.js',
                  'scripts/features/user-ref/user-ref.factory.js',
                  'scripts/features/report-analysis/report-analysis.controller.js'
                  
                ]
              })
            }
          }
        })

        .state('principal.reportFidelity', {
          templateUrl: 'scripts/features/fidelity-report/fidelity-report.html',
          controller: 'fidelityReportController',
          url: '/report/fidelity',
          resolve: {
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/fidelity-report/fidelity-report.controller.js',
                  'scripts/features/target/target.factory.js',
                  'scripts/features/target/target.service.js',
                  'scripts/features/client/client.service.js',
                  'scripts/features/client/client.factory.js',
                  'scripts/features/client/client-dialog-data.controller.js'
                ]
              })
            }
          }
        })
        .state('principal.orderEntries', {
          templateUrl: 'scripts/features/orders-entries/orders-entries.html',
          controller: 'ordersEntriesController',
          url: '/report/order-entries',
          resolve: {
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'https://maps.googleapis.com/maps/api/js?key=AIzaSyBiTQRu8S5T0eyXZaIrLSGhp-FP3fvbTqw&libraries=visualization',
                  'scripts/features/establishment/establishment.service.js',
                  'scripts/features/establishment/establishment.factory.js',
                  'scripts/features/report/report.service.js',
                  'scripts/features/report/report.factory.js',
                  'scripts/features/orders-entries/orders-entries.controller.js',
                  'scripts/features/establishment/establishment-units.service.js',
                  'scripts/features/establishment/establishment-units.factory.js',
                  'scripts/features/user-ref/user-ref.service.js',
                  'scripts/features/user-ref/user-ref.factory.js'
                ]
              })
            }
          }
        })
        .state('principal.reportSatisfaction', {
          templateUrl: 'scripts/features/report-satisfaction/report-satisfaction.html',
          controller: 'reportSatisfactionController',
          url: '/report/satisfaction',
          resolve: {
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/report-satisfaction/report-satisfaction.service.js',
                  'scripts/features/report-satisfaction/report-satisfaction.factory.js',                  
                  'scripts/features/report-satisfaction/report-satisfaction.controller.js',
                  'scripts/features/user-ref/user-ref.service.js',
                  'scripts/features/user-ref/user-ref.factory.js',
                ]
              })
            }
          }
        })
        .state('principal.clientsFeedback', {
          templateUrl: 'scripts/features/feedback/feedback.html',
          controller: 'feedback.controller',
          url: '/report/clients-feedback',
          resolve: {
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/feedback/feedback.service.js',
                  'scripts/features/feedback/feedback.factory.js',
                  // 'scripts/features/client/client.service.js',
                  // 'scripts/features/client/client.factory.js',
                  // 'scripts/features/order/order.service.js',
                  // 'scripts/features/order/order.factory.js',
                  // 'scripts/features/establishment/establishment.service.js',
                  // 'scripts/features/establishment/establishment.factory.js',
                  'scripts/features/feedback/feedback.controller.js'
                ]
              })
            }
          }
        })
        .state('principal.socialNetworks', {
          templateUrl: 'scripts/features/social-networks/social-networks-list.html',
          controller: 'socialNetworksController',
          url: '/socialNetworks',
          resolve: {
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/social-networks/social-networks.controller.js',
                  'scripts/features/social-networks/social-networks.service.js',
                  'scripts/features/social-networks/social-networks.factory.js',
                  'scripts/features/page/page.service.js',
                  'scripts/features/page/page.factory.js',
                  'scripts/features/establishment/establishment.service.js',
                  'scripts/features/establishment/establishment.factory.js'
                ]
              })
            }
          }
        })

        .state('principal.integrations', {
          templateUrl: 'scripts/features/integrations/integrations.html',
          controller: 'integrationsController',
          url: '/integrations',
          resolve: {
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/integrations/integrations.controller.js',
                  'scripts/features/establishment/establishment.service.js',
                  'scripts/features/establishment/establishment.factory.js',
                ]
              })
            }
          }
        })
        .state('principal.partners-integration', {
          templateUrl: 'scripts/features/partners-integration/partners-integration.html',
          controller: 'partnersIntegrationController',
          url: '/partners-integration',
          resolve: {
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/partners-integration/partners-integration.controller.js',
                ]
              })
            }
          }
        })

        .state('principal.setup-ncr', {
          templateUrl: 'scripts/features/setup-ncr/setup-ncr.html',
          controller: 'setupNCRController',
          url: '/setup-ncr',
          resolve: {
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/setup-ncr/setup-ncr.controller.js',
                  'scripts/features/establishment/establishment.service.js',
                  'scripts/features/establishment/establishment.factory.js',
                  'scripts/features/establishment/establishment-units.service.js',
                  'scripts/features/establishment/establishment-units.factory.js',
                  'scripts/features/product/product.service.js',
                  'scripts/features/product/product.factory.js',
                ]
              })
            }
          }
        })

        .state('principal.setup-zoop', {
          templateUrl: 'scripts/features/setup-zoop/setup-zoop.html',
          controller: 'setupZOOPController',
          url: '/setup-zoop',
          resolve: {
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/setup-zoop/setup-zoop.controller.js',
                  'scripts/features/establishment/establishment.service.js',
                  'scripts/features/establishment/establishment.factory.js',
                  'scripts/features/establishment/establishment-units.service.js',
                  'scripts/features/establishment/establishment-units.factory.js',
                  'scripts/features/product/product.service.js',
                  'scripts/features/product/product.factory.js',
                  'scripts/features/setup-zoop/setup-zoop.service.js',
                  'scripts/features/setup-zoop/setup-zoop.factory.js'
                ]
              })
            }
          }
        })

        .state('principal.fidelity', {
          templateUrl: 'scripts/features/fidelity-list/fidelity-list.html',
          controller: 'fidelityListController',
          url: '/fidelity',
          resolve: {
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/fidelity-list/fidelity-list.controller.js',
                  'scripts/features/target/target.factory.js',
                  'scripts/features/target/target.service.js',
                  'scripts/features/category/category.service.js',
                  'scripts/features/category/category.factory.js'
                ]
              })
            }
          }
        })
        .state('principal.fidelity-edit', {
          templateUrl: 'scripts/features/fidelity/fidelity-edit.html',
          controller: 'fidelityController',
          url: '/fidelity/{origin}/{id}/{type}',
          resolve: {
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/fidelity/fidelity.controller.js',
                  'scripts/features/target/target.factory.js',
                  'scripts/features/target/target.service.js',
                  'scripts/features/category/category.service.js',
                  'scripts/features/category/category.factory.js'
                ]
              })
            }
          }
        })

        .state('principal.promotion-list', {
          templateUrl: 'scripts/features/promotion/promotion-list.html',
          controller: 'promotionListController',
          url: '/promotion/list/{origin}',
          resolve: {
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/fidelity/fidelity.controller.js',
                  'scripts/features/promotion/promotion.controller.js',
                  'scripts/features/target/target.factory.js',
                  'scripts/features/promotion/promotion.factory.js',
                  'scripts/features/target/target.service.js',
                  'scripts/features/promotion/promotion.service.js',
                  'scripts/features/category/category.service.js',
                  'scripts/features/category/category.factory.js',
                  'scripts/features/coupon/coupon.factory.js',
                  'scripts/features/coupon/coupon.service.js'
                ]
              })
            }
          }
        })
        .state('principal.coupon-list', {
          templateUrl: 'scripts/features/coupon/coupon-list.html',
          controller: 'couponListController',
          url: '/coupon-list',
          resolve: {
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  // 'scripts/features/fidelity/fidelity.controller.js',
                  'scripts/features/coupon/coupon.controller.js',
                  // 'scripts/features/target/target.factory.js',
                  // 'scripts/features/promotion/promotion.factory.js',
                  // 'scripts/features/target/target.service.js',
                  // 'scripts/features/promotion/promotion.service.js',
                  'scripts/features/category/category.service.js',
                  'scripts/features/category/category.factory.js',
                  'scripts/features/coupon/coupon.factory.js',
                  'scripts/features/coupon/coupon.service.js'
                ]
              })
            }
          }
        })

        .state('principal.target-promotion-edit', {
          templateUrl: 'scripts/features/fidelity/fidelity-promotion-edit.html',
          controller: 'fidelityController',
          url: '/target/promotion/{id}/{type}',
          resolve: {
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/fidelity/fidelity.controller.js',
                  'scripts/features/target/target.factory.js',
                  'scripts/features/target/target.service.js',
                  'scripts/features/category/category.service.js',
                  'scripts/features/category/category.factory.js'
                ]
              })
            }
          }
        })
        .state('principal.coupon-edit', {
          templateUrl: 'scripts/features/coupon/coupon-edit.html',
          controller: 'couponController',
          url: '/coupon/{id}',
          resolve: {
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/item-availability/item-availability.controller.js',
                  'scripts/features/item-availability/item-availability.directive.js',
                  'scripts/features/coupon/coupon.controller.js',
                  'scripts/features/coupon/coupon.factory.js',
                  'scripts/features/coupon/coupon.service.js',
                  'scripts/features/user-ref/user-ref.service.js',
                  'scripts/features/user-ref/user-ref.factory.js',
                  'scripts/dialogs/dialog-send-coupon/dialog-send-coupon.controller.js'

                ]
              })
            }
          }
        })
        .state('principal.fidelity-evolution', {
          templateUrl: 'scripts/features/fidelity-evolution/fidelity-evolution.html',
          controller: 'fidelityEvolutionController',
          url: '/{origin}/fidelityreport/clientevolution/{id}',
          resolve: {
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/fidelity-evolution/fidelity-evolution.controller.js',
                  'scripts/features/target/target.factory.js',
                  'scripts/features/target/target.service.js',
                ]
              })
            }
          }
        })
        .state('principal.comment-edit', {
          templateUrl: 'scripts/features/comment/comment-edit.html',
          controller: 'commentController',
          url: '/comment/{origin}/{id}/{type}',
          resolve: {
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/comment/comment.controller.js',
                  'scripts/features/target/target.factory.js',
                  'scripts/features/target/target.service.js',
                  'scripts/features/category/category.service.js',
                  'scripts/features/category/category.factory.js'
                ]
              })
            }
          }
        })

        .state('principal.print', {
          templateUrl: 'scripts/features/print/print-list.html',
          controller: 'printController',
          url: '/printer',
          resolve: {
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/print/print.controller.js',
                  'scripts/features/print/print.factory.js',
                  'scripts/features/print/print.service.js',
                  'scripts/dialogs/dialog-image-crop/dialog-image-crop.controller.js'
                ]
              })
            }
          }
        })

        .state('principal.notifications', {
          templateUrl: 'scripts/features/main/main-notifications.html',
          url: '/notifications',
          resolve: {
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  // 'scripts/features/main/main.controller.js'
                ]
              })
            }
          }
        })

        .state('principal.settings-sequence', {
          templateUrl: 'scripts/features/sequence/sequence.html',
          controller: 'sequenceController',
          url: '/settings-sequence',
          resolve: {
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/sequence/sequence.controller.js',
                  'scripts/features/sequence/sequence.service.js',
                  'scripts/features/sequence/sequence.factory.js',
                ]
              })
            }
          }
        })

        .state('principal.category-pizza-edit', {
          templateUrl: 'scripts/features/pizza/pizza-list.html',
          url: '/pizza/{id}/{screen}',
          resolve: {
            loadMyDirectives: function ($ocLazyLoad) {
              return $ocLazyLoad.load(
                {
                  name: 'app',
                  files: [
                    'scripts/features/pizza/pizza.directive.js'
                  ]
                })
            },
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/pizza/pizza.controller.js',
                  'scripts/features/pizza-extra-category/pizza-extra-category.controller.js',
                  'scripts/features/pizza-extra-item/pizza-extra-item.controller.js',
                  'scripts/features/category/category.factory.js',
                  'scripts/features/category/category.service.js',
                  'scripts/features/pizza-size/pizza-size.controller.js',
                  'scripts/features/size/size.service.js',
                  'scripts/features/size/size.factory.js',
                  'scripts/features/pizza-flavor-category/pizza-flavor-category.controller.js',
                  'scripts/features/sub-category/sub-category.service.js',
                  'scripts/features/sub-category/sub-category.factory.js',
                  'scripts/features/item-out/item-out.controller.js',
                  'scripts/features/item-out/item-out.directive.js',
                  'scripts/features/pizza-border/pizza-border.controller.js',
                  'scripts/features/pizza-border/pizza-border.service.js',
                  'scripts/features/pizza-border/pizza-border.factory.js',
                  'scripts/features/extra-category/extra-category.service.js',
                  'scripts/features/extra-category/extra-category.factory.js',
                  'scripts/features/item-availability/item-availability.controller.js',
                  'scripts/features/item-availability/item-availability.directive.js'
                 
                ]
              })
            }
          }
        })
        .state('principal.category-pizza-flavor', {
          templateUrl: 'scripts/features/pizza-flavor-category/pizza-flavor-category-edit.html',
          controller: 'flavorController',
          url: '/pizza/flavor/{type}/{id}',
          resolve: {
            loadMyDirectives: function ($ocLazyLoad) {
              return $ocLazyLoad.load(
                {
                  name: 'app',
                  files: [
                    'scripts/features/pizza/pizza.directive.js'
                  ]
                })
            },
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/pizza-flavor-category/pizza-flavor-category.controller.js',
                  'scripts/features/sub-category/sub-category.service.js',
                  'scripts/features/sub-category/sub-category.factory.js',
                  'scripts/features/pizza-flavor-item/pizza-flavor-item.controller.js',
                  'scripts/features/flavor-item/flavor-item.service.js',
                  'scripts/features/flavor-item/flavor-item.factory.js',
                  'scripts/features/category/category.service.js',
                  'scripts/features/category/category.factory.js',
                  'scripts/dialogs/dialog-select-itens/dialog-select-itens.controller.js',
                  'scripts/features/item-availability/item-availability.controller.js',
                  'scripts/features/item-availability/item-availability.directive.js',
                  'scripts/features/item-out/item-out.controller.js',
                  'scripts/features/item-out/item-out.directive.js'
                  
                ]
              })
            }
          }
        })

        .state('principal.category-pizza-flavor-item', {
          templateUrl: 'scripts/features/pizza-flavor-item/pizza-flavor-item-edit.html',
          controller: 'flavorItemController',
          url: '/pizza/flavor-item/{type}/{id}',
          resolve: {
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/pizza-flavor-item/pizza-flavor-item.controller.js',
                  'scripts/features/flavor-item/flavor-item.service.js',
                  'scripts/features/flavor-item/flavor-item.factory.js',
                  'scripts/features/sub-category/sub-category.service.js',
                  'scripts/features/sub-category/sub-category.factory.js',
                  'scripts/features/item-availability/item-availability.controller.js',
                  'scripts/features/item-availability/item-availability.directive.js',
                  'scripts/features/item-out/item-out.controller.js',
                  'scripts/features/item-out/item-out.directive.js'
                       
                  
                  
                ]
              })
            }
          }
        })

        .state('principal.category-pizza-extra', {
          templateUrl: 'scripts/features/pizza-extra-category/pizza-extra-category-edit.html',
          controller: 'extraPizzaController',
          url: '/pizza/extra/{type}/{id}',
          resolve: {
            loadMyDirectives: function ($ocLazyLoad) {
              return $ocLazyLoad.load(
                {
                  name: 'app',
                  files: [
                    'scripts/features/pizza/pizza.directive.js'
                  ]
                })
            },
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/pizza-extra-category/pizza-extra-category.controller.js',
                  'scripts/features/pizza-extra-item/pizza-extra-item.controller.js',
                  'scripts/features/extra-category/extra-category.service.js',
                  'scripts/features/extra-category/extra-category.factory.js',
                  'scripts/features/extra-item/extra-item.service.js',
                  'scripts/features/extra-item/extra-item.factory.js',
                  'scripts/features/category/category.service.js',
                  'scripts/features/category/category.factory.js',
                  'scripts/dialogs/dialog-select-itens/dialog-select-itens.controller.js',
                  'scripts/features/item-availability/item-availability.controller.js',
                  'scripts/features/item-availability/item-availability.directive.js',
                  'scripts/features/item-out/item-out.controller.js',
                  'scripts/features/item-out/item-out.directive.js'
                ]
              })
            }
          }
        })

        .state('principal.category-pizza-extra-item', {
          templateUrl: 'scripts/features/pizza-extra-item/pizza-extra-item-edit.html',
          controller: 'extraItemPizzaListController',
          url: '/pizza/extra-item/{type}/{id}',
          resolve: {
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/pizza-extra-item/pizza-extra-item.controller.js',
                  'scripts/features/extra-item/extra-item.service.js',
                  'scripts/features/extra-item/extra-item.factory.js',
                  'scripts/features/extra-category/extra-category.service.js',
                  'scripts/features/extra-category/extra-category.factory.js',
                  'scripts/features/item-availability/item-availability.controller.js',
                  'scripts/features/item-availability/item-availability.directive.js',
                  'scripts/features/item-out/item-out.controller.js',
                  'scripts/features/item-out/item-out.directive.js'
                ]
              })
            }
          }
        })

        .state('principal.category-combo-edit', {
          templateUrl: 'scripts/features/combo/combo-list.html',
          controller: 'comboListController',
          url: '/combo/{id}/{screen}',
          resolve: {
            loadMyDirectives: function ($ocLazyLoad) {
              return $ocLazyLoad.load(
                {
                  name: 'app',
                  files: [
                    'scripts/features/combo/combo.directive.js'
                  ]
                })
            },
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/combo/combo.controller.js',
                  'scripts/features/combo-extra-category/combo-extra-category.controller.js',
                  'scripts/features/combo-size/combo-size.controller.js',
                  'scripts/features/combo-preparation-mode/combo-preparation-mode.controller.js',
                  'scripts/features/combo-flavor-category/combo-flavor-category.controller.js',
                  'scripts/features/category/category.factory.js',
                  'scripts/features/category/category.service.js',
                  'scripts/features/size/size.service.js',
                  'scripts/features/size/size.factory.js',
                  'scripts/features/extra-category/extra-category.service.js',
                  'scripts/features/extra-category/extra-category.factory.js',
                  'scripts/features/preparation-mode/preparation-mode.service.js',
                  'scripts/features/preparation-mode/preparation-mode.factory.js',
                  'scripts/features/sub-category/sub-category.service.js',
                  'scripts/features/sub-category/sub-category.factory.js',
                  'scripts/features/item-availability/item-availability.controller.js',
                  'scripts/features/item-availability/item-availability.directive.js',
                  'scripts/features/item-out/item-out.controller.js',
                  'scripts/features/item-out/item-out.directive.js'
                ]
              })
            }
          }
        })

        .state('principal.category-combo-extra', {
          templateUrl: 'scripts/features/combo-extra-category/combo-extra-category-edit.html',
          controller: 'extraController',
          url: '/combo/extra/{type}/{id}',
          resolve: {
            loadMyDirectives: function ($ocLazyLoad) {
              return $ocLazyLoad.load(
                {
                  name: 'app',
                  files: [
                    'scripts/features/combo/combo.directive.js'
                  ]
                })
            },
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/combo-extra-category/combo-extra-category.controller.js',
                  'scripts/features/combo-extra-item/combo-extra-item.controller.js',
                  'scripts/features/extra-category/extra-category.service.js',
                  'scripts/features/extra-category/extra-category.factory.js',
                  'scripts/features/extra-item/extra-item.service.js',
                  'scripts/features/extra-item/extra-item.factory.js',
                  'scripts/features/category/category.service.js',
                  'scripts/features/category/category.factory.js',
                  'scripts/dialogs/dialog-select-itens/dialog-select-itens.controller.js',
                  'scripts/features/item-availability/item-availability.controller.js',
                  'scripts/features/item-availability/item-availability.directive.js',
                  'scripts/features/item-out/item-out.controller.js',
                  'scripts/features/item-out/item-out.directive.js'
                ]
              })
            }
          }
        })

        .state('principal.category-combo-extra-item', {
          templateUrl: 'scripts/features/combo-extra-item/combo-extra-item-edit.html',
          controller: 'extraItemController',
          url: '/combo/extra-item/{type}/{id}',
          resolve: {
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/combo-extra-item/combo-extra-item.controller.js',
                  'scripts/features/extra-item/extra-item.service.js',
                  'scripts/features/extra-item/extra-item.factory.js',
                  'scripts/features/extra-category/extra-category.service.js',
                  'scripts/features/extra-category/extra-category.factory.js',
                  'scripts/features/item-availability/item-availability.controller.js',
                  'scripts/features/item-availability/item-availability.directive.js',
                  'scripts/features/item-out/item-out.controller.js',
                  'scripts/features/item-out/item-out.directive.js'
                ]
              })
            }
          }
        })

        .state('principal.category-combo-flavor', {
          templateUrl: 'scripts/features/combo-flavor-category/combo-flavor-category-edit.html',
          controller: 'flavorComboController',
          url: '/combo/flavor/{type}/{id}',
          resolve: {
            loadMyDirectives: function ($ocLazyLoad) {
              return $ocLazyLoad.load(
                {
                  name: 'app',
                  files: [
                    'scripts/features/combo/combo.directive.js'
                  ]
                })
            },
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/combo-flavor-category/combo-flavor-category.controller.js',
                  'scripts/features/combo-flavor-item/combo-flavor-item.controller.js',
                  'scripts/features/category/category.service.js',
                  'scripts/features/category/category.factory.js',
                  'scripts/dialogs/dialog-select-itens/dialog-select-itens.controller.js',
                  'scripts/features/sub-category/sub-category.service.js',
                  'scripts/features/sub-category/sub-category.factory.js',
                  'scripts/features/flavor-item/flavor-item.service.js',
                  'scripts/features/flavor-item/flavor-item.factory.js',
                  'scripts/features/item-availability/item-availability.controller.js',
                  'scripts/features/item-availability/item-availability.directive.js',
                  'scripts/features/item-out/item-out.controller.js',
                  'scripts/features/item-out/item-out.directive.js'
                ]
              })
            }
          }
        })

        .state('principal.category-combo-flavor-item', {
          templateUrl: 'scripts/features/combo-flavor-item/combo-flavor-item-edit.html',
          controller: 'flavorItemComboController',
          url: '/combo/flavor-item/{type}/{id}',
          resolve: {
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/combo-flavor-item/combo-flavor-item.controller.js',
                  'scripts/features/flavor-item/flavor-item.service.js',
                  'scripts/features/flavor-item/flavor-item.factory.js',
                  'scripts/features/sub-category/sub-category.service.js',
                  'scripts/features/sub-category/sub-category.factory.js',
                  'scripts/features/item-availability/item-availability.controller.js',
                  'scripts/features/item-availability/item-availability.directive.js',
                  'scripts/features/item-out/item-out.controller.js',
                  'scripts/features/item-out/item-out.directive.js'
                ]
              })
            }
          }
        })

        .state('principal.category-promotion-edit', {
          templateUrl: 'scripts/features/promotion/promotion-edit.html',
          controller: 'promotionEditController',
          url: '/{origin}/promotion/{id}/{screen}',
          resolve: {
            loadMyDirectives: function ($ocLazyLoad) {
              return $ocLazyLoad.load(
                {
                  name: 'app',
                  files: [
                    'scripts/features/promotion/promotion.directive.js'
                  ]
                })
            },
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/promotion/promotion.controller.js',
                  'scripts/features/promotion-extra-category/promotion-extra-category.controller.js',
                  'scripts/features/category/category.factory.js',
                  'scripts/features/category/category.service.js',
                  'scripts/features/extra-category/extra-category.service.js',
                  'scripts/features/extra-category/extra-category.factory.js',
                  'scripts/features/promotion/promotion.service.js',
                  'scripts/features/promotion/promotion.factory.js',
                  'scripts/features/item-availability/item-availability.controller.js',
                  'scripts/features/item-availability/item-availability.directive.js',
                  'scripts/features/item-out/item-out.controller.js',
                  'scripts/features/item-out/item-out.directive.js'
                ]
              })
            }
          }
        })

        .state('principal.category-promotion-extra', {
          templateUrl: 'scripts/features/promotion-extra-category/promotion-extra-category-edit.html',
          controller: 'extraPromoController',
          url: '/{origin}/promotion/extra/{type}/{id}',
          resolve: {
            loadMyDirectives: function ($ocLazyLoad) {
              return $ocLazyLoad.load(
                {
                  name: 'app',
                  files: [
                    'scripts/features/promotion/promotion.directive.js'
                  ]
                })
            },
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/promotion-extra-category/promotion-extra-category.controller.js',
                  'scripts/features/promotion-extra-item/promotion-extra-item.controller.js',
                  'scripts/features/extra-category/extra-category.service.js',
                  'scripts/features/extra-category/extra-category.factory.js',
                  'scripts/features/extra-item/extra-item.service.js',
                  'scripts/features/extra-item/extra-item.factory.js',
                  'scripts/features/category/category.service.js',
                  'scripts/features/category/category.factory.js',
                  'scripts/dialogs/dialog-select-itens/dialog-select-itens.controller.js',
                  'scripts/features/item-availability/item-availability.controller.js',
                  'scripts/features/item-availability/item-availability.directive.js',
                  'scripts/features/item-out/item-out.controller.js',
                  'scripts/features/item-out/item-out.directive.js'
                ]
              })
            }
          }
        })

        .state('principal.category-promotion-extra-item', {
          templateUrl: 'scripts/features/promotion-extra-item/promotion-extra-item-edit.html',
          controller: 'extraItemPromoController',
          url: '/{origin}/promotion/extra-item/{type}/{id}',
          resolve: {
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/promotion-extra-item/promotion-extra-item.controller.js',
                  'scripts/features/extra-item/extra-item.service.js',
                  'scripts/features/extra-item/extra-item.factory.js',
                  'scripts/features/extra-category/extra-category.service.js',
                  'scripts/features/extra-category/extra-category.factory.js',
                  'scripts/features/item-availability/item-availability.controller.js',
                  'scripts/features/item-availability/item-availability.directive.js',
                  'scripts/features/item-out/item-out.controller.js',
                  'scripts/features/item-out/item-out.directive.js'
                ]
              })
            }
          }
        })
        .state('principal.pdv-config', {
          templateUrl: 'scripts/features/pdv-settings/pdv-settings.html',
          controller: 'pdvSettingsController',
          url: '/pdv-settings',
          resolve: {
            loadMyDirectives: function ($ocLazyLoad) {
              return $ocLazyLoad.load(
                {
                  name: 'app',
                  files: [
                    'scripts/features/pdv-settings/pdv-settings.directive.js'
                  ]
                })
            },
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/pdv-settings/pdv-settings.controller.js',
                  'scripts/features/category/category.factory.js',
                  'scripts/features/category/category.service.js',
                  'scripts/features/order/order.factory.js',
                ]
              })
            }
          }
        })

        .state('principal.order-kitchen', {
          templateUrl: 'scripts/features/kitchen/kitchen.html',
          controller: 'kitchenController',
          url: '/order-kitchen',
          resolve: {
            loadMyDirectives: function ($ocLazyLoad) {
              return $ocLazyLoad.load(
                {
                  name: 'app',
                  files: [
                    'scripts/features/kitchen/kitchen-item-layout.js'
                  ]
                })
            },
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/kitchen/kitchen.service.js',
                  'scripts/features/kitchen/kitchen.factory.js',
                  'scripts/features/kitchen/kitchen.controller.js',
                  'scripts/features/combo-extra-category/combo-extra-category.controller.js',
                  'scripts/features/combo-extra-item/combo-extra-item.controller.js',
                  'scripts/features/extra-category/extra-category.service.js',
                  'scripts/features/extra-category/extra-category.factory.js',
                  'scripts/features/extra-item/extra-item.service.js',
                  'scripts/features/extra-item/extra-item.factory.js',
                  'scripts/features/category/category.service.js',
                  'scripts/features/category/category.factory.js',
                  'scripts/features/establishment/establishment-units.service.js',
                  'scripts/features/establishment/establishment-units.factory.js',
                  'scripts/features/user-ref/user-ref.service.js',
                  'scripts/features/user-ref/user-ref.factory.js',
                  'scripts/features/page/page.service.js',
                  'scripts/features/page/page.factory.js',
                ]
              })
            }
          }
        })
        .state('principal.customers-analysis', {
          templateUrl: 'scripts/features/customers-analysis/customers-analysis.html',
          controller: 'customersAnalysisController',
          url: '/customers-analysis',
          resolve: {
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/establishment/establishment.service.js',
                  'scripts/features/establishment/establishment.factory.js',
                  'scripts/features/customers-analysis/customers-analysis.controller.js',
                  'scripts/features/client/client.service.js',
                  'scripts/features/client/client.factory.js',
                  'scripts/features/client/client-dialog-data.controller.js',
                  'scripts/features/user-ref/user-ref.service.js',
                  'scripts/features/user-ref/user-ref.factory.js'
                ]
              })
            }
          }
        })

        .state('principal.employees', {
          templateUrl: 'scripts/features/employees/employees.html',
          controller: 'employeesListController',
          url: '/employees',
          resolve: {
            loadMyFiles: function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'app',
                files: [
                  'scripts/features/employees/employees.controller.js',
                  'scripts/features/employees/employees.service.js',
                  'scripts/features/employees/employees.factory.js'
                  
                ]
              })
            }
          }
        })
      

    }])
 
  .run(function ($rootScope, $location, $window, $templateCache, message, AuthenticationService, ngFB, establishmentFactory, establishmentServ, Analytics) {
    
    if (location.hostname.includes("localhost") || location.hostname.includes("staging")) {
      console.log("APP DE TESTE:::::::::::::::::::::");
      $rootScope.appIdFB = "536372610045220";
      $rootScope.appIdOneSignal = "a1d28a7d-0263-4294-866d-a355ba831f06";
    }
    else if (location.hostname.includes("testing")){
      console.log("APP DE TESTE DA LARISSA:::::::::::::::::::::");
      $rootScope.appIdFB = "905544783178448";
      $rootScope.appIdOneSignal = "a1d28a7d-0263-4294-866d-a355ba831f06";
    }
    else {
      $rootScope.appIdFB = "124978158142613";
      // $rootScope.appIdOneSignal = "1d81fa2a-47c2-4f7e-8758-fddec9299743"; //admin.anota-ai
      $rootScope.appIdOneSignal = "0eb4fd36-d2c1-4888-b9c4-b8d52baf97b1";
    }
    $rootScope.urlOrigin = window.location.origin;
    ngFB.init({ appId: $rootScope.appIdFB });

    $rootScope.previousState;
    $rootScope.currentState;
    $rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from, fromParams) {
        $rootScope.previousState = from.name;
        $rootScope.currentState = to.name;       
        $rootScope.pageSelected = AuthenticationService.getPage(); 
        Analytics.trackPage($rootScope.pageSelected.name + '/' + to.name);
    });

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
      if (!AuthenticationService.isAuthenticated) {
        if (toState.name != "access" && toState.name != "password-reset"){
          $location.path("/login");
        }
      } else {              
        $rootScope.pageSelected = AuthenticationService.getPage();
        $rootScope.decodedToken = AuthenticationService.getDecodedToken();     
        
        establishmentFactory.buscar(function (response) {
          if (!response.err) {
            $rootScope.establishment = response;
            for (let i = 0; i < $rootScope.establishment.units.length; i++) {
              for (let j = 0; j < $rootScope.establishment.units[i].regions.length; j++) {
                $rootScope.establishment.regions.push($rootScope.establishment.units[i].regions[j]);
              }
            }

            if ($rootScope.establishment.ncr != undefined && $rootScope.establishment.ncr.active){
              ncrIntegration.url = $rootScope.establishment.ncr.url;
              ncrIntegration.apiKey = $rootScope.establishment.ncr.apiKey;
              ncrIntegration.user = $rootScope.establishment.ncr.user;
              ncrIntegration.password = $rootScope.establishment.ncr.password;
              ncrIntegration.auth = "Basic " + btoa(ncrIntegration.user + ":" + ncrIntegration.password);
            }

            if ($rootScope.establishment.lastStepCompleted == undefined || $rootScope.establishment.lastStepCompleted < 4) {
              var jump = $location.search().jump;
              if(jump == 'true'){
                window.open('../admin/index.html#/wizard?jump='+ jump,"_self"); 
              }

              $location.path("/wizard");
            }
          }
          else {
            delete $window.localStorage.adminToken;
            delete $window.localStorage.page;
            $location.path("/login");
          }
        });
      }
    });
  })
  .directive('focusMe', ['$timeout', '$parse', function ($timeout, $parse) {
    return {
      //scope: true,   // optionally create a child scope
      link: function (scope, element, attrs) {

        var model = $parse(attrs.focusMe);
        scope.$watch(model, function (value) {
          if (value === true) {
            $timeout(function () {
              element[0].focus();
            });
          }
        });
      }
    };
  }])
  .directive('onErrorSrc', function() {
    return {
        link: function(scope, element, attrs) {
          element.bind('error', function() {
            if (attrs.src != attrs.onErrorSrc) {
              attrs.$set('src', attrs.onErrorSrc);
            }
          });
        }
    }
  })
  .directive('infiniteScrollFix', function ($window) {
    return {
      restrict: 'A',
      link: function ($scope, $element) {
        $element.on('scroll', function (event) {
          $window.dispatchEvent(new Event('scroll'));
        });
      }
    };
  })
  .directive('uppercased', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, modelCtrl) {
            modelCtrl.$parsers.push(function(input) {
                return input ? input.toUpperCase() : "";
            });
            element.css("text-transform","uppercase");
        }
    };
  })
  .directive('sparkline', [function () {
    'use strict';
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function (scope, elem, attrs, ngModel) {

        var opts = {};
        //TODO: Use $eval to get the object
        opts.type = attrs.type || 'line';

        scope.$watch(attrs.ngModel, function () {
          render();
        });

        scope.$watch(attrs.opts, function () {
          render();
        }
        );
        var render = function () {
          var model;
          if (attrs.opts) angular.extend(opts, angular.fromJson(attrs.opts));
          // Trim trailing comma if we are a string
          angular.isString(ngModel.$viewValue) ? model = ngModel.$viewValue.replace(/(^,)|(,$)/g, "") : model = ngModel.$viewValue;
          var data;
          // Make sure we have an array of numbers
          angular.isArray(model) ? data = model : data = model.split(',');
          $(elem).sparkline(data, opts);
        };
      }
    }
  }]);

function findWithAttr(array, attr, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i][attr] === value) {
      return i;
    }
  }
  return -1;
}