# GitHub 배포 가이드

GitHub에 코드를 업로드하고 클라우드 플랫폼에 배포하는 완벽한 가이드입니다.

## 📋 목차
1. [리포지토리 이름 짓기](#리포지토리-이름-짓기)
2. [GitHub 업로드 단계](#github-업로드-단계)
3. [배포 전 준비](#배포-전-준비)
4. [Render 배포](#render-배포)
5. [문제 해결](#문제-해결)

---

## 리포지토리 이름 짓기

### 좋은 리포지토리 이름의 원칙

1. **소문자 사용** (권장)
2. **하이픈(-)으로 단어 구분**
3. **명확하고 설명적인 이름**
4. **짧고 기억하기 쉬운 이름**

### 추천 이름 예시

#### 프로젝트 성격별

**일반적인 로그인 시스템:**
```
login-system
user-authentication
auth-system
simple-login
node-login-app
```

**기술 스택 포함:**
```
nodejs-login-system
express-postgres-auth
node-express-login
postgres-auth-app
```

**기능 중심:**
```
user-management-system
secure-login-app
session-based-auth
user-registration-system
```

**프로젝트 이름 포함:**
```
mylogin-app
mylogin-system
mylogin-v2
login-project-2026
```

### 이 프로젝트 추천 이름

#### 🥇 최고 추천 (5개)

1. **`nodejs-login-system`**
   - 명확한 기술 스택 표시
   - 검색하기 쉬움
   - 전문적인 느낌

2. **`express-postgres-auth`**
   - 사용 기술 명시
   - 간결하고 명확
   - 포트폴리오용으로 좋음

3. **`simple-login-app`**
   - 프로젝트 성격 명확
   - 초보자 친화적
   - 기억하기 쉬움

4. **`user-auth-system`**
   - 간결함
   - 범용적
   - 확장 가능한 이름

5. **`mylogin-webapp`**
   - 개인 프로젝트 느낌
   - 친근함
   - 독특함

#### 피해야 할 이름

❌ **너무 일반적:**
- `project1`, `test`, `app`

❌ **너무 길거나 복잡:**
- `my-super-awesome-login-system-with-postgresql-and-nodejs`

❌ **특수문자 사용:**
- `login_system` (언더스코어보다 하이픈 권장)
- `Login-System` (대문자 피하기)

❌ **의미 불명확:**
- `myPrjt01`, `system123`

---

## GitHub 업로드 단계

### 사전 준비

#### 1. Git 설치 확인

```powershell
# Git 버전 확인
git --version

# 설치 안 되어 있으면
# https://git-scm.com/download/win 에서 다운로드
```

#### 2. Git 초기 설정

```powershell
# 사용자 이름 설정
git config --global user.name "Your Name"

# 이메일 설정 (GitHub 이메일과 동일하게)
git config --global user.email "your.email@example.com"

# 설정 확인
git config --list
```

#### 3. GitHub 계정 준비

1. https://github.com 접속
2. 계정 생성 (무료)
3. 이메일 인증 완료

### Step 1: .gitignore 파일 확인

**현재 .gitignore 내용 확인:**

```bash
# 프로젝트 폴더에서
type .gitignore
```

**필수 내용 (없으면 추가):**

```gitignore
# 의존성
node_modules/
package-lock.json

# 환경 변수
.env
.env.local
.env.production

# 로그
logs/
*.log
npm-debug.log*

# 운영 체제
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/
*.swp
*.swo

# 빌드 결과
dist/
build/

# 데이터베이스
*.sqlite
*.db

# 백업 파일
*.bak
*.backup
```

### Step 2: 로컬 Git 저장소 초기화

```powershell
# 프로젝트 폴더로 이동
cd C:\myPrjt01\myLogin02

# Git 저장소 초기화
git init

# 현재 상태 확인
git status
```

### Step 3: 파일 추가 및 커밋

```powershell
# 모든 파일 스테이징
git add .

# 커밋 (첫 커밋)
git commit -m "Initial commit: Node.js login system with PostgreSQL"

# 또는 더 상세한 커밋 메시지
git commit -m "feat: Initial implementation of login system

- User registration with bcrypt password hashing
- Session-based authentication
- PostgreSQL database integration
- User list view with authentication
- Responsive UI design"
```

### Step 4: GitHub 리포지토리 생성

#### 웹 브라우저에서:

1. **GitHub 로그인**
2. **우측 상단 '+' 클릭 → New repository**
3. **리포지토리 설정:**
   ```
   Repository name: nodejs-login-system
   Description: Simple login system built with Node.js, Express, and PostgreSQL
   Public (공개) 또는 Private (비공개) 선택
   ✅ Add a README file (체크 해제 - 이미 있음)
   ✅ Add .gitignore (체크 해제 - 이미 있음)
   Choose a license: MIT License (선택사항)
   ```
4. **Create repository 클릭**

### Step 5: 원격 저장소 연결

**GitHub에서 제공하는 명령어 복사:**

```powershell
# 원격 저장소 추가
git remote add origin https://github.com/your-username/nodejs-login-system.git

# 기본 브랜치 이름 확인/변경
git branch -M main

# 원격 저장소에 푸시
git push -u origin main
```

**인증 방법:**

1. **Personal Access Token (권장)**
   - GitHub → Settings → Developer settings → Personal access tokens
   - Generate new token (classic)
   - repo 권한 선택
   - 토큰 복사 (비밀번호 대신 사용)

2. **GitHub Desktop 사용 (쉬운 방법)**
   - https://desktop.github.com 다운로드
   - GitHub 계정 로그인
   - GUI로 간편하게 관리

### Step 6: 업로드 확인

```powershell
# 원격 저장소 확인
git remote -v

# 브라우저에서 확인
# https://github.com/your-username/nodejs-login-system
```

---

## 배포 전 준비

### 1. README.md 업데이트

**프로젝트 소개 추가:**

```markdown
# Node.js Login System

Simple and secure login system built with Node.js, Express, and PostgreSQL.

## Features

- ✅ User registration with password hashing (bcrypt)
- ✅ Session-based authentication
- ✅ User list view (authenticated users only)
- ✅ Responsive UI design
- ✅ PostgreSQL database
- ✅ Input validation
- ✅ Race condition handling

## Tech Stack

- **Backend:** Node.js, Express
- **Database:** PostgreSQL
- **Security:** bcrypt, express-session
- **Frontend:** HTML, CSS, Vanilla JavaScript

## Quick Start

### Prerequisites

- Node.js 18+
- PostgreSQL 18+

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/nodejs-login-system.git
cd nodejs-login-system
```

2. Install dependencies
```bash
npm install
```

3. Create PostgreSQL database
```sql
CREATE DATABASE logindb;
```

4. Update database credentials in `db.js`

5. Start the server
```bash
npm start
```

6. Open browser
```
http://localhost:3000
```

## Environment Variables

For production deployment, create a `.env` file:

```env
NODE_ENV=production
PORT=3000
DB_USER=your_db_user
DB_HOST=localhost
DB_NAME=logindb
DB_PASSWORD=your_db_password
DB_PORT=5432
SESSION_SECRET=your_random_secret_key
```

## Deployment

See [FREE_HOSTING_GUIDE.md](FREE_HOSTING_GUIDE.md) for deployment instructions.

## License

MIT License

## Author

Your Name
```

### 2. package.json 확인

**필수 필드 추가:**

```json
{
  "name": "nodejs-login-system",
  "version": "1.1.0",
  "description": "Simple login system with Node.js and PostgreSQL",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "keywords": [
    "login",
    "authentication",
    "nodejs",
    "express",
    "postgresql",
    "session"
  ],
  "author": "Your Name",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/your-username/nodejs-login-system.git"
  },
  "engines": {
    "node": ">=18.0.0",
    "npm": ">=9.0.0"
  },
  "dependencies": {
    "express": "^4.18.2",
    "pg": "^8.11.3",
    "body-parser": "^1.20.2",
    "bcrypt": "^5.1.1",
    "express-session": "^1.17.3"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
```

### 3. 민감한 정보 제거 확인

**절대 업로드하면 안 되는 것:**

```bash
# .env 파일이 .gitignore에 있는지 확인
cat .gitignore | findstr .env

# db.js에 실제 비밀번호가 하드코딩되어 있는지 확인
type db.js
```

**db.js를 환경 변수로 변경 (권장):**

```javascript
require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'logindb',
  password: process.env.DB_PASSWORD || 'your_password',
  port: process.env.DB_PORT || 5432,
});

module.exports = { pool, initDB };
```

**dotenv 설치:**

```bash
npm install dotenv
```

**.env.example 파일 생성 (업로드용):**

```env
# Database Configuration
DB_USER=postgres
DB_HOST=localhost
DB_NAME=logindb
DB_PASSWORD=your_password_here
DB_PORT=5432

# Server Configuration
PORT=3000
NODE_ENV=development

# Session Configuration
SESSION_SECRET=your_random_secret_key_here
```

---

## Render 배포

### Step 1: GitHub 연동

1. https://render.com 접속
2. GitHub 계정으로 가입
3. Dashboard → Account Settings → Connected Accounts
4. GitHub 연결 및 저장소 접근 허용

### Step 2: PostgreSQL 생성

1. Dashboard → New → PostgreSQL
2. 설정:
   ```
   Name: logindb
   Database: logindb
   User: logindb_user
   Region: Singapore
   Plan: Free
   ```
3. Create Database
4. **Internal Database URL 복사**

### Step 3: Web Service 생성

1. Dashboard → New → Web Service
2. Connect Repository 선택
3. 저장소 선택: `nodejs-login-system`
4. 설정:
   ```
   Name: nodejs-login-system
   Region: Singapore
   Branch: main
   Runtime: Node
   Build Command: npm install
   Start Command: npm start
   Plan: Free
   ```

### Step 4: 환경 변수 설정

Environment 탭에서 추가:

```env
NODE_ENV=production
PORT=3000
DB_USER=logindb_user
DB_HOST=dpg-xxxxx-a.singapore-postgres.render.com
DB_NAME=logindb
DB_PASSWORD=xxxxxxxxxxxxx
DB_PORT=5432
SESSION_SECRET=your_random_secret_key_here_min_32_chars
```

**SESSION_SECRET 생성:**

```powershell
# PowerShell에서 실행
-join ((48..57) + (65..90) + (97..122) | Get-Random -Count 32 | % {[char]$_})
```

### Step 5: 배포

1. Save Changes 클릭
2. 자동 빌드 시작
3. 5-10분 후 완료
4. 제공된 URL로 접속: `https://nodejs-login-system.onrender.com`

---

## 문제 해결

### 문제 1: Git push 실패

**증상:**
```
fatal: Authentication failed
```

**해결:**
```powershell
# Personal Access Token 사용
# Username: your-github-username
# Password: ghp_xxxxxxxxxxxxxxxxxxxx (토큰)
```

### 문제 2: 파일이 너무 많이 추가됨

**증상:**
```
node_modules 폴더가 추가됨
```

**해결:**
```powershell
# 캐시 제거
git rm -r --cached node_modules
git commit -m "Remove node_modules"
git push
```

### 문제 3: 배포 후 데이터베이스 연결 실패

**증상:**
```
Error: connect ECONNREFUSED
```

**해결:**
- 환경 변수 확인
- Internal Database URL 사용 확인
- SSL 설정 추가:
  ```javascript
  ssl: { rejectUnauthorized: false }
  ```

### 문제 4: 세션이 작동하지 않음

**증상:**
```
로그인 후 바로 로그아웃됨
```

**해결:**
```javascript
// server.js
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 3600000
  }
}));
```

---

## 추가 Git 명령어

### 일상적인 작업

```powershell
# 변경사항 확인
git status

# 변경사항 추가
git add .

# 커밋
git commit -m "feat: Add new feature"

# 푸시
git push

# 풀 (원격 변경사항 가져오기)
git pull

# 브랜치 생성
git checkout -b feature/new-feature

# 브랜치 전환
git checkout main

# 브랜치 병합
git merge feature/new-feature
```

### 커밋 메시지 컨벤션

```
feat: 새로운 기능 추가
fix: 버그 수정
docs: 문서 수정
style: 코드 포맷팅
refactor: 코드 리팩토링
test: 테스트 추가
chore: 빌드 업무 수정
```

**예시:**
```powershell
git commit -m "feat: Add user profile page"
git commit -m "fix: Resolve login session issue"
git commit -m "docs: Update README with deployment guide"
```

---

## 체크리스트

### GitHub 업로드 전

- [ ] .gitignore 파일 확인
- [ ] 민감한 정보 제거 (비밀번호, API 키)
- [ ] README.md 작성
- [ ] package.json 업데이트
- [ ] 라이선스 선택

### 배포 전

- [ ] 환경 변수 설정
- [ ] 데이터베이스 연결 테스트
- [ ] 로컬에서 프로덕션 모드 테스트
- [ ] 에러 처리 확인

### 배포 후

- [ ] 배포된 사이트 접속 테스트
- [ ] 회원가입 테스트
- [ ] 로그인 테스트
- [ ] 모든 기능 테스트
- [ ] 로그 확인

---

## 결론

### 추천 리포지토리 이름 (최종)

**이 프로젝트에 가장 적합한 이름:**

1. **`nodejs-login-system`** ⭐⭐⭐⭐⭐
2. **`express-postgres-auth`** ⭐⭐⭐⭐
3. **`simple-login-app`** ⭐⭐⭐⭐

### 배포 소요 시간

- GitHub 업로드: 10분
- Render 배포: 15분
- 테스트: 5분
- **총 30분**

### 다음 단계

1. ✅ GitHub에 코드 업로드
2. ✅ Render에 배포
3. 📱 친구들과 공유
4. 💼 포트폴리오에 추가
5. 🚀 다음 프로젝트 시작!

---

**작성일:** 2026-05-02  
**작성자:** Bob (AI Assistant)  
**버전:** 1.0