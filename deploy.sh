#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist/ng-reader

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -b gh-pages

git config user.name "clipwww"
git config user.email "clipwww@gmail.com"

git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git remote add origin git@github.com:clipwww/ng-reader
git push -f origin gh-pages

cd -
