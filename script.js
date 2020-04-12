// const b1 = document.querySelector(".box1")
// const b2 = document.querySelector(".box2")
// const b3 = document.querySelector(".box3")
// const b4 = document.querySelector(".box4")
// const b5 = document.querySelector(".box5")
// const b6 = document.querySelector(".box6")
// const b7 = document.querySelector(".box7")
// const b8 = document.querySelector(".box8")
// const b9 = document.querySelector(".box9")
const boxs = document.querySelectorAll(".container div")
const reset = document.querySelector(".reset-btn")
const result = document.querySelector(".result")
let arr = [];
// arr.fill("", 0,8)

let o = "O";
let x = "X";
// function swap(o,x){
// 	let temp = o;
// 	o = x;
// 	x = temp;
// }


let i = 0;


function start(){
	boxs[0].addEventListener("click", function(){add(0)})
	boxs[1].addEventListener("click", function(){add(1)})
	boxs[2].addEventListener("click", function(){add(2)})
	boxs[3].addEventListener("click", function(){add(3)})
	boxs[4].addEventListener("click", function(){add(4)})
	boxs[5].addEventListener("click", function(){add(5)})
	boxs[6].addEventListener("click", function(){add(6)})
	boxs[7].addEventListener("click", function(){add(7)})
	boxs[8].addEventListener("click", function(){add(8)})
	reset.addEventListener("click", function(){gameover()})
	}

	start();

function add(index)
{
	
	if(arr[index]==null){
		[o,x] = [x,o];
		console.log(i)
		boxs[index].innerHTML = o;

		arr[index] = o;
		i++;
		logic(o);
		if(i==9){

			result.innerHTML ="Draw";
			logic(o);
					
			}
	}
}
function logic(o){
			if(arr[0] == o && arr[1] ==o && arr[2] == o){
				result.innerHTML = o +" is the winner!";
					
			}
			if(arr[3] == o && arr[4] ==o && arr[5] == o){
				result.innerHTML = o +" is the winner!";
					
			}
			if(arr[6] == o && arr[7] ==o && arr[8] == o){
				result.innerHTML = o +" is the winner!";
					
			}
			if(arr[0] == o && arr[3] ==o && arr[6] == o){
				result.innerHTML = o +" is the winner!";
					
			}
			if(arr[1] == o && arr[4] ==o && arr[7] == o){
				result.innerHTML = o +" is the winner!";
					
			}
			if(arr[2] == o && arr[5] ==o && arr[8] == o){
				result.innerHTML = o +" is the winner!";
					
			}
			if(arr[0] == o && arr[4] ==o && arr[8] == o){
				result.innerHTML = o +" is the winner!";
					
			}
			if(arr[2] == o && arr[4] ==o && arr[6] == o){
				result.innerHTML = o +" is the winner!";
					
			}
			



			}

function gameover(){
	for(let l = 0;l<9;l++){
		boxs[l].innerHTML = "";
		arr[l] = null;
	}
	i = 0;
	result.innerHTML = "";
	 o = "O";
	 x = "X";
	 start();
}

