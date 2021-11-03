# 🚀 Typescript로 React기능 하는 SPA 만들기

## 1.환경설정

- CRA(create-react-app) 통해 패키지를 구성하면 `Webpack`과 `babel`이 자동으로 세팅되어있다

- 하지만 직접 TypeScript or JavaScript를 통해 구현할때는 이와 같은 과정들을 세팅해주어야 한다.

- 먼저 `pacakge.json`을 만들어 보자

```properties
    npm init -y
    yarn init -y
```

- package.json이 만들어지고 해당 정보를 넣도록 구성되어있다.

```json
{
  "name": "", // 프로젝트의 이름
  "version": "1.0.0", // 프로젝트 버전
  "description": "", // 프로젝트 설명
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "", // 프로젝트 저자
  "license": "ISC" //Defualt license로 ISC
}
```

- 이제 패키지 모듈화를 하는 webpack을 설치해보자

```properties
    yarn add --dev webpack webpack-cli
```

- webpack과 Command-line에서 컨트롤할수 있는 cli를 설치하고 설정을 실핸한다.

```properties
    yarn webpack-cli init
```

- 해당 명령어를 치게되면 선택지가 나오게되는데 자신의 프로젝트 성격에 맞게 체크해주면 된다.

```properties
? Which of the following JS solutions do you want to use?
    Typescript
? Do you want to use webpack-dev-server?
    Yes
? Do you want to simplify the creation of HTML files for your bundle?
    Yes
? Do you want to add PWA support?
    Yes
? Which of the following CSS solutions do you want to use?
    SASS
? Will you be using CSS styles along with SASS in your project?
    Yes
? Will you be using PostCSS in your project?
    No
? Do you want to extract CSS for every file?
    Yes
? Do you like to install prettier to format generated configuration?
    Yes
? Pick a package manager:
    yarn
```

- 해당과정을 수행하면 `src폴더`,`index.html`,`tsconfig.json`,`webpack.config.js`가 나타나는것을 볼수있다.

- `webpack.config.js` 파일을 보면 여러가지 옵션들이 있는데 간단하게 설명하고 가도록 하겠다.

### html-webpack-plugin

- bundle한 css, js파일들은 html파일에 직접 추가를 자동화

### mini-css-extract-plugin

- CSS를 추출해서 파일로 저장

### entry:

- `webpack`이 빌드할 파일을 지정

### output

- `webpack`이 어디에 번들을 어떻게 만들건지 지정

### devtool: "source-map"

- devtool: "source-map" 옵션은 SourceMaps을 생성할지 말지를 결정하는 옵션
- 디버깅 하기 수월

### devServer

- 빠른 실시간 리로드 기능을 갖춘 개발 서버설정

### reslove

- 웹팩이 알아서 경로나 확장자를 처리할 수 있게 도와주는 옵션
