interface TaskModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const TaskFormModal: React.FC<TaskModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-md shadow-md w-96">
                <h2 className="text-lg font-semibold mb-4">Agregar / Editar Tarea</h2>

                {/* Contenido del modal */}
                <input
                    type="text"
                    placeholder="Título de la tarea"
                    className="w-full p-2 border rounded-md mb-4 text-sm"
                />

                <textarea
                    placeholder="Descripción"
                    className="w-full p-2 border rounded-md mb-2 text-sm"
                ></textarea>

                <div className="mt-0 mb-4">
                    <label htmlFor="task-date" className="block text-sm text-gray-700">Fecha de la tarea</label>
                    <input
                        type="date"
                        id="task-date"
                        className="border rounded-md p-2 w-full"
                    />
                </div>

                {/* Botones */}
                <div className="flex justify-end space-x-2">
                    <button onClick={onClose} className="text-white bg-red-800 font-medium text-sm rounded-md pt-1 pb-1 pl-3 pr-3">Cancelar</button>
                    <button className="text-white bg-blue-700 font-medium text-sm rounded-md pt-1 pb-1 pl-3 pr-3 mr-3">Guardar</button>
                </div>
            </div>
        </div>
    );
};

export default TaskFormModal;