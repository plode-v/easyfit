import useAuthContext from "./useAuthContext";
import useFoodsContext from "./useFoodsContext"

const useLogout = () => {
    const { dispatch } = useAuthContext();
    const { dispatch: foodsDispatch } = useFoodsContext();

    const logout = async () => {
        localStorage.removeItem("user")

        dispatch({ type: "LOGOUT" })
        foodsDispatch({ type: "SET_FOODS", payload: null });
    }
    return { logout };
}

export default useLogout;