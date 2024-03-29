import Head from "next/head";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListDots } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Trabalho de Humanas</title>
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
                    href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>

            <main className={styles.main}>
                <div className={styles.blurboxbottom}></div>
                <h1 className={styles.title}>
                    <a className={styles.title} href="#">
                        Trabalho de Humanas
                    </a>
                </h1>
                <p className={styles.description}>Fontes Blibiográficas </p>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <a
                            className={styles.h2}
                            data-bs-toggle="collapse"
                            href="#terceirizacao"
                            aria-expanded="false"
                            aria-controls="terceirizacao"
                        >
                            Terceirização &rarr;
                        </a>

                        <div className="collapse" id="terceirizacao">
                            <div className="card card-body border-0">
                                <div className="list-group">
                                    <a
                                        href="https://www.portaldaindustria.com.br/industria-de-a-z/terceirizacao/ "
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Portaldaindustria
                                    </a>
                                    <a
                                        href="https://abrapsa.org.br/bpo-business-process-outsourcing/"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Abrapsa
                                    </a>
                                    <a
                                        href="https://youtu.be/zumjSnAUSuc"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Youtube
                                    </a>
                                    <a
                                        href="https://youtu.be/kkFqLNNSZnU"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Youtube
                                    </a>
                                    <a
                                        href="https://www.ibccoaching.com.br/portal/terceirizacao-conheca-suas-vantagens-e-desvantagens/"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Ibccoaching
                                    </a>
                                    <a
                                        href="https://www.scielo.br/j/cebape/a/GpdXkT8JJgPv63BMVG6wxXp/?lang=pt"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Scielo
                                    </a>
                                    <a
                                        href="https://www.researchgate.net/publication/220672187_Information_systems_outsourcing_reasons_and_risks_A_new_assessment"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Researchgate
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <a
                            className={styles.h2}
                            data-bs-toggle="collapse"
                            href="#uber"
                            aria-expanded="false"
                            aria-controls="uberCollapse"
                        >
                            Uberização &rarr;
                        </a>
                        <div className="collapse" id="uber">
                            <div className="card card-body border-0">
                                <div className="list-group">
                                    <a
                                        href="https://www.napratica.org.br/o-que-e-a-uberizacao-do-trabalho/amp/"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Napratica
                                    </a>
                                    <a
                                        href="https://guiadoestudante-abril-com-br.cdn.ampproject.org/v/s/guiadoestudante.abril.com.br/atualidades/o-que-e-a-uberizacao-do-trabalho/amp/?amp_gsa=1&amp_js_v=a9&usqp=mq331AQKKAFQArABIIACAw%3D%3D#amp_tf=From%20%251%24s&aoh=16598375870394&referrer=https%3A%2F%2Fwww.google.com&ampshare=https%3A%2F%2Fguiadoestudante.abril.com.br%2Fatualidades%2Fo-que-e-a-uberizacao-do-trabalho%2F"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Guiadoestudante
                                    </a>
                                    <a
                                        href="https://abriminhaempresa.com/uberizacao-no-trabalho/amp/"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Abriminhaempresa
                                    </a>
                                    <a
                                        href="https://viacarreira-com.cdn.ampproject.org/v/s/viacarreira.com/o-que-e-uberizacao-do-trabalho/amp/?amp_gsa=1&amp_js_v=a9&usqp=mq331AQKKAFQArABIIACAw%3D%3D#amp_tf=From%20%251%24s&aoh=16598375870394&referrer=https%3A%2F%2Fwww.google.com&ampshare=https%3A%2F%2Fviacarreira.com%2Fo-que-e-uberizacao-do-trabalho%2F"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Viacarreira
                                    </a>
                                    <a
                                        href="https://jus.com.br/artigos/91548/a-uberizacao-do-trabalho-no-brasil-desafios-e-perspectivas"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Jus.com
                                    </a>
                                    <a
                                        href="https://querobolsa.com.br/revista/atualidades-enem-uberizacao-do-trabalho#:~:text=De%20acordo%20com%20o%20IBGE,como%20uma%20alternativa%20de%20sobrevivência"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Querobolsa
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <a
                            className={styles.h2}
                            data-bs-toggle="collapse"
                            href="#bigdata"
                            aria-expanded="false"
                            aria-controls="bigdata"
                        >
                            Big data &rarr;
                        </a>
                        <div className="collapse" id="bigdata">
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
                            href="#AI"
                            aria-expanded="false"
                            aria-controls="AI"
                        >
                            Inteligência Artificial &rarr;
                        </a>
                        <div className="collapse" id="AI">
                            <div className="card card-body border-0">
                                <div className="list-group">
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://www.oracle.com/br/artificial-intelligence/what-is-ai/"
                                        className="list-group-item list-group-item-action"
                                    >
                                        O que é IA
                                    </a>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://jornal.usp.br/ciencias/quais-as-vantagens-e-desvantagens-da-inteligencia-artificial-na-sociedade/"
                                        className="list-group-item list-group-item-action"
                                    >
                                       Vantagens e desvantagens
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <a
                            className={styles.h2}
                            data-bs-toggle="collapse"
                            href="#biotech"
                            aria-expanded="false"
                            aria-controls="biotech"
                        >
                            Biotecnologia &rarr;
                        </a>
                        <div className="collapse" id="biotech">
                            <div className="card card-body border-0">
                                <div className="list-group">
                                    <a
                                        href="https://www.youtube.com/watch?v=DK5kRGs0HX0&t=607s"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Youtube
                                    </a>
                                    <a
                                        href="https://www.youtube.com/watch?v=_bWZNNqmFcc"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Youtube
                                    </a>
                                    <a
                                        href="https://croplifebrasil.org/noticias/alimentos-transgenicos/"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Croplifebrasil
                                    </a>
                                    <a
                                        href="https://www.significados.com.br/biotecnologia/"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Significados
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <a
                            className={styles.h2}
                            data-bs-toggle="collapse"
                            href="#nanotech"
                            aria-expanded="false"
                            aria-controls="nanotech"
                        >
                            Nanotecnologia &rarr;
                        </a>
                        <div className="collapse" id="nanotech">
                            <div className="card card-body border-0">
                                <div className="list-group">
                                    <a
                                        href="https://canaltech.com.br/ciencia/o-que-e-nanotecnologia/"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Canaltech
                                    </a>
                                    <a
                                        href="https://www.ihuonline.unisinos.br/artigo/1668-priscyla-daniely-marcato"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Unisinos
                                    </a>
                                    <a
                                        href="https://protecao.com.br/geral/os-impactos-da-nanotecnologia-no-mundo-do-trabalho-vao-alem-dos-riscos-a-saude-do-trabalhador/"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Protecao.com
                                    </a>
                                    <a
                                        href="https://www12.senado.leg.br/ril/edicoes/53/209/ril_v53_n209_p151.pdf"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Senado.leg
                                    </a>
                                    <a
                                        href="https://www.iberdrola.com/inovacao/aplicacoes-da-nanotecnologia"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Iberdrola.com
                                    </a>
                                    <a
                                        href="https://clubedaquimica.com/2021/10/28/nanotecnologia-tipos-classificacao-e-riscos-a-saude/"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Clubedaquimica
                                    </a>{" "}
                                    <a
                                        href="https://www.techtudo.com.br/noticias/2013/03/saiba-o-que-e-nanotecnologia-e-como-ela-pode-mudar-o-futuro.ghtml"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Techtudo
                                    </a>{" "}
                                    <a
                                        href="https://www.investe.sp.gov.br/noticia/brasil-pode-tornar-se-lider-de-mercado-em-nanotecnologia/"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Investe.sp.gov
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <a
                            className={styles.h2}
                            data-bs-toggle="collapse"
                            href="#trabalhista"
                            aria-expanded="false"
                            aria-controls="trabalhista"
                        >
                            Reforma Trabalhista &rarr;
                        </a>
                        <div className="collapse" id="trabalhista">
                            <div className="card card-body border-0">
                                <div className="list-group">
                                    <a
                                        href="https://www.gov.br/inss/pt-br/assuntos/noticias/confira-as-principais-mudancas-da-nova-previdencia"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Notícias do Governo
                                    </a>
                                    <a
                                        href="https://www.unicamp.br/unicamp/ju/noticias/2017/08/09/nunca-vivemos-uma-crise-tao-forte-diz-maria-da-conceicao-tavares"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Unicamp
                                    </a>
                                    <a
                                        href="https://economia.uol.com.br/empregos-e-carreiras/noticias/redacao/2021/10/07/reforma-trabalhista-michel-temer-empregos-4-anos.htm"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Uol
                                    </a>
                                    <a
                                        href="https://valor.globo.com/politica/noticia/2017/10/30/reforma-trabalhista-vai-gerar-6-milhoes-de-empregos-diz-meirelles.ghtml"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Globo
                                    </a>
                                    <a
                                        href="https://valor.globo.com/politica/noticia/2017/10/30/reforma-trabalhista-vai-gerar-6-milhoes-de-empregos-diz-meirelles.ghtml"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Reforma Trabalhista
                                    </a>
                                    <a
                                        href="https://valor.globo.com/politica/noticia/2017/10/30/reforma-trabalhista-vai-gerar-6-milhoes-de-empregos-diz-meirelles.ghtml"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Artigo 1º
                                    </a>
                                    <a
                                        href="https://cdn.discordapp.com/attachments/1005563649500385400/1006695738610286663/LEI_No_13.467_DE_13_DE_"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Lei da Reforma
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <a
                            className={styles.h2}
                            data-bs-toggle="collapse"
                            href="#previdencia"
                            aria-expanded="false"
                            aria-controls="previdencia"
                        >
                            Reforma da Previdência &rarr;
                        </a>
                        <div className="collapse" id="previdencia">
                            <div className="card card-body border-0">
                                <div className="list-group">
                                    <a
                                        href="https://www.politize.com.br/reforma-da-previdencia-argumentos/"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Argumentos Previdência
                                    </a>
                                    <a
                                        href="https://revistaseletronicas.pucrs.br/index.php/fass/article/view/41326/27278"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        1º Artigo
                                    </a>
                                    <a
                                        href="https://www.gazetadopovo.com.br/economia/breves/reforma-da-previdencia-expectativa-arrecadacao/"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Arrecadação Previdência
                                    </a>
                                    <a
                                        href="http://repositorio.ipea.gov.br/bitstream/11058/4344/1/PPE_v34_n03_Diagnostico.pdf"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Diagnóstico da previdência
                                    </a>
                                    <a
                                        href="http://repositorio.ipea.gov.br/bitstream/11058/9096/1/A%20Previd%C3%AAncia%20social.pdf"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        2º Artigo
                                    </a>
                                    <a
                                        href="https://ieadireito.jusbrasil.com.br/artigos/922510752/cumulacao-de-beneficios-pos-reforma-da-previdencia-o-que-eu-devo-saber"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Benefícios da Previdência
                                    </a>
                                    <a
                                        href="https://www.politize.com.br/deficit-da-previdencia-existe/"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Deficit da Previdência
                                    </a>
                                    <a
                                        href="https://www12.senado.leg.br/noticias/materias/2019/08/22/comissao-conclui-debates-ouvindo-pros-e-contras-da-reforma-da-previdencia | Comissão conclui debates ouvindo prós e contras da reforma da Previdência — Senado Notícias
"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Debate CCJ argumentos
                                    </a>
                                    <a
                                        href="https://thomsonreuters.jusbrasil.com.br/doutrina/secao/1188255891/8-a-previdencia-social-e-as-relacoes-de-trabalho-uma-analise-a-partir-das-alteracoes-promovidas-pela-pec-06-2019-parte-especial-reforma-da-previdencia#a-num1-DTR_2020_581%20|%208.%20A%20Previd%C3%AAncia%20Social%20e%20as%20Rela%C3%A7%C3%B5es%20de%20Trabalho:%20Uma%20An%C3%A1lise%20a%20Partir%20das%20Altera%C3%A7%C3%B5es%20Promovidas%20Pela%20Pec%2006/2019%20-%20Parte%20Especial:%20Reforma%20da%20Previd%C3%AAncia"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        3º Artigo
                                    </a>
                                    <a
                                        href="https://oglobo.globo.com/economia/reforma-da-previdencia-confira-os-argumentos-contra-a-favor-21097960
"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Opniões e Argumentos do G1
                                    </a>
                                    <a
                                        href="https://www.terra.com.br/economia/reforma-da-previdencia/entenda-os-argumentos-favoraveis-e-contrarios-a-reforma-da-previdencia,ff38d97c41b1048160de0269d5faa6ca3cvwkr61.html"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Os argumentos a favor e contra a reforma
                                        da Previdência
                                    </a>
                                    <a
                                        href="https://www.anfip.org.br/wp-content/uploads/2022/07/ANALISE-SEGURIDADE-SOCIAL-2021-1.pdf | ANALISE-SEGURIDADE-SOCIAL-2021-1.pdf
"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        ANFIB Análise Seguridade Social
                                    </a>
                                    <a
                                        href="https://www.clp.org.br/reforma-da-previdencia-entenda-em-sete-graficos/"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Gráficos Previdência
                                    </a>
                                    <a
                                        href="https://www.correiobraziliense.com.br/economia/2021/11/4963064-reforma-da-previdencia-em-dois-anos-de-vigencia-texto-agravou-desigualdades.html"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Desigualdades e Previdência
                                    </a>
                                    <a
                                        href="https://g1.globo.com/bemestar/noticia/2018/11/29/expectativa-de-vida-do-brasileiro-ao-nascer-foi-de-76-anos-em-2017-diz-ibge.ghtml"
                                        className="list-group-item list-group-item-action"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Expectativa de vida
                                    </a>
                                </div>
                            </div>
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
