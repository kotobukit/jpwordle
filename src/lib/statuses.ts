import { solution } from "./words";

export type CharStatus = "absent" | "present" | "correct";

export type CharValue =
| "ァ"
| "ア"
| "ィ"
| "イ"
| "ゥ"
| "ウ"
| "ェ"
| "エ"
| "ォ"
| "オ"
| "カ"
| "ガ"
| "キ"
| "ギ"
| "ク"
| "グ"
| "ケ"
| "ゲ"
| "コ"
| "ゴ"
| "サ"
| "ザ"
| "シ"
| "ジ"
| "ス"
| "ズ"
| "セ"
| "ゼ"
| "ソ"
| "ゾ"
| "タ"
| "ダ"
| "チ"
| "ヂ"
| "ッ"
| "ツ"
| "ヅ"
| "テ"
| "デ"
| "ト"
| "ド"
| "ナ"
| "ニ"
| "ヌ"
| "ネ"
| "ノ"
| "ハ"
| "バ"
| "パ"
| "ヒ"
| "ビ"
| "ピ"
| "フ"
| "ブ"
| "プ"
| "ヘ"
| "ベ"
| "ペ"
| "ホ"
| "ボ"
| "ポ"
| "マ"
| "ミ"
| "ム"
| "メ"
| "モ"
| "ャ"
| "ヤ"
| "ュ"
| "ユ"
| "ョ"
| "ヨ"
| "ラ"
| "リ"
| "ル"
| "レ"
| "ロ"
| "ヮ"
| "ワ"
| "ヰ"
| "ヱ"
| "ヲ"
| "ン"
| "ヴ"
| "ヵ"
| "ヶ"
;

export const getStatuses = (
  guesses: string[]
): { [key: string]: CharStatus } => {
  const charObj: { [key: string]: CharStatus } = {};

  guesses.forEach((word) => {
    word.split("").forEach((letter, i) => {
      if (!solution.includes(letter)) {
        // make status absent
        return (charObj[letter] = "absent");
      }

      if (letter === solution[i]) {
        //make status correct
        return (charObj[letter] = "correct");
      }

      if (charObj[letter] !== "correct") {
        //make status present
        return (charObj[letter] = "present");
      }
    });
  });

  return charObj;
};

export const getGuessStatuses = (guess: string): CharStatus[] => {
  const splitSolution = solution.split("");
  const splitGuess = guess.split("");

  const solutionCharsTaken = splitSolution.map((_) => false);

  const statuses: CharStatus[] = Array.from(Array(guess.length));

  // handle all correct cases first
  splitGuess.forEach((letter, i) => {
    if (letter === splitSolution[i]) {
      statuses[i] = "correct";
      solutionCharsTaken[i] = true;
      return;
    }
  });

  splitGuess.forEach((letter, i) => {
    if (statuses[i]) return;

    if (!splitSolution.includes(letter)) {
      // handles the absent case
      statuses[i] = "absent";
      return;
    }

    // now we are left with "present"s
    const indexOfPresentChar = splitSolution.findIndex(
      (x, index) => x === letter && !solutionCharsTaken[index]
    );

    if (indexOfPresentChar > -1) {
      statuses[i] = "present";
      solutionCharsTaken[indexOfPresentChar] = true;
      return;
    } else {
      statuses[i] = "absent";
      return;
    }
  });

  return statuses;
};
