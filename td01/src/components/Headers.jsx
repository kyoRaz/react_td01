import React, { useState } from 'react';
import logo from '../assets/mbds.jpeg';
import Notes from './Notes'

const HeaderMenu = ({ activeItem, menuItems, onMenuClick }) => {
    return (
        <nav className="menu-container">
        <ul className="menu">
            {menuItems.map((item) => (
            <li
                key={item}
                className={`menu-item ${activeItem === item ? 'active' : ''}`}
                onClick={() => onMenuClick(item)}
            >
                {item}
            </li>
            ))}
        </ul>
        </nav>
    );
};

const SectionCard = ({ title, children }) => (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-xl shadow-md text-center">
    <h2 className="text-2xl font-semibold text-blue-700 mb-4">{title}</h2>
    {children}
    </div>
);


const Etudiants = () => (
    <SectionCard title="Section : Étudiants">
    <p>Gérez ici les informations des étudiants inscrits à la formation.</p>
    </SectionCard>
);

const Matieres = () => (
    <SectionCard title="Section : Matières">
    <p>Consultez et éditez les matières enseignées.</p>
    </SectionCard>
);

const APropos = () => (
    <SectionCard title="Section : À propos">
    <p>Informations générales sur cette application React d’initiation.</p>
    </SectionCard>
);

function Header() {
    const menuItems = ['Notes', 'Étudiants', 'Matières', 'À propos'];
    const [activeItem, setActiveItem] = useState('Notes');

    const handleMenuClick = (item) => {
        console.log(`Vous avez cliqué sur ${item}`);
        setActiveItem(item);
    };

    const renderActiveComponent = () => {
        switch (activeItem) {
            case 'Notes': return <Notes />;
            case 'Étudiants': return <Etudiants />;
            case 'Matières': return <Matieres />;
            case 'À propos': return <APropos />;
            default: return null;
        }
    };

    return (
        <>
            <header className="header-container">
            <HeaderMenu
                activeItem={activeItem}
                menuItems={menuItems}
                onMenuClick={handleMenuClick}
            />

            <div className="logo-container">
                <img
                src={logo}
                alt="Logo de la formation"
                className="header-logo"
                />
            </div>

            <div className="header-text">
                <h1 className="header-title">Introduction à React</h1>
                <h2 className="header-subtitle">À la découverte des premières notions de React</h2>
            </div>
            </header>

            <main>{renderActiveComponent()}</main>  
        </>
    );
}

export default Header;
