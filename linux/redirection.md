# redirection

- `<` for redirecting input to a source other than the keyboard
- `>` for redirecting output to destination other than the screen
- `>>` for doing the same, but appending rather than overwriting
- `|` for piping output from one command to the input of another

Examples:

`ls > listing.txt`

If listing.txt already exists, it gets overwritten

`ls >> listing.txt`

append to end of line

`sort < file.txt`

sort

`sort < file.txt > sorted_file.txt`

sort output

`cat file.txt | fmt`

more advance usage is piping