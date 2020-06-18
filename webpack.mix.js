const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
    module: {
        rules: [
            {
                test: /\.less$/,
                loader: 'less-loader',
                options: {
                    lessOptions: {
                    	javascriptEnabled: true
                    }   
                }
            },
        ]
    }
});

if(Mix.isWatching()){
    mix.webpackConfig({
        watchOptions:{
            ignored : /node_modules/,
            //poll : 1000
        },
    })
}

mix.react('resources/js/app.js', 'public/js')
    .less('resources/less/app.less', 'public/css')
    .version();
