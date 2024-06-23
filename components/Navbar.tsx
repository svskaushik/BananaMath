// components/Navbar.tsx

import React from 'react';
import AuthButton from './AuthButton';

const TEXT_CLASS = "your-text-class"; // replace with your actual class

const Navbar = ({ isSupabaseConnected }: { isSupabaseConnected: boolean }) => (
    <nav className="w-full flex items-center justify-between">
        <div className="flex items-center space-x-4">
            <img
                src="https://placehold.co/40x40"
                alt="logo"
                className="size-10"
            />
            <span className="text-xl font-bold">BananaMath</span>
        </div>
        <div className="flex items-center space-x-4">
            <button className={TEXT_CLASS}>Contact</button>
            <button className={TEXT_CLASS}>Support</button>
            <button className={TEXT_CLASS}>Settings</button>
            {isSupabaseConnected && <AuthButton />}
        </div>
    </nav>
);

export default Navbar;