const fs = require('fs')
const join = require('path').join

const root = __dirname

const isDir = (path) => {
    let isIt = false
    try{
        isIt = fs.statSync(path).isDirectory()
    }catch(e){}
    return isIt
}

const dirs = fs.readdirSync('./')
    .filter(isDir)
    .filter(dir=>dir!=='node_modules' && dir[0]!== '.')
    .map(dir=>{
        const path = join(__dirname,dir)
        const frontPath = join(path,'front')
        const backPath = join(path,'back')
        const front = isDir(frontPath) ? frontPath : path
        const back = isDir(backPath) ? backPath : false
        const url = `/`+dir
        const obj = { front, path, dir, front, back, url }
        return obj
    })