# ๐ Typescript๋ก React๊ธฐ๋ฅ ํ๋ SPA ๋ง๋ค๊ธฐ

## 1.ํ๊ฒฝ์ค์ 

- CRA(create-react-app) ํตํด ํจํค์ง๋ฅผ ๊ตฌ์ฑํ๋ฉด `Webpack`๊ณผ `babel`์ด ์๋์ผ๋ก ์ธํ๋์ด์๋ค

- ํ์ง๋ง ์ง์  TypeScript or JavaScript๋ฅผ ํตํด ๊ตฌํํ ๋๋ ์ด์ ๊ฐ์ ๊ณผ์ ๋ค์ ์ธํํด์ฃผ์ด์ผ ํ๋ค.

- ๋จผ์  `pacakge.json`์ ๋ง๋ค์ด ๋ณด์

```properties
    npm init -y
    yarn init -y
```

- package.json์ด ๋ง๋ค์ด์ง๊ณ  ํด๋น ์ ๋ณด๋ฅผ ๋ฃ๋๋ก ๊ตฌ์ฑ๋์ด์๋ค.

```json
{
  "name": "", // ํ๋ก์ ํธ์ ์ด๋ฆ
  "version": "1.0.0", // ํ๋ก์ ํธ ๋ฒ์ 
  "description": "", // ํ๋ก์ ํธ ์ค๋ช
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "", // ํ๋ก์ ํธ ์ ์
  "license": "ISC" //Defualt license๋ก ISC
}
```

- ์ด์  ํจํค์ง ๋ชจ๋ํ๋ฅผ ํ๋ webpack์ ์ค์นํด๋ณด์

```properties
    yarn add --dev webpack webpack-cli
```

- webpack๊ณผ Command-line์์ ์ปจํธ๋กคํ ์ ์๋ cli๋ฅผ ์ค์นํ๊ณ  ์ค์ ์ ์คํธํ๋ค.

```properties
    yarn webpack-cli init
```

- ํด๋น ๋ช๋ น์ด๋ฅผ ์น๊ฒ๋๋ฉด ์ ํ์ง๊ฐ ๋์ค๊ฒ๋๋๋ฐ ์์ ์ ํ๋ก์ ํธ ์ฑ๊ฒฉ์ ๋ง๊ฒ ์ฒดํฌํด์ฃผ๋ฉด ๋๋ค.

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

- ํด๋น๊ณผ์ ์ ์ํํ๋ฉด `srcํด๋`,`index.html`,`tsconfig.json`,`webpack.config.js`๊ฐ ๋ํ๋๋๊ฒ์ ๋ณผ์์๋ค.

- `webpack.config.js` ํ์ผ์ ๋ณด๋ฉด ์ฌ๋ฌ๊ฐ์ง ์ต์๋ค์ด ์๋๋ฐ ๊ฐ๋จํ๊ฒ ์ค๋ชํ๊ณ  ๊ฐ๋๋ก ํ๊ฒ ๋ค.

### html-webpack-plugin

- bundleํ css, jsํ์ผ๋ค์ htmlํ์ผ์ ์ง์  ์ถ๊ฐ๋ฅผ ์๋ํ

### mini-css-extract-plugin

- CSS๋ฅผ ์ถ์ถํด์ ํ์ผ๋ก ์ ์ฅ

### entry:

- `webpack`์ด ๋น๋ํ  ํ์ผ์ ์ง์ 

### output

- `webpack`์ด ์ด๋์ ๋ฒ๋ค์ ์ด๋ป๊ฒ ๋ง๋ค๊ฑด์ง ์ง์ 

### devtool: "source-map"

- devtool: "source-map" ์ต์์ SourceMaps์ ์์ฑํ ์ง ๋ง์ง๋ฅผ ๊ฒฐ์ ํ๋ ์ต์
- ๋๋ฒ๊น ํ๊ธฐ ์์

### devServer

- ๋น ๋ฅธ ์ค์๊ฐ ๋ฆฌ๋ก๋ ๊ธฐ๋ฅ์ ๊ฐ์ถ ๊ฐ๋ฐ ์๋ฒ์ค์ 

### reslove

- ์นํฉ์ด ์์์ ๊ฒฝ๋ก๋ ํ์ฅ์๋ฅผ ์ฒ๋ฆฌํ  ์ ์๊ฒ ๋์์ฃผ๋ ์ต์
