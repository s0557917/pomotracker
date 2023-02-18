import { useContext } from "react";
import SettingsContext from "./SettingsContext";
import BackButton from "./BackButton";

export default function Settings() {

    const settingsInfo = useContext(SettingsContext);

    return(
        <div className="text-left flex flex-col">
            <div className="flex flex-col space-y-1">
                <label>Work Minutes: <span className="font-bold">{settingsInfo.workMinutes}:00</span></label>
                <input 
                    className="text-black rounded-sm py-[1px] px-[2px]" 
                    type={"number"}
                    value={settingsInfo.workMinutes}
                    onChange={(newValue) => settingsInfo.setWorkMinutes(newValue.target.value)}
                >
                </input>

                <label>Break Minutes: <span className="font-bold">{settingsInfo.breakMinutes}:00</span></label>
                <input 
                    className="text-black rounded-sm py-[1px] px-[2px]"
                    type={"number"} 
                    value={settingsInfo.breakMinutes}
                    onChange={(newValue) => settingsInfo.setBreakMinutes(newValue.target.value)}
                >
                </input>
            </div>

            <BackButton onClick={() => settingsInfo.setShowSettings(false)}/>
        </div>
    )
}