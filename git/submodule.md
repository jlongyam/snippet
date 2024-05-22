# Git submodule

Note: Git submodule not compatible with __github page__
Reference:

* [www.vogella.com](https://www.vogella.com/tutorials/GitSubmodules/article.html)

## clone

- `git clone --recursive [URL to Git repo]`

## Add

- add URL with `.git` extension
- `git submodule add <URL>`
- specific branch
- `git submodule add -b main <URL>`
- specific directory
- `git submodule add <url> lib/utility`

## Init

- `git submodule init`

## Update

- `git submodule update --remote`
- or
- `git submodule update --init`
- for recursive
- `git submodule update --init --recursive`
- then
- `git submodule update --remote`

## Pull

- `git pull --recurse-submodules`

## Exec

- `git submodule foreach --recursive '<command>'`

## Remove

- `git submodule deinit -f <dir>`
- `rm -rf .git/modules/<dir>`
- `git rm -f <dir>`
- `git rm --cached <dir>`

## Later, change to specific tag branch

- `cd` submodule_directory
- `git checkout v1.0`
- `cd ..`
- `git add submodule_directory`
- `git commit -m "moved submodule to v1.0"`
- `git push`
- to update
- `git pull`
- `git submodule update --init`
