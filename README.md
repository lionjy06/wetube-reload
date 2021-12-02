# Wetube Reloaded

global router(홈에서 바로 할수있는 기능)
/ -> home
/join -> join
/login -> login
/search -> search
-> 아래와 같은 로직이라면 global 라우터는 존재하지 않고 /users/join /users/login 또는 /videos/search가 맞지만
예외적으로 처리해야할 사항은 예외적으로 처리하는게 깔끔하다.(좀더 경험치 생기면 판단이 서리라 생각한다...)

user router
/users/edit -> edit user
/users/delete -> delete user

video router
/videos/watch -> watch video
/videos/edit -> edit video
/videos/comment
/videos/comment/delete

제공하고자 하는 웹서비스의 필수 기능별 도메인을 나누고 거기서 세분화 하여 url을 지정한다.
이때 필수 기능을 router라고 하고 여기서 router는 videos, users 그리고 global로 나뉜다
즉 라우터별로 세부기능을 나눈다.
