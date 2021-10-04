# React Redux Theme 
light, pink, blue, dart 총 4가지의 테마 모드를 리덕스를 사용해 구현해보았다.

### ✔ style 속성   
- style-components의 ThemeProvider 활용   
- createGlobalStyle 활용하여 전역에 스타일 지정   
- styled-reset 사용   
<br />   


### ✔ Redux 사용   
- 현재 기본 state는 'light'모드의 lightTheme.
- dispatch에 action 타입으로 THEME_CHANGE을 호출하면 클릭된 버튼의 state값으로 갱신.   
