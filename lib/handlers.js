import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'


module.exports = {
    
    getPosts: function(postIndex, tagFilter, count=888) {
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
        
    getTags: function(postIndex) {
        const tags = [];
        for (var i=0; i < postIndex.length; i++) {
            if (!tags.includes(postIndex[i].tag)) {
                tags.push(postIndex[i].tag)
            }
        }
        return tags;
    }

}

