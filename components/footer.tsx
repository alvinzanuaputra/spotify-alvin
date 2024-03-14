import React from 'react';

export default function BAWAH() {
    return (
        <div className="mx-8">
            <footer className="text-gray-300">
                <div className="container mx-auto py-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-md font-semibold mb-4">Company</h3>
                            <ul className="text-sm ">
                                <li><a href="#" className="hover:text-white">About</a></li>
                                <li><a href="#" className="hover:text-white">Work</a></li>
                                <li><a href="#" className="hover:text-white">For the Record</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-md font-semibold mb-4">Community</h3>
                            <ul className="text-sm ">
                                <li><a href="#" className="hover:text-white">For Artist</a></li>
                                <li><a href="#" className="hover:text-white">Developer</a></li>
                                <li><a href="#" className="hover:text-white">Advertistment</a></li>
                                <li><a href="#" className="hover:text-white">Vendor</a></li>
                                <li><a href="#" className="hover:text-white">Investor</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-md font-semibold mb-4">Usefull link</h3>
                            <ul className="text-sm ">
                                <li><a href="#" className="hover:text-white">Support system</a></li>
                                <li><a href="#" className="hover:text-white">Free router app</a></li>
                            </ul>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
                <div className="flex items-center border-t-2 py-4 border-gray-600 justify-between">
                    <ul className="flex items-center gap-4 text-xs">
                    <li><a href="#" className="hover:text-white">Judge</a></li>
                    <li><a href="#" className="hover:text-white">Security & privacy</a></li>
                    <li><a href="#" className="hover:text-white">Privacy</a></li>
                    <li><a href="#" className="hover:text-white">Cookies</a></li>
                    <li><a href="#" className="hover:text-white">About advertisment</a></li>
                    <li><a href="#" className="hover:text-white">Accesbility</a></li>
                    </ul>
                    <p className="text-sm font-semibold">&copy; 2024 Alvin Spotify</p>
                </div>
            </footer>
        </div>
    );
}
