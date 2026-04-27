to_url="jlongyam@frs.sourceforge.net"
to_path="/home/user-web/jlongyam/htdocs/"
from_path="source/" # "./"

# -avzPL : a archive v verbose z compress L symlink P progress
# -avP: normal
# -az: minimal
# no sync
#rsync -az -e ssh $from_path $to_url:$to_path

# delete file in $to_path
rsync -azv --delete -e ssh $from_path $to_url:$to_path

# Test: delete any file in $from_path
#sftp jlongyam@frs.sourceforge.net:/home/user-web/jlongyam/htdocs/
# ls
# SUCCESS
