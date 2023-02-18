import { useContext } from "react";
import SettingsContext from "./SettingsContext";

export default function Settings() {

    const settingsInfo = useContext(SettingsContext);

    return(
        <div className="text-left space-y-1">
            <label className="block">Work Minutes: <span className="font-bold">{settingsInfo.workMinutes}:00</span></label>
            <input 
                className="text-black rounded-sm py-[1px] px-[2px]" 
                type={"number"}
                value={settingsInfo.workMinutes}
                onChange={(newValue) => settingsInfo.setWorkMinutes(newValue.target.value)}
            >
            </input>

            <label className="block">Break Minutes: <span className="font-bold">{settingsInfo.breakMinutes}:00</span></label>
            <input 
                className="text-black rounded-sm py-[1px] px-[2px]"
                type={"number"} 
                value={settingsInfo.breakMinutes}
                onChange={(newValue) => settingsInfo.setBreakMinutes(newValue.target.value)}
            >
            </input>
        </div>
    )
}