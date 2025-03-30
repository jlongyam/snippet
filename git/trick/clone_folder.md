the `sparse-checkout` command just works on
git version 2.25.0
so make sure you have your git version updated.

1. Copy the Clone URL
2. Select a Local Folder
    `git clone --filter=blob:none --no-checkout <URL>`
3. Navegate to the cloned empty repo
    `cd <FOLDER>`
4. Set Sparse
    `git sparse-checkout set --cone`
5. Select a Branch, example: `master`, see `git branch`
    `git checkout master`
6. Cloning the specific folder, start from root, example: `src/auth`
    `git sparse-checkout src/auth`

alternative: online
- https://download-directory.github.io/
