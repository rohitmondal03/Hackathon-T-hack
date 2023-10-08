import { useEffect } from "react";
import { Routes, Route } from 'react-router-dom'
import Lenis from "@studio-freight/lenis"

import { ThemeProvider } from '@/components/theme-components/theme-provider'
import Homepage from './components/pages/Homepage'
import Footer from './components/Footer'
import Navbar from "./components/Navbar";
import './App.css'


export default function App() {
    useEffect(() => {
        const lenis = new Lenis()

        function raf(time: any) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    return (
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <Navbar />
            <Routes>
                <Route index element={<Homepage />} />
            </Routes>
            <Footer />
        </ThemeProvider>
    )
}

