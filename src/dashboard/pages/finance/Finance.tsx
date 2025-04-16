import { UserForm } from '@/dashboard/components/ui/UserForm'
import { UserTable } from '@/dashboard/components/ui/UserTable'
import React from 'react'

const Finance:React.FC = () => {
  return (
    <div>
    <div className='p-4 '>
        <UserTable />
    </div>
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Create User</h1>
      <UserForm />
    </div>
    </div>
  )
}

export default Finance