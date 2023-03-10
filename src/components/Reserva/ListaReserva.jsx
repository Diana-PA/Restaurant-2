function ListaReserva({contacts}) {
    return (
      <div>
        {contacts.map((contact) => (
          <div className="card" key={contact.personenumber}>
            <p className="card-name">{contact.name}</p>
            <p>{contact.email}</p>
            <p>{contact.personenumber}</p>
          </div>
        ))}
      </div>
    );
  }

  export default ListaReserva

  