"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface NutritionalInfo {
  servingSize: string
  servingsPerContainer: string
  calories: number
  totalFat: string
  saturatedFat: string
  transFat: string
  cholesterol: string
  sodium: string
  totalCarbohydrate: string
  dietaryFiber: string
  totalSugars: string
  addedSugars: string
  protein: string
  vitaminD: string
  calcium: string
  iron: string
  potassium: string
}

interface ProductData {
  nutritionalInfo: NutritionalInfo
  ingredients: string
}

interface ProductTabsProps {
  product: ProductData
}

export default function ProductTabs({ product }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState("nutritional-info")

  const tabs = [
    { id: "nutritional-info", label: "Nutritional Information" },
    { id: "ingredients", label: "Ingredients" },
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-6 border-b border-gray-200">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-6 py-3 text-sm font-medium whitespace-nowrap",
                  activeTab === tab.id
                    ? "text-[#6B0F1A] border-b-2 border-[#6B0F1A]"
                    : "text-gray-600 hover:text-[#6B0F1A]",
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          {activeTab === "nutritional-info" && (
            <div>
              <h2 className="text-xl font-medium text-[#4A2328] mb-4">Nutrition Facts</h2>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="border-b border-gray-200 p-4">
                  <p className="text-sm">
                    <span className="font-bold">Serving Size:</span> {product.nutritionalInfo.servingSize}
                  </p>
                  <p className="text-sm">
                    <span className="font-bold">Servings Per Container:</span>{" "}
                    {product.nutritionalInfo.servingsPerContainer}
                  </p>
                </div>

                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left p-4 font-bold" colSpan={2}>
                        Amount Per Serving
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-gray-200">
                      <td className="p-4 font-bold">Calories</td>
                      <td className="p-4 text-right">{product.nutritionalInfo.calories}</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="p-4 text-right font-bold" colSpan={2}>
                        % Daily Value*
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="p-4">
                        <span className="font-bold">Total Fat</span> {product.nutritionalInfo.totalFat}
                      </td>
                      <td className="p-4 text-right">3%</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="p-4 pl-8">Saturated Fat {product.nutritionalInfo.saturatedFat}</td>
                      <td className="p-4 text-right">3%</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="p-4 pl-8">Trans Fat {product.nutritionalInfo.transFat}</td>
                      <td className="p-4 text-right"></td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="p-4">
                        <span className="font-bold">Cholesterol</span> {product.nutritionalInfo.cholesterol}
                      </td>
                      <td className="p-4 text-right">0%</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="p-4">
                        <span className="font-bold">Sodium</span> {product.nutritionalInfo.sodium}
                      </td>
                      <td className="p-4 text-right">10%</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="p-4">
                        <span className="font-bold">Total Carbohydrate</span>{" "}
                        {product.nutritionalInfo.totalCarbohydrate}
                      </td>
                      <td className="p-4 text-right">9%</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="p-4 pl-8">Dietary Fiber {product.nutritionalInfo.dietaryFiber}</td>
                      <td className="p-4 text-right">4%</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="p-4 pl-8">Total Sugars {product.nutritionalInfo.totalSugars}</td>
                      <td className="p-4 text-right"></td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="p-4 pl-12">Includes {product.nutritionalInfo.addedSugars} Added Sugars</td>
                      <td className="p-4 text-right">6%</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="p-4">
                        <span className="font-bold">Protein</span> {product.nutritionalInfo.protein}
                      </td>
                      <td className="p-4 text-right"></td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="p-4">Vitamin D {product.nutritionalInfo.vitaminD}</td>
                      <td className="p-4 text-right">0%</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="p-4">Calcium {product.nutritionalInfo.calcium}</td>
                      <td className="p-4 text-right">4%</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="p-4">Iron {product.nutritionalInfo.iron}</td>
                      <td className="p-4 text-right">6%</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="p-4">Potassium {product.nutritionalInfo.potassium}</td>
                      <td className="p-4 text-right">2%</td>
                    </tr>
                  </tbody>
                </table>

                <div className="p-4 text-xs text-gray-600">
                  * The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily
                  diet. 2,000 calories a day is used for general nutrition advice.
                </div>
              </div>
            </div>
          )}

          {activeTab === "ingredients" && (
            <div>
              <h2 className="text-xl font-medium text-[#4A2328] mb-4">Ingredients</h2>
              <p className="text-gray-700 leading-relaxed">{product.ingredients}</p>

              <div className="mt-6">
                <h3 className="text-lg font-medium text-[#4A2328] mb-2">Storage Instructions</h3>
                <p className="text-gray-700">
                  For best quality, store in a cool, dry place. To maintain freshness, twist bag tightly and secure with
                  twist tie after each use.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
