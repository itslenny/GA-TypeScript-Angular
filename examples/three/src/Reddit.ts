export function something() {
    return "hi";
}

import request = require('request');

export class Reddit {
    
    static redditUrl = "http://www.reddit.com/r/";
    private data;
    public posts;
    public topPost;
    
    constructor(public subreddit:string) { }
    
    public load(callback) {
        request(Reddit.redditUrl + this.subreddit + ".json", (error, response, body) => {
            if(error) return callback(error);
            
            this.data = JSON.parse(body);
            this.posts = this.data.data.children;
            
            this.posts.forEach((post) => {
               if(!this.topPost || post.data.score > this.topPost.data.score) {
                   this.topPost = post;
               } 
            });
            
            callback();
        });
    }
    
}