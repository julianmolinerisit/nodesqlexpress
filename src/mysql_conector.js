import mysql from 'mysql';
let todos;

// Crear la conexión
const conector = mysql.createConnection({
  host: 'localhost',
  user: 'julian',
  password: '27462582',
  database: 'agenda_contactos'
});

const conectar = () => {
  conector.connect(err => {
    if (err) throw err;
    console.log('Conectado');
  });
};

const agregarContacto = (numero, nombre) => {
  const sql = `INSERT INTO agend (id_contacto, numero_contacto, nombre_contacto) VALUES (null, ${numero}, "${nombre}")`;
  conector.query(sql, function(err, result, filed) {
    if (err) throw err;
    console.log(result);
  });
};

const obtenerContactos = () => {
  const sql = `SELECT * FROM agend`;
  conector.query(sql, function(err, result, field) {
    if (err) throw err;
    todos = result;
  });
  return todos;
};

const borrarContacto = id => {
    const sql = `DELETE FROM agend where id_contacto=${id}`
    conector.query(sql)
}


export { conectar, agregarContacto, obtenerContactos, borrarContacto };
