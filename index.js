const franc = require('franc')
const langs = require('langs')
const colors = require('colors')

const input = process.argv[2]
console.log(input)
const langCode = franc(input)
console.log(langCode)
if(langCode === 'und')
    console.log('Sorry, could not figure out the language!'.red)
else
{
    const language = langs.where('3', langCode)
    console.log(`Our best guess is: ${language.name}`.green)
}
