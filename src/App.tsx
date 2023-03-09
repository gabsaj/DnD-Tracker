import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import ManualSingleSpell from "./features/components/ManualSingleSpell";
import Sidebar from "./features/components/Sidebar";
import SingleSpell from "./features/components/SingleSpell";
import SpellsPerLevel from "./features/components/SpellsPerLevel";
import Level9Spells from "./features/db/Level9Spells";
import SingleElemental from "./features/components/SingleElemental";
import Level8Spells from "./features/db/Level8Spells";
import { SpellType } from "./features/types/SpellType";
import { Elementals } from "./features/db/Elementals";
import Select from "./features/components/Select";
import { toast } from "react-toastify";
import HitpointsTracker from "./features/components/HitpointsTracker";
import { Level1Spells } from "./features/db/Level1Spells";
import { Level2Spells } from "./features/db/Level2Spells";
import Pagination from "./features/components/Pagination";
import { ElementalType } from "./features/types/ElementalType";

const App = () => {
  const [isNewRound, setIsNewRound] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<any>("");
  const [slicing, setSlicing] = useState([0, 2]);
  const [params, setParams] = useState({ page: 1, spp: 5 });
  const [summoned, setSummoned] = useState<ElementalType[]>([]);
  const allSpells: SpellType[] = [
    ...Level1Spells,
    ...Level2Spells,
    ...Level8Spells,
    ...Level9Spells,
  ];

  setTimeout(() => {
    setIsNewRound(false);
  }, 0.1);

  const handlePaginate = (pageNumber: number) => {
    setParams({ page: pageNumber, spp: params.spp });
  };

  const handleFilter = (value: SpellType) => {
    if (
      value.level == searchValue ||
      value.name.includes(searchValue) ||
      value.name.toLowerCase().includes(searchValue) ||
      value.name.toUpperCase().includes(searchValue)
    ) {
      return value;
    } else if (searchValue === "") {
      return value;
    }
  };
  const getValue = (value: any) => {
    setSearchValue(value);
  };

  const newDayInfo = () => {
    toast.warn("Prepare spells");
    toast.warn("Read Spellbook");
    toast.warn("Feed Ash");
    toast.warn("Eat");
    toast.warn("Cast Enhance Wild shape");
  };
  const handleAddObject = (i: ElementalType) => {
    setSummoned([
      ...summoned,
      {
        handleAddObject: i.handleAddObject,
        duration: i.duration,
        roundTrigger: i.roundTrigger,
        name: i.name,
        img: i.img,
        greater: i.greater,
        huge: i.huge,
        large: i.large,
        isSummoned: i.isSummoned,
      },
    ]);
  };

  return (
    <div className="App">
      <Sidebar />
      <div className="wrapper--main">
        <div id="daily" className="flex flex--column">
          <button onClick={newDayInfo}>
            New Day
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <SpellsPerLevel />
          <ManualSingleSpell
            name="Wild Shape"
            isWildshape={true}
            duration={5}
          />
          <HitpointsTracker />

          <button
            style={{ marginTop: "20px" }}
            onClick={() => setIsNewRound(true)}
          >
            New Round
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div>
            <input
              placeholder="Search..."
              className="select__search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <Select
              options={["All", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
              getValue={getValue}
            />
          </div>

          <div id="spells">Spells</div>
          <div className="wrapper--inner">
            {allSpells
              .filter(handleFilter)
              .slice(params.page, params.spp + params.page)
              .map((item) => (
                <SingleSpell
                  name={item.name}
                  duration={item.duration}
                  level={item.level}
                  description={item.description}
                  roundTrigger={isNewRound}
                />
              ))}
            <Pagination
              spellsCount={allSpells.length}
              currentPage={params.page}
              spp={params.spp}
              handlePaginate={handlePaginate}
            />
          </div>

          <div id="summons">Summons</div>
          <div className="wrapper--inner">
            {Elementals.map((item) => (
              <SingleElemental
                handleAddObject={handleAddObject}
                name={item.name}
                roundTrigger={isNewRound}
                duration={46}
                img={item.img}
                greater={item.greater}
                huge={item.huge}
                large={item.large}
                isSummoned={false}
              />
            ))}
            <div></div>
          </div>
          <div id="summons">Summoned</div>
          <div className="wrapper--inner">
            {summoned.map((item) => (
              <SingleElemental
                handleAddObject={handleAddObject}
                name={item.name}
                roundTrigger={isNewRound}
                duration={46}
                img={item.img}
                greater={item.greater}
                huge={item.huge}
                large={item.large}
                isSummoned={true}
              />
            ))}
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
