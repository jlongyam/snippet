# github registry

Authenticating with a personal access token

Create a new `~/.npmrc`

```text
//npm.pkg.github.com/:_authToken=TOKEN
```

Then

```shell
$ npm login --scope=@NAMESPACE --auth-type=legacy --registry=https://npm.pkg.github.com

> Username: USERNAME
> Password: TOKEN
```

always create `.npmrc` when use registry

```
@NAMESPACE:registry=https://npm.pkg.github.com
```

or in `package.json`

```json
"publishConfig": {
  "registry": "https://npm.pkg.github.com"
},
```

```
npm publish --dry-run
npm publish
```

see more <https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry>
