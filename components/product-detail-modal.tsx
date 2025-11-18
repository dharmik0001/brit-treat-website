"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface ProductDetail {
  id: string
  name: string
  image: string
  description: string
  weight: string
  packingDetails?: {
    packing: string
    layerQuantity: string
    palletQuantity: string
    innerBarcode: string
    outerBarcode: string
    containerCapacity: string
  }
  features: string[]
}

interface ProductDetailModalProps {
  product: ProductDetail | null
  isOpen: boolean
  onClose: () => void
}

export default function ProductDetailModal({ product, isOpen, onClose }: ProductDetailModalProps) {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen || !product) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transition-all duration-300 ${
          isAnimating ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Product Image */}
          <div className="relative h-80 md:h-full bg-gray-50 rounded-xl overflow-hidden">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain p-8" />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-[#0A3281] mb-2">{product.name}</h2>
              <p className="text-lg text-gray-600">{product.description}</p>
              <p className="text-sm font-semibold text-[#FF6B6B] mt-2">Net Weight: {product.weight}</p>
            </div>

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-[#0A3281] mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-[#FF6B6B] mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.packingDetails && (
              <div>
                <h3 className="text-xl font-bold text-[#0A3281] mb-3">Packing Details</h3>
                <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm">
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="font-semibold">Packing</span>
                    <span>{product.packingDetails.packing}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Layer Quantity</span>
                    <span>{product.packingDetails.layerQuantity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Pallet Quantity</span>
                    <span>{product.packingDetails.palletQuantity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Inner Barcode</span>
                    <span>{product.packingDetails.innerBarcode}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Outer Barcode</span>
                    <span>{product.packingDetails.outerBarcode}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">40ft. Container Capacity</span>
                    <span>{product.packingDetails.containerCapacity}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
