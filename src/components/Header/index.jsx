import styles from "./header.module.css";
import NavBar from "../NavBar";
import { useState } from "react";
import { Link } from "react-router-dom"
import HamburgerMenu from "../HamburgerMenu"
import CartSummary from "../CartSummary";
import { theme } from 'antd';
import SetColorMode from "../SetColorMode"

export default function Header() {
    const [isOnTouch, setIsOnTouch] = useState(false);
    const {
        token: { colorBgHeader},
    } = theme.useToken();

    return (
        <div>
            <div className={styles.header} style={{
            backgroundColor:colorBgHeader ,
            }}>
                <HamburgerMenu
                    onClick={() => setIsOnTouch(!isOnTouch)}
                    isOnTouch={isOnTouch}
                />
                <Link to="/">
                    <img className={styles.logo} src="/images/LOGO.svg" alt="logo" />
                </Link>
                <NavBar open={isOnTouch} onClose={() => setIsOnTouch(false)} />
                <div className={styles.IconArea}>
                    <SetColorMode/>
                    <a href="#">
                        <img className={styles.icon} src="/images/LOGIN.svg" alt="login" />
                    </a>
                    <CartSummary style={{marginTop:'5px'}}/>
                </div>

            </div>
            <div className={styles.placeholder}></div>
        </div>
    )
}
