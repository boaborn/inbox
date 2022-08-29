// compile code will go here
// Path: For cross platform compatibility, always generate a valid path
const path = require('path')
const fs = require('fs')
const solc = require('solc')

//__direname > root of this project
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol')
const source = fs.readFileSync(inboxPath, 'utf8')

solc.compile(source, 1)
