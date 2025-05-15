"use client"
import React from 'react';
import {Button} from "@/components/ui/button";
import {CheckIcon} from "lucide-react";
import {useReactFlow} from "@xyflow/react";
import {useMutation} from "@tanstack/react-query";
import {updateWorkflow} from "@/actions/workflows/updateWorkflow";
import {toast} from "sonner";

function SaveBtn({workflowId}:{workflowId:string}) {
    const {toObject}= useReactFlow();
    const saveMutation = useMutation({
        mutationFn:updateWorkflow,
        onSuccess:() => {
            toast.success("Flow Saved Successfully",{id:"save workflow"});
        },
        onError:() => {
            toast.error("Something went wrong",{id:"save workflow"});
        }
    });
    return (
        <Button disabled={saveMutation.isPending} variant={"outline"} className="flex text-center gap-2" onClick={()=> {
            const workflowDefination = JSON.stringify(toObject());
            toast.loading("saving workflow...",{id:"save workflow"});
            saveMutation.mutate({
                id:workflowId,
                defination:workflowDefination,
            })
        } }>
            <CheckIcon size={16} className="stroke-green-400"/>
            Save</Button>
    );
}

export default SaveBtn;