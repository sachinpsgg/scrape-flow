import React from 'react';
import Logo from "@/components/Logo";

function Layout({children}: {children: React.ReactNode}) {
    return (
       <div className="flex flex-col items-center justify-center gap-4 h-screen">
           <Logo />
           {children}
       </div>
    );
}

export default Layout;