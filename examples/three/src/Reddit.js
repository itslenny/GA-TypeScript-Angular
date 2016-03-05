"use strict";
function something() {
    return "hi";
}
exports.something = something;
var request = require('request');
var Reddit = (function () {
    function Reddit(subreddit) {
        this.subreddit = subreddit;
    }
    Reddit.prototype.load = function (callback) {
        var _this = this;
        request(Reddit.redditUrl + this.subreddit + ".json", function (error, response, body) {
            if (error)
                return callback(error);
            _this.data = JSON.parse(body);
            _this.posts = _this.data.data.children;
            _this.posts.forEach(function (post) {
                if (!_this.topPost || post.data.score > _this.topPost.data.score) {
                    _this.topPost = post;
                }
            });
            callback();
        });
    };
    Reddit.redditUrl = "http://www.reddit.com/r/";
    return Reddit;
}());
exports.Reddit = Reddit;
