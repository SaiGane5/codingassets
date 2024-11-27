const Login = () => {
    return (
        <div className="bg-black h-screen flex justify-center items-center">
            <div id="login" className="max-h-fit flex flex-col justify-center max-w-fit bg-[#1d1b1b] rounded-3xl">
                <h2 className="text-[#FFD700] text-3xl font-bold text-center p-5">Login</h2>
                <div className="flex flex-col">
                    <input type="text" placeholder="Username:" className="rounded-3xl bg-black p-5 m-5 text-white"/>
                    <input type="password" placeholder="Password:" className="rounded-3xl bg-black p-5 m-5 text-white"/>
                </div>
                <div>
                    <button type="submit" className="rounded-3xl bg-[#FFD700] p-5 m-5">Submit</button>
                    <p className="p-5 text-white">Don't have an account?<a href="/register" className="text-[#FFD700] m-2">Register</a></p>
                </div>
            </div>
        </div>
    );
}

export default Login;