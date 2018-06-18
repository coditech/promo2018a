const fs = require('fs')
const requirements = require('./package.json').requirements
const isWin = process.platform === "win32"
const { join, delimiter } = require('path')

const root = __dirname

const isDir = (path) => {
    try{
        return fs.statSync(path).isDirectory()
    }catch(e){}
}

const isFile = (path) =>{
    try{
        return fs.statSync(path).isFile()
    }catch(e){}
} 

const isNumber = (n) => !isNaN(parseFloat(n)) && isFinite(n)

const page = `<html><title>Codi2018</title><body><ul>`+fs.readFileSync('./PORTS.md','utf8')
	.replace(/(\n|\r)+/g,'\n')
	.replace(/^#.*?\n/g,'')
	.replace(/- /g,'')
	.replace(/ to .*?\n/g,'\n')
	.replace(/\n+/,'\n')
	.replace(/: /g,':')
	.split('\n')
	.filter(Boolean)
	.map(l=>l.split(':'))
	.map(([student,port])=>[student,isNumber(port) ? `//localhost:${port}` : port ])
	.map(([student,url])=>`<li><a href="${url}">${student} - ${url}</a></li>`)
	.join('')+`</ul></body></html>`
	
	
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

const getPaths = (bin) => {
    var envPath = (process.env.PATH || '');
    var envExt = (process.env.PATHEXT || '');
    return envPath.replace(/["]+/g, '').split(delimiter).map(function (chunk) {
        return envExt.split(delimiter).map(function (ext) {
            return join(chunk, bin + ext);
        });
    }).reduce(function (a, b) {
        return a.concat(b);
    });
}

const exists = (bin) => getPaths(bin).some(isFile)

const checkIfExists = (bin) => {
    if(exists(bin)){
        console.log(`"${bin}" -- available`)
        return true
    }else{
        console.log(`"${bin}" -- ERR: not found`)
        return false
    }
}

const reqs = requirements.map(req=>{
    const [linux,win] = req.split("|")
    if(isWin){ return win}else{return linux}
})

if(reqs.filter(checkIfExists).length !== requirements.length){
    console.log('not all requirements found -- exiting')
    process.exit(1)
}else{
    console.log('all requirements available')
}

require('http').createServer((req,res)=>res.end(page)).listen(3000,()=>{`server running`})