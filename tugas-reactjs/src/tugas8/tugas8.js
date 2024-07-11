import React from 'react';
import style from "../../src/App.module.css";
import { useState } from 'react';
import { Button } from 'flowbite-react';

const Tugas8 = () => {
    const [angka, setAngka] = useState(1);
    const handleAngka = () => {
        if (angka < 10) {
            setAngka(angka + 1);
        } else {

        }
    }
    return (
        <div className={style.container3}>
            <div className={style.atas3}>
                {angka >= 10 && <p style={{ textAlign: 'center' }}>State count sudah lebih dari 10!!</p>}
            </div>
            <div className={style.tengah3}>
                <p>{angka}</p>
            </div>
            <div className={style.bawah3}>
                <Button size="xs" onClick={handleAngka} color="light">Tambah</Button>
            </div>
        </div>
  );
};

export default Tugas8;