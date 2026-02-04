
import{BrowserRouter, Routes , Route , Link } from "react-router-dom"
import Inicio from "../Inicio/Inicio";
import Acoes from "../AcoesDaConect/AcoesDaConect";
import QuemSomos from "../QuemSomos/QuemSomos";
import Perfil from "../Perfil/Perfil";
import styles from "./NavBar.module.scss";




import Logo from "../../assets/logo.png";
import fotoDePerfil from "../../assets/Ronaldo.jpg";

export default function NavBar (){
    return(
        <BrowserRouter>
        
        <nav ClassName={styles.navBar}>
            <Link to="/" >
            <img src={Logo} alt="logo" />
            </Link>

            <ul>
                <li>

                    <Link to="/" >Inicio </Link>

                    </li>

                <li>

                    <Link to="/acoes" >AcoesDaConect </Link>

                    </li>

                <li>

                    <Link to="/quemSomos" >QuemSomos </Link>

                    </li>
                
                
            </ul>
            <Link to="/perfil" >

            <img VlassName={styles.imgPerfil} src= {fotoDePerfil} alt="foto de perfil" />

            </Link>


        </nav>

        <Routes>

            <Route patch="/" element = {<Inicio/>} />
            <Route patch="/acoes" element = {<Acoes/>} />
            <Route patch="/quemSomos" element = {<QuemSomos/>} />
            <Route patch="/perfil" element = {<Perfil/>} />

        </Routes>



        


        </BrowserRouter>
    )



}