import { useState } from "react";
import TaskFormModal from "../components/TaskFormModal.tsx";
import DeleteTaskFormModal from "../components/DeleteTaskModal.tsx";

const TaskCard = () => {
    const [isModalOpenTaskModal, setIsModalOpenTaskModal] = useState(false);
    const [isModalOpenDeleteModal, setIsModalOpenTaskDeleteModal] = useState(false);

    return (
        <div className="max-w-md p-4 bg-white rounded-md shadow-md space-y-5 max-h-[300px] overflow-auto">
            {/* Parte superior de la card */}
            <div className="flex justify-between mb-3">
                <h3 className="text-lg font-semibold">Título de la tarea</h3>

            </div>
            {/*Descripción de la tarea*/}
            <div>
                <p className="text-gray-600 text-wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum tristique lectus at luctus. Duis quis auctor nulla
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum tristique lectus at luctus. Duis quis auctor nulla..</p>
            </div>
            {/* Espacio de la fecha */}
            <div className="space-y-5">
                <p className="text-sm text-gray-300 text-wrap">mm/dd/aaaa</p>
            </div>
            {/* Parte inferior de la card */}
            <div className="flex  justify-between">
                <div className="flex items-center space-x-2">
                    <input type="checkbox" className="border-gray-150 cursor-pointer" />
                    <label htmlFor="" className="ml-3  text-gray-700">Finalizada</label>
                </div>
                <div className="">
                    <button onClick={() => setIsModalOpenTaskModal(true)} className="text-white bg-blue-700  hover:bg-blue-800 font-medium text-sm rounded-md pt-1 pb-1 pl-3 pr-3 mr-3">Editar</button>
                    <button onClick={() => setIsModalOpenTaskDeleteModal(true)} className="text-white bg-red-800 hover:bg-red-900 font-medium text-sm rounded-md pt-1 pb-1 pl-3 pr-3">Eliminar</button>
                    <TaskFormModal isOpen={isModalOpenTaskModal} onClose={() => setIsModalOpenTaskModal(false)} />
                    <DeleteTaskFormModal isOpen={isModalOpenDeleteModal} onClose={() => setIsModalOpenTaskDeleteModal(false)} />
                </div>
            </div>
        </div>

    );
};

export default TaskCard;