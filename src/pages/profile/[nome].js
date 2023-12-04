import styles from '../../styles/Page.module.css';
import Rodape from '../../components/Rodape';
import Topo from '../../components/Topo';

function Profile({ objeto = {} }) {
    return (
        <div>

            <Topo/>
            
            <div className={styles.profile}>
            <title>Descrição</title>
            <h2>{objeto.nome}</h2>
            <p>{objeto.descricao}</p>
            <p className={styles.user}>{objeto.usuario}</p>
            <a href="\objetos"> Voltar</a>
            </div>

            <Rodape/>

        </div>
    )
}
export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=anime')
    const repo = await res.json()
    const objeto = await repo[context.params.nome];
    return {
        props: { objeto }
    }
})
export async function getStaticPaths() {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=anime')
    const repo = await res.json()
    const objetos = await repo;
    const paths = objetos.map((objeto, index) => {
        return { params: { nome: String(index) } };
    });
    return {
        paths,
        fallback: false,
    };

}
export default Profile;