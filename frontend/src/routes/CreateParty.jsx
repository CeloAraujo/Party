import partyFetch from "../axios/config";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import './Forms.css'

const CreateParty = () => {
  const [services, setServices] = useState([]);

  // carregando serviços
  useEffect(() => {
    const loadServices = async () => {
      const res = await partyFetch.get("/services");

      setServices(res.data);
    };
    loadServices();
  }, []);

  return (
    <div className="form-page">
      <h2>Crie sua festa!</h2>
      <p>Seu orçamento e escolha de serviços</p>
      <form>
        <label>
          <span>Nome da festa:</span>
          <input
            type="text"
            placeholder="Invente o melhor nome que puder!"
            required
          />
        </label>
        <label>
          <span>Anfitrião:</span>
          <input type="text" placeholder="Quem é o dono do evento?" required />
        </label>
        <label>
          <span>Descrição:</span>
          <textarea
            placeholder="Fale mais sobre seu evento"
            required
          ></textarea>
        </label>
        <label>
          <span>Orçamento:</span>
          <input type="number" placeholder="Quanto quer gastar?" required />
        </label>
        <label>
          <span>Imagem:</span>
          <input type="text" placeholder="Insira URL de" required />
        </label>
        <div>
          <h2>Escolha os serviços:</h2>
          <div className="services-container">
            {services.length === 0 && <p>Carregando...</p>}
            {services.length > 0 &&
              services.map((service) => (
                <div className="service" key={service._id}>
                  <img src={service.image} alt={service.name} />
                  <p className="service-name">{service.name}</p>
                  <p className="service-price">R${service.price}</p>
                  <div className="checkbox-container">
                    <input type="checkbox" value={service._id}/>
                    <p>Selecione para solicitar</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <input type="submit" value="Criar Festa!" className="btn" />
      </form>
    </div>
  );
};

export default CreateParty;
