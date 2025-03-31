import TaskCard from "../components/TaskCard.tsx";

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col m-0 p-0">
            {/* Barra */}
            <div className="h-20 flex items-start bg-blue-950 py-6 px-6">
                <h1 className="text-lg font-semibold text-left text-white">Gestión de tareas</h1>
            </div>
            {/* Contenido principal */}
            <div className="flex-grow grid grid-cols-4 gap-4 bg-gray-100 p-10 rounded-md overflow-y-auto">
                <TaskCard />
                <div className="p-4 bg-white rounded-md shadow-md">
                    <button></button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;