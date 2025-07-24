# include by 'source ./this.sh'

OS_MACHINE=$(uname -m)
OS_TYPE=$(uname | tr "[:upper:]" "[:lower:]") # string to lowercase
OS_NAME=$(cat /etc/*-release | grep -w ID | cut -d= -f2 | tr -d '"')
OS_VERSION=$(cat /etc/*-release | grep -w VERSION_ID | cut -d= -f2 | tr -d '"')
OS_VARIANT=$(cat /etc/*-release | grep -w VARIANT_ID | cut -d= -f2 | tr -d '"')

# invoke by `bash ./this.sh`

echo "OS Machine  : $OS_MACHINE"
echo "OS Type     : $OS_TYPE"
echo "OS Name     : $OS_NAME"
echo "OS Version  : $OS_VERSION"
echo "OS Variant  : $OS_VARIANT"
