import React from "react";
import "../../Styles/CssFiles/header.css";
const HeaderSec = () => {
  return (
    <header className="Main-Header">
      <div className="left-col">
        <img
          src="https://th.bing.com/th/id/OIP.Q3XhHrOheXpk1sePZb0EbwHaFL?pid=ImgDet&rs=1"
          alt="mainLogo"
        />
        <input type="search" />
      </div>
      <div className="right-col">
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/56/56998.png?w=826&t=st=1685025741~exp=1685026341~hmac=1cdd3d4e0d7ed28cc829fe533038e5c6c016591599f68f983ac7f1317c1da6be"
            alt="write logo"
          />
          <p> Write </p>
        </div>
        <button>Sign Up</button>
        <p>Sign in</p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/44/44948.png?w=826&t=st=1685026192~exp=1685026792~hmac=15f35079679184a0edb0aeb4f21e5e4db3f3e1002ed47fe3f5c2358152e635c2"
          alt="Menu"
        />
      </div>
    </header>
  );
};
export default HeaderSec;
