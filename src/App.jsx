import Timer from "./components/Timer"
import Settings from "./components/Settings"
import { useState } from "react"
import SettingsContext from "./components/SettingsContext"

function App() {

  const [showSettings, setShowSettings] = useState(false) 
  const [workMinutes, setWorkMinutes] = useState(45)
  const [breakMinutes, setBreakMinutes] = useState(15)

  return (
    <main >
      <SettingsContext.Provider value={{
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes,
        setShowSettings,
      }}>
        {showSettings ? <Settings /> : <Timer />}
      </SettingsContext.Provider>
    </main>
  )
}

export default App
