const { Print } = require('lesscode-fp')
const { Gateway } = require('./gateway')
const config = {
    rest: {
        port: 8090
    }
}
Gateway(config).catch(err => Print(`[ERROR] : Gateway crashed : ${err}`))