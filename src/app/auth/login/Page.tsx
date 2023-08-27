import Navbar from "@/src/components/Navbar";
import Login from "@/src/components/auth/Login";

function LoginPage() {
    return (
        <div className="min-h-[100vh] bg-zinc-200 flex items-center justify-center">
            <Navbar />
            <Login />
        </div>
    );
};

export default LoginPage;
