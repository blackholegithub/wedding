import React from 'react';


interface  NotFoundPageProps {
    children?: React.ReactNode;
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({ children }) => {
  return <>
  <div className='text-red-600'>hello NotFound Page</div>
  {children}
  </>

 
};

export default NotFoundPage;