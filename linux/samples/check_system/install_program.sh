# invoke by `bash ./bash.sh`
source ./detect_os.sh
source ./check_program.sh

echo === INFO =================
echo "OS Machine  : $OS_MACHINE"
echo "OS Type     : $OS_TYPE"
echo "OS Name     : $OS_NAME"
echo "OS Version  : $OS_VERSION"
echo "OS Variant  : $OS_VARIANT"
echo ==========================
echo

if [ $OS_NAME="fedora" ]; then
  echo -e "fedora\n" # -e for endline
  if [ $1 ]; then
    #exists_program $1
    local result=$(exists_program $1);
    #echo "$result"
    if [ "$result"=true ];then echo "YES"
    else echo "NO"
    fi
    #if [[ $(exists_program $1)="true" ]]; then echo "exists";
    #else echo "!exists"
    #fi
    #if [ "$result"="true" ]; then echo "OK";
    #else echo "NO"
    #fi
    #echo $1
    #if [[ $(exists_program $1)="exists"]; then echo "fuck";fi
    # if [ $PROGRAM_NAME="does not exist" ]; then
    #   echo "TODO"
    # fi
    #echo $PROGRAM_NAME
  else echo "No argument given";
  fi
fi

#sudo dnf update
#sudo dnf install httpd
