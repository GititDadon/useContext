import { useContext } from 'react'
import ThemeContext from './ThemeContext.jsx'
export default function Content(){
    const {theme,toggleTheme}=useContext(ThemeContext);
    return(
        <div className={`content ${theme}`}>
            <div className='content-card'>
                <h3>Dashboard</h3>
                <p>Your personal workspace</p>
            </div>
             <div className='content-card'>
               <h3>Settings</h3>
                <p>Manage your preferences</p>
            </div>
                 <div className="content-card">
                <h3>Profile</h3>
                <p>Your account information</p>
            </div>
              <div className="content-card">
                <h3>Activity</h3>
                <p>Track your progress</p>
            </div>
        </div>
    )
}