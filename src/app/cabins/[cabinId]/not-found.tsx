'use client'

import Link from "next/link";

export default function CabinPageNotFound() {
    return (
        <main className='flex justify-center items-center flex-col gap-6'>
            <h1 className='text-3xl font-semibold'>Cabin with provided ID is not found</h1>
            <Link href='/cabins' className='inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg'>Go Back to Cabins</Link>
        </main>
    );
}