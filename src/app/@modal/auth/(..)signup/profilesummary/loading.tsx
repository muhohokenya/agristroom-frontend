import Modal from '@/src/components/modals/Modal';
import { jost } from '@/src/fonts/Fonts';
import { FaSpinner } from 'react-icons/fa';

export const loading = () => {
  return (
    <Modal>
      <div className="flex w-full items-center justify-center">
        <div className="flex items-center justify-center w-[300px] h-[200px] bg-white rounded-lg">
          <div className="flex flex-col gap-3 mx-10 items-center justify-center  ">
            <span className="">
              <FaSpinner className="animate-spin h-20 max-h-20 w-20 max-w-20 text-[#2F9B4E]" />
            </span>
            <h2 className={`font-[600] text-[20px] leading-[18px] mt-2  tracking-[0.04em] text-[#2F9B4E] ${jost.className}`}>Loading next page.</h2>
          </div>
        </div>
      </div>
    </Modal>
  )
}
export default loading;
