## Generics

1. any

```ts
function echo(arg: any): any {
  return arg;
}
var myStr: number = echo(1); // works fine
```

2. using generics

```ts
function echo<T>(arg: T): T {
  return arg;
}

// var myStr: string = echo(1); //Type '1' is not assignable to type 'string'
var myStr: number = echo(1);
```

3. define class and inherit

```ts
class Person {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

class Admin extends Person {}
class Manager extends Person {}
```

4.

```ts
let admin = new Admin("a", "a");
let manager = new Manager("a", "a");

function personEcho(person: Person): Person {
  return person;
}
var foo = personEcho(admin); // type of foo is Person
```

5. using generic more sophisticated

```ts
let admin = new Admin("a", "a");
let manager = new Manager("a", "a");

var foo = personEcho(admin);
return Person;
function personEcho<T extends Person>(person: T): T {
  return person;
}

var foo = personEcho(admin); // type of foo is Admin
//return manager
var bar = personEcho(manager);
```

## modules

1. generics.ts

```ts
// import --> execute classes.ts(-->classes.js) file
import { Person } from "./classes";

function echo<T>(arg: T): T {
  return arg;
}
var myStr: number = echo(1);

class Admin extends Person {}
class Manager extends Person {}

let admin = new Admin("a", "a");
let manager = new Manager("a", "a");

function personEcho<T extends Person>(person: T): T {
  return person;
}

//return Admin
var foo = personEcho(admin);
//return manager
var bar = personEcho(manager);
```

2. classes.ts

```ts
export class Person {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

var aPerson = new Person("Koushik", "Kothagal");

console.log(aPerson.getFullName());
```

3. compile and execute

- request

```cmd
tsc generics.ts && node generics.js
```

- result

```
Koushik Kothagal
```

## compiler arguments

- generate test.js

```
tsc test.ts
```

- generate output.js from test.ts

```
tsc test.ts --output output.js
```

- generate automatically when ts file changed

```
tsc test.ts --output output.js --watch
```

- show options

```
tsc --help
```

## tsconfig.json file

1. intialize

```cmd
tsc --init
```

2. options

- outDir: "./out"
  - compile file and save in out directory
- noEmitOnError: true
  - if error occurs --> does not compile

## create npm project and use with typescript

```
- index.ts
- person.ts
- tsconfig.json
```

1. file tree

   1. index.ts

   ```ts
   import { Person } from "./person";

   let foo = new Person();

   foo.firstName = "Test";
   foo.lastName = "LastName";
   console.log(foo);
   ```

   2. person.ts

   ```ts
   export class Person {
     lastName!: string;
     firstName!: string;
   }
   ```

   3. tsconfig.json

   ```js
   {
     "compilerOptions": {
       /* Basic Options */
       // "incremental": true,
       /* Enable incremental compilation */
       "target": "es5",
       ...
       "module": "commonjs",
       ...
       /* Concatenate and emit output to single file. */
       "outDir": "./out",
       ...
       "noEmitOnError": true,
       ...
       /* Strict Type-Checking Options */
       "strict": true,
       ...
       "esModuleInterop": true,
       ...
       /* Advanced Options */
       "forceConsistentCasingInFileNames": true
       /* Disallow inconsistently-cased references to the same file. */
     }
   }
   ```

2. initialize npm project

```cmd
npm init
```

3. set package.json

```js
{
  "name": "compiler-args",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "tsc && node out/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

4. npm start

- execute

```
npm start
```

- result

```
Person { firstName: 'Test', lastName: 'LastName' }
```

## npm install with typescript defintion

1. install lodash

```
npm install lodash
```

```
npm install @types/lodash --save-dev
```

2. file tree

- index.ts
- person.ts
- package.json

  1. index.ts

  ```ts
  import { Person } from "./person";
  import * as _ from "lodash";

  let foo = new Person();

  foo.firstName = "Test";
  foo.lastName = "LastName";
  console.log(foo);

  var array = [1, 2, 3, 4, 5];
  console.log(_.reverse(array));
  ```

  2. person.ts

  ```ts
  export class Person {
    lastName!: string;
    firstName!: string;
  }
  ```

  3. package.json

  ```js
  {
  "name": "compiler-args",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
   "start": "tsc && node out/index.js",
   "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
   "lodash": "^4.17.15"
  },
  "devDependencies": {
   "@types/lodash": "^4.14.149"
  }
  }

  ```

3. command

- request

```cmd
npm start
```

- result

```cmd
Person { firstName: 'Test', lastName: 'LastName' }
[ 5, 4, 3, 2, 1 ]
```

## restart project

1. start

```
npm init
```

```
tsc --init
```

2. set config

- tsconfig.json

```js
{
  "compilerOptions": {
    ...
    /* Enable incremental compilation */
    "target": "es5",
    ...
    "module": "commonjs",
    ...
    /* Concatenate and emit output to single file. */
    "outDir": "./out",
    /* Redirect output structure to the directory. */
    "rootDir": "./src",
    ...
    "strict": true,
    ..
  }
}
```

- package.json

```js
{
  "name": "25-projects",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "tsc && node out/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "lodash": "^4.17.15",
    "request": "^2.88.0"
  }
}

```

3. npm install

```
npm install request lodash --save
npm install @types/request @types/lodash --save-dev
```

4. create files

   0. file tree

   ```
   - src
     - GithubApiService.ts
     - index.ts
     - Repo.ts
     - Users.ts
   ```

   1. Repo.ts

   ```ts
   export class Repo {
     name: string;
     description: string;
     url: string;
     size: number;
     forkCount: number;
   }
   ```

   1. Users.ts

   ```ts
   import { Repo } from "./Repo";

   export class User {
     login: string;
     fullName: string;
     repoCount: number;
     followerCount: number;
     repos: Repo[];
   }
   ```

   1. GithubApiServices.ts

   ```ts
   import * as request from "request";

   export class GithubApiService {
     getUserInfo(userName: string) {
       let options: any = {
         headers: {
           "User-Agent": "request"
         }
       };
       request.get(
         "https://api.github.com/users/" + userName,
         options,
         (error: any, response: any, body: any) => {
           // console.log(error);
           // console.log(response);
           console.log(body);
         }
       );
     }
     getRepos() {}
   }
   ```

   1. index.ts

   ```ts
   import { GithubApiService } from "./GithubApiService";

   let svc = new GithubApiService();
   svc.getUserInfo("jonghyeok34");
   ```

5. start

```
npm start
```

- result

```
{"login":"jonghyeok34","id":38850532,"node_id":"MDQ6VXNlcjM4ODUwNTMy","avatar_url":"https://avatars3.githubusercontent.com/u/38850532?v=4","gravatar_id":"",..."followers":1,"following":1,"created_at":"2018-04-30T06:30:05Z","updated_at":"2019-12-12T08:00:01Z"}

```

## call back

1. GithubApiService.ts

```ts
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
```

2. Repo.ts

```ts
export class Repo {
  name: string;
  description: string;
  url: string;
  size: number;
  forkCount: number;
  constructor(repo: any) {
    this.name = repo.name;
    this.description = repo.description;
    this.url = repo.html_url;
    this.size = repo.size;
    this.forkCount = repo.forks;
  }
}
```

3. Users.ts

```ts
import { Repo } from "./Repo";

export class User {
  login: string;
  fullName: string;
  repoCount: number;
  followerCount: number;
  repos: Repo[];
  constructor(userResponse: any) {
    this.login = userResponse.login;
    this.fullName = userResponse.name;
    this.repoCount = userResponse.public_repos;
    this.followerCount = userResponse.followers;
    // this.repos = Repo()
  }
}
```

4. index.ts

```ts
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
```

## using lodash/ process.argv

1. index.ts

- using lodash - sort, take

```ts
import { GithubApiService } from "./GithubApiService";
import * as _ from "lodash";
import { User } from "./Users";
import { Repo } from "./Repo";

let svc = new GithubApiService();

let username = "jonghyeok";
svc.getUserInfo(username, (user: User) => {
  svc.getRepos(username, (repos: Repo[]) => {
    // sort by fork count
    let sortedRepos = _.sortBy(repos, [(repo: Repo) => repo.forkCount]);

    //get top5 repos
    let filteredRepos = _.take(sortedRepos, 5);
    user.repos = filteredRepos;
    console.log(user);
  });
});
```

- using process.arv

```ts
import { GithubApiService } from "./GithubApiService";
import * as _ from "lodash";
import { User } from "./Users";
import { Repo } from "./Repo";

let svc = new GithubApiService();

if (process.argv.length < 3) {
  console.log("Please pass the user name as an argument");
} else {
  //get argument which is in third index
  let username = process.argv[2];
  svc.getUserInfo(username, (user: User) => {
    svc.getRepos(username, (repos: Repo[]) => {
      let sortedRepos = _.sortBy(repos, [(repo: Repo) => repo.forkCount]);

      let filteredRepos = _.take(sortedRepos, 5);
      user.repos = filteredRepos;
      console.log(user);
    });
  });
}
```

- start with argument

```
npm start jonghyeok34
```

process.argv

```js
[ '/usr/bin/node' // node,
  '/path/25-projects/out/index.js' //index.js path,
  'jonghyeok34' // argument]
```
