export function Español() {
    return (
        <article>
            <header>
                <div className="w25">
                    <ul className="flex justifiContent">
                        <li id="idioma" className="ESP"><p>Español</p></li>
                        <li className="CAT"><p>Catalan</p></li>
                        <li className="ANG"><p>Angles</p></li>
                    </ul>
                </div>
                <div className="w25">
                    <ul className="flex justifiContent">
                        <li><a className="padding5" href="indexEsp.html">Inicio</a></li>
                        <li><a className="padding5" href="masDeMi.html">Sobre mi</a></li>
                        <li><a className="padding5" href="proyectos.html">Proyectos</a></li>
                    </ul>
                </div>
            </header>
            <div id="me" className="w33">
                <img className="w100 me circle" src="../img/WhatsApp Image 2024-10-26 at 11.32.46.jpeg" alt="Imatge sobre mi"></img>
            </div>
            <h1 className="textCenter">Aitor Rubio</h1>
            <h2 className="textCenter">Lenguajes principales</h2>
            <div className="flex itemsCenter">
                <div className="w10 align cuadros round flex">
                    <div className="w25">
                        <img className="w100 round"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png" alt="JavaScrip"></img>
                    </div>
                    <h3 className="w75 m0 padding5">JavaScrip</h3>
                </div>
                <div className="w10 align cuadros round flex">
                    <div className="w25">
                        <img className="w100 round" src="https://icones.pro/wp-content/uploads/2021/05/icone-html-orange.png" alt="HTML"></img>
                    </div>
                    <h3 className="w75 m0 padding5">HTML</h3>
                </div>
                <div className="w10 align cuadros round flex">
                    <div className="w25">
                        <img className="w100 round" src="https://www.adaweb.es/wp-content/uploads/2022/05/logotipo_css-min.png" alt="CSS"></img>
                    </div>
                    <h3 className="w75 m0 padding5">CSS</h3>
                </div>
                <div className="w10 align cuadros round flex">
                    <div className="w25">
                        <img className="w100 round" src="https://nattia.com/wp-content/uploads/2023/10/java_image.png" alt="JAVA"></img>
                    </div>
                    <h3 className="w75 m0 padding5">JAVA</h3>
                </div>
                <div className="w10 align cuadros round flex">
                    <div className="w25">
                        <img className="w100 round" src="https://images.ctfassets.net/em6l9zw4tzag/oVfiswjNH7DuCb7qGEBPK/b391db3a1d0d3290b96ce7f6aacb32b0/python.png" alt="Python"></img>
                    </div>
                    <h3 className="w75 m0 padding5">Python</h3>
                </div>
            </div>
            <div className="flex itemsCenter">
                <button className="button"><a href="masDeMi.html">Mas informacion</a></button>
            </div>
            <h2 className="textCenter">Proyectos</h2>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="flex itemsCenter">
                <button className="button"><a href="proyectos.html">Mas proyectos</a></button>
            </div>
            <footer>
                <div className="w33"  >
                    <div className="w10 m0a">
                        <a id="Up" className="w100" href="#idioma">
                            <img className="first w100" src="../img/arrow_upward_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png" alt="Flexa arriba"></img>
                            <img className="second w100" src="../img/arrow_upward_24dp_FF00CC90_FILL0_wght400_GRAD0_opsz24.png" alt="Flexa arriba"></img>
                        </a>
                    </div>
                </div>
                <div className="w33">
                    <p>Version 2024</p>
                </div>
                <div className="align flex w33">
                    <p className="padding5">Correo:</p>
                    <div className="padding5">
                        <p>aitorrubiorosales9@gmail.com</p>
                    </div>
                    <div id="Gmail" className="w5">
                        <a href="#idioma">
                            <img className="w100 gmail gmail1" src="../img/content_copy_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png" alt="copiar"></img>
                            <img className="w100 gmail gmail2" src="../img/content_copy_24dp_FF00CC90_FILL0_wght400_GRAD0_opsz24.png" alt="Copiar"></img>
                        </a>
                    </div>
                </div>
            </footer>
        </article>
    )
}