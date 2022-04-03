import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <nav className='flex justify-center py-6'>
                <CustomLink className='mr-10 text-xl font-bold' to='/home'>Home</CustomLink>
                <CustomLink className='mr-10 text-xl font-bold' to='/reviews'>Reviews</CustomLink>
                <CustomLink className='mr-10 text-xl font-bold' to='/dashboard'>Dashboard</CustomLink>
                <CustomLink className='mr-10 text-xl font-bold' to='/blog'>Blogs</CustomLink>
            </nav>
        </div>
    );
};

export default Header;