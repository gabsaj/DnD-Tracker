import { useEffect, useState } from "react";
import { ElementalType } from "../types/ElementalType";

const SingleElemental: React.FC<ElementalType> = (props) => {
  const {
    name,
    duration,
    img,
    roundTrigger,
    greater,
    large,
    huge,
    isSummoned,
    handleAddObject,
  } = props;
  const [isActive, setIsActive] = useState<boolean>(false);
  const [roundsTotal, setRoundsTotal] = useState<number>(duration);
  const [style, setStyle] = useState<string>("");

  const handleRounds = () => {
    if (roundTrigger) {
      setRoundsTotal(roundsTotal - 1);
    }
  };

  useEffect(() => {
    if (isSummoned) {
      handleRounds();
    }
  }, [roundsTotal, roundTrigger]);
  useEffect(() => {
    if (roundsTotal <= 0) {
      setStyle("none");
    } else {
      setStyle("");
    }
  }, [roundsTotal]);

  return (
    <div
      style={{ display: style }}
      className={` ${"spell__container"}${isSummoned ? " active" : ""} `}
    >
      <div className="spell__top">
        <div>
          <p>{name}</p>
          {!isSummoned && (
            <button
              onClick={() =>
                handleAddObject({
                  isSummoned,
                  duration,
                  roundTrigger,
                  name,
                  img,
                  greater,
                  huge,
                  large,
                  handleAddObject,
                })
              }
            >
              Summon
            </button>
          )}
        </div>
        {isSummoned && (
          <>
            <div>
              <progress value={roundsTotal} max={duration}></progress>
              {duration < 300 && (
                <span>
                  {roundsTotal} / {duration}
                </span>
              )}
            </div>
            <img src={img} />
          </>
        )}
      </div>
      <details>
        <summary>Greater</summary>
        <div className="spell__description">
          <div className="spell__detail">
            <b>Size:</b>
            {greater.size}
          </div>
          <div className="spell__detail">
            <b>HD:</b>
            {greater.HD}
          </div>
          <div className="spell__detail">
            <b>Initiative:</b>
            {greater.initiative}
          </div>
          <div className="spell__detail">
            <b>Speed:</b>
            {greater.speed}
          </div>
          <div className="spell__detail">
            <b>AC:</b>
            {greater.AC}
          </div>
          <div className="spell__detail">
            <b>BAB/Grapple:</b>
            {greater.babGrapple}
          </div>
          <div className="spell__detail">
            <b>Attack:</b>
            {greater.attack}
          </div>
          <div className="spell__detail">
            <b>Full Attack:</b>
            {greater.fullAttack}
          </div>
          <div className="spell__detail">
            <b>Space/Reach</b>
            {greater.spaceReach}
          </div>
          <div className="spell__detail">
            Special Att:{greater.specialAttacks}
          </div>
          <div className="spell__detail">
            Special Qual:{greater.specialQualities}
          </div>
          <div className="spell__detail">
            <b>Saves:</b>
            {greater.saves}
          </div>
          <div className="spell__detail">
            <b>Abilities:</b>
            {greater.abilities}
          </div>
          <div className="spell__detail">
            <b>Skills:</b>
            {greater.skills}
          </div>
          <div className="spell__detail">
            <b>Feats:</b>
            {greater.feats}
          </div>
          <div className="spell__detail">
            <b>Aligment:</b>
            {greater.aligment}
          </div>
          {greater.burnDc && (
            <div className="spell__detail">{greater.burnDc}</div>
          )}
        </div>
      </details>
      <details>
        <summary>Huge</summary>
        <div className="spell__description">
          <div className="spell__detail">{huge.size}</div>
          <div className="spell__detail">{huge.HD}</div>
          <div className="spell__detail">{huge.initiative}</div>
          <div className="spell__detail">{huge.speed}</div>
          <div className="spell__detail">{huge.AC}</div>
          <div className="spell__detail">{huge.babGrapple}</div>
          <div className="spell__detail">{huge.attack}</div>
          <div className="spell__detail">{huge.fullAttack}</div>
          <div className="spell__detail">{huge.spaceReach}</div>
          <div className="spell__detail">{huge.specialAttacks}</div>
          <div className="spell__detail">{huge.specialQualities}</div>
          <div className="spell__detail">{huge.saves}</div>
          <div className="spell__detail">{huge.abilities}</div>
          <div className="spell__detail">{huge.skills}</div>
          <div className="spell__detail">{huge.feats}</div>
          <div className="spell__detail">{huge.aligment}</div>
          {huge.burnDc && <div className="spell__detail">{greater.burnDc}</div>}
        </div>
      </details>
      <details>
        <summary>Large</summary>
        <div className="spell__description">
          <div className="spell__detail">{large.size}</div>
          <div className="spell__detail">{large.HD}</div>
          <div className="spell__detail">{large.initiative}</div>
          <div className="spell__detail">{large.speed}</div>
          <div className="spell__detail">{large.AC}</div>
          <div className="spell__detail">{large.babGrapple}</div>
          <div className="spell__detail">{large.attack}</div>
          <div className="spell__detail">{large.fullAttack}</div>
          <div className="spell__detail">{large.spaceReach}</div>
          <div className="spell__detail">{large.specialAttacks}</div>
          <div className="spell__detail">{large.specialQualities}</div>
          <div className="spell__detail">{large.saves}</div>
          <div className="spell__detail">{large.abilities}</div>
          <div className="spell__detail">{large.skills}</div>
          <div className="spell__detail">{large.feats}</div>
          <div className="spell__detail">{large.aligment}</div>
          {large.burnDc && (
            <div className="spell__detail">{greater.burnDc}</div>
          )}
        </div>
      </details>
    </div>
  );
};

export default SingleElemental;
