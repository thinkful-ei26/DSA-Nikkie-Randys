'use strict';

class _Node {
  constructor(data, prev, next){
    this.data=data;
    this.prev=prev;
    this.next=next;
  }
}

class DoubleLinkedList{
  constructor(){
    this.head=null;
  }

  insertFirst(item){
    this.head = new _Node(item, null, this.head);
  }

  insertLast(item){
    if(this.head===null){
      this.insertFirst(item);
    }

    let tempNode = this.head;
    let prev=this.head;

    while(tempNode.next!==null){
      prev = tempNode;
      tempNode  = tempNode.next;
    }
    console.log('Prev is', prev);
    tempNode.next = new _Node(item, prev, null);
    return;
  }
}

function main(){
  let DLL = new DoubleLinkedList();

  DLL.insertFirst('Nikkie');
  DLL.insertLast('Nate');
  DLL.insertLast('Ariella');
  console.log(DLL);
}

main();