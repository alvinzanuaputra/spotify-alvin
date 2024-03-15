import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function BAWAH() {
    return (
        <div className="mx-8 mt-14">
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
                    </div>
                        <div className="flex items-center gap-2 mt-4">
                            <a href="https://www.instagram.com/znualvin_"
                                className="rounded-full p-2  bg-neutral-700  flex items-center justify-center cursor-pointer hover:opacity-75 transition">
                                <FaInstagram
                                    size={20}
                                    className="text-white "
                                />
                            </a>
                            <a href="https://twitter.com/AlvinZanua"
                                className="rounded-full p-2  bg-neutral-700  flex items-center justify-center cursor-pointer hover:opacity-75 transition">
                                <FaTwitter
                                    size={20}
                                    className="text-white "
                                />
                            </a>

                            <a href="https://www.facebook.com/people/Alvin-Zanua-Putra/pfbid09ZFCwUHmAsnxJRU1aoBW2Qb2syFLPyKkkpntpiwrSUJUbDL9v1z9brR1emohLCnvl/"
                                className="rounded-full p-2  bg-neutral-700  flex items-center justify-center cursor-pointer hover:opacity-75 transition">
                                <FaFacebook
                                    size={20}
                                    className="text-white "
                                />
                            </a>
                        </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-t-2 py-4 border-gray-600">
                    <div className="flex justify-between">
                        <ul className="flex flex-wrap items-center gap-4 text-xs md:text-sm">
                            <li><a href="#" className="hover:text-white">Judge</a></li>
                            <li><a href="#" className="hover:text-white">Security & privacy</a></li>
                            <li><a href="#" className="hover:text-white">Privacy</a></li>
                            <li><a href="#" className="hover:text-white">Cookies</a></li>
                            <li><a href="#" className="hover:text-white">About advertisment</a></li>
                            <li><a href="#" className="hover:text-white">Accessibility</a></li>
                        </ul>
                    </div>
                    <p className="text-xs md:text-sm font-semibold flex items-center md:justify-end">© 2024 Alvin Spotify</p>
                </div>


            </footer>
        </div>
    );
}
