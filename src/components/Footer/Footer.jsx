
import Logo from "../../assets/logo.png"
import Instagram from "../../assets/instagram.png"
import Whatsapp from "../../assets/whatsapp.png"
import Linkedin from "../../assets/linkedin.png"

import styles from "./Footer.module.scss"



export default function Footer(){
    return(
        <footer>
            <div>

                <img src={Logo} alt="logo da connect" />
                <h2>Connect</h2>


            </div>
            <p>© 2026 Vai na Web & Empower. Todos os direitos reservados. Projeto destinado exclusivamente a fins educativos.</p>
            <nav>
                <img src={Whatsapp} alt="logo do whatsapp" />
                <img src={Instagram} alt="logo do instagram" />
                <img src={Linkedin} alt="logo do linkedin" />
            </nav>


             


        </footer>
    )



}