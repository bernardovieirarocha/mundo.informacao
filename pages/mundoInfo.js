import Head from "next/head";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListDots } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function mundoInfo() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Mundo Informação</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />

                <link
                    rel="preconnect"
                    href="https://fonts.googleapis.com"
                ></link>
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                ></link>
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>

            <main className={styles.main}>
                <div className={styles.blurbox}></div>
                <div className={styles.blurboxbottom}></div>
                {/* <h1 className={styles.title}>
                    <a
                        className={styles.title}
                        href="https://www.instagram.com/mundo.informacao/"
                    >
                        Mundo Informação
                    </a>
                </h1> */}
                <a
                    className={styles.logotypebox}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/mundo.informacao/"
                >
                    <img className={styles.logotype} src={"/logo.png"} />
                </a>

                <p className={styles.description}>Fontes Blibiográficas </p>
                <div>
                    <FontAwesomeIcon icon={faListDots} size="1x" />{" "}
                    <a
                        className={styles.formslinks}
                        href="https://forms.gle/h4wQhVLk4DZcQEKe6"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Formulário
                    </a>
                </div>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <a
                            className={styles.h2}
                            data-bs-toggle="collapse"
                            href="#crimesdeguerra"
                            aria-expanded="false"
                            aria-controls="crimesdeguerra"
                        >
                            Crimes de Guerra Ucrânia &rarr;
                        </a>

                        <div className="collapse" id="crimesdeguerra">
                            <img
                                src="/embaixadarussa.jpg"
                                className="img-fluid"
                            />
                            <div className="card card-body border-0">
                                <div className="list-group">
                                    <a
                                        href="https://www.politifact.com/factchecks/2022/mar/03/russian-embassy-canada/russias-pants-fire-claim-it-not-occupying-ukrainia/"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Fonte Primária.
                                    </a>
                                    <a
                                        href="https://english.elpais.com/international/2022-02-26/how-to-justify-a-war-putins-arguments-for-invading-ukraine.html"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Notícia que desmente a fake news.
                                    </a>
                                    <a
                                        href="https://www.nexojornal.com.br/podcast/2022/03/10/Invas%C3%A3o-russa-na-Ucr%C3%A2nia-o-rep%C3%BAdio-aos-crimes-de-guerra"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Repúdio a invasão.
                                    </a>
                                    <a
                                        href="https://www.cnnbrasil.com.br/internacional/tudo-o-que-voce-precisa-saber-sobre-crimes-de-guerra-e-como-putin-pode-ser-processado/"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Putin e os crimes de guerra.
                                    </a>
                                    <a
                                        href="https://www.cartacapital.com.br/mundo/eua-afirmam-que-ha-relatos-bastante-criveis-de-crimes-de-guerra-da-russia-na-ucrania/"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Provas sobre os crimes de guerra.
                                    </a>
                                    <a
                                        href="https://g1.globo.com/mundo/noticia/2022/02/25/desnazificar-a-ucrania-a-historia-por-tras-de-justificativa-de-putin-para-invasao.ghtml"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Argumentos usados por Putin e reforçado
                                        pelo governo.
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <a
                            className={styles.h2}
                            data-bs-toggle="collapse"
                            href="#fantasmadekiev"
                            aria-expanded="false"
                            aria-controls="collapseExample"
                        >
                            Fantasma de Kiev &rarr;
                        </a>
                        <div className="collapse" id="fantasmadekiev">
                            <img
                                src="/fantasmadekiev.png"
                                className="img-fluid"
                            />

                            <div className="card card-body border-0">
                                <div className="list-group">
                                    <a
                                        href="https://amp.marca.com/en/lifestyle/world-news/2022/02/26/6219757d22601d2e038b45bf.html"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Notícias que tentam confirmar a
                                        existência do piloto.
                                    </a>
                                    <a
                                        href="https://www.istoedinheiro.com.br/fantasma-de-kiev-mito-ou-verdade/"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Notícias que desmentem o fantasma(1).
                                    </a>
                                    <a
                                        href="https://gauchazh.clicrbs.com.br/mundo/noticia/2022/03/ex-presidente-da-ucrania-compartilha-foto-do-suposto-ghost-of-kiev-cl08arvzc003d01656ga2tk21.html"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Notícias que desmentem o fantasma(2).
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <a
                            className={styles.h2}
                            data-bs-toggle="collapse"
                            href="#estatisticasassasinato"
                            aria-expanded="false"
                            aria-controls="estatisticasassasinato"
                        >
                            Estatísticas dos Assasinatos &rarr;
                        </a>
                        <div className="collapse" id="estatisticasassasinato">
                            <div className="card card-body border-0">
                                <div className="list-group">
                                    <a
                                        href="https://ucr.fbi.gov/crime-in-the-u.s/2015/crime-in-the-u.s.-2015/tables/expanded_homicide_data_table_6_murder_race_and_sex_of_vicitm_by_race_and_sex_of_offender_2015.xls"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Dados - Censo do FBI
                                    </a>
                                    <a
                                        href="https://guides.library.pdx.edu/c.php?g=625347&p=4386301"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Portland State University
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <a
                            className={styles.h2}
                            data-bs-toggle="collapse"
                            href="#atoresucranianos"
                            aria-expanded="false"
                            aria-controls="atoresucranianos"
                        >
                            Atores Ucrânianos &rarr;
                        </a>
                        <div className="collapse" id="atoresucranianos">
                            <div className="card card-body border-0">
                                <img
                                    src="/twitteratoresucranianos1.png"
                                    className="img-fluid"
                                />
                                <img
                                    src="/twitteratoresucranianos2.png"
                                    className="img-fluid"
                                />

                                <div className="list-group">
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://www.bbc.com/portuguese/salasocial-60591479"
                                        className="list-group-item list-group-item-action"
                                    >
                                        Matéria que evidencia o acontecimento
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <a
                            className={styles.h2}
                            data-bs-toggle="collapse"
                            href="#rainhadainglaterra"
                            aria-expanded="false"
                            aria-controls="rainhadainglaterra"
                        >
                            London Bridge is down &rarr;
                        </a>
                        <div className="collapse" id="rainhadainglaterra">
                            <div className="card card-body border-0">
                                <img
                                    src="/chefestaff.png"
                                    className="img-fluid"
                                />

                                <div className="list-group">
                                    <a
                                        href="https://www.correiobraziliense.com.br/mundo/2022/02/4987770-fake-news-jornais-britanicos-desmentem-noticia-de-que-rainha-elizabeth-morreu.html"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Artigo falando sobre.
                                    </a>
                                    <a
                                        href="https://hollywoodunlocked.com/fact-check-10-reasons-we-believed-queen-elizabeth-was-dead/"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Matéria e jornal que tenta se retratar após
                                        o ocorrido.
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <a
                            className={styles.h2}
                            data-bs-toggle="collapse"
                            href="#dadosforms"
                            aria-expanded="false"
                            aria-controls="dadosforms"
                        >
                            Dados obtidos no questionário &rarr;
                        </a>
                        <div className="collapse" id="dadosforms">
                            <img src="/graph1.png" className="img-fluid" />
                            <img src="/graph2.png" className="img-fluid" />
                            <img src="/graph3.png" className="img-fluid" />
                            <img src="/graph4.png" className="img-fluid" />
                            <img src="/graph5.png" className="img-fluid" />
                            <img src="/graph6.png" className="img-fluid" />
                            <img src="/graph7.png" className="img-fluid" />
                            <img src="/graph8.png" className="img-fluid" />
                            <img src="/graph9.png" className="img-fluid" />
                            <img src="/graph10.png" className="img-fluid" />
                            <img src="/graph11.png" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </main>
            <footer className={styles.footer}>
                <a
                    href="https://github.com/upwardweb/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by Bernardo Rocha e Arthur Rabelo{" "}
                </a>
            </footer>
        </div>
    );
}