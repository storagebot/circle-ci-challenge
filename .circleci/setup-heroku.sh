#!/bin/bash

git remote add heroku https://git.heroku.com/circle-ci-challenge.git
wget https://cli-assets.heroku.com/branches/stable/heroku-linux-amd64.tar.gz

mkdir -p /usr/local/lib ~/bin
tar -xvzf heroku-linux-amd64.tar.gz -C ~/bin
ln -s /usr/local/lib/heroku/bin/heroku ~/bin/heroku

     
cat > ~/.netrc << EOF
 machine api.heroku.com
   login $HEROKU_LOGIN
   password $HEROKU_API_KEY
 machine git.heroku.com
   login $HEROKU_LOGIN
   password $HEROKU_API_KEY
EOF

# Add heroku.com to the list of known hosts
ssh-keyscan -H heroku.com >> ~/.ssh/known_hosts