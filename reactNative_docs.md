app store => x-code

brew install node
brew install watchman
npm install -g react-native-cli

react-native run-ios

npm install react-native-camera --save
npm install rnpm --global
npm install react-native-camera@https://github.com/lwansbrough/react-native-camera.git --save
rnpm link react-native-camera


inside index.ios.js, add ' import Camera from 'react-native-camera'; ' and rebuild


react-native run-ios