import React from "react";

const CreateParty = () => {
  return (
    <div className="form-page">
      <h2>Cria sua festa!</h2>
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
          <span>Anfitrião</span>
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
            <p>Serviços</p>
          </div>
        </div>
        <input type="submit" value="Criar Festa!" className="btn" />
      </form>
    </div>
  );
};

export default CreateParty;
