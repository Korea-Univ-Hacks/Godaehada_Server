## 고카톤 고대하다팀 서버 레포지토리

API 명세서

URL

- method
- 설명
- 필요한 parameter
- 성공시 return 값
- 실패시 return 값

#### 🚀http://localhost:3000/api/register/:userId

- method: post
- 사용자가 포트폴리오를 추가한다.
- 필요한 parameter: 로그인한 사용자의 userId : { type: string }
- 필요한 formdata 형식 ( key, value)
  - ( 'myFile', 31717060.jpeg ) : 파일
  - ( 'category', 'IT' ) : string
  - ( 'tag', 'ios' ) : string
- 성공시 return 값: { success: true}
- 실패시 return 값: { }

#### 🚀http://localhost:3000/api/user/list

- method: get
- 메인 화면을 로드한다. 요청 쿼리스트링으로 category, tag 중 하나를 보낼 수 있음
- 필요한 parameter: x
- 성공시 return 값:
  - 크리에이터 카드 배열이 나옴
- 실패시 return 값: 

#### 🚀http://localhost:3000/api/user/profile/:userId

- method: get
- userId 파라미터를 통해 상세 모든 tag 프로필 조회
- 필요한 parameter: 로그인한 사용자의 userId : { type: string }
- 성공시 return 값:
  - 상열님이 복붙!
- 실패시 return 값: 