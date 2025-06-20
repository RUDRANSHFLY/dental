import React from 'react'
import Image from 'next/image'
import { StarIcon } from 'lucide-react'
import Link from 'next/link'

interface ReviewCardProps {
  url: string
  review: number
}

const ReviewCard = ({ url, review }: ReviewCardProps) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-2">
      <Image src={url} alt="Logo_brand" width={200} height={200} />

      <div className="flex gap-x-2">
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            className="w-5 h-5 fill-yellow-400 text-yellow-300"
          />
        ))}
      </div>

      <p className="text-gray-500 text-xl">4.0 out of 5</p>

      <Link
        href="/"
        className="text-2xl text-blue-500 font-medium border-b-2 border-blue-500 hover:text-blue-600 transition"
      >
        {review}+ Reviews
      </Link>
    </div>
  )
}

export default ReviewCard
