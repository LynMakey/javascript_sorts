function bubbleSort(arr){
    var len = arr.length,
        sorted;

    do{
        sorted = false;
        for(var i = len; i > 0; i--){
            if(arr[i-1] > arr[i]){
                    arr.swap(i, i-1);
                    sorted = true;
            }
        }
    }while(sorted);

    return arr;
}