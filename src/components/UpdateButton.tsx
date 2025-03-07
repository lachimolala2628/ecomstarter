'use client';

import React from 'react'
import { useFormStatus } from 'react-dom';

const UpdateButton = () => {

    const { pending } = useFormStatus();

    return (
        <button className='bg-pussy text-white p-2 rounded-md cursor-pointer disbled:bg-pink-200 disabled:cursor-not-allowed max-w-96 text-center' disabled={pending}>
            {pending ? "Updating..." : "Update"}
        </button>
    )
}

export default UpdateButton