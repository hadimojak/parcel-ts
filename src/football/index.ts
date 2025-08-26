import fs from "fs";
import path from "path";

import { CsvReader } from "./csvReader";

enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

const reader = new CsvReader(path.join(__dirname, "..", "..", "football.csv"));
const matchesData = reader.read();

console.log(matchesData);


const manUnitedWinMatchCount = matchesData.reduce((result: number, cur: string[]) => {
  if (cur.length > 1 && ((cur[1] === "Man United" && cur[5] === MatchResult.HomeWin) || (cur[2] === "Man United" && cur[5] === MatchResult.AwayWin)))
    return result + 1;
  else return result;
}, 0);

console.log(manUnitedWinMatchCount);
