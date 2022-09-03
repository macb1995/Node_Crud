import mysql from 'mysql'
var conectar = mysql.createConnection({
    host: 'localhost',
    user: 'usr_empresa',
    password: 'Empres@123',
    database: 'db_instituto'
});
conectar.connect(function(err) {
    if (err) {
        console.error('Error en la conexión ' + err.stack)
        return;
    }
    console.log('Conexión exitosa ID: ' + conectar.threadId);
});
export { conectar }