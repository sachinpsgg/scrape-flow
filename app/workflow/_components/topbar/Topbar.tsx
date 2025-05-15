"use client"
import React from 'react';

import TooltipWrapper from "@/components/TooltipWrapper";
import {Button} from "@/components/ui/button";
import {ChevronLeftIcon} from "lucide-react";
import {useRouter} from "next/navigation";
import SaveBtn from "@/app/workflow/_components/topbar/SaveBtn";

interface Props{
    title:string;
    subTitle?:string;
    workflowId:string;
}
function Topbar ({title,subTitle,workflowId}:Props) {
    const router = useRouter();
    return (
        <header className="flex p-2 border-b-2 border-separate justify-between w-full h-[60px] sticky top-0 bg-background z-10">
            <div className="flex gap-1 flex-1">
                <TooltipWrapper content="Back">
                    <Button variant={"ghost"} size={"icon"} onClick={()=>router.back()}>
                        <ChevronLeftIcon size={20} />
                    </Button>
                </TooltipWrapper>
                <div>
                    <p className="text-ellipsis font-bold truncate">{title}</p>
                    {subTitle && (
                        <p className="text-xs text-muted-foreground truncate text-ellipsis">{subTitle}</p>
                    )}
                </div>
            </div>
            <div className="flex flex-1 justify-end gap-1">
                <SaveBtn workflowId={workflowId}/>
            </div>
        </header>
    );
}

export default Topbar;