class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }
    
    push(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }else {
            this.tail.next = newNode;
            this.tail = newNode;    
        }
        this.length = this.length + 1;
        return this;
    }

    pop() {
        let tailBeforeNode = this.head;
        if(!this.head) {
            return undefined
        }
        if(!tailBeforeNode.next) {
            this.head = null;
            this.tail = null;
            this.length = this.length - 1;
            return this;
        }
        while(true) {
            if(tailBeforeNode.next === this.tail) {
                break;
            }
            tailBeforeNode = tailBeforeNode.next;
        }
        tailBeforeNode.next = null;
        this.tail = tailBeforeNode;
        this.length = this.length - 1;
        return this;
    }

    unshift(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;    
        }
        this.length = this.length + 1;
        return this;
    }

    shift() {
        if(!this.head) {
            return undefined;
        }
        if(!this.head.next) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }
        this.length = this.length - 1;
        return this;
    }

    get(index) {
        if(index < 0 || index >= this.length) {
            return undefined;
        }
        let reqNode = this.head;
        for(let i = 0; i<index; i++) {
            reqNode = reqNode.next;
        }
        return reqNode;
    }

    set(index, value) {
        const tempNode = this.get(index);
        if(tempNode) {
            tempNode.value = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        if(index < 0 || index > this.length) {
            return undefined;
        }
        if(index === this.length) {
            return this.push(value);
        }
        if(index === 0) {
            return this.unshift(value);
        } else {
            const newNode = new Node(value);
            const tempNode = this.get(index - 1);
            newNode.next = tempNode.next;
            tempNode.next = newNode;
            this.length =  this.length + 1;
            return this;
        }
    }

    remove(index) {
        if(index === 0){
            return this.shift();
        }
        if(index === this.length -1) {
            return this.pop();
        }
        if(index < 0 || index >=this.length) {
            return undefined;
        } else {
            const tempNode = this.get(index - 1);
            tempNode.next = tempNode.next.next;
            this.length = this.length - 1;
        }
        return this;
    }

    reverse() {
        const temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let next = temp.next;
        let prev = null;
        for(let i = 0; i< this.length; i++) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }
    }

}

const myLinkedList = new LinkedList(10);