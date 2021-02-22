import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'


module.exports = {
    
    getTaggedPosts: function(postIndex, tagFilter) {
        const posts = [];
        for (var i=0; i < postIndex.length; i++) {
            const mdParse = fs.readFileSync(path.join(process.cwd(), 'data', postIndex[i].slug.join('.'))).toString();
            const parsed = matter(mdParse);
            if (tagFilter === parsed.data.tag || tagFilter === 'allPosts') {
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

    getPost: function(slug) {
        const mdParse = fs.readFileSync(path.join(process.cwd(), 'data', slug + '.md')).toString();
        const parsed = matter(mdParse);
        return {
            'title': parsed.data.title,
            'description': parsed.data.description,
            'date': parsed.data.updatedAt,
            'tag': parsed.data.tag,
            'content': parsed.content
        };
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
}
