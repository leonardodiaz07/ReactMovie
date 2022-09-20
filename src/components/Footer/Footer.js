import '../../sass/components/footer.css';
import { InstagramOutlined, FacebookOutlined, YoutubeOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../../services/firebase/firebase";
import { getDocs, collection } from "firebase/firestore";

const Footer = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getDocs(collection(db, 'categories')).then((querySnapshot) => {
        const categories = querySnapshot.docs.map(doc => {
        return { id: doc.id, ...doc.data() }
        })
        setCategories(categories)
        })
      },[])

    return(
        <footer>
            <div className="footerContainer">
                <div className="footerLogo">
                    <img className="logoFooter" src="/assets/logoFooter.png" alt="logo"></img>
                </div>
                <div className="footerNav">
                    <ul>
                        <li><Link to={"/"}>INICIO</Link></li>
                        <li><div className="line"></div></li>
                        <div className="categories">
                            {categories.map(categ =>
                            <div className="categoriesMap" key={categ.id}>
                                <Link className="categoryOption" to={`/category/${categ.id}`}>{categ.description}</Link>
                                <li><div className="line"></div></li>
                            </div>
                            )}
                        </div>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className="footerAboutUs">
                    <h1>Sobre nosotros</h1>
                    <p>Nuestra Historia</p>
                    <p>Clientes Especiales</p>
                    
                </div>
                <div className="footerHelp">
                    <h1>Ayuda</h1>
                    <p>Contactanos</p>
                    <p>Preguntas Frecuentes</p>
                    
                </div>
                <div className="footerConnect">
                    <h1>Conectate con nosotros</h1>
                    <div className="icons">
                        <InstagramOutlined className="iconConnect"/>
                        <FacebookOutlined className="iconConnect iconConnectMiddle"/>
                        <YoutubeOutlined className="iconConnect"/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer