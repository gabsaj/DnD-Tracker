import { useState } from "react";
import { HpType } from "../types/SpellType";
import SingleHitpoint from "./SingleHitpoint";

const HitpointsTracker = () => {
  const [hpList, setHpList] = useState<HpType[]>([]);
  const [hpName, setHpName] = useState<string>("");
  const [hpNum, setHpNum] = useState<number>(0);

  const handleDelete = (name: string) => {
    setHpList(hpList.filter((item: HpType) => item.name !== name));
  };

  const addNew = () => {
    if (hpName !== "" && hpNum > 0) {
      setHpList([...hpList, { hp: hpNum, name: hpName }]);
    }
  };

  return (
    <div id="hp" className="spell__container">
      <div className="spell__top">
        <input onChange={(e) => setHpName(e.target.value)} placeholder="Name" />
        <input
          onChange={(e) => setHpNum(Number(e.target.value))}
          placeholder="hp"
        />
        <button onClick={addNew}>
          Add
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <button className="btn__reset" onClick={() => setHpList([])}>
          Empty
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <details>
        <summary>HP tracker</summary>
        {hpList.map((item) => (
          <SingleHitpoint name={item.name} hp={item.hp} />
        ))}
      </details>
    </div>
  );
};

export default HitpointsTracker;
