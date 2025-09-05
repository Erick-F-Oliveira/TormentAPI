import styles from "./Footer.module.css";
function Footer() {
    return (
        <footer className={styles.footer}>

            <ul className={styles.list}>
                <li>Sobre</li>
                <li>Privacidade</li>
            </ul>


        </footer>
    );
}
export default Footer;
