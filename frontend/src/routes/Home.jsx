import partyFetch from "../axios/config";
import "./Home.css";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

const Home = () => {
  const [parties, setParties] = useState(null);

  //   carregar festas
  useEffect(() => {
    const loadParties = async () => {
      const res = await partyFetch.get("/parties");

      console.log(res);
      setParties(res.data);
    };
    loadParties();
  }, []);
  if (!parties) return <p>Carregando...</p>;
  return (
    <div className="home">
      <h1>Suas festas</h1>
      <div className="parties-container">
        {parties.length === 0 && <p>Não há festas disponíveis!</p>}
        {parties.map((party) => (
          <div className="party" key={party._id}>
            <img src={party.image} alt={party.title} />
            <h3>{party.title}</h3>
            <Link to={`/party/${party._id}`} className="btn-two">
              Detalhes
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
