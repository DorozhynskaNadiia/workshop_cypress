const path = require('path')
console.log('Nadia __dirname', __dirname)
module.exports = {
    resolve: {
        alias: {
            Fixtures: path.resolve(__dirname, 'fixtures'),
            Plugins: path.resolve(__dirname, 'plugins'),
            PageObjects: path.resolve(__dirname, 'support/page-objects')
        }
    }
}
