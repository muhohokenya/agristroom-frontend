"use client"
import { useAppDispatch } from '@/src/hooks/react-redux-hooks';
import { getAllUsers } from '@/src/redux/actions/getAllUsers';
import { useEffect, useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { columns } from './columns';
import { DataTable } from './data-table';

export interface IUser {
  id: string
  name: string,
  phone_number: string;
  country: string;
  county: string;
  email: string;
  username: string;
  created_at: string;
  first_name: string;
  last_name: string;
  account: {
    id: number;
    name: string
  }
  updated_at: string;
  posts: any[];
  replies: any[]


}


export default async function RemovableSortUsersTable() {
  const [users, setUsers] = useState<IUser[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true)
      let res: any = await dispatch(getAllUsers())
      setUsers(res?.payload?.users);
      setLoading(false)
    }

    fetchUsers();
  }, [dispatch])

  return (
    <div className='mx-2 mt-[77px] py-[10px]'>
      {loading ? (
        <div className='w-full h-screen flex items-center justify-center'>
          <FaSpinner className="animate-spin max-h-16 max-w-16 mr-2 text-[#2F9B4E]" />
        </div>
      ) : (
        <DataTable columns={columns} data={users} value='email' />
      )}
    </div>
  );
}