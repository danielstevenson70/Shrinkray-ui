import style from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={style.footer}>
            
            <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
        </footer>
    )
}
export default Footer;
