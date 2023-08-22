import Navbar from "@/src/components/Navbar"
import ForgetPassword from "@/src/components/auth/forgot-password"


const ForgotPassword = () => {
    return (
        <div className="min-h-[100vh] bg-zinc-200 flex items-center justify-center">
            <Navbar />
            <ForgetPassword />
        </div>
    )
}

export default ForgotPassword