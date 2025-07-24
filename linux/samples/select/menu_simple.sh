#!/bin/bash
# Bug fix: Using "!/bin/sh" failed, no 'select' command found 

PS3="Enter a number: "
select color in Red Green Blue White Black
do
  echo "Selected: number $REPLY, that is '$color'"
done
