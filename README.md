# moodle-word-viewer
무들 단어 뷰어 

## 사용법(Chrome)
1. moodle 사이트에 접속하고 로그인합니다.
2. Vocabulary Review 로 이동합니다.
3. 주소창에 `javascript:$.getScript("http://dryra.in/pe/pe.js");`를 입력하고 `Enter`키를 누르십시오.  
   붙여넣기 할 때 `javascript:`는 브라우저에서 자동으로 지워질 수 있습니다. 
4. 3~5초 후 새 창이 열릴 것입니다.

## 사용법(Internet Explorer)
1. moodle 사이트에 접속하고 로그인합니다.
2. Vocabulary Review 로 이동합니다.
3. `F12`키를 누른 후 콘솔(Console)로 이동한 다음 `$.getScript("http://dryra.in/pe/pe.js");`를 입력하고 `Enter`키를 누르십시오.  
4. 3~5초 후 새 창이 열릴 것입니다.

## 북마크바에 저장
<a href="http://dryra.in/pe/bookmark.html">여기</a>를 눌러 설명을 따르십시오.

## 셀프 호스팅
`pe.js`내부의 `url`을 자신의 서버 URL로,  
`index.html`내부의 `moodle_url`을 학교의 moodle URL로 수정하면 됩니다.
* URL의 마지막에 `/`를 붙이지 마십시오.
