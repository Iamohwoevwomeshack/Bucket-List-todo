import { useEffect, useState } from "react";
import styles from "./ThemeSwitcher.module.css";

// Icons
import { XMarkIcon, SunIcon, MoonIcon, SwatchIcon } from "@heroicons/react/24/outline";

// Custom hooks
import useLocalStorage from "../hooks/useLocalStorage";

const ThemeSwitcher = () => {
    const [hue, setHue] = useLocalStorage("todo-list.color", "240")

    const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const [theme, setTheme] = useLocalStorage("todo-list.theme", defaultDark ? "dark" : "light")

    const [isColourPicking, setIsColourPicking] = useState(false)

    useEffect(() => {
       document.documentElement.setAttribute("color-scheme", theme) 
    }, [theme])

    useEffect(() => {
        document.documentElement.style.setProperty("--_hue", hue) 
     }, [hue])

  return (
    <aside
        className={styles.wrapper}
        style={{
            backgroundColor: isColourPicking ? "hsl(var(--muted) / .6)" : "transparent"
        }}
    >
      {
        isColourPicking 
        ? (
            <>
                <button
                    className={`btn ${styles.close}`}
                    aria-label="Close colour picking mode"
                    onClick={() => setIsColourPicking(false)}
                >
                    <XMarkIcon/>
                </button>
                <input 
                    type="range"
                    className={styles.picker}
                    aria-label="Change colour theme slider"
                    min="0"
                    max="360"
                    value={hue}
                    onInput={(e) => setHue(e.target.value)}
                />
            </>
        ) : (
            <div className={styles.btns}>
                <button 
                    className="btn"
                    aria-label={`Change theme to ${theme === "light" ? "dark" : "light"} mode`}
                    role="switch"
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                    {theme === "dark" ? <SunIcon /> : <MoonIcon/> }
                </button>
                <button 
                    className="btn"
                    aria-label="Enable colour picking mode"
                    onClick={() => setIsColourPicking(true)}
                >
                    <SwatchIcon />
                </button>
            </div>
        )
      }
    </aside>
  )
}

export default ThemeSwitcher
