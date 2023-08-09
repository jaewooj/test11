'use client'

import Link from "next/link";
import { Menu } from "./Menu";
import { Sns } from "./Sns";
import styles from './header.module.css'

export const Header = () => {
    return (
        <header id="header" className={styles.header}>
            <div className="inner">
                <h1><Link href="/">jaewoo's</Link></h1>
                <Menu/>
                <Sns/>
            </div>
        </header>
    );
};
