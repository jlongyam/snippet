#!/bin/bash
echo -e "What are your favorite colours ? "
# -a makes read command to read into an array
read -a colours
echo "Your favorite colours are \"${colours[0]} ${colours[1]} ${colours[2]}\""
