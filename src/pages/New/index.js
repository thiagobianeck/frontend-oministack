import React from 'react';

export default function New() {

  const [company, setCompany] = useState('');
  const [techs, setTechs] = useState('');
  const [price, setPrice] = useState('');

  function handleSubmit() {

  }

  return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="company">EMPRESA *</label>
        <input
          id="company"
          placeholder="Sua empresa incrível"
          value={company}
          onChange={event => setCompany(event.target.value)}
        />

        <label htmlFor="techs">TECNOLOGIAS *<span>(separadas por vírgula)</span></label>
        <input
            id="techs"
            placeholder="Quais tecnologias usam"
            value={techs}
            onChange={event => setTechs(event.target.value)}
        />

        <label htmlFor="price">VALOR DA DIÁRIA *<span>(em branco para GRATUITO)</span></label>
        <input
            id="price"
            placeholder="Valor cobrado por dia"
            value={price}
            onChange={event => setPrice(event.target.value)}
        />
        <button type="submit" className="btn">Cadastrar</button>
      </form>
  );
}
