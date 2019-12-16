"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var request = __importStar(require("request"));
var Users_1 = require("./Users");
var Repo_1 = require("./Repo");
var OPTIONS = {
    headers: {
        "User-Agent": "request"
    },
    json: true // get response as json type
};
var GithubApiService = /** @class */ (function () {
    function GithubApiService() {
    }
    GithubApiService.prototype.getUserInfo = function (userName, callback) {
        request.get("https://api.github.com/users/" + userName, OPTIONS, function (error, response, body) {
            //body returns string as default
            var user = new Users_1.User(body);
            callback(user);
        });
    };
    GithubApiService.prototype.getRepos = function (userName, callback) {
        request.get("https://api.github.com/users/" + userName + "/repos", OPTIONS, function (error, response, body) {
            //body returns string as default
            var repos = body.map(function (repo) { return new Repo_1.Repo(repo); });
            callback(repos);
        });
    };
    return GithubApiService;
}());
exports.GithubApiService = GithubApiService;
