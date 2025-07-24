# Git LFS

GIT Large File System

Check *Settings* > *Archives* > **Include Git LFS objects in archives** 

### Installation

#### fedora

- `dnf search git-lfs`
- `sudo dnf install git-lfs -y`

### Tracking

- `git lfs install`
- `# Example`
- `git lfs track "*.tar"`
- if already have '.gitattributes' just `git-lfs track`

### Register

- `git add .gitattributes`
- `git add .`
- `cat ./.gitattributes`

### Example .gitattribute

```
*.zip filter=lfs diff=lfs merge=lfs -text
*.ico filter=lfs diff=lfs merge=lfs -text
*.png filter=lfs diff=lfs merge=lfs -text
*.jpg filter=lfs diff=lfs merge=lfs -text
```
