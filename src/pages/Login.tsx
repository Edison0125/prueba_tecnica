const Login = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100 justify-center">
            <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-150 rounded-md">
                <h1 className="font-medium text-center mb-5">Inicio de sesión</h1>
                <form action="" className="space-y-5">
                    <div>
                        <label htmlFor="" className="block text-sm">Email</label>
                        <input type="email" className="w-full border border-gray-150 rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="" className="block text-sm">Password</label>
                        <input type="password" className="w-full border border-gray-150 rounded-md" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input type="checkbox" className="h-4 w-4 border-gray-150 cursor-pointer" />
                            <label htmlFor="" className="ml-2 text-sm text-gray-600">Recuérdame</label>
                        </div>
                    </div>
                    <div>
                        <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm font-medium">Iniciar sesión</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Login;