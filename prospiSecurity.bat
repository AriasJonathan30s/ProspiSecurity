@echo off
TITLE Prospi Security

git diff --quiet || (git stash && git pull && npm i --save)

npm test
exit