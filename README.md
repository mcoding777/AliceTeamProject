## ■ 기획서

### 1. **서비스 명** : 너와 흥행까지 생각했어.( K-contens Global Index)

### 2. **기획의도**

일시적일 줄 알았던 코로나 19 팬더믹은 예상과는 달리 지속적인 현상으로 치닫고 있으며, 이와함께 한국의 영상산업 특히 영화산업에 큰 타격을 주고있다. 반면 이제는 우리 문화산업에 자리 잡은 뉴 플래폼 OTT는 지난 10년간 지속적인 성장을 해왔으며 코로나 팬더믹에도 성장을 지속하고 있다. OTT 시장은 한국영화와 영상물을 발전시킬 새로운 기회로 인식되어야 할 것이다. 더불어 글로벌 OTT시장은 내수 뿐만 아니라 글로벌시장으로 확장해 갈수 있다는 점에서 그 기회에 주목할 필요가 있다.

이에 전 세계를 대상으로 서비스하고 있는 OTT 서비스 플래폼인 Netflix를 통해 지난 6년간 한국 K-contents의 글로벌 영향력을 지표화하여 평가해보고 분석해 봄으로 국내 제작자나 관계자들에게 글로벌시장에 대한 인사이트를 제공하고자 한다.

‘저스트와치’나 ‘키노라이츠’ 등 기존의 웹서비스들은 주로 소비자관점의 추천서비스가 주류를 이루나 본 서비스는 국내 K-contents의 글로벌 영향력을 지표화하여 제공함으로 제작자나 관계자에게 세계시장에 대한 기초자료를 제공하고자한다.

### 3. **데이터 수집 및 분석방법**

- 수집된 데이터셋 : [FixGem.com](http://FixGem.com) dataset (2015년1월-2021년2월까지 릴리즈 된 Movie, TV-Show 자료)을 전처리하여 사용

- K-contents 488편 (Movie : 259편 TV Show 229편)

| 구분     | K-contents Global Index1                      | K-contents Global Index2 | Market Feature1 | Market Feature2 | Market Feature3                                  |
| -------- | --------------------------------------------- | ------------------------ | --------------- | --------------- | ------------------------------------------------ |
| 시각화   | 별차트 및 방사형차트                          | 워드클라우드             | 바챠트          | 도넛챠트        | 도표                                             |
| 분석방법 | K-contens Global Index 지표개발 및 Clustering | word count               | 연도별빈도분석  | 장르별빈도분석  | 장르별평균비교 One-Way ANOVA(사후분석 : schaffe) |

### 4. **K-contents Global Index 지표 개발**

- K-contents Global Index-4 기준

| Score      | 작품성1(관객평점)    | 글로벌 관람객 평점             | Imdb 평점                           | 10점 평점Scale을 5-Scale 로 전환                              |
| ---------- | -------------------- | ------------------------------ | ----------------------------------- | ------------------------------------------------------------- |
| Award      | 작품성 2(전문가평점) | 수상식 수상/노미네이트된 숫자  | 각종수상횟수 및 노미네이트 된 횟수  | 수상(1)후보(0.5) 비율 합산후 전체분포도에 따라 5-Scale로 전환 |
| Global     | 글로벌확장성         | 릴리즈된 국가수                | Netflix에 릴리즈된 국가수           | 릴리즈된 국가수를 전체분포도에 따라 5-Scale로 전환            |
| Popularity | 화제성               | 평점에 참가한 글로벌 관람객 수 | Imdb 평점에 참가한 글로벌 참가자 수 | 평점참가자수를 전체분포도에 따라 5-Scale로 전환               |

- 종합평점( K-contents Total Global Index)

  - 4개지표를 동일 비중으로 합산후 그룹화

| A-Class  | B-Class         | C-Class         | D-Class |
| -------- | --------------- | --------------- | ------- |
| 4점이상  | 4점이하 3점이상 | 3점이하 2점이상 | 2점이하 |
| 매우우수 | 우수            | 보통            | 미흡    |

### 5. 기술 스택 (python, d3, panda, jupyter, javascript, MySql 등)

- 프론트 : html, CSS, javascript, React
- 백엔드 : python, Mysql, pandas, jupyter, numpy, pymysql, sqlalchemy, flask
- 데이터분석 : python, numpy, pandas

### 6. 사용된 라이브러리

- verssel
- React-Chartjs-2
- React-Slick
- MUI
- aws

### 7. 프로젝트 구성도

- 스토리보드/제안서 : [https://kdt-gitlab.elice.io/003-part3-ottservice/team17/project-template/-/blob/기획/docs/OTT 데이터 분석 17팀\_스토리보드.pdf](https://kdt-gitlab.elice.io/003-part3-ottservice/team17/project-template/-/blob/%EA%B8%B0%ED%9A%8D/docs/OTT%20%EB%8D%B0%EC%9D%B4%ED%84%B0%20%EB%B6%84%EC%84%9D%2017%ED%8C%80_%EC%8A%A4%ED%86%A0%EB%A6%AC%EB%B3%B4%EB%93%9C.pdf)
- 와이프레임 : [https://www.figma.com/file/j88GAXJlMdhWLJCRbtNtow/엘리스-팀-프로젝트?node-id=0%3A1](https://www.figma.com/file/j88GAXJlMdhWLJCRbtNtow/%EC%97%98%EB%A6%AC%EC%8A%A4-%ED%8C%80-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?node-id=0%3A1)

### 8. 프로젝트 팀원 역할 분담

| 이름   | 담당업무    | Responsibility(R&R, Role and Responsibilities)   |
| ------ | ----------- | ------------------------------------------------ |
| 임은비 | 리더/백엔드 | DB 구성, 배포, API 서버 제작, 프로젝트 일정 산정 |
| 임미선 | 프론트엔드  | 와이어 프레임 제작, 웹페이지 디자인 및 기능 구현 |
| 전소희 | 데이터 분석 | 데이터 검색, 데이터 전처리, 분석                 |
| 이호진 | 데이터 분석 | 데이터 검색, 데이터 전처리, 분석                 |

### 9. FAQ

- [발표자료](https://kdt-gitlab.elice.io/003-part3-ottservice/team17/project-template/-/blob/%EA%B8%B0%ED%9A%8D/docs/OTT%EC%84%9C%EB%B9%84%EC%8A%A4_17%ED%8C%80_%EC%B5%9C%EC%A2%85%20%EB%B0%9C%ED%91%9C.pdf)
