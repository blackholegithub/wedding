import React from "react";

interface UserPageProps {
  children?: React.ReactNode;
}

const UserPage: React.FC<UserPageProps> = ({ children }) => {
  return (
    <>
      <div className='text-red-600'>hello User Page</div>
      {children}
    </>
  );
};

export default UserPage;
