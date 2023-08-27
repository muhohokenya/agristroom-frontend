import SignUpPage from "@/src/components/auth/SignUp";

interface Props { }

function Page(props: Props) {
  const { } = props;

  return (
    <div className="absolute w-full max-w-[1440px] mx-auto flex">
      <SignUpPage />

    </div>
  );
}

export default Page;
