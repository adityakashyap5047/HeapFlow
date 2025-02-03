"use client"
import QuestionForm from '@/components/QuestionForm'
import { useAuthStore } from '@/store/Auth'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

function Page() {

  const router = useRouter();
    const { session } = useAuthStore(); // Get session from auth store
    useEffect(() => {
        if (!session) {
            router.push("/login"); // Redirect to login if no session
        }
    }, [session, router]);

    if (!session) return null; // Prevent rendering if user is not authenticated

  return (
    <div className=''>
      <QuestionForm/>
    </div>
  )
}

export default Page