import { Sorter } from "./Sorter";

export class StringsCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex].charCodeAt(0) > this.data[rightIndex].charCodeAt(0);
  }

  swap(leftIndex: number, rightIndex: number): void {
    const stringArr = this.data.split("");
    [stringArr[leftIndex], stringArr[rightIndex]] = [stringArr[rightIndex], stringArr[leftIndex]];

    this.data = stringArr.join("");
  }
}
