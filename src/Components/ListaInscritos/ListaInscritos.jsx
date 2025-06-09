import style from "./ListaInscritos.module.css";

const ListaInscritos = () => {
  const inscritos = [
    {
      id: 1,
      tempo: "20-02-2025",
      nome: "Alana",
      email: "alana@email.com",
      status: "Confirmado",
    },
    {
      id: 2,
      tempo: "20-02-2025",
      nome: "Carlos",
      email: "carlos@email.com",
      status: "Pendente",
    },
    {
      id: 3,
      tempo: "20-02-2025",
      nome: "Beatriz",
      email: "beatriz@email.com",
      status: "Confirmado",
    },
    {
      id: 4,
      tempo: "20-02-2025",
      nome: "Diego",
      email: "diego@email.com",
      status: "Cancelado",
    },
  ];

  return (
    <div className={style.ListaInscritos}>
      {inscritos.map((inscrito) => (
        <div key={inscrito.id} className={style.card}>
          <div className={style.nomeEmail}>
            <strong>{inscrito.nome}</strong>
            <span className={style.email}>{inscrito.email}</span>
            <span>Desde {inscrito.tempo}</span>
          </div>

          <span
            className={`${style.status} ${
              style[inscrito.status.toLowerCase()]
            }`}
          >
            {inscrito.status}
          </span>
        </div>
      ))}
    </div>
  );
};

export { ListaInscritos };
