import fs from 'fs'
import path from 'path'
import rss from './rss.mjs'

async function postbuild() {
  await rss()
}

const basePath = process.env.BASE_PATH || ''

function replaceStaticPaths(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file)
    if (fs.statSync(fullPath).isDirectory()) {
      replaceStaticPaths(fullPath)
    } else if (file.endsWith('.mdx')) {
      let content = fs.readFileSync(fullPath, 'utf-8')
      // 只替换以 /static/ 开头的资源
      content = content.replace(/]\(\/static\//g, `](${basePath}/static/`)
      fs.writeFileSync(fullPath, content)
    }
  })
}

replaceStaticPaths(path.join(process.cwd(), 'data'))

postbuild()
