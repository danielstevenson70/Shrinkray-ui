import { useState, useEffect } from "react";
import styles from "./Link.module.css"


const Links = () => {
    const [linkItems, setLinkItems] = useState([]);

    useEffect(() => {
        const getLinks = async () => {
            const url = "https://bzzt.fun/api/urls";
            const data = await fetch(url).then(response => response.json());
            console.log("DATA: ", data);
            setLinkItems(data);
        };
        getLinks();
    }, [setLinkItems]); 

    return (
        <>
        <p>Links Page</p>
        {linkItems && linkItems.length > 0 ? (
            <ul className={styles.linkList}>
                {linkItems.map(link => {
                    return (<li key={link.id}>
                        <a href={`https://bzzt.fun/${link.short_url}`} 
                        title={`Short URL for ${link.title}`}
                        className={styles.linkLink}
                        >{link.title}</a>
                    </li>)
                })}
            </ul>
        ) : (
            <p>links did not load</p>
            )}
        </>
    );
};

export default Links;