"use client";
import React from 'react';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {TaskType} from "@/types/task";
import {TaskRegistry} from "@/lib/workflow/task/registry";
import {Button} from "@/components/ui/button";

function TaskMenu() {
    return (
        <aside className="w-[340px] min-w-[340px] max-w-[340px] border-r-2 border-separate h-full p-2 px-4 overflow-auto ">
            <Accordion type="multiple" className="w-full" defaultValue={["extraction"]}>
                <AccordionItem value="extraction">
                    <AccordionTrigger className="font-bold">
                        Data Extraction
                        <AccordionContent className="flex flex-col gap1">
                            <TaskMenuBtn taskType={TaskType.PAGE_TO_HTML}/>
                        </AccordionContent>
                    </AccordionTrigger>
                </AccordionItem>
            </Accordion>
        </aside>
    );
}

export default TaskMenu;
function TaskMenuBtn({taskType}:{taskType:TaskType}){
    const task = TaskRegistry[taskType];
    const onDragStart = (event: React.DragEvent,type:TaskType) => {
        event.dataTransfer.setData("application/reactflow",type);
        event.dataTransfer.effectAllowed = "move";
    }
    return <Button variant={"secondary"} className="gap-2 w-full flex justify-between items-center border" draggable onDragStart={event => onDragStart(event,taskType)}>
       <div className="flex gap-2">
           <task.icon size={20}/>
           {task.label}
       </div>
    </Button>
}