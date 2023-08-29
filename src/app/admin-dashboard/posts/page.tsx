"use client"
import { DataTableColumnHeader } from '@/src/components/DataTableColumnHeader';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/src/components/DropDown';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/src/components/ui/AlertDialog';
import { Button } from '@/src/components/ui/Button';
import { useAppDispatch } from '@/src/hooks/react-redux-hooks';
import { toast } from '@/src/hooks/use-toast';
import { BaseURL, formatDate } from '@/src/lib/constants';
import { getPosts } from '@/src/redux/actions/getPosts.action';
import axios from 'axios';
import { MoreHorizontal } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { DataTable } from '../users/data-table';

interface IPost {
  id: number;
  title: string;
  user: {
    id: number
    first_name: string
    last_name: string
    email: string
    username: string
  }
  replies: {
    id: number;
    text: string
  }[]
  votes: number
  created_at: string
}


export default async function RemovableSortUsersTable() {
  const [posts, setPosts] = useState<IPost[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const dispatch = useAppDispatch();
  const router = useRouter()

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      let res: any = await dispatch(getPosts())
      setPosts(res?.payload?.posts);
      setLoading(false)
    }

    fetchPosts();
  }, [dispatch])

  const deletePost = async (id: number) => {
    const response = await axios.delete(`${BaseURL}/delete-post/${id}`);
    if (response?.data?.status === 200) {
      toast({
        variant: "secondary",
        title: "You have successfully deleted the post"
      })
      router.refresh();
    } else {
      toast({
        variant: "destructive",
        title: "Try again something happened"
      })
    }
  }

  return (
    <div className='mx-2 mt-[77px] py-[10px]'>
      {loading ? (
        <div className='w-full h-screen flex items-center justify-center'>
          <FaSpinner className="animate-spin max-h-16 max-w-16 mr-2 text-[#2F9B4E]" />
        </div>
      ) : (
        <DataTable columns={[
          {
            accessorKey: "id",
            header: ({ column }) => (
              <DataTableColumnHeader className="text-start whitespace-nowrap  px-0" column={column} title="Question ID" />
            ),
          },
          {
            accessorKey: "title",
            header: ({ column }) => (
              <DataTableColumnHeader className="text-start whitespace-nowrap !max-w-20 px-0" column={column} title="Title" />
            ),
            cell: ({ row }) => {
              const title: any = row.getValue("title")
              return (
                <div>
                  {title?.length >= 50 ? `${title.substring(0, 50)}...` : title}
                </div>)
            }
          },
          {
            accessorKey: "user",
            header: ({ column }) => (
              <DataTableColumnHeader className="text-start whitespace-nowrap !max-w-52 px-0" column={column} title="Posted By" />
            ),
            cell: ({ row }) => {
              const user: any = row.getValue("user")
              const formatted = `${user?.first_name} ${user?.last_name}`
              return <div>{formatted}</div>
            }
          },
          {
            accessorKey: "replies",
            header: ({ column }) => (
              <DataTableColumnHeader className="text-start whitespace-nowrap !max-w-52 px-0" column={column} title="Answers Count" />
            ),
            cell: ({ row }) => {
              const replies: any = row.getValue("replies")
              const formatted = `${replies?.length}`
              return <div>{formatted}</div>
            }
          },
          {
            accessorKey: "created_at",
            header: ({ column }) => (
              <DataTableColumnHeader className="text-start whitespace-nowrap !max-w-52 px-0" column={column} title="Date Registered" />
            ),
            cell: ({ row }) => {
              const date: string = row.getValue("created_at")
              const formatted = formatDate(date)
              return <div>{formatted}</div>
            }
          },
          {
            id: "actions",
            cell: ({ row }) => {
              const post = row.original;
              return (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="default" className="h-5 w-10 p-0 flex items-center justify-center rounded-md ">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    {/* <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(post?.title)}
                        >
                            Copy Post Title
                        </DropdownMenuItem> */}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link href={`/admin-dashboard/posts/view/${post?.id}`}>View Post</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href={`/admin-dashboard/posts/edit/${post?.id}`}>Edit Post</Link>
                    </DropdownMenuItem>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <button className="px-2 py-1.5 text-sm text-red-500 font-semibold">Delete Post</button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete the
                            post and remove from database.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel className="boarder !border-red-500">Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => deletePost(post?.id)}
                            className="!bg-red-500">Continue</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </DropdownMenuContent>
                </DropdownMenu>
              )
            }
          },
        ]
        }
          data={posts} value='title'
        />
      )}
    </div>
  );
}