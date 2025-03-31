interface DeleteTaskModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const DeleteTaskModal: React.FC<DeleteTaskModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
        <div>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-6 rounded-md shadow-md w-96">
                    <h2 className="text-lg font-semibold mb-4">Eliminar tarea</h2>
                    <p className="text-sm text-wrap">¿Está seguro de eliminar la tarea?</p>
                    <div className="flex justify-end space-x-2 mt-4">
                        <button onClick={onClose} className="text-white bg-red-800 font-medium text-sm rounded-md pt-1 pb-1 pl-3 pr-3">Cancelar</button>
                        <button className="text-white bg-blue-700 font-medium text-sm rounded-md pt-1 pb-1 pl-3 pr-3 mr-3">Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DeleteTaskModal;