import SingleQuiz from '@/components/dashboard/student/studentProfile/Quiz/SingleQuiz'
import { MATERIAL_BASE_URL } from '@/config/constants'
import { cookies } from 'next/headers'
import React from 'react'

async function getQuiz(id:string) {
  try{
    const res = await fetch( `${MATERIAL_BASE_URL}/quizes/${id}/student/result`,{
      method: "GET",
      cache : 'no-store',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${cookies().get("accessToken")?.value}`,
     }
   })
   if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  
  return await res.json()

  }catch(err){
    console.error("Failed to fetch data:", err);
  } 
    }

const QuizResult = async({ params }: { params: { id: string } }) => {
    const data = await getQuiz(params?.id)
  return (
    <>
          {data ? 
      <SingleQuiz data={data} />  
    : 
    <p className="text-center text-xl font-medium  text-red-500 " >wait untill the end date to see your full result</p>
    }

    </>
  )
}

export default QuizResult
