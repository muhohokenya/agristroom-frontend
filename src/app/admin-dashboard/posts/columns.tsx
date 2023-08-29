import { DataTableColumnHeader } from "@/src/components/DataTableColumnHeader";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/src/components/DropDown";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/src/components/ui/AlertDialog";
import { Button } from "@/src/components/ui/Button";
import { toast } from "@/src/hooks/use-toast";
import { BaseURL, formatDate } from "@/src/lib/constants";
import { ColumnDef } from "@tanstack/react-table";
import axios from "axios";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";


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


export const columns: ColumnDef<IPost>[] = [
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
                                        onClick={async () => {
                                            const response = await axios.delete(`${BaseURL}/delete-post/${post?.id}`);
                                            if (response?.data?.status === 200) {
                                                toast({
                                                    variant: "secondary",
                                                    title: "You have successfully deleted the post"
                                                })
                                            }
                                        }}
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
