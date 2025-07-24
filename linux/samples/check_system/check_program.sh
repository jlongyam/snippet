# create variable name first then use 'source'
function exists_program() {
  if type $1 >/dev/null 2>&1; then
  echo true
else
  echo false
fi

}
# - usage as arg
# bash ./check_program.sh java
#exists_program $1
# - inlude 
#source './this.sh'
