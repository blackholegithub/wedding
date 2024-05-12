import React from "react";
import './Introduce.css'

interface IntroduceProps {
  title?: string;
  message?: string;
}

const Introduce: React.FC<IntroduceProps> = ({ title, message }) => {
  return (
    <div className=" w-full min-h-screen  relative z-0">
      <div className="intro-wrapper xl:p-4 p-1 "> 
        <div className="flex-1 xl:p-4 px-10 py-2"> 
            <img className="img" src="https://img.lovepik.com/free-png/20220109/lovepik-most-beautiful-chinese-hand-writing-png-image_401314651_wh860.png" alt="" />
        </div>
        <div className="flex-1 xl:p-10 p-2 flex flex-col items-start justify-center" >  
            <p className="hidden lg:block my-3">Tên của em là Trần Phương Thu. Hiện tại em đang là học sinh lớp 4A1, trường Tiểu học Thị Trấn B. Gia đình em gồm 4 thành viên đó là bố, mẹ, anh và em. Bố của em đã ngoài bốn mươi tuổi. Bố em là một bác sĩ nhi nên công việc của bố rất bận. Bố thường trực ở bệnh viện cả cuối tuần. Bố em là một người rất hiền lành, có thể do tính chất công việc, bố rất nhẹ nhàng với trẻ em. Em rất ngưỡng mộ và tự hào về bố nhiều lắm. Còn mẹ em là một luật sư, công việc của mẹ rất bận nhưng mẹ vẫn luôn dành thời gian cho gia đình. Mẹ là một người nghiêm khắc và khó tính nhưng mẹ cũng rất đảm đang và giỏi việc nội trợ. </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Talk to us</button>
        </div>
      </div>
      <div className="intro-default-wrapper">ĐÂY LÀ Introduce  default</div>
    </div>
  );
};

export default Introduce;
