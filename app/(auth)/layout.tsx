import React from 'react';

function Layout({children}: {children: React.ReactNode}) {
    return (
       <div className="flex flex-col items-center h-screen">
           {children}
       </div>
    );
}

export default Layout;