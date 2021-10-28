const yargs = require('yargs')
const {merge} = require('mochawesome-merge')
const rm = require('rimraf')
const cypressConfig = require('./cypress')
const ls = require('ls')
const cypress = require('cypress')
const marge = require('mochawesome-report-generator')
const reportFiles = "mochawesome-report/"

rm(reportFiles, (error) => {
    if (error) {
        console.error(`Error while removing existing report files: ${error}`)
        process.exit(1)
    }
    console.log('Removing all existing report files successfully!')
})

cypress.run().then(
    () => {
        generateReport()
    },
    error => {
        generateReport()
        console.error(error)
        process.exit(1)
    }
)


function generateReport(options) {
    return merge(options).then(report => marge.create(report, options))
}
