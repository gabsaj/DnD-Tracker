import { useState } from "react";

const Sidebar = () => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <div className="sidebar">
      {active && (
        <div className="sidebar__container">
          <a onClick={() => setActive(false)} href="#daily">
            Spells Per Day
          </a>
          <a onClick={() => setActive(false)} href="#spells">
            Spells
          </a>
          <a onClick={() => setActive(false)} href="#hp">
            HP Tracker
          </a>
          <a onClick={() => setActive(false)} href="#summons">
            Summons
          </a>
        </div>
      )}
      <button onClick={() => setActive(!active)} className="sidebar__btn">
        {!active && <p>&#10095;</p>}
        {active && <p>&#10094;</p>}
      </button>
    </div>
  );
};
export default Sidebar;
