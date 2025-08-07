'use server'
 
import { redirect } from 'next/navigation'
import { endpoint } from './api_Endpoints'
 
export async function createUser(prevState, formData) {
  const res = await fetch(endpoint.AUTH,)
  const data = await res.json()
 
  if (!res.ok) {
    return { message: 'Please enter a valid email' }
  }
 
  redirect('/dashboard')
}