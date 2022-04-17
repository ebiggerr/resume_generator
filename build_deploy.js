const fs = require('fs-extra')
const axios = require('axios')

const githubPageSubmodules = 'ebiggerr.github.io'
const exportToSubmodules = './' + githubPageSubmodules + '/index.html'

async function buildHTML() {
    await fs.remove('./dist')
    await fs.ensureDir('./dist')

    let resume
    if (fs.existsSync('./resume.json')) {
        console.log(`Loading from locale "resume.json"`)
        resume = JSON.parse(fs.readFileSync('./resume.json', 'utf-8'))
    } else {
        throw new Error('No resume.json found.')
    }

    if(fs.existsSync('./assets/favicon.ico')) {
        console.log('Copying the favicon from ./assets to the submodules')
        let buf = fs.readFileSync('./assets/favicon.ico')
        console.log('Writing the favicon to the submodules ./assets')
        fs.writeFileSync('./' + githubPageSubmodules + '/assets/favicon.ico', buf)
    }else {
        throw new Error('No favicon.ico found.')
    }


    console.log('Rendering...')
    const html = await require("./index.js").render(resume)
    console.log('Saving file...')
    fs.writeFileSync('./dist/index.html', html, 'utf-8')
    console.log('Saved to ./dist/index.html')
    console.log('Saving file to submodules - ' + githubPageSubmodules )
    fs.writeFileSync(exportToSubmodules, html, 'utf-8')
    console.log('Saved to ' + exportToSubmodules)
    return html
}

async function commitAndPushToRemote(html) {
    console.log('Committed and Pushing to origin/v2 if you use the npm run build_deploy')
    console.log('Done')
}

async function buildAll() {
    const html = await buildHTML()
    await commitAndPushToRemote(html)
}

buildAll().catch(e => {
    console.error(e)
    process.exit(1)
})
