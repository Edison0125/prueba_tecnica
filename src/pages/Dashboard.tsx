const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Navbar */}
            <div className="h-24 bg-white flex justify-between items-center px-6">
                <div className="bg-white p-0 rounded-md">
                    <h1 className="text-lg font-semibold">Gestión de tareas</h1>
                </div>
                <div className="bg-white p-4 rounded-md">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
                        Agregar tarea
                    </button>
                </div>
            </div>

            {/* Contenido principal con sidebar */}
            <div className="flex flex-1">
                {/* Sidebar */}
                <div className=" bg-white text-black pl-6 pr-12 space-y-6">
                    <div className="flex items-center space-x-2">
                        <span className="h-6 w-6 bg-purple-300 rounded-full"></span>
                        <span className="text-gray-700">Trabajo</span>
                    </div>

                    <div className="flex items-center space-x-2">
                        <span className="h-6 w-6 bg-purple-300 rounded-full"></span>
                        <span className="text-gray-700">Estudio</span>
                    </div>

                    <div className="flex items-center space-x-2">
                        <span className="h-6 w-6 bg-purple-300 rounded-full"></span>
                        <span className="text-gray-700">Entretenimiento</span>
                    </div>

                    <div className="flex items-center space-x-2">
                        <span className="h-6 w-6 bg-purple-300 rounded-full"></span>
                        <span className="text-gray-700">Familia</span>
                    </div>

                    <div className="flex items-center space-x-2">
                        <span className="h-6 w-6 bg-purple-300 rounded-full"></span>
                        <span className="text-gray-700">Otros</span>
                    </div>
                    <div className="flex items-center space-x-2 mt-6">
                        <input type="checkbox" className="border-gray-150 cursor-pointer" />
                        <label htmlFor="" className="ml-3  text-gray-700">Ocultar tareas listas</label>
                    </div>

                </div>

                {/* Contenido principal */}
                <div className="flex-1 p-6 bg-gray-100">
                    Aquí va el contenido principal
                </div>
            </div>
        </div>

    );
};
export default Dashboard;