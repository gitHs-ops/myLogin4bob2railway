# 로그인 시스템 (Login System)

간단한 로그인 및 회원가입 시스템입니다. PostgreSQL 데이터베이스를 사용합니다.

## 기능

1. **로그인 페이지** - 사용자 인증
2. **회원가입 페이지**
   - 아이디 중복 확인
   - 비밀번호 재확인
   - PostgreSQL 데이터베이스에 사용자 정보 저장
3. **로그인 성공 페이지** - 로그인 성공 시 표시

## 설치 방법

### 1. PostgreSQL 설치 및 설정

PostgreSQL이 설치되어 있지 않다면 먼저 설치하세요:
- Windows: https://www.postgresql.org/download/windows/
- 설치 시 포트는 기본값(5432) 사용
- 비밀번호를 설정하세요

### 2. 데이터베이스 생성

PostgreSQL에 접속하여 데이터베이스를 생성합니다:

```sql
CREATE DATABASE logindb;
```

### 3. 데이터베이스 연결 설정

`db.js` 파일을 열고 PostgreSQL 연결 정보를 수정하세요:

```javascript
const pool = new Pool({
  user: 'postgres',          // PostgreSQL 사용자명
  host: 'localhost',
  database: 'logindb',
  password: 'your_password', // 실제 PostgreSQL 비밀번호로 변경
  port: 5432,
});
```

### 4. 의존성 설치

프로젝트 디렉토리에서 다음 명령어를 실행하세요:

```bash
npm install
```

### 5. 서버 실행

```bash
npm start
```

또는 개발 모드로 실행 (자동 재시작):

```bash
npm run dev
```

## 사용 방법

1. 브라우저에서 `http://localhost:3000` 접속
2. 회원가입 페이지에서 새 계정 생성
   - 아이디 입력 후 "중복확인" 버튼 클릭
   - 비밀번호 입력 및 확인
   - 모든 조건이 충족되면 "회원가입" 버튼 활성화
3. 로그인 페이지에서 생성한 계정으로 로그인
4. 로그인 성공 시 환영 페이지 표시

## 프로젝트 구조

```
myLogin02/
├── public/
│   ├── index.html          # 메인 페이지 (로그인으로 리다이렉트)
│   ├── login.html          # 로그인 페이지
│   ├── register.html       # 회원가입 페이지
│   ├── success.html        # 로그인 성공 페이지
│   └── styles.css          # 스타일시트
├── db.js                   # 데이터베이스 연결 설정
├── server.js               # Express 서버 및 API
├── package.json            # 프로젝트 설정
└── README.md              # 이 파일
```

## API 엔드포인트

- `POST /api/check-username` - 아이디 중복 확인
- `POST /api/register` - 회원가입
- `POST /api/login` - 로그인
- `POST /api/logout` - 로그아웃
- `GET /api/current-user` - 현재 로그인한 사용자 정보

## 기술 스택

- **Backend**: Node.js, Express
- **Database**: PostgreSQL
- **Frontend**: HTML, CSS, JavaScript (Vanilla)
- **Security**: bcrypt (비밀번호 해싱)
- **Session**: express-session

## 주의사항

- 실제 운영 환경에서는 환경 변수를 사용하여 데이터베이스 연결 정보를 관리하세요
- HTTPS를 사용하여 보안을 강화하세요
- 세션 시크릿 키를 안전하게 관리하세요