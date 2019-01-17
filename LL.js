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
      if(currentNode.value===item){
        prevNode = currentNode;
        currentNode = currentNode.next;
        prevNode.next = currentNode.next;
        return;
      }
      else{
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
    }
    return;
  }
}