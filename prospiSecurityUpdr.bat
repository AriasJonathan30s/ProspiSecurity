@echo off
TITLE Prospi Security Updater

git diff --quiet || (
    git stash
    git pull
    npm i --save )
exit