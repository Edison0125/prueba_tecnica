const TaskCard = () => {
    return (
        <div className=" max-w-md  p-4 bg-white rounded-md shadow-md space-y-5">
            {/* Parte superior de la card */}
            <div className="flex justify-between mb-3">
                <h3 className="text-lg font-semibold">Título de la tarea</h3>

            </div>
            {/*Descripción de la tarea*/}
            <div>
                <p className="text-gray-600 text-wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum tristique lectus at luctus. Duis quis auctor nulla.</p>
            </div>
            {/* Espacio de la fecha */}
            <div className="space-y-5">
                <p className="text-sm text-gray-300">mm/dd/aaaa</p>
            </div>
            {/* Parte inferior de la card */}
            <div className="flex  justify-between mt-">
                <div className="flex space-x-3">
                    <span className="h-6 w-6 bg-purple-300 rounded-full"></span>
                    <span className="h-6 w-6 bg-purple-300 rounded-full"></span>
                    <span className="h-6 w-6 bg-purple-300 rounded-full"></span>
                    <span className="h-6 w-6 bg-purple-300 rounded-full"></span>
                    <span className="h-6 w-6 bg-purple-300 rounded-full"></span>
                </div>

                <div className="flex items-center space-x-2">
                    <input type="checkbox" className="border-gray-150 cursor-pointer" />
                    <label htmlFor="" className="ml-3  text-gray-700">Finalizada</label>
                </div>
            </div>
        </div>

    );
};

export default TaskCard;