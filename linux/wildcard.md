# wildcard

## match all

- list all file type png 
  `ls *.png`
- list mix jpg or jpeg
  `ls *.jpg *.jpeg`
  or
  `ls *.jp*g`

## match single char

- list file 0001.jpg, 0002.jpg, and so on through 0009.jpg and so on
  `ls 000?.jpg`

## match range of group character

- match jpg and jpeg but not gif
  `ls *.[jp]*`
- match names contain periods followed by
  an uppercase/lowercase J or P
  `ls *.[jpJP]*`
- lists all the files in the current directory whose names
  begin with a lowercase letter
  `ls [a-z]*`
  contrast
  `ls [A-Z]*`

## escaping asterix

`ls *\**`

## more example

- copy all to 
  `cp * photos`
- copy all the files in a subdirectory named photos
  into a subdirectory named images
  `cp photos/* images`
