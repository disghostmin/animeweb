import React from 'react';
import Rodape from '../components/Rodape';
import Topo from '../components/Topo';
import styles from '../styles/Page.module.css';
import Link from 'next/link';

function Objetos({ objetos }) {

    return (
        <div>

            <Topo />
            <div className={styles.objeto}>
                <title>Personagens</title>
                <h1> Lista de personagens </h1>
                <p>Clique no nome e saiba mais informações</p>
                {objetos.map((objeto, index) => (
                    <Link href='/profile/[nome]' as={`/profile/${index}`}>
                        <div key={objeto.nome}> <p> {objeto.nome} </p> </div>
                    </Link>
                    

                ))}
            <a href="\"> Voltar</a>

                </div>
            <Rodape />

        </div>
    )
}
export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=anime')
    const repo = await res.json()
    const objetos = await repo;
    return {
        props: { objetos }
    }
})
export default Objetos;
