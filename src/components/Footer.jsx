import style from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={style.footer}>
            
            <p>&copy; {new Date().getFullYear()} All Rights Reserved, Hoe</p>
        </footer>
    )
}
export default Footer;