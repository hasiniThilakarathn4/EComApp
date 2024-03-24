module.exports = {
  presets: [
    'module:@react-native/babel-preset',
    ['@babel/preset-flow', {allowDeclareFields: true}],
  ],
    plugins: ["nativewind/babel"],

};
