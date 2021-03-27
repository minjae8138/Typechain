const name = "mj";
const age = 20;
const gender = "male";

const sayHi = (name: string,age:number,gender:string) :void=>{
    console.log(`Hello ${name}, you are ${age}, you are a ${gender} `)
};

sayHi("minjae",age,gender);

export {};  // 이 파일이 모듈이 되는걸 이해시키는 코드

// 인자와 반환값에 대한 타입을 설정해줄 수 있다

