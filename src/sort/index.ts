import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { StringsCollection } from "./StringsCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

const stringsCollection = new StringsCollection("khhjghj884423");
stringsCollection.sort();
console.log(stringsCollection.data);

const linkedlist = new LinkedList();
linkedlist.add(500);
linkedlist.add(800);
linkedlist.add(600);
linkedlist.add(-50);
linkedlist.add(100);
linkedlist.sort();
linkedlist.print();
