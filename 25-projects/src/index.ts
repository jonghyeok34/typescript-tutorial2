import { GithubApiService } from "./GithubApiService";
import { User } from "./Users";
import { Repo } from "./Repo";

let svc = new GithubApiService();
svc.getUserInfo("jonghyeok34", (user: User) => {
  console.log(user);
});

svc.getRepos("jonghyeok34", (repos: Repo[]) => {
  console.log(repos);
});
