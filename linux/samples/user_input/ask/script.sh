#!/bin/bash
#
# basic usage ask yes/no
echo "Do you want to continue?([y]es/[n]o)"
read input
if [[ "$input" == "yes"] || "$input" == "y" ]]; then
	echo "continue"
fi

