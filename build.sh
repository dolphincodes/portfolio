#!/bin/sh
npm run lint
npm run test
npm run build --prod
npm run doc
cp docs/index.html docs/404.html
