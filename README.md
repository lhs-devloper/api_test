<h1>API Documentation</h1>
<p>npm install하면 필요한 모듈들 설치 됨(express, ex...)</p>
<h2>유저의 모든 데이터</h2>
<p>GET http:localhost:4000/api/User</p>
<h2>유저의 이름을 통해 아이디 확인<h2>
<p>Reponse 200 OK</p>
<img src="Image/API_User GET ALL Data.png">
<p>GET http:localhost:4000/api/User/Search?name={name}</p>
<p>Reponse 200 OK</p>
<img src="Image/API_USER_SEARCH GET name=김윤재.png">
<h2>loggIn상태확인 현재는 연습을 위해 All True로 설정되어있음</h2>
<p>POST http:localhost:4000/api/User</p>
<p>Response 200 OK</p>
<img src="Image/API_loggedIn POST name=이현서.png">
