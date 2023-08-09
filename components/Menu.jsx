'use client'

import { MENU_OPTIONS } from "@/contains/nav";
import Link from "next/link";


export const Menu = () => {
    const onURL = (e) =>{
        e.preventDefault();
        const target = e.currentTarget;
        const value = target.getAttribute('href')
        const offsetTop = document.querySelector(value).offsetTop
        window.scroll({
            top:offsetTop,
            behavior:"smooth"
        })
    }
    return (
        <nav>
            <ul>
                {
                    MENU_OPTIONS.map(item=><li key={item.id}>
                        <Link href={item.url} onClick={onURL}>
                            {item.name}
                        </Link>
                    </li>)
                }
            </ul>
        </nav>
    );
};
