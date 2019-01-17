'use strict';

class _Node {
  constructor(data, next){
    this.data=data;
    this.next=next;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  insertFirst(item){
    this.head = new _Node(item, this.head);
  }

  insertLast(item){
    if(this.head===null){
      this.insertFirst(item);
    }

    const newNode = new _Node(item, null);
    let tempNode = this.head;

    while(tempNode.next!==null){
      tempNode  = tempNode.next;
    }

    tempNode.next = newNode;
    return;
  }

  insertBefore(item, key){
    if(this.head===null){
      this.insertFirst(item);
    }

    if(key===this.head.data){
      this.insertFirst(item);
      return;
    }

    const newNode = new _Node(item, null);
    let currentNode = this.head;
    let prevNode = this.head;

    while(currentNode!==null){
      console.log('in while loop');
      if(currentNode.data===key){
        console.log('found corrent item');
        newNode.next = currentNode;
        prevNode.next = newNode;
        return;
      } else {
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
    }
  }

  insertAfter(item, key){
    const newNode = new _Node(item, null);
    let currentNode = this.head;

    if(this.head===null){
      this.insertFirst(item);
    }

    if(key===this.head.data){
      newNode.next = currentNode.next;
      currentNode.next = newNode;
      return;
    }

    

    while(currentNode!==null){
      if(currentNode.data===key){
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        return;
      } else {
        currentNode = currentNode.next;
      }
    }
  }

  insertAt(item, position){
    let newNode = new _Node(item, null);
    let currentNode = this.head;
    let prevNode = this.head;
    let count = 1;

    //if empty list
    if(this.head===null){
      this.insertFirst(item);
      return;
    }

    if(position===1){
      console.log('in here');
      this.insertFirst(item);
      return;
    }

    while(currentNode!==null){
      if(count===position){
        newNode.next = currentNode;
        prevNode.next = newNode;
        return;
      }
      prevNode= currentNode;
      currentNode = currentNode.next;
      count++;
    }

    //if the while loop finishes and it still hasn't been inserted, it should be at the end
    this.insertLast(item);
  }

  //possibly incorrect...
  find(item){
    let currentNode = this.head;

    if(!this.head){
      return null;
    }

    while(currentNode.next!==null){
      if(currentNode.data===item){
        return currentNode;
      }
      else{
        currentNode = currentNode.next;
      }
    }
    return null;
  }

  remove(item){
    if(!this.head){
      return null;
    }

    if(this.head.data===item){
      this.head === this.head.next;
      return;
    }

    let currentNode = this.head;
    let prevNode = this.head;

    while(currentNode!==null){
      if(currentNode.data===item){
        prevNode.next = currentNode.next;
        console.log('item removed');
        return;
      }
      else{
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
    }
    console.log('item not found');
    return;
  }
}

function display(SLL){
  return JSON.stringify(SLL);
  //if we just want to display the values, we could traverse through the LL and push each value of the Node into an array, and then return the array
}

function size(SLL){
  let count=0;

  let currentNode=SLL.head;

  while(currentNode!==null){
    count++;
    currentNode = currentNode.next;
  }

  return count;
}

function isEmpty(SLL){
  return SLL.head===null ? true : false;
}

function findPrevious(SLL, item){
  let current = SLL.head;
  let prev = SLL.head;

  //if the first item is what's passed in
  if(SLL.head.data===item){
    return null;
  }

  while(current!==null){
    if(current.data ===item){
      return prev.data; 
    }
    prev = current;
    current = current.next;
  }

  return null;
}

function findLast(SLL){
  let current = SLL.head;

  if(SLL.head===null){
    return null;
  }

  while(current!==null){
    if(current.next===null){
      return current.data;
    }
    current=current.next;
  }

  return null;
}

function main() {
  const SLL = new LinkedList();
  const test = new LinkedList();

  test.insertFirst('test');

  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  // SLL.insertLast('Starbuck')
  // SLL.insertLast('Tauhida')
  // SLL.remove('squirrel')
  SLL.insertBefore('Athena', 'Husker');
  SLL.insertAfter('Hotdog', 'Helo');
  SLL.insertAt('Nikkie', 7);
  console.log(display(SLL));
  console.log(size(SLL));
  console.log(isEmpty(SLL));
  console.log(isEmpty(test));
  console.log(findPrevious(SLL, "Nikkie"));
  console.log(findLast(test));
}

main();

