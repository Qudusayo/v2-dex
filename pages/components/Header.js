import Link from "next/link";
import { useEffect, useState } from "react";

function Header(props) {
  const { address, isConnected, connect } = props;
  const [connectionString, setConnectionString] = useState("");

  useEffect(() => {
    if (isConnected) {
      setConnectionString(address.slice(0, 4) + "..." + address.slice(38));
    } else {
      setConnectionString("Connect");
    }
  }, [isConnected]);

  return (
    <header>
      <div className="leftH">
        <img src={"/moralis-logo.svg"} alt="logo" className="logo" />
        <Link href="/" className="link">
          <div className="headerItem">Swap</div>
        </Link>
        <Link href="/" className="link">
          <div className="headerItem">Tokens</div>
        </Link>
      </div>
      <div className="rightH">
        <div className="headerItem">
          <img src={"/eth.svg"} alt="eth" className="eth" />
          Ethereum
        </div>
        <div className="connectButton" onClick={connect}>
          {connectionString}
        </div>
      </div>
    </header>
  );
}

export default Header;
