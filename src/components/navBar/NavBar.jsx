import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// icons
import { RiArrowRightSLine } from "react-icons/ri";
import { FaGem, FaTools, FaPhone, FaHome } from 'react-icons/fa';

const NavBar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [showSubMenu, setShowSubMenu ] = useState({
        menu1: false,
        menu2: false,       
    });

    //Funcion para mostrar y ocultar los submenus
    const handleToggleSubMenu = (submenu) => {
        setShowSubMenu(prevState => ({
            //se cierran los demás submenus
            ...Object.keys(prevState).reduce((acc, key) => ({
                ...acc,
                [key]: key === submenu ? !prevState[submenu] : false
            }), {}),
            //Alternamos el submenu seleccionado
            [submenu]: !prevState[submenu],
        }));     
    };


    return (
        <nav className="flex justify-between items-center">
            {/* Inicio */}
            <ul>
                <li><Link to="#" className="flex items-center gap-2 rounded-lg py-2 px-4 hover:bg-slate-200"><FaHome />Inicio</Link></li>
            </ul>
            {/* Joyas */}
            <ul className="relative">
                <button onClick={() => handleToggleSubMenu('menu1')} className="w-full flex items-center justify-between py-2 px-4 rounded-lg hover:bg-slate-200 text-dark font-semibold transition-colors"><span className="flex items-center gap-2"><FaGem />Joyas</span><RiArrowRightSLine className={`mt-1 ${showSubMenu.menu1 ? 'rotate-90': ''} transition-all`} />
                </button>
                <ul className={`absolute top-full left-0 mt-2 ${!showSubMenu.menu1 ? 'hidden' : ''}`}>
                    <li><Link className="block px-4 py-2 hover:bg-slate-100" to="#">Relojes</Link></li>
                    <li><Link className="block px-4 py-2 hover:bg-slate-100" to="#">Manillas</Link></li>
                    <li><Link className="block px-4 py-2 hover:bg-slate-100" to="#">Aretes</Link></li>
                    <li><Link className="block px-4 py-2 hover:bg-slate-100" to="#">Anillos</Link></li>
                    <li><Link className="block px-4 py-2 hover:bg-slate-100" to="#">Collares</Link></li>
                    <li><Link className="block px-4 py-2 hover:bg-slate-100" to="#">Joyas</Link></li>
                </ul>
                
            </ul>
            {/* Servicios */}
            <ul className="relative">
                <button onClick={() => handleToggleSubMenu('menu2')} className="w-full flex items-center justify-between py-2 px-4 rounded-lg hover:bg-slate-200 text-dark font-semibold transition-colors"><span className="flex items-center gap-2"><FaTools />Servicios</span><RiArrowRightSLine className={`mt-1 ${showSubMenu.menu2 ? 'rotate-90': ''} transition-all`} />
                </button>
                <ul className={`absolute top-full left-0 mt-2 ${!showSubMenu.menu2 ? 'hidden' : ''}`}>
                    <li><Link className="block px-4 py-2 hover:bg-slate-100" to="#">Relojes</Link></li>
                    <li><Link className="block px-4 py-2 hover:bg-slate-100" to="#">Manillas</Link></li>
                    <li><Link className="block px-4 py-2 hover:bg-slate-100" to="#">Aretes</Link></li>
                    <li><Link className="block px-4 py-2 hover:bg-slate-100" to="#">Anillos</Link></li>
                    <li><Link className="block px-4 py-2 hover:bg-slate-100" to="#">Collares</Link></li>
                    <li><Link className="block px-4 py-2 hover:bg-slate-100" to="#">Joyas</Link></li>
                </ul>                
            </ul>
            {/* Contactos */}
            <ul>
                <li><Link to="#" className="flex items-center gap-2 rounded-lg py-2 px-4 hover:bg-slate-200"><FaPhone />Contáctanos</Link></li>
            </ul>
        </nav>
    );
};
export default NavBar;