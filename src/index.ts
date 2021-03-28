

interface Human {
    name : string;
    age : number;
    gender : string;
}

const person = {
    name : "mj",
    age : 20,
    gender : "male"
}


const sayHi = (person:Human) :void=>{
    console.log(`Hello ${person.name}, you are ${person.age}, you are a ${person.gender} `)
};

sayHi(person);

export {};  // 이 파일이 모듈이 되는걸 이해시키는 코드

// 인자와 반환값에 대한 타입을 설정해줄 수 있다

