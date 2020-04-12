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
		console.log(index)
		boxs[index].innerHTML = o;

		arr[index] = o;
		i++;
		logic(o);
		
	}
	// compAdd(o);

}
function logic(o){
			if(i==9){
				result.innerHTML ="Draw";
				return "tie";
			}
			if(arr[0] == o && arr[1] ==o && arr[2] == o){
				result.innerHTML = o +" is the winner!";
				arrFill();
				return o;
					
			}
			if(arr[3] == o && arr[4] ==o && arr[5] == o){
				result.innerHTML = o +" is the winner!";
				arrFill();
				return o;
					
			}
			if(arr[6] == o && arr[7] ==o && arr[8] == o){
				result.innerHTML = o +" is the winner!";
				arrFill();
				return o;
					
			}
			if(arr[0] == o && arr[3] ==o && arr[6] == o){
				result.innerHTML = o +" is the winner!";
				arrFill();
				return o;
					
			}
			if(arr[1] == o && arr[4] ==o && arr[7] == o){
				result.innerHTML = o +" is the winner!";
				arrFill();
				return o;
					
			}
			if(arr[2] == o && arr[5] ==o && arr[8] == o){
				result.innerHTML = o +" is the winner!";
				arrFill();
				return o;
					
			}
			if(arr[0] == o && arr[4] ==o && arr[8] == o){
				result.innerHTML = o +" is the winner!";
				arrFill();
				return o;
					
			}
			if(arr[2] == o && arr[4] ==o && arr[6] == o){
				result.innerHTML = o +" is the winner!";
				arrFill();
				return o;
					
			}			
}
function arrFill () {
	for(let l = 0;l<9;l++){
		
		arr[l] = "";
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

// function compAdd (o) {

// 	[o,x] = [x,o];

// 	let temp = arr;
// 	let ai = 1;
// 	let bestScore = -1000;
// 	let to = o;
// 	let tx = x;

// 	for(let j=0;j<9;j++){
// 		if (arr[j] == null) {
// 			temp[j] = o;
// 			if(minimax(temp, 0)>=bestScore){
// 				bestScore = minimax(temp, 0, false,to);
// 				console.log(j + " this is j")
// 				ai = j;
// 			}
// 		}
// 	}
	

// 	if(arr[ai]==null){
		
// 		console.log(i)
// 		boxs[ai].innerHTML = o;

// 		arr[ai] = o;
// 		i++;
// 		logic(o);
// 		if(i==9){

// 			result.innerHTML ="Draw";
// 			logic(o);
					
// 			}
// 	}
// }
// let scores = {
// 	X : 1,
// 	O : -1,
// 	tie : 0
// }

// function minimax(temp, depth, isMax, to){
// 	let result = logic(o);
	
// 	if(result !== null){
// 		return scores[result];
// 	}
// 	if(isMax){
// 		let bestScores = -100000;
// 		for(let l = 0; l<9;l++){
// 			if (temp[l]==null) {
// 				[to,tx] = [tx,to];
// 				temp[l] = to;
// 				let score = minimax(temp, depth+1,false, to);
// 				temp[l] = null;
// 				if(score>bestScores){
// 					bestScores = score;
// 				}
// 			}
// 		}
// 		return bestScores;
// 	}else{
// 		let bestScores = 1000000;
// 		for(let l = 0; l<9;l++){
// 			if (temp[l]==null) {
// 				[to,tx] = [tx,to];
// 				temp[l] = tx;
// 				let score = minimax(temp, depth+1,true, tx);
// 				temp[l] = null;
// 				if(score<bestScores){
// 					bestScores = score;
// 				}
// 			}
// 		}
// 		return bestScores;

// 	}

// }