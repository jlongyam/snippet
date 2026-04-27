from_url="jlongyam@frs.sourceforge.net"
from_path="/home/user-web/jlongyam/htdocs/"
to_path="source/" # "./"
# -avzPL : a archive v verbose z compress L symlink P progress
# -avP: normal
# -az: minimal
# normal
#rsync -avP -e ssh $from_url:$from_path $to_path

# delete file in $to_path
rsync -azv --delete -e ssh $from_url:$from_path $to_path

# Test: delete any file in $from_path
#sftp jlongyam@frs.sourceforge.net:/home/user-web/jlongyam/htdocs/
#rm favicon.ico
# SUCCESS
