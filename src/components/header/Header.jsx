import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className="w-10/12 mx-auto mt-5 ">
            <div className="flex justify-between items-center">
                <h1 className="md:text-5xl font-bold">Knowledge Cafe</h1>
                <a href="">
                    <img src={profile} alt="" />
                </a>

            </div>
            <hr className="border my-2" />
        </header>
    );
};

export default Header;