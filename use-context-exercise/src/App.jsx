import { useState } from 'react'
import UserContext from '../components/UserContext.jsx'
import UserProfile from '../components/UserProfile.jsx'
import ThemeContext from '../components/ThemeContext.jsx'
import Header from '../components/Header.jsx'
import Content from '../components/Content.jsx'
import Footer from '../components/Footer.jsx'
import './App.css'

function App() {
    const userName = "Gitit"
    const [theme, setTheme] = useState("light")

    function toggleTheme() {
        if (theme === "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }

    return (
        <div className="app-container">

            <div className="page-heading">
                <span className="eyebrow">
                    REACT HOOKS LAB
                </span>
                <h1>Context Task</h1>
                <p>All 3 Task Parts In One Dashboard</p>
            </div>

            <div className="exercises-grid">

                {/* Exercise 01 */}

                <section className="exercise-section">
                    <span className="eyebrow">EXERCISE 01</span>
                    <h2>User Context</h2>
                    <p>Share data without prop drilling.</p>

                    <UserContext.Provider value={userName}>
                        <UserProfile />
                    </UserContext.Provider>

                    <span className="connection-status">
                        ● Context connected
                    </span>
                </section>

                {/* Exercise 02 */}

                <section className="exercise-section">
                    <span className="eyebrow">EXERCISE 02 & 03</span>
                    <h2>Theme Context</h2>
                    <p>Manage global appearance.</p>

                    <ThemeContext.Provider
                        value={{ theme, toggleTheme }}
                    >
                        <div className={`theme-preview ${theme}`}>
                            <Header />
                            <Content />
                            <Footer />
                        </div>
                    </ThemeContext.Provider>

                </section>

            </div>

            <div className="page-footer">
                REACT · CONTEXT API · LEARN & BUILD
            </div>

        </div>
    )
}

export default App