import {useState, useEffect} from 'react';
import './App.css';


function App() {
  const [dolares, setdolar] = useState(0);
  const [libras, setlibra] = useState(0);
  const [euros, seteuro] = useState(0);
  const [bitcoins, setbitcoin] = useState(0);

  const [tipo, setTipo] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
     
    setdolar((total * tipo * 1));
    setlibra((total * tipo * 0.72 ));
    seteuro((total * tipo * 0.85));
    setbitcoin((total * tipo * 0.000021)); 
    
  }, [total, tipo]);


  const handleTotalChange = e => {
    if (!isNaN(e.target.value)) {
      setTotal(e.target.value);
    }
  };


  return (
    <div className="App">
      <h1>Convertidor de Divisas</h1>

      <p>Dolares: {dolares}</p>
      <p>Libras Esterlinas: {libras}</p>
      <p>Euros: {euros}</p>
      <p>Bitcoins: {bitcoins}</p>
    

      <hr />

      <h3>{total}</h3>

      <select onChange={event => setTipo(event.target.value)} value={tipo}>
        <option value={1}>Dolares</option>
        <option value={1.39}>Libras</option>
        <option value={1.18}>Euros</option>
        <option value={47583.10}>Bitcoins</option>
      </select>
      <input onChange={handleTotalChange} value={total} />
    </div>
  );
}

export default App;
