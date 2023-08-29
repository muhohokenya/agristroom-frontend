const page = ({ params }: { params: { postId: number } }) => {
    return (
        <div className="mx-5 mt-[77px] py-[10px]">edit user with id : {params?.postId} </div>
    )
}

export default page