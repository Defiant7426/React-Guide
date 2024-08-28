import { cotegories } from "../data/categories"

export default function Form() {
  return (
    <form className="space-y-5 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="grid grid-cols-1 gap-3 mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
            Calorías
            </label>
            <select
            className="shadow appearance-none border border-slate-300 bg-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="category"
            >
            {cotegories.map((category) => (
                <option key={category.id} value={category.id}>
                {category.name}
                </option>
            ))}
            <select/>
        </div>
        <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="calories">
            Calorias
            </label>
            <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="calories"
            type="number"
            placeholder="Calorias"
            />
        </div>
        <div className="flex items-center justify-between">
            <button
            className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            >
            Agregar
            </button>
        </div>
    </form>
  )
}
