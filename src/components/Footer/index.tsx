import React, { useState } from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineCopyrightCircle } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import style from './Footer.module.scss';

function Footer() {
    function anoAtual() {
        const data = new Date();
        return data.getFullYear();
    }

    return (
        <footer className={style.footerWrapper}>
            <p>Copyright <AiOutlineCopyrightCircle/> {anoAtual()} Guilherme Rodrigues. All rights reserved.</p>
            <ul className={style.socialLinks}>
                <li><a href=""><AiFillGithub/></a></li>
                <li><a href=""><AiFillLinkedin/></a></li>
                <li><a href=""><BsDiscord/></a></li>
            </ul>
        </footer>
    )
}

export default Footer;