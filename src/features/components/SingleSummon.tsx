import { useEffect, useState } from "react";
import { SummonType } from "../types/SummonType";

const SingleSummon: React.FC<SummonType> = (props: SummonType) => {
  const { name, duration, img, roundTrigger, description } = props;
  const [isActive, setIsActive] = useState<boolean>(false);
  const [roundsTotal, setRoundsTotal] = useState<number>(duration);

  const handleRounds = () => {
    if (roundTrigger) {
      setRoundsTotal(roundsTotal - 1);
    }
  };

  useEffect(() => {
    if (isActive) {
      handleRounds();
    }
  }, [roundsTotal, roundTrigger]);

  return (
    <div className={` ${"spell__container"}${isActive ? " active" : ""} `}>
      <div className="spell__top">
        <div>
          <p>{name}</p>
          {!isActive && (
            <button onClick={() => setIsActive(true)}>Activate</button>
          )}
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
        <img src={img} />
      </div>
      <details>
        <summary>See details</summary>
        <div className="spell__description">
          <div className="spell__detail">{description.size}</div>
          <div className="spell__detail">{description.HD}</div>
          <div className="spell__detail">{description.initiative}</div>
          <div className="spell__detail">{description.speed}</div>
          <div className="spell__detail">{description.AC}</div>
          <div className="spell__detail">{description.babGrapple}</div>
          <div className="spell__detail">{description.attack}</div>
          <div className="spell__detail">{description.fullAttack}</div>
          <div className="spell__detail">{description.spaceReach}</div>
          <div className="spell__detail">{description.specialAttacks}</div>
          <div className="spell__detail">{description.specialQualities}</div>
          <div className="spell__detail">{description.saves}</div>
          <div className="spell__detail">{description.abilities}</div>
          <div className="spell__detail">{description.skills}</div>
          <div className="spell__detail">{description.feats}</div>
          <div className="spell__detail">{description.aligment}</div>
        </div>
        description.
      </details>
    </div>
  );
};

export default SingleSummon;
