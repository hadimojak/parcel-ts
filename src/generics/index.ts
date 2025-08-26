class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  public get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  public get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfNumbersAndStrings<T> {
  constructor(public collection: T[]) {}

  public get(index: number): T {
    return this.collection[index];
  }
}

const data = new ArrayOfNumbersAndStrings<number>([2, 3, 4, 5]);

const data1 = new ArrayOfNumbersAndStrings<string>(["asdasda", "asd"]);

function printStrings(params: string[]): void {
  params.forEach((val) => console.log(val));
}

function printNumbers(params: number[]) {
  params.forEach((val) => console.log(val));
}

function printAny<T>(params: T[]) {
  params.forEach((val) => console.log(val));
}

// printAny<number>([23, 43, 54, 9]);
// printAny<string>(["asdasd", "asdasd"]);

class Car {
  print() {
    console.log("i am a car");
  }
}

class House {
  print() {
    console.log("i am a house");
  }
}

function printHouseOrCar<T>(params: T) {
  console.log();
  
}
