function minMax(arr) {
	
	let min = Math.min(...arr);
	let max = Math.max(...arr);
	let newArray = [];
	
	newArray.push(min);
	newArray.push(max);
	
	return newArray;
}
