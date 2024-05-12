import React from "react";

interface FooterProps {
  title?: string;
  message?: string;
}

const Footer: React.FC<FooterProps> = ({ title, message }) => {
  return (
    <>
      <div className="w-full h-24 bg-slate-500">ĐÂY LÀ Footer</div>
    </>
  );
};

export default Footer;
