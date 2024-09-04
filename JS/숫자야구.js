// 랜덤 숫자 3자리 뽑기

// 방법1. 
let rdArray = []
while (rdArray.length < 4) {
  let num = Math.floor((Math.random()*9)+1)
// rdArray에 num의 번호(index)가 없다면
  if (rdArray.indexOf(num) == -1) {  
    rdArray.push(num)
  }
}
console.log(rdArray)

// 방법2. 배열에 랜덤난수 생성해서 i번쨰와 j번째 비교해서 같으면 i를 다시 생성
let rdArray2 = new Array(3)
for (let i = 0; i < rdArray2.length; i++){
  rdArray2[i] = Math.floor((Math.random()*9)+1)
  for (let j = 0; j < i; j++){
    if (rdArray2[j] == rdArray2[i])
      i--
  }
}
// console.log(rdArray2)

// 랜덤으로 뽑은 배열을 문자열로 변환
// let com_num = rdArray.join("")
// console.log(com_num)

// 입력한 숫자랑 랜덤 숫자 비교
let btn = document.querySelector("#btn_1")
let container = document.querySelector("#container")
let appendTemplete = '<br> <input type="number" min="1" max="9" class = "target"> <input type="number" min="1" max="9" class = "target"> <input type="number" min="1" max="9" class = "target"> <input type="number" min="1" max="9" class = "target">'


// 버튼 클릭하면
btn.addEventListener("click", () => {
  // 스크라이크, 볼, 아웃 확인해서 배경색 바꾸기
  let input_num = document.querySelectorAll(".target")

  for (let i = 0; i < input_num.length; i++) {
    if (input_num[i].value == rdArray[i]){
      input_num[i].style.backgroundColor = 'lightgreen'
    } else if (rdArray.indexOf(parseInt(input_num[i].value)) != -1) {
      input_num[i].style.backgroundColor = 'gold'
    } else {
      input_num[i].style.backgroundColor = "lightgrey"
    }
    input_num[i].classList.remove("target")
  }

  // 새로입력 받을 태그 만들기(3개)
  // for (let i = 0; i <3; i++){
  //   let new_input = document.createElement("input")
  //   container.appendChild(new_input)
  // }

  container.insertAdjacentHTML("beforeend", appendTemplete)



})














