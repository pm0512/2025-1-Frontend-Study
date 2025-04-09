# HTML
### Hyper Text Markup Language
- 기존의 문서들보다 hyper한 기능을 가지고 있는 문서를 의미
- 대표적으로 hyperlink나 markup 기능 등이 존재함
    - *hyperlink* : 문서나 웹 페이지 내에서 다른 문서나 웹 페이지로 이동할 수 있도록 하는 링크
    - *markup* : 문서의 구조를 정의하고 표현하는 언어, HTML에서는 태그를 사용하여 문서의 요소를 정의하고 이를 통해 텍스트의 구조, 이미지, 링크 등을 표현함
- HTML은 태그로 이루어진 markup 언어라고 정의 내릴 수 있음

#### HTML 기본 문서 구조
HTML 페이지를 만든 후 `live server` 확장 프로그램을 이용하여 실시간으로 HTML 파일을 볼 수 있음

```python
< tagname > content < /tagname >
```
- `<tagname>` open tag
- `</tagname>` close tag

```python
<!DOCTYPE html>
<html>
<head>
<title>Hello</title>
</head>
<body>
<h1>신짱구</h1>
<p>안녕하세요. 저는 떡잎마을에 사는 신짱구입니다. 5살이에요.</p>
<h2>
가족 관계
</h2>
<p>엄마, <a href="/father.html">아빠</a>, 저, 동생. 그리고 흰둥이와 함께 살아요.</p>
</body>
</html>
```

- `DOCTYPE` document type, 어떤 버전(ex: html5)으로 작성 되었는지 설명
- `<html>` html 문서 내용 시작
- `<head>` html 브라우저가 사용하는 정보
- `<title>` 문서의 제목(페이지 제목)=Hello 
- `<body>` 사용자가 보는 정보 
- `<a href="/">` a(anchor) 태그, hyper reference의 약자(하이퍼 참조)
- 글꼴 태그
  - `<h1> ~ <h6>` Heading
  - `<p>` Paragraph  