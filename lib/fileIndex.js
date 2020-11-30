const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const dataDir = path.join(process.cwd(), 'data');
const files = fs.readdirSync(dataDir);
const fileIndex = [];
for (var i=0; i < files.length; i++) {
    const filename = files[i].split('.')
    if (filename[1] && filename[1] == 'md') {
        const mdParse = fs.readFileSync(path.join(process.cwd(), 'data', files[i])).toString();
        const parsed = matter(mdParse);
        fileIndex.push({
            'slug': filename,
            'date': parsed.data.updatedAt,
            'tag': parsed.data.tag,
        });
    }
}

fileIndex.sort(function (a, b) {
    return a.date > b.date;
});

const fileindexContents = JSON.stringify(fileIndex);
fs.writeFile("./data/index.json", fileindexContents, 'utf8', function (err) {
    if (err) {
        return console.log(err);
    }
});