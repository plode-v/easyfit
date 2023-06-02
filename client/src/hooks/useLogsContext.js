import { LogsContext } from "../context/LogContext"
import { useContext } from "react"

const useLogsContext = () => {
    const context = useContext(LogsContext);

    if (!context) {
        throw Error("useLogsContext must be used inside a LogContextProvider")
    }
    return context
}

export default useLogsContext;