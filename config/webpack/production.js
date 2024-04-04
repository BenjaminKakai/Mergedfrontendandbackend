process.env.NODE_ENV = process.env.NODE_ENV || 'production';

const environment = require('./environment');

// Include the @babel/preset-react preset
environment.loaders.get('babel').options.presets.push('@babel/preset-react');

module.exports = environment.toWebpackConfig();
