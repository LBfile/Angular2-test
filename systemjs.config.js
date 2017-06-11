/**
 * Created by CDC3715 on 2017/6/3.
 */
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',
            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            // other libraries
            'rxjs': 'npm:rxjs',
            'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
        },
        // 包告诉系统 如何加载 当没有文件名或任何外部
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            //本质是异步计算本身就是难以管理的，而RxJS可以解决这个问题
            rxjs: {
                defaultExtension: 'js'
            },
            //这个库的功能是可以帮助你在ng2里面虚拟api，不用你写api后台了，方便测试。
            // 顾名思义，这个库所虚拟的api在内存中，也就意味着你刷新浏览器后，所有的数据都会消失！
            'angular2-in-memory-web-api': {
                main: './index.js',
                defaultExtension: 'js'
            }
        }
    });
})(this);