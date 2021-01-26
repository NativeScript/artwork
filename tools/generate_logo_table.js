const { readdirSync, readFileSync, writeFileSync } = require('fs')
const { resolve } = require('path')

const README_PATH = resolve(__dirname, '..', 'README.md')
const LOGO_EXPORT_PATH = resolve(__dirname, '..', 'logo', 'export')
const LOGO_RELATIVE_BASE = 'logo/export'
const LOGO_TABLE_START = '<!-- LOGO_TABLE_START -->'
const LOGO_TABLE_END = '<!-- LOGO_TABLE_END -->'

const exportedLogos = readdirSync(LOGO_EXPORT_PATH)

const svgLogos = exportedLogos.filter(filename => filename.endsWith('.svg'))

let table = `
<table>
<thead>
    <th>Logo</th>
    <th>Download</th>
</thead>\n`

for(const logo of svgLogos) {
    const name = logo.replace('.svg', '').replace(/_/g, ' ')
    const svgURL = `${LOGO_RELATIVE_BASE}/${logo}`
    const pngURL = `${LOGO_RELATIVE_BASE}/${logo.replace('.svg', '.png')}`
    console.log({
        name,
        svgURL,
        pngURL
    })
    
    const row = [
        `<img style="width: 100px;" src="${svgURL}" />`,
        `[Download SVG](${svgURL})<br>\n[Download PNG](${pngURL})`
    ].map(e => `<td>\n\n${e}\n\n</td>`).join('\n')

    table += `<tr>\n<td colspan="2">\n${name}\n</td>\n</tr>\n`
    table += `<tr>\n${row}\n</tr>\n`
}
table += `</table>`

const readmeContent = readFileSync(README_PATH).toString();

const updatedReadmeContent = ` 
${readmeContent.substr(0, readmeContent.indexOf(LOGO_TABLE_START) + LOGO_TABLE_START.length)}
${table}
${readmeContent.substr(readmeContent.indexOf(LOGO_TABLE_END), readmeContent.length)}
`.trim()

writeFileSync(README_PATH, updatedReadmeContent)