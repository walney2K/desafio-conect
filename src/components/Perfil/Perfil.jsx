import react from "react"
import styles from "./Perfil.module.scss"
import imgPerfil from "../../assets/ronaldo.jpg"


export default function Perfil (){
    return(
        <section className={styles.containerTelaPerfil}>


         <article>
            <img src={imgPerfil} alt="foto de perfil" />

            <div className={styles.cardInfo}>
                <h2>Walney Rodrigues</h2>
                <h3>Jogador Ativo</h3>
                <p classname={styles.paragrafoSobreMim}>Aprendendo e cutivando Conehcimento com a comunidade </p>
                <address>
                    <p>Brasil</p>
                    <p>CristianoMelhordoMundo@.com</p>
                    <p>Menbro do Time Galactico</p>


                
                </address>
                <ul className={styles.listaIneteresses}> 
                   <li>Educação </li>
                   <li>Meio Ambiente</li>
                   <li>Assistencia Social</li>
                   <li>Design</li>

                </ul>



            </div>






         </article>


        </section>
    )



}