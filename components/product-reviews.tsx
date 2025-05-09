"use client"

import { useState } from "react"
import { Star, ThumbsUp, ThumbsDown, ChevronDown, Filter } from "lucide-react"
import { cn } from "@/lib/utils"

// Types for our reviews
interface Review {
  id: string
  author: string
  date: string
  rating: number
  title: string
  content: string
  helpful: number
  notHelpful: number
  verified: boolean
}

interface ProductReviewsProps {
  productId: string
  productName: string
}

// Mock data for reviews
const mockReviews: Review[] = [
  {
    id: "1",
    author: "Sarah J.",
    date: "2023-11-15",
    rating: 5,
    title: "Best bread for sandwiches!",
    content:
      "This is my family's favorite bread. The slices are thick and sturdy enough for any sandwich filling, but still soft and delicious. We go through a loaf every week!",
    helpful: 24,
    notHelpful: 2,
    verified: true,
  },
  {
    id: "2",
    author: "Michael T.",
    date: "2023-10-22",
    rating: 4,
    title: "Great taste, but doesn't last long",
    content:
      "The bread tastes amazing and has a great texture. My only complaint is that it seems to go stale faster than other brands. I have to keep it in the refrigerator to make it last the week.",
    helpful: 18,
    notHelpful: 3,
    verified: true,
  },
  {
    id: "3",
    author: "Emily R.",
    date: "2023-09-30",
    rating: 5,
    title: "Perfect for toast!",
    content:
      "I love how this bread toasts up. It gets crispy on the outside but stays soft on the inside. It's perfect with butter and jam for breakfast.",
    helpful: 15,
    notHelpful: 1,
    verified: true,
  },
  {
    id: "4",
    author: "David K.",
    date: "2023-09-05",
    rating: 3,
    title: "Good, but a bit pricey",
    content:
      "The bread is good quality, but it's more expensive than other brands. I'm not sure the difference in taste justifies the higher price point.",
    helpful: 12,
    notHelpful: 5,
    verified: false,
  },
  {
    id: "5",
    author: "Lisa M.",
    date: "2023-08-18",
    rating: 5,
    title: "Worth every penny!",
    content:
      "This bread reminds me of homemade bread from my childhood. The texture and flavor are perfect. I don't mind paying a little extra for quality like this.",
    helpful: 30,
    notHelpful: 2,
    verified: true,
  },
]

export default function ProductReviews({ productId, productName }: ProductReviewsProps) {
  const [sortOption, setSortOption] = useState("newest")
  const [filterRating, setFilterRating] = useState<number | null>(null)
  const [showReviewForm, setShowReviewForm] = useState(false)

  // Calculate average rating
  const totalRating = mockReviews.reduce((sum, review) => sum + review.rating, 0)
  const averageRating = totalRating / mockReviews.length
  const roundedAverage = Math.round(averageRating * 10) / 10

  // Calculate rating distribution
  const ratingCounts = [0, 0, 0, 0, 0]
  mockReviews.forEach((review) => {
    ratingCounts[5 - review.rating]++
  })
  const ratingPercentages = ratingCounts.map((count) => (count / mockReviews.length) * 100)

  // Sort and filter reviews
  const sortedAndFilteredReviews = [...mockReviews]
    .filter((review) => (filterRating ? review.rating === filterRating : true))
    .sort((a, b) => {
      if (sortOption === "newest") {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      } else if (sortOption === "oldest") {
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      } else if (sortOption === "highest") {
        return b.rating - a.rating
      } else if (sortOption === "lowest") {
        return a.rating - b.rating
      } else if (sortOption === "helpful") {
        return b.helpful - a.helpful
      }
      return 0
    })

  // Helper function to render stars
  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={cn("w-5 h-5", star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300")}
          />
        ))}
      </div>
    )
  }

  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-light text-[#4A2328] mb-8">Customer Reviews</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Overall Rating Summary */}
          <div className="lg:col-span-1 bg-gray-50 p-6 rounded-lg">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-[#4A2328] mb-2">{roundedAverage}</div>
              <div className="flex justify-center mb-2">{renderStars(Math.round(averageRating))}</div>
              <div className="text-sm text-gray-600">Based on {mockReviews.length} reviews</div>
            </div>

            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((rating, index) => (
                <div key={rating} className="flex items-center">
                  <button
                    onClick={() => setFilterRating(filterRating === rating ? null : rating)}
                    className="flex items-center hover:text-[#6B0F1A] transition-colors"
                  >
                    <span className="w-3">{rating}</span>
                    <Star className="w-4 h-4 ml-1 fill-yellow-400 text-yellow-400" />
                  </button>
                  <div className="flex-1 mx-3 bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-yellow-400 h-full rounded-full"
                      style={{ width: `${ratingPercentages[5 - rating]}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-600 w-8">{ratingCounts[5 - rating]}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowReviewForm(!showReviewForm)}
              className="mt-6 w-full bg-[#6B0F1A] text-white py-2 px-4 rounded hover:bg-[#4A2328] transition-colors"
            >
              Write a Review
            </button>
          </div>

          {/* Reviews List */}
          <div className="lg:col-span-2">
            {/* Filter and Sort Controls */}
            <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
              <div className="flex items-center">
                {filterRating && (
                  <div className="bg-gray-100 text-[#4A2328] px-3 py-1 rounded-full text-sm flex items-center mr-2">
                    {filterRating} Star
                    <button onClick={() => setFilterRating(null)} className="ml-2 text-gray-500 hover:text-[#6B0F1A]">
                      &times;
                    </button>
                  </div>
                )}
                <button
                  onClick={() => setFilterRating(null)}
                  className={cn("flex items-center text-sm", filterRating ? "text-[#6B0F1A]" : "text-gray-500")}
                >
                  <Filter className="w-4 h-4 mr-1" />
                  {filterRating ? "Clear Filter" : "Filter"}
                </button>
              </div>

              <div className="flex items-center">
                <span className="text-sm text-gray-600 mr-2">Sort by:</span>
                <div className="relative">
                  <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-md py-1 pl-3 pr-8 text-sm focus:outline-none focus:ring-1 focus:ring-[#6B0F1A] focus:border-[#6B0F1A]"
                  >
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                    <option value="highest">Highest Rated</option>
                    <option value="lowest">Lowest Rated</option>
                    <option value="helpful">Most Helpful</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Review Form */}
            {showReviewForm && (
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-medium text-[#4A2328] mb-4">Write a Review for {productName}</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">
                      Rating
                    </label>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          className="w-8 h-8 focus:outline-none"
                          aria-label={`${star} stars`}
                        >
                          <Star className="w-6 h-6 text-gray-300 hover:fill-yellow-400 hover:text-yellow-400" />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                      Review Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-[#6B0F1A] focus:border-[#6B0F1A]"
                      placeholder="Summarize your experience"
                    />
                  </div>

                  <div>
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                      Review
                    </label>
                    <textarea
                      id="content"
                      rows={4}
                      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-[#6B0F1A] focus:border-[#6B0F1A]"
                      placeholder="What did you like or dislike about this product?"
                    ></textarea>
                  </div>

                  <div className="flex justify-end space-x-3">
                    <button
                      type="button"
                      onClick={() => setShowReviewForm(false)}
                      className="py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="py-2 px-4 bg-[#6B0F1A] text-white rounded-md hover:bg-[#4A2328]">
                      Submit Review
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Reviews List */}
            <div className="space-y-6">
              {sortedAndFilteredReviews.length > 0 ? (
                sortedAndFilteredReviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 pb-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>{renderStars(review.rating)}</div>
                      <div className="text-sm text-gray-500">{formatDate(review.date)}</div>
                    </div>

                    <h3 className="font-medium text-[#4A2328] mb-1">{review.title}</h3>
                    <p className="text-gray-700 mb-3">{review.content}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-gray-700 mr-1">
                          {review.verified ? "Verified Purchaser" : "Customer"}
                        </span>
                        <span className="text-sm text-gray-500">• {review.author}</span>
                      </div>

                      <div className="flex items-center space-x-4 text-sm">
                        <span className="text-gray-500">Was this helpful?</span>
                        <button className="flex items-center text-gray-500 hover:text-[#6B0F1A]">
                          <ThumbsUp className="w-4 h-4 mr-1" />
                          <span>{review.helpful}</span>
                        </button>
                        <button className="flex items-center text-gray-500 hover:text-[#6B0F1A]">
                          <ThumbsDown className="w-4 h-4 mr-1" />
                          <span>{review.notHelpful}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No reviews match your current filter. Try adjusting your filter.</p>
                </div>
              )}
            </div>

            {/* Pagination */}
            {sortedAndFilteredReviews.length > 0 && (
              <div className="mt-8 flex justify-center">
                <nav className="flex items-center space-x-1">
                  <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
                    Previous
                  </button>
                  <button className="px-3 py-1 rounded-md bg-[#6B0F1A] text-white">1</button>
                  <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
                    2
                  </button>
                  <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
                    3
                  </button>
                  <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
                    Next
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
