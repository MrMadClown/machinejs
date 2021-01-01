#!/bin/sh
echo
if [ -e .commit ]
    then
    rm .commit
    typedoc src
    git add docs
    git commit --amend -C HEAD --no-verify
fi
exit
