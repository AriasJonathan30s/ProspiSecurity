@echo off
TITLE Prospi Security

git diff --quiet || (git stash && git pull origin master && npm i --save)

npm test
exit