'use client'

import Link from "next/link";

export default function MainPageNotFound() {
    return (
        <main className='flex justify-center items-center flex-col gap-6'>
            <h1 className='text-3xl font-semibold'>Something went wrong as the page is not found!</h1>
            <Link href='/' className='inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg'>Go Back to Home</Link>
        </main>
    );
}