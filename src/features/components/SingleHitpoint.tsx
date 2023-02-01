import { useEffect, useState } from "react";
import { HpType } from "../types/SpellType";

const SingleHitpoint: React.FC<HpType> = (props) => {
  const { name, hp } = props;
  const [hitpoints, setHitpoints] = useState<number>(hp);
  const [decrease, setDecrease] = useState<number>(0);
  const [isDead, setIsDead] = useState<boolean>(false);

  const handleDecrease = () => {
    if (hitpoints >= -11) {
      setHitpoints(hitpoints - decrease);
    } else {
      setHitpoints(-10);
    }
  };

  useEffect(() => {
    if (hitpoints == -10) {
      setIsDead(true);
    } else {
      setIsDead(false);
    }
  });

  return (
    <div
      id="hp"
      className="spell__tracker"
      style={{ borderBottom: "1px solid #00ffff80" }}
    >
      <b className={isDead ? "spell__tracker-dead" : ""}>{name}</b> {hitpoints}
      <input
        type="number"
        value={decrease || ""}
        onChange={(e) => setDecrease(Number(e.target.value))}
      />
      <button
        onClick={() => {
          handleDecrease(), setDecrease(0);
        }}
      >
        Update
      </button>
    </div>
  );
};
export default SingleHitpoint;
