//alert = 보여주기(알림)
//prompt = 입력
//confirm = 확인/취소 (alert는 확인만 있음)

const name = prompt("당신의 이름을 입력해주세요");
confirm("정말" + name + "이름으로 하시겠습니까?");
if(confirm == 1) {
    alert("환영합니다," + name + "님");
}else {
    alert("취소하셨습니다");
}

//자료 형변환

console.log(
    String(3),
    String(true),
    String(null),
    String(3.14),
    
)
