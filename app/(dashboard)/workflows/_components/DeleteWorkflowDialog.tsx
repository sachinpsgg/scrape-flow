"use client";
import React from 'react';
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription, AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle
} from "@/components/ui/alert-dialog";
import {Input} from "@/components/ui/input";
import {useMutation} from "@tanstack/react-query";
import {DeleteWorkflow} from "@/actions/workflows/deleteWorkflow";
import {toast} from "sonner";

interface Props {
    open: boolean;
    setOpen: (open: boolean) => void;
    workflowName: string;
    workflowId: string;
}
function DeleteWorkflowDialog({open,setOpen,workflowName,workflowId}:Props) {
    const [confirmText,setConfirmText] = React.useState("");
    const deleteMutation=useMutation({
        mutationFn:DeleteWorkflow,
        onSuccess:()=>{
            toast.success("Deleted!",{id:workflowId});
            setConfirmText("");
        },
        onError:()=>{
            toast.error("something went wrong!",{id:workflowId});
        },
    });
    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        If you delete this workflow, you will not be able to recover it.
                        <div className="flex flex-col py-4 gap-2">
                            <p>
                                If you sure, enter <b>{workflowName}</b> to confirm.
                            </p>
                            <Input value={confirmText} onChange={(e) => setConfirmText(e.target.value)} />
                        </div>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={()=>setConfirmText("")}>Cancel</AlertDialogCancel>
                    <AlertDialogAction disabled={confirmText!=workflowName||deleteMutation.isPending} className="bg-destructive text-destructive-foreground hover:bg-destructive/90" onClick={()=>{
                        toast.loading("Deleting Workflow...",{id:workflowId});
                        deleteMutation.mutate(workflowId)
                    }}>Delete</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export default DeleteWorkflowDialog;