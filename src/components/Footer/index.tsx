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
            <p>© {anoAtual()} Guilherme Rodrigues. All rights reserved.</p>
            <ul className={style.socialLinks}>
                <li><a href="https://github.com/switq/ur-test" target="_blank" className={`${style.link} ${style.repo}`}>Repositório</a></li>
                <li><a href="https://github.com/switq/" target="_blank" className={style.link}><AiFillGithub/></a></li>
                <li><a href="https://www.linkedin.com/in/guirodri/" target="_blank" className={style.link}><AiFillLinkedin/></a></li>
                {/* <li><a href="" className={style.link}><BsDiscord/></a></li> */}
            </ul>
        </footer>
    )
}

export default Footer;