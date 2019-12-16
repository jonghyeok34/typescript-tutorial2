import * as request from "request";
import { User } from "./Users";
import { Repo } from "./Repo";
const OPTIONS: any = {
  headers: {
    "User-Agent": "request"
  },
  json: true // get response as json type
};
export class GithubApiService {
  getUserInfo(userName: string, callback: (user: User) => any) {
    request.get(
      "https://api.github.com/users/" + userName,
      OPTIONS,
      (error: any, response: any, body: any) => {
        //body returns string as default
        let user = new User(body);
        callback(user);
      }
    );
  }
  getRepos(userName: string, callback: (repos: Repo[]) => any) {
    request.get(
      "https://api.github.com/users/" + userName + "/repos",
      OPTIONS,
      (error: any, response: any, body: any) => {
        //body returns string as default
        let repos = body.map((repo: any) => new Repo(repo));
          callback(repos);
      }
    );
  }
}
