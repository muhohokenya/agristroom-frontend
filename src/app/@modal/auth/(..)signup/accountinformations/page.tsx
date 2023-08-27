import AccountInformation from "@/src/components/AccountInformations";

interface Props { }

function Page(props: Props) {
  const { } = props;

  return (
    <div className="absolute w-full max-w-[1440px] mx-auto flex">
      <AccountInformation />
    </div>
  );
}

export default Page;
