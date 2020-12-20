#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e
# 当前分支
function git_branch {
   branch="`git branch 2>/dev/null | grep "^\*" | sed -e "s/^\*\ //"`"
   if [ "${branch}" != "" ];then
       if [ "${branch}" = "(no branch)" ];then
           branch="(`git rev-parse --short HEAD`...)"
       fi
       echo "$branch"
   fi
}
CURRENT_BRANCH=$(git_branch)
echo "******************当前分支:"
echo $CURRENT_BRANCH

echo "******************1.本地编译******************"

# 生成静态文件
npm run build

# 进入生成的文件夹
cd public

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME
echo "******************2.提交编译后的文件******************"

git init
git add -A
git commit -m 'update'

# 如果发布到 https://<USERNAME>.github.io  USERNAME=你的用户名 
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>  REPO=github上的项目
git push -f git@github.com:Lee-Jp/blog.git master:gh-pages

cd -
echo "******************3.删除编译后的文件******************"

rm -rf public
echo "******************4.发布成功******************"

echo "blog地址：https://lee-jp.github.io/blog/"
