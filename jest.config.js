module.exports = {
  // 파일 확장자를 지정하지 않은 경우, Jest가 검색할 확장자 목롭입니다.
  // 일반적으로 많이 사용된느 모듈의 확장자를 지정합니다.
  // E.g. `import HelloWorld from '~/components/HelloWorld';`
  moduleFileExtensions: [
    'js',
    'vue',
    'json',
    'jsx'
  ],

  testEnvironment: 'jsdom',

  // `~` 같은 경로 별칭을 매핑합니다.
  // `<rootDir>` 토큰을 사용해 루트 경로를 참조할 수 있습니다.
  // E.g. `import HelloWorld from '~/components/HelloWorld';`
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1'
  },

  // // 일치하는 경로에서는 모듈을 가져오지 않습니다.
  // // `<rootDir>' 토큰을 사용해 루트 경로를 참조할 수 있습니다.
  modulePathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/dist',
    '<rootDir>/cypress'
  ],

  // jsdom 환경에 대한 URL을 설정합니다.
  // https://github.com/facebook/jest/issues/6766
  testURL: 'HTTP://localhost',

  // 정규식과 일치하는 파일의 변환 모듈을 지정합니다.
  transform: {
    '^.+\\.vue$': 'vue3-jest',
    '^.+\\.js$': 'babel-jest'
  }
}