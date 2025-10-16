import React, { useEffect, useState } from 'react'
import styles from '../styles/globals.css'
import Header from "@/components/Header"

export default function MyApp({ Component, pageProps }) {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        let theme = localStorage.getItem("theme") || 'dark';
        setIsDark(theme === "dark");
    }, []);

    return (
        <div className='w-full h-screen'>
            <Header isDark={isDark} setIsDark={setIsDark} />
            <Component {...pageProps} isDark={isDark} />
        </div>
    );
}