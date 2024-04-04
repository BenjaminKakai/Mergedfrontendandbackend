const { environment } = require('@rails/webpacker');
const webpack = require('webpack');

// Add an additional rule for loading fonts
environment.loaders.append('bootstrap', {
  test: /bootstrap-icons\/.+\.(woff|woff2|eot|ttf|otf|svg)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'fonts/',
        publicPath: '../fonts/'
      }
    }
  ]
});

// Resolve the Bootstrap JS file to use only the necessary components
environment.config.set('resolve.alias', {
  'bootstrap/js/dist': 'bootstrap/js/dist',
});

// Add ProvidePlugin to load jQuery and Popper.js
environment.plugins.prepend(
  'Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    Popper: ['popper.js', 'default']
  })
);

module.exports = environment;
