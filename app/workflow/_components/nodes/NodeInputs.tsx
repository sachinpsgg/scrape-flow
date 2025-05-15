import React, {ReactNode} from 'react';
import {Handle, Position} from "@xyflow/react";
import {cn} from "@/lib/utils";
import {TaskParams} from "@/types/task";
import NodeParamField from "@/app/workflow/_components/nodes/NodeParamField";
import {ColorForHandle} from "@/app/workflow/_components/nodes/Common";

export function NodeInputs({children}:{children:ReactNode}) {
    return (
        <div className="divide-y flex flex-col gap-2">{children}</div>
    );
}


export function NodeInput({input,nodeId}:{input:TaskParams;nodeId:string}) {
    return (
        <div className="flex justify-start relative p-3 bg-secondary w-full">
            <NodeParamField param={input} nodeId={nodeId}/>
            {!input.hideHandle && (
                <Handle id={input.name} type="target" position={Position.Left}
                                           className={cn("!bg-muted-foreground !border-2 !border-background !-left-2 !w-4 !h-4",ColorForHandle[input.type])}
            />
            )}
        </div>
    );
}