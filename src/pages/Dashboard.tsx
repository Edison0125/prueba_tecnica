import { useState } from "react";
import TaskCard from "../components/TaskCard.tsx";
import TaskFormModal from "../components/TaskFormModal.tsx";

const Dashboard = () => {
    const [isModalOpenTaskModal, setIsModalOpenTaskModal] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col m-0 p-0">
            {/* Barra */}
            <div className="h-20 flex items-start justify-between bg-blue-950 py-6 px-6">
                <h1 className="text-lg font-semibold text-left text-white">Gestión de tareas</h1>
                <button className="text-lg font-semibold text-left text-white hover:bg-blue-900">Cerrar sesión</button>
            </div>
            {/* Contenido principal */}
            <div className="flex-grow grid grid-cols-4 gap-10 bg-gray-100 p-10 rounded-md overflow-y-auto">
                <TaskCard />
                <div className="flex justify-center p-4 bg-white rounded-md shadow-md  max-h-[300px] hover:bg-slate-50">
                    <button onClick={() => setIsModalOpenTaskModal(true)} className="align-middle items-center "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-14">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    </button>
                </div>
            </div>
            <TaskFormModal isOpen={isModalOpenTaskModal} onClose={() => setIsModalOpenTaskModal(false)} />
        </div>
    );
};

export default Dashboard;