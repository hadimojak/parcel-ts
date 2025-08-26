import fs from "fs";
enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

export class CsvReader {
  data: string[][] = [];

  constructor(public fileName: string) {}

  read(): string[][] {
    const stringBuffer = fs.readFileSync(this.fileName, { encoding: "utf-8" });

    return stringBuffer
      .split("\n")
      .map((val: string): string[] => val.split(","))
      .map((row: string[]): any => {
        return [new Date(row[0]), row[1], row[2], row[3], row[4], row[5] as MatchResult, row[6]];
      });
  }
}
