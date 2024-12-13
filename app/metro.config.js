const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// shared 디렉토리를 Metro 번들러가 인식하도록 추가
config.watchFolders = [
  path.resolve(__dirname, '../shared'), // shared 디렉토리의 절대 경로
];

module.exports = config;
