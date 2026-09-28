#!/usr/bin/node

const dict = require('./101-data').dict;
const newDict = {};

Object.keys(dict).forEach(function (userId) {
  const occurrence = dict[userId];

  if (!newDict[occurrence]) {
    newDict[occurrence] = [];
  }

  newDict[occurrence].push(userId);
});

console.log(newDict);
