import { Database } from 'lucide-react';

export default function DatabaseDesign() {
  return (
    <div className="p-12 min-h-[600px]">
      <h1 className="text-4xl mb-8 text-[#6C2BD9]">Database Design</h1>
      
      <div className="flex items-center gap-3 mb-10">
        <Database className="w-8 h-8 text-[#6C2BD9]" />
        <p className="text-lg text-gray-700">Core database tables for Recipe Hub</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Users Table */}
        <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6 hover:shadow-lg transition-shadow">
          <div className="bg-blue-500 text-white rounded-lg p-3 mb-4 text-center">
            <h3 className="font-semibold text-lg">👥 Users</h3>
          </div>
          <div className="space-y-2 text-sm">
            <div className="bg-white p-2 rounded border border-blue-200">user_id (PK)</div>
            <div className="bg-white p-2 rounded border border-blue-200">name</div>
            <div className="bg-white p-2 rounded border border-blue-200">email</div>
            <div className="bg-white p-2 rounded border border-blue-200">phone</div>
            <div className="bg-white p-2 rounded border border-blue-200">created_at</div>
          </div>
        </div>
        
        {/* Recipes Table */}
        <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-6 hover:shadow-lg transition-shadow">
          <div className="bg-purple-500 text-white rounded-lg p-3 mb-4 text-center">
            <h3 className="font-semibold text-lg">📖 Recipes</h3>
          </div>
          <div className="space-y-2 text-sm">
            <div className="bg-white p-2 rounded border border-purple-200">recipe_id (PK)</div>
            <div className="bg-white p-2 rounded border border-purple-200">recipe_name</div>
            <div className="bg-white p-2 rounded border border-purple-200">description</div>
            <div className="bg-white p-2 rounded border border-purple-200">cooking_time</div>
            <div className="bg-white p-2 rounded border border-purple-200">servings</div>
            <div className="bg-white p-2 rounded border border-purple-200">category</div>
          </div>
        </div>
        
        {/* Ingredients Table */}
        <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6 hover:shadow-lg transition-shadow">
          <div className="bg-green-500 text-white rounded-lg p-3 mb-4 text-center">
            <h3 className="font-semibold text-lg">🥬 Ingredients</h3>
          </div>
          <div className="space-y-2 text-sm">
            <div className="bg-white p-2 rounded border border-green-200">ingredient_id (PK)</div>
            <div className="bg-white p-2 rounded border border-green-200">name</div>
            <div className="bg-white p-2 rounded border border-green-200">unit</div>
            <div className="bg-white p-2 rounded border border-green-200">price</div>
            <div className="bg-white p-2 rounded border border-green-200">category</div>
          </div>
        </div>
        
        {/* Recipe_Ingredients Table */}
        <div className="bg-orange-50 border-2 border-orange-300 rounded-xl p-6 hover:shadow-lg transition-shadow">
          <div className="bg-orange-500 text-white rounded-lg p-3 mb-4 text-center">
            <h3 className="font-semibold text-lg">🔗 Recipe_Ingredients</h3>
          </div>
          <div className="space-y-2 text-sm">
            <div className="bg-white p-2 rounded border border-orange-200">id (PK)</div>
            <div className="bg-white p-2 rounded border border-orange-200">recipe_id (FK)</div>
            <div className="bg-white p-2 rounded border border-orange-200">ingredient_id (FK)</div>
            <div className="bg-white p-2 rounded border border-orange-200">quantity</div>
            <div className="bg-white p-2 rounded border border-orange-200">unit</div>
          </div>
        </div>
        
        {/* Cart Table */}
        <div className="bg-pink-50 border-2 border-pink-300 rounded-xl p-6 hover:shadow-lg transition-shadow">
          <div className="bg-pink-500 text-white rounded-lg p-3 mb-4 text-center">
            <h3 className="font-semibold text-lg">🛒 Cart</h3>
          </div>
          <div className="space-y-2 text-sm">
            <div className="bg-white p-2 rounded border border-pink-200">cart_id (PK)</div>
            <div className="bg-white p-2 rounded border border-pink-200">user_id (FK)</div>
            <div className="bg-white p-2 rounded border border-pink-200">ingredient_id (FK)</div>
            <div className="bg-white p-2 rounded border border-pink-200">quantity</div>
            <div className="bg-white p-2 rounded border border-pink-200">added_at</div>
          </div>
        </div>
        
        {/* Orders Table */}
        <div className="bg-indigo-50 border-2 border-indigo-300 rounded-xl p-6 hover:shadow-lg transition-shadow">
          <div className="bg-indigo-500 text-white rounded-lg p-3 mb-4 text-center">
            <h3 className="font-semibold text-lg">📋 Orders</h3>
          </div>
          <div className="space-y-2 text-sm">
            <div className="bg-white p-2 rounded border border-indigo-200">order_id (PK)</div>
            <div className="bg-white p-2 rounded border border-indigo-200">user_id (FK)</div>
            <div className="bg-white p-2 rounded border border-indigo-200">total_amount</div>
            <div className="bg-white p-2 rounded border border-indigo-200">status</div>
            <div className="bg-white p-2 rounded border border-indigo-200">created_at</div>
          </div>
        </div>
        
        {/* Inventory Table */}
        <div className="bg-teal-50 border-2 border-teal-300 rounded-xl p-6 hover:shadow-lg transition-shadow">
          <div className="bg-teal-500 text-white rounded-lg p-3 mb-4 text-center">
            <h3 className="font-semibold text-lg">📦 Inventory</h3>
          </div>
          <div className="space-y-2 text-sm">
            <div className="bg-white p-2 rounded border border-teal-200">inventory_id (PK)</div>
            <div className="bg-white p-2 rounded border border-teal-200">ingredient_id (FK)</div>
            <div className="bg-white p-2 rounded border border-teal-200">warehouse_id</div>
            <div className="bg-white p-2 rounded border border-teal-200">quantity</div>
            <div className="bg-white p-2 rounded border border-teal-200">updated_at</div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-gray-100 border-l-4 border-gray-500 p-4 rounded">
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Note:</span> PK = Primary Key, FK = Foreign Key. This schema supports 
          recipe browsing, ingredient mapping, cart management, and order processing.
        </p>
      </div>
    </div>
  );
}
