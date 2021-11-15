#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
npm run build

# cd 到构建输出的目录下 
cd public

git init
git add -A
git commit -m 'deploy'

# 部署
git push -f git@github.com:hoyuxin/project-kp.git master:gh-pages

cd -