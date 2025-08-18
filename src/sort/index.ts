import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { StringsCollection } from './StringsCollection';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const stringsCollection = new StringsCollection('hjhgfrt7878676');
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data)


const stringSorter = new Sorter(stringsCollection);
stringSorter.sort();
console.log(stringsCollection.data)

