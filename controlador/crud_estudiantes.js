import express from "express"
import { conectar } from "../modelo/db_conectar.js"
var crud_estudiante = ({})
crud_estudiante.leer = (req, res) => {
    conectar.query('SELECT id_estudiante,carne_estudiante,nombres,apellidos,direccion,correo_e,id_tipo_sangre,date_format(fecha_nacimiento,"%d-%m-%Y") as fecha_nacimiento FROM estudiantes;', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('estudiantes/index', { resultado: results })
        }
    })
};
crud_estudiante.cud = (req, res) => {
    const btn_crear = req.body.btn_crear;
    const btn_actualizar = req.body.btn_actualizar;
    const btn_borrar = req.body.btn_borrar;
    const id_estudiante = req.body.txt_id;
    const carne_estudiante = req.body.txt_carne;
    const nombres = req.body.txt_nombres;
    const apellidos = req.body.txt_apellidos;
    const direccion = req.body.direccion;
    const correo_e = req.body.txt_correo;
    const id_tipo_sangre = req.body.txt_tipo_sangre;
    const fecha_nacimiento = req.body.txt_fn;
    if (btn_crear) {
        conectar.query('insert into estudiantes set ?', { carne_estudiante: carne_estudiante, nombres: nombres, apellidos: apellidos, direccion: direccion, correo_e: correo_e, id_tipo_sangre: id_tipo_sangre, fecha_nacimiento: fecha_nacimiento }, (error, results) => {
            if (error) {
                console.log(error);
            } else {
                res.redirect('/');
            }
        });
    }
    if (btn_actualizar) {
        conectar.query('update estudiantes set ? where id_estudiante = ?', [{ carne_estudiante: carne_estudiante, nombres: nombres, apellidos: apellidos, direccion: direccion, correo_e: correo_e, id_tipo_sangre: id_tipo_sangre, fecha_nacimiento: fecha_nacimiento }, id_estudiante], (error, results) => {
            if (error) {
                console.log(error);
            } else {
                res.redirect('/');
            }
        });
    }
    if (btn_borrar) {
        conectar.query('delete from estudiantes where id_estudiante = ?', [id_estudiante], (error, results) => {
            if (error) {
                console.log(error);
            } else {
                res.redirect('/');
            }
        });
    }
};

export { crud_estudiante }