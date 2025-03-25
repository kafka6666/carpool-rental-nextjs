import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/" className="text-3xl font-bold text-orange-500 flex items-center">
      Car<span className="text-blue-500">Pool</span>
    </Link>
  )
}

export default Logo