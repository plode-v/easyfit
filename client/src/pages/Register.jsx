import { SignupForm } from "../components"
import { useRegister } from "../hooks"


const Register = () => {

    const { error, success } = useRegister();

    return (
        <div className="flex justify-center items-center h-screen bg-green-500 w-full">
            {success && 
                <div>
                    <h1>{success}</h1>
                </div>
            }
            <SignupForm />
            {error && (
                <div>
                    <h1>{error}</h1>
                </div>
            )}
        </div>
    )
}

export default Register