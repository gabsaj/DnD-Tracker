import { useState } from "react";

interface ManualSpell {
  name: string;
  duration: number;
  level?: number;
  isWildshape: boolean;
}

const ManualSingleSpell: React.FC<ManualSpell> = (props) => {
  const { name, duration, level, isWildshape } = props;

  const handleRounds = () => {
    if (roundsTotal > 0) {
      setRoundsTotal(roundsTotal - 1);
    }
  };

  const [isActive, setIsActive] = useState<boolean>(false);
  const [roundsTotal, setRoundsTotal] = useState<number>(duration);
  return (
    <div className="spell__container">
      <div className="spell__top">
        <div>
          <p>{name}</p>
          {!isWildshape && (
            <>
              <p> lvl: {level}</p>
              {!isActive && (
                <button onClick={() => setIsActive(!isActive)}>Activate</button>
              )}
              {isActive && (
                <button
                  onClick={() => setIsActive(!isActive)}
                  className="btn__reset"
                >
                  Deactivate
                </button>
              )}
            </>
          )}
          {isWildshape && <button onClick={handleRounds}>Spend</button>}
        </div>

        <div>
          <progress value={roundsTotal} max={duration}></progress>
          {duration < 300 && (
            <span>
              {roundsTotal} / {duration}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManualSingleSpell;
