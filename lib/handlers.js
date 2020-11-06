import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'

module.exports.getPosts = function() {
    const dataDir = path.join(process.cwd(), 'data');
    const files = fs.readdirSync(dataDir);
    const posts = [];
    for (var i=0; i < files.length; i++) {
        const mdParse = fs.readFileSync(path.join(process.cwd(), 'data', files[i])).toString();
        const parsed = matter(mdParse);
        posts.push({
            'title': parsed.data.title,
            'description': parsed.data.description,
            'date': parsed.data.updatedAt,
            'tag': parsed.data.tag,
            'content': marked(parsed.content)
        });
    }
    return posts;
}