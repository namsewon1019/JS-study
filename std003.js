//객체 생성
const person = {
    name : 'namsewon',
    age : 17,
    gender : 'man',
  }
  
  //객체 추가
  //console.log(person.gender);
  person.phonenum = '010-2940-1509';
  person.classnum = 2;
  //console.log(person)
  
  //객체 삭제
  delete person.classnum;
  console.log(person)
  
  
  //단축 프로퍼티
  const money = 1000;
  const color = 'blue';
  
  const namse = {
    money,
    color,
    gender : 'man',
  }
  
  console.log(namse)