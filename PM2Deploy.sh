#!/bin/bash

sudo pm2 start app.js --name "VERGADELA-STRAPI" --watch --ignore-watch="node_modules logs data uploads public tmp"
