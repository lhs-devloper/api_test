<h1>API Documentation</h1>
<p>npm install하면 필요한 모듈들 설치 됨(express, ex...)</p>
<h2>유저의 모든 데이터</h2>
<p>GET http:localhost:4000/api/User</p>
<h2>유저의 이름을 통해 아이디 확인<h2>
<p>Reponse 200 OK</p>
<p>[
  {
    "id": 0,
    "name": "김민범",
    "age": 24,
    "sex": true
  },
  {
    "id": 1,
    "name": "김윤재",
    "age": 25,
    "sex": true
  },
  {
    "id": 2,
    "name": "이동민",
    "age": 26,
    "sex": true
  },
  {
    "id": 3,
    "name": "이현서",
    "age": 27,
    "sex": true
  }
]</p>
<p>GET http:localhost:4000/api/User/Search?name={name}</p>
<p>Reponse 200 OK</p>
<p>{"id": name.id, "name": name.name, "age": name.age, "sex": name.sex"}</p>
<h2>loggIn상태확인 현재는 연습을 위해 All True로 설정되어있음</h2>
<p>POST http:localhost:4000/api/User</p>
<p>Response 200 OK</p>
<p>{
  "login": {
    "name": "이현서",
    "logged": true
  }
}</p>
