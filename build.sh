#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# add changed dist file
git add dist -f 
git commit -m "adding dist"
git subtree push --prefix dist git@github.com:rj2520/lightspeedTA.git gh-pages