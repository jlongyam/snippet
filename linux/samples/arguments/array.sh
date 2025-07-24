#!/bin/bash
# We can also store arguments from bash command line in special array
args=("$@")
# echo arguments to the shell
echo ${args[0]} ${args[1]} ${args[2]} ' -> args=("$@"); echo ${args[0]} ${args[1]} ${args[2]}'

