import { useState } from "react";

const SpellsPerLevel = () => {
  const [wisdom, setWisdom] = useState<number>(0);
  const [inputValue, setInputValue] = useState<number>(0);

  const handleWisdom = () => {
    setWisdom(wisdom + inputValue);
  };
  const handleReset = () => {
    setWisdom(0);
  };

  return (
    <>
      <div className="daily" id="spellsPerLevel">
        <div className="daily__level"> Spells Per Day</div>
        <div className="daily__level">
          {/* 1 */}
          <div>
            <span>1</span>
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
          </div>
          <span>
            Spells DC: <p>{20 + wisdom}</p>
          </span>
        </div>
        <div className="daily__level">
          {/* 2 */}
          <div>
            <span>2</span>
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
          </div>
          <span>
            Spells DC: <p>{21 + wisdom}</p>
          </span>
        </div>
        <div className="daily__level">
          {/* 3 */}
          <div>
            <span>3</span>
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
          </div>
          <span>
            Spells DC: <p>{22 + wisdom}</p>
          </span>
        </div>
        <div className="daily__level">
          {/* 4 */}
          <div>
            <span>4</span>
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
          </div>
          <span>
            Spells DC: <p>{23 + wisdom}</p>
          </span>
        </div>
        <div className="daily__level">
          {/* 5 */}
          <div>
            <span>5</span>
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
          </div>
          <span>
            Spells DC: <p>{24 + wisdom}</p>
          </span>
        </div>
        <div className="daily__level">
          {/* 6 */}
          <div>
            <span>6</span>
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
          </div>
          <span>
            Spells DC: <p>{25 + wisdom}</p>
          </span>
        </div>
        <div className="daily__level">
          {/* 7 */}
          <div>
            <span>7</span>
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
          </div>
          <span>
            Spells DC: <p>{26 + wisdom}</p>
          </span>
        </div>
        <div className="daily__level">
          {/* 8 */}
          <div>
            <span>8</span>
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
          </div>
          <span>
            Spells DC: <p>{27 + wisdom}</p>
          </span>
        </div>
        <div className="daily__level">
          {/* 9 */}
          <div>
            <span>9</span>
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
          </div>
          <span>
            Spells DC: <p>{28 + wisdom}</p>
          </span>
        </div>
        <div className="daily__level">
          <input
            placeholder="Add WIS"
            type={"number"}
            value={inputValue || ""}
            onChange={(e) => setInputValue(Number(e.target.value))}
          />
          <div>
            <button
              onClick={() => {
                handleWisdom(), setInputValue(0);
              }}
            >
              Add
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <button className="btn__reset" onClick={handleReset}>
              Reset
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default SpellsPerLevel;
