import { KeyValue } from "../../lib/keyboard";
import { getStatuses } from "../../lib/statuses";
import { Key } from "./Key";
import { EmptyKey } from "./EmptyKey";

type Props = {
  onChar: (value: string) => void;
  onDelete: () => void;
  onEnter: () => void;
  guesses: string[];
};

export const Keyboard = ({ onChar, onDelete, onEnter, guesses }: Props) => {
  const charStatuses = getStatuses(guesses);
  console.log(charStatuses);

  const onClick = (value: KeyValue) => {
    if (value === "ENTER") {
      return onEnter();
    }
    if (value === "DELETE") {
      return onDelete();
    }
    return onChar(value);
  };

  return (
    <div>
      <div className="flex justify-center mb-1">
        <Key value="ン" onClick={onClick} status={charStatuses["ン"]} />
        <Key value="ワ" onClick={onClick} status={charStatuses["ワ"]} />
        <Key value="ラ" onClick={onClick} status={charStatuses["ラ"]} />
        <Key value="ヤ" onClick={onClick} status={charStatuses["ヤ"]} />
        <Key value="マ" onClick={onClick} status={charStatuses["マ"]} />
        <Key value="ハ" onClick={onClick} status={charStatuses["ハ"]} />
        <Key value="ナ" onClick={onClick} status={charStatuses["ナ"]} />
        <Key value="タ" onClick={onClick} status={charStatuses["タ"]} />
        <Key value="サ" onClick={onClick} status={charStatuses["サ"]} />
        <Key value="カ" onClick={onClick} status={charStatuses["カ"]} />
        <Key value="ア" onClick={onClick} status={charStatuses["ア"]} />
      </div>
      <div className="flex justify-center mb-1">
        <EmptyKey  />
        <Key value="ヰ" onClick={onClick} status={charStatuses["ヰ"]} />
        <Key value="リ" onClick={onClick} status={charStatuses["リ"]} />
        <EmptyKey  />
        <Key value="ミ" onClick={onClick} status={charStatuses["ミ"]} />
        <Key value="ヒ" onClick={onClick} status={charStatuses["ヒ"]} />
        <Key value="ニ" onClick={onClick} status={charStatuses["ニ"]} />
        <Key value="チ" onClick={onClick} status={charStatuses["チ"]} />
        <Key value="シ" onClick={onClick} status={charStatuses["シ"]} />
        <Key value="キ" onClick={onClick} status={charStatuses["キ"]} />
        <Key value="イ" onClick={onClick} status={charStatuses["イ"]} />
      </div>
      <div className="flex justify-center mb-1">
        <EmptyKey  />
        <EmptyKey  />
        <Key value="ル" onClick={onClick} status={charStatuses["ル"]} />
        <Key value="ユ" onClick={onClick} status={charStatuses["ユ"]} />
        <Key value="ム" onClick={onClick} status={charStatuses["ム"]} />
        <Key value="フ" onClick={onClick} status={charStatuses["フ"]} />
        <Key value="ヌ" onClick={onClick} status={charStatuses["ヌ"]} />
        <Key value="ツ" onClick={onClick} status={charStatuses["ツ"]} />
        <Key value="ス" onClick={onClick} status={charStatuses["ス"]} />
        <Key value="ク" onClick={onClick} status={charStatuses["ク"]} />
        <Key value="ウ" onClick={onClick} status={charStatuses["ウ"]} />
      </div>
      <div className="flex justify-center mb-1">
        <EmptyKey  />
        <Key value="ヱ" onClick={onClick} status={charStatuses["ヱ"]} />
        <Key value="レ" onClick={onClick} status={charStatuses["レ"]} />
        <EmptyKey  />
        <Key value="メ" onClick={onClick} status={charStatuses["メ"]} />
        <Key value="ヘ" onClick={onClick} status={charStatuses["ヘ"]} />
        <Key value="ネ" onClick={onClick} status={charStatuses["ネ"]} />
        <Key value="テ" onClick={onClick} status={charStatuses["テ"]} />
        <Key value="セ" onClick={onClick} status={charStatuses["セ"]} />
        <Key value="ケ" onClick={onClick} status={charStatuses["ケ"]} />
        <Key value="エ" onClick={onClick} status={charStatuses["エ"]} />
      </div>
      <div className="flex justify-center">
        <Key width={65.4} value="ENTER" onClick={onClick}>
          Enter
        </Key>
        <EmptyKey  />
        <Key value="ヲ" onClick={onClick} status={charStatuses["ヲ"]} />
        <Key value="ロ" onClick={onClick} status={charStatuses["ロ"]} />
        <Key value="ヨ" onClick={onClick} status={charStatuses["ヨ"]} />
        <Key value="モ" onClick={onClick} status={charStatuses["モ"]} />
        <Key value="ホ" onClick={onClick} status={charStatuses["ホ"]} />
        <Key value="ノ" onClick={onClick} status={charStatuses["ノ"]} />
        <Key value="ト" onClick={onClick} status={charStatuses["ト"]} />
        <Key value="ソ" onClick={onClick} status={charStatuses["ソ"]} />
        <Key value="コ" onClick={onClick} status={charStatuses["コ"]} />
        <Key value="オ" onClick={onClick} status={charStatuses["オ"]} />
        <Key width={65.4} value="DELETE" onClick={onClick}>
          Delete
        </Key>
      </div>
    </div>
  );
};
