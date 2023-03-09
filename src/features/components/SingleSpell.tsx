import { useEffect, useState } from "react";
import { SpellType } from "../types/SpellType";

const SingleSpell: React.FC<SpellType> = (props) => {
  const { name, description, duration, roundTrigger, level } = props;
  const [isActive, setIsActive] = useState<boolean>(false);
  const [roundsTotal, setRoundsTotal] = useState<number>(duration);
  const [isPrepared, setIsPrepared] = useState<boolean>(false);

  const spellActivation = () => {
    if (isPrepared) {
      setIsActive(true);
    }
  };

  const handleRounds = () => {
    if (roundTrigger && roundsTotal >= 0) {
      setRoundsTotal(roundsTotal - 1);
    }
  };

  useEffect(() => {
    if (isActive) {
      handleRounds();
    }
  }, [roundsTotal, roundTrigger]);

  return (
    <div
      className={` ${"spell__container"}${isActive ? " active" : ""} ${
        isPrepared ? "prepared" : ""
      }`}
    >
      <div className="spell__top">
        <div>
          <p>{name}</p>
          <p> lvl: {level}</p>
          {!isActive && <button onClick={spellActivation}>Activate</button>}
          {isActive && (
            <button
              onClick={() => setIsActive(!isActive)}
              className="btn__reset"
            >
              Deactivate
            </button>
          )}
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
      <details>
        <summary>See details</summary>
        <div className="spell__description">
          {isActive && (
            <button
              onClick={() => setRoundsTotal(duration)}
              className="btn__reset"
            >
              Reset
            </button>
          )}
          <button onClick={() => setIsPrepared(!isPrepared)}>
            Prepare
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
          {description.school && (
            <div className="spell__detail">
              <b>School:</b>
              {description.school}
            </div>
          )}
          {description.level && (
            <div className="spell__detail">
              <b>Level:</b>
              {description.level}
            </div>
          )}
          {description.components && (
            <div className="spell__detail">
              <b>Components:</b>
              {description.components}
            </div>
          )}
          {description.castingTime && (
            <div className="spell__detail">
              <b>Casting Time:</b>
              {description.castingTime}
            </div>
          )}
          {description.range && (
            <div className="spell__detail">
              <b>Range:</b>
              {description.range}
            </div>
          )}
          {description.target && (
            <div className="spell__detail">
              <b>Target:</b>
              {description.target}
            </div>
          )}
          {description.duration && (
            <div className="spell__detail">
              <b>Duration:</b>
              {description.duration}
            </div>
          )}
          {description.text && (
            <>
              <b>Description:</b>

              <pre className="spell__detail">{description.text}</pre>
            </>
          )}
        </div>
      </details>
    </div>
  );
};

export default SingleSpell;
