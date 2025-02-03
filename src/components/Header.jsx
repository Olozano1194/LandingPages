import NavBar from './navBar/NavBar';

const Header = () => {
    return (
        <header className="w-full flex justify-between items-center py-4 px-4">
            <h1>Header</h1>
            <NavBar />
        </header>
    );
};
export default Header;