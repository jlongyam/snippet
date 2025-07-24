#!/bin/sh
PS3='Please enter your choise: '
options=("Option 1" "Option 2" "Option 3")
select opt in "${options[@]}"
do
  case $opt in
    "Option 1")
      echo "you choose choise 1"
      ;;
    "Option 2")
      echo "you choose choise 2"
      ;;
    "Option 3")
      echo "you choose choise $REPLY which is $opt"
      ;;
    "Quit")
      break
      ;;
    *) echo "invalid option $REPLY"
      ;;
  esac
done
