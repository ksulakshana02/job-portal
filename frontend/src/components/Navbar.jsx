import React, {useState} from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi";

const Navbar = () => {
    // const [show, setShow] = useState(false);
    // const { isAuthenticated } = useSelector((state) => state.user);
    const show = true;

    return (
        <nav
            className={`flex justify-between border-b border-gray-400 px-6 md:px-28 py-5 items-center ${show ? 'h-[200px] md:h-[120px] transition-all duration-300' : 'h-[75px] md:h-[120px] transition-all duration-300'}`}>
            <div className="flex items-center gap-8 flex-1 md:flex-none md:w-fit">
                <img src="/logo.png" alt="logo" className="w-[40px] md:w-[75px] lg:w-[120px]"/>
                <h4 className="text-lg md:text-2xl lg:text-2xl font-semibold uppercase text-yellow-400">
                    NicheNest
                </h4>
            </div>

            <div
                className={`flex order-1 w-full md:w-auto flex-col md:flex-row gap-5 pt-5 md:pt-0 ${show ? 'block' : 'hidden md:flex'}`}>
                <ul className="flex flex-col md:flex-row items-start md:items-center gap-12 md:gap-12">
                    <li>
                        <Link
                            to="/"
                            // onClick={() => setShow(!show)}
                            className="text-gray-600 hover:text-yellow-400 transition-colors duration-300"
                        >
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/jobs"
                            // onClick={() => setShow(!show)}
                            className="text-gray-600 hover:text-yellow-400 transition-colors duration-300"
                        >
                            JOBS
                        </Link>
                    </li>
                    {/*{isAuthenticated ? (*/}
                    {/*    <li>*/}
                    {/*        <Link*/}
                    {/*            to="/dashboard"*/}
                    {/*            onClick={() => setShow(!show)}*/}
                    {/*            className="text-gray-600 hover:text-yellow-400 transition-colors duration-300"*/}
                    {/*        >*/}
                    {/*            DASHBOARD*/}
                    {/*        </Link>*/}
                    {/*    </li>*/}
                    {/*) : (*/}
                    {/*    <li>*/}
                    {/*        <Link*/}
                    {/*            to="/login"*/}
                    {/*            onClick={() => setShow(!show)}*/}
                    {/*            className="text-gray-600 hover:text-yellow-400 transition-colors duration-300"*/}
                    {/*        >*/}
                    {/*            LOGIN*/}
                    {/*        </Link>*/}
                    {/*    </li>*/}
                    {/*)}*/}
                    <li>
                        <Link
                            to="/login"
                            // onClick={() => setShow(!show)}
                            className="text-gray-600 hover:text-yellow-400 transition-colors duration-300"
                        >
                            LOGIN
                        </Link>
                    </li>
                </ul>
            </div>

            <GiHamburgerMenu
                className="text-2xl md:hidden cursor-pointer"
                // onClick={() => setShow(!show)}
            />
        </nav>
    );
};

export default Navbar;