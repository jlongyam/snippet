#!/usr/bin/bash

echo "echo before set -e"

set -e

<<'###'
something something ${FOO{}} something
more comment
###

ls

