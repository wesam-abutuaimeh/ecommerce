import Link from 'next/link'

export default function NotFound() {
    return (
        <div>
            <h2>Whoops! Page Not Found</h2>
            <Link href="/">Return Home</Link>
        </div>
    )
}