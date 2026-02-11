
import{BrowserRouter, Routes , Route , Link } from "react-router-dom"
import Inicio from "../Inicio/Inicio";
import Acoes from "../AcoesDaConect/AcoesDaConect";
import QuemSomos from "../QuemSomos/QuemSomos";
import Perfil from "../Perfil/Perfil";





import Logo from "../../assets/logo.png";
import fotoDePerfil from "../../assets/Ronaldo.jpg";


import styles from "./NavBar.module.scss";

export default function NavBar (){
    return(
         <BrowserRouter>
      <nav className={styles.navBar}>
        <Link to="/">
          <img className={styles.logo} src={Logo} alt="Logo" />
        </Link>

        <ul>
          <li>
            <Link to="/"> Início </Link>
          </li>
          <li>
            <Link to="/acoes"> Ações da Connect</Link>
          </li>
          <li>
            <Link to="/quemSomos"> Quem Somos </Link>
          </li>
        </ul>

        <Link to="/perfil">
          <img className={styles.imgPerfil} src={fotoDePerfil} alt="Foto do perfil" />
        </Link>
      </nav>

      <Routes>

        <Route path="/" element={<Inicio />} />
        <Route path="/acoes" element={<Acoes />} />
        <Route path="/quemSomos" element={<QuemSomos />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>

    </BrowserRouter>
    )



}