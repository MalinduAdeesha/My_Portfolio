import { Link, useLocation } from 'react-router-dom';
import {
    HiHome,
    HiUser,
    HiViewColumns,
    HiRectangleGroup,
    HiChatBubbleBottomCenterText,
} from 'react-icons/hi2';

const Sidebar = () => {
    const location = useLocation();

    const links = [
        { to: '/', icon: <HiHome />, text: 'Home' },
        { to: '/about', icon: <HiUser />, text: 'About' },
        { to: '/skills', icon: <HiRectangleGroup />, text: 'Skills' },
        { to: '/projects', icon: <HiViewColumns />, text: 'Projects' },
        { to: '/contact', icon: <HiChatBubbleBottomCenterText />, text: 'Contact' },
        
    ];

    return (
        <div className='relative'>
            <div className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen '>
                <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-10 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full shadow-xl '>
                    {links.map((link) => (
                        <div key={link.to} className='relative group'>
                            <Link
                                to={link.to}
                                className={location.pathname === link.to ? 'text-red-500' : 'text-white' }
                                // title={link.text} // Set tooltip text
                            >
                                <p>{link.icon}</p>
                            </Link>
                            <div className='absolute z-40 hidden px-3 py-2 text-xs text-white bg-gray-800 border border-white rounded-md right-full -top-1/2 lg:group-hover:block'>
                                {link.text}
                                <div className='absolute z-10 w-3 h-3 transform rotate-45 bg-gray-800 border-t border-r top-[10px] -right-[6px] border-teal-50'></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
