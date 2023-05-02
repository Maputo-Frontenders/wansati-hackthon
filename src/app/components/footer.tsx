"use client";

import { FacebookLogo, InstagramLogo, LinkedinLogo, TwitchLogo, YoutubeLogo } from "phosphor-react";



"TODO: Add poppins font or OpenSans-Regular"



export default function Navbar() {
    const today = new Date();
    const year = today.getFullYear()

    return (
        <footer className="bg-primary">
            <div className="container mx-auto py-16 flex justify-between text-white">
                <div className="space-y-5">
                    <div>
                        <h1 className="text-4xl font-sans font-bold ">Wansati Hackthon</h1>
                    </div>
                    <div className="space-y-2">
                        <p>©{year} Wansati Hackthon.</p>
                        <p>Todos os direitos reservados.</p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-3 text-2xl">
                    <a href=""><FacebookLogo /></a>
                    <a href=""><InstagramLogo /></a>
                    <a href=""><LinkedinLogo /></a>
                    <a href=""><TwitchLogo /></a>
                    <a href=""><YoutubeLogo /></a>
                </div>
            </div>
        </footer>
    )
}