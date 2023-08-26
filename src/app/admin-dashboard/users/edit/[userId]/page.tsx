
const page = ({ params }: { params: { userId: number } }) => {
    return (
        <div className="mx-5 mt-[77px] py-[10px]">edit user with id : {params?.userId} </div>
    )
}

export default page