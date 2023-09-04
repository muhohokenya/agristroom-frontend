"use client"

import { DataTableColumnHeader } from "@/src/components/DataTableColumnHeader";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/src/components/DropDown";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/src/components/ui/AlertDialog";
import { Button } from "@/src/components/ui/Button";
import { Checkbox } from "@/src/components/ui/CheckBox";
import { formatDate } from "@/src/lib/constants";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import Image from 'next/image';
import Link from "next/link";
import { IUser } from "./page";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


export const columns: ColumnDef<IUser>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={table.getIsAllPageRowsSelected()}
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
                className="!w-4"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
                className="!w-4"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "username",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                    className="text-start whitespace-nowrap  px-0"
                >
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const username: string = row.getValue("username")
            return <div className="flex items-center gap-3 justify-start">{username}
                <Image
                    src="/Flag_of_Kenya.png"
                    alt="photo"
                    width={20}
                    height={10}
                    className="lg:block rounded-sm h-4"
                /></div>
        }
    },
    {
        accessorKey: "email",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                    className="text-start whitespace-nowrap  px-0"
                >
                    Email
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "created_at",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                    className="text-start  px-0"
                >
                    Date Registered
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const date: string = row.getValue("created_at")
            const formatted = formatDate(date)
            return <div>{formatted}</div>
        }

    },
    {
        accessorKey: "posts",
        header: ({ column }) => (
            <DataTableColumnHeader className="text-start whitespace-nowrap  px-0" column={column} title="Qstn Count" />
        ),
        cell: ({ row }) => {
            const posts: string[] = row.getValue("posts")
            const formatted = `${posts.length}`
            return <div>{formatted}</div>
        }
    },
    {
        accessorKey: "account",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                    className="text-start  px-0"
                >
                    Account Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const account: any = row.getValue("account")
            const formatted = `${account?.name}`
            return <div>{formatted}</div>
        }
    },
    {
        accessorKey: "interests",
        header: () => <div className="text-start">Interests</div>,
        cell: ({ row }) => {
            const interests: any = row.getValue("interests")
            const formatted = interests?.length <= 2 ? `${interests[0]?.name ?? ""} ${interests[1]?.name ?? ""}` : (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className="text-start text-blue-500 underline cursor-pointer">{`Interests ${interests.length}`}</div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='w-40'>
                        <DropdownMenuLabel>Interests</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <ul>
                            {interests.map((item: any, index: any) => {
                                return (
                                    <li key={index}>{item?.name}</li>
                                )
                            })}
                        </ul>
                    </DropdownMenuContent>
                </DropdownMenu>

            )
            return <div>{formatted}</div>
        }
    },
    {
        accessorKey: "replies",
        header: "Answrs Count",
        cell: ({ row }) => {
            const replies: any = row.getValue("replies")
            const formatted = `${replies?.length}`
            return <div>{formatted}</div>
        }
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const user = row.original;
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
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(user?.email)}
                        >
                            Copy User Email
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <Link href={`/admin-dashboard/users/view/${user?.id}`}>View User</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href={`/admin-dashboard/users/edit/${user?.id}`}>Edit User</Link>
                        </DropdownMenuItem>
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <button className="px-2 py-1.5 text-sm text-red-500 font-semibold">Delete User</button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This action cannot be undone. This will permanently delete the
                                        user and remove from database.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel className="boarder !border-red-500">Cancel</AlertDialogCancel>
                                    <AlertDialogAction onClick={() => {
                                        console.log('====================================');
                                        console.log("deleting");
                                        console.log('====================================');
                                    }} className="!bg-red-500">Continue</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }
]