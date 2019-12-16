"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GithubApiService_1 = require("./GithubApiService");
var _ = __importStar(require("lodash"));
var svc = new GithubApiService_1.GithubApiService();
console.log(process.argv);
if (process.argv.length < 3) {
    console.log("Please pass the user name as an argument");
}
var username = process.argv[2];
svc.getUserInfo(username, function (user) {
    svc.getRepos(username, function (repos) {
        var sortedRepos = _.sortBy(repos, [function (repo) { return repo.forkCount; }]);
        var filteredRepos = _.take(sortedRepos, 5);
        user.repos = filteredRepos;
        console.log(user);
    });
});
