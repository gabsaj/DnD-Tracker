import { useEffect, useRef, useState } from "react";
import styles from "../../styles/components/select.module.scss";

interface SelectOptions {
  options: any[];
  width?: number;
  colorScheme?: string;
  className?: string;
  getValue: (value: string | number) => void;
}

const Select: React.FC<SelectOptions> = (props) => {
  const { options, width, colorScheme, getValue } = props;
  const [toggleSelect, setToggleSelect] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("Select...");

  const ref = useRef<HTMLDivElement>(null);

  const handleSelect = (option: any) => {
    setSelected(option);
    if (option === "All") {
      getValue("");
    } else getValue(option);
  };

  const handleClickOutside = (e: any) => {
    if (null !== ref.current)
      if (!ref.current.contains(e.target)) {
        setToggleSelect(false);
      }
  };

  useEffect(() => {
    handleClickOutside;
    document.addEventListener("mousedown", handleClickOutside);
  }, [ref]);

  return (
    <div className="select" ref={ref}>
      <div
        className="select__bar"
        onClick={() => setToggleSelect(!toggleSelect)}
        style={{ width: width, backgroundColor: colorScheme }}
      >
        {selected}
        {toggleSelect && (
          <div className="select__dropdown">
            {options.map((item) => (
              <div
                className="select__dropdown--item"
                key={item}
                onClick={() => handleSelect(item)}
              >
                {item}
              </div>
            ))}
            <li></li>
          </div>
        )}
      </div>
    </div>
  );
};
export default Select;
