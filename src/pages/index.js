import Head from 'next/head';
import Rodape from '../components/Rodape';
import Topo from '../components/Topo';
import styles from '../styles/Page.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title> AnimeWeb </title>
      </Head>

      <Topo />

      <div className={styles.home}>
        <h1> O seu portal exclusivo acessível sobre animes </h1>
        <h2>CLIQUE ABAIXO PARA VIZUALIZAR A DESCRIÇÃO DE ANIMES</h2>
        <a href="\objetos"> Acesse aqui para conhecer os personagens </a>
        <div>
          <Image src="/img/hatsune.gif" alt="Personagem Hatsune Miku, cantora virtual do MMD(miku miku dance)/Vocaloid, tem cabelos azuis longos em maria chiquinha, roupa cinza, saia preta e azul, gravata azul, está segurando um alho poró e a imagem em movimento a faz andar de um lado ao outro" width={500} height={300} />
        </div>
      </div>

      <Rodape />
    </div>
  )
}
