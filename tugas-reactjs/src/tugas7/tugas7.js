import React from 'react';
import style from "../../src/App.module.css";

const Tugas7 = (props) => {
    return (
        <div className={style.container2}>
            <h1>Data diri peserta kelas Reactjs</h1>
            <hr />
            <ul>
                <li>
                    <b>Nama Lengkap:</b> {props.name}
                </li>
                <li>
                    <b>Email:</b> {props.email}
                </li>
                <li>
                    <b>Batch Pelatihan:</b> {props.batch}
                </li>
            </ul>
        </div>
  );
};

export default Tugas7;