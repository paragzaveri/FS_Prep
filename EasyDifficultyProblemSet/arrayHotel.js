function findVacantRooms(roomArr){
	var roomNumbers = [];
	for (var roomIndex = 0; roomIndex < roomArr.length; roomIndex++){
		if (roomArr[roomIndex].toLowerCase() === 'vacant'){
			roomNumbers.push(roomIndex);
		}
	}
	return roomNumbers;
}



var rooms = ['vacant', 'occupied', 'occupied', 'vacant', 'vacant'];
console.log(findVacantRooms(rooms));

