const Header = () => {
    return (
        <div className="w-10/12 mx-auto mt-5 ">
            <div className="flex justify-between items-center">
                <div className="flex-1">
                    <h1 className="text-5xl font-bold">Knowledge Cafe</h1>
                </div>
                <div>
                    <a href="">
                        <img className="w-12 rounded-full border" src="https://i.ibb.co.com/W6gB3MG/5856.jpg" alt="" />
                    </a>
                </div>
            </div>
            <hr className="border my-6" />
        </div>
    );
};

export default Header;