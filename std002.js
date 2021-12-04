const fruit = prompt('찾으실 과일을 입력해주세요');
switch(fruit) {
    case '사과', '포도' :
        console.log('100원 입니다'); break;
    case '배', '딸기' :
        console.log('200원 입니다'); break;
        default :
        console.log('찾으시는 과일이 없습니다');

}