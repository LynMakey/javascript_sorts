function selectionSort(arr){
    var len = arr.length;

    for(var i = 0, smallerIndex = 0; i < len; i++){
        for(var j = i; j < len; j++){
            if(arr[j] < arr[smallerIndex])
                smallerIndex = j;
        }
        //console.log(arr.splice(smallerIndex, 1), arr);
    }

    return arr;
}