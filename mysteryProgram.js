// Analyze the following function (without running it in an IDE) to 
// determine what problem it is trying to solve. What is the runtime 
// of this algorithm?

function WhatDoesThisProgramDo(lst){
  let tick = 0;
  console.log(lst)
    let current = lst.head;
    while(current !== null){
      tick++
        let newNode = current;
        while (newNode.next !== null) {
          tick++
            if (newNode.next.data === current.data) {
                newNode.next = newNode.next.next;

            }
            else{
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
    console.log(tick)
}

// a -> c -> d -> e -> null ->
//current = a
//newNode = a
//if (a = a) { then a = c }
// otherwise a = b

//this function removes duplicates

