import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'


module.exports = {
    
    getTaggedPosts: function(postIndex, tagFilter, count=888) {
        const posts = [];
        const postsShown = postIndex.length < count ? postIndex.length : count;
        for (var i=0; i < postsShown; i++) {
            const mdParse = fs.readFileSync(path.join(process.cwd(), 'data', postIndex[i].slug.join('.'))).toString();
            const parsed = matter(mdParse);
            if (parsed.data.tag === tagFilter) {
                posts.push({
                    'slug': postIndex[i].slug[0],
                    'title': parsed.data.title,
                    'description': parsed.data.description,
                    'date': parsed.data.updatedAt,
                    'tag': parsed.data.tag,
                    'content': parsed.content
                });
            } 
        }
        return posts;
    },
        
    getUniqueTags: function(postIndex) {
        const tags = [];
        for (var i=0; i < postIndex.length; i++) {
            if (!tags.includes(postIndex[i].tag)) {
                tags.push(postIndex[i].tag)
            }
        }
        return tags;
    },

    readMetaData: function() {
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
        return fileIndex
    },

    readParseSVG: function(path) {
        const fileData = fs.readFileSync(path);
        fs.writeFileSync('public/title.svg', fileData);
    }
}
