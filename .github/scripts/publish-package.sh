#!/bin/bash

source ./.github/scripts/utils.sh

npm ci || utils::check_fail $? "npm ci failed"

npx changeset version || utils::check_fail $? "npx changeset version failed"

is_modify=$(git status --porcelain)

if [ ! -z "$is_modify" ]; then
    echo "packages version changed"

    git config user.name "luohuidong"
    git config user.email "luohuidong01@126.com"
    git add .
    git commit -m "build: update packages version"

    npm run build || utils::check_fail $? "npm run build failed"
    npm publish || utils::check_fail $? "npm publish failed"

    git push || utils::check_fail $? "git push failed"
else
    echo "packages version not changed"
fi
