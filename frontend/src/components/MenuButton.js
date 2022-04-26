import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MenuButton = () => {
  let [active, setActive] = useState(false);
  let navigate = useNavigate();

  return (
    <div>
      <span className="menu-button" onClick={() => setActive(!active)}>
        &#9776;
        {active && (
          <div className="menu">
            <div className="menu-list">
              <ul>
                <li>
                  <button type="button" onClick={() => navigate("/")}>
                    Home
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => navigate("/pokemon/")}>
                    Pokemon List
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => navigate("/search/")}>
                    Pokemon Search
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </span>
    </div>
  );
};

export default MenuButton;
