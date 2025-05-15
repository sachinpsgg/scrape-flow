"use client";
import {TaskParams, TaskParamsType} from "@/types/task";
import StringParam from "@/app/workflow/_components/nodes/param/StringParam";
import {useReactFlow} from "@xyflow/react";
import {AppNode} from "@/types/appNode";
import {useCallback} from "react";
import BrowserInstanceParam from "@/app/workflow/_components/nodes/param/BrowserInstanceParam";

function NodeParamField({param,nodeId}: {param:TaskParams;nodeId:string}) {
    const {updateNodeData,getNode} =  useReactFlow();
    const node = getNode(nodeId) as AppNode;
    const value = node?.data.inputs?.[param.name];
    const updateNodeParamValue = useCallback((newValue:string)=>{
        updateNodeData(nodeId,{
            inputs:{
                ...node?.data.inputs,
                [param.name]:newValue,
            }
        })
    },[nodeId,updateNodeData,param.name,node?.data.inputs]);
   switch (param.type) {
       case TaskParamsType.STRING:
           return <StringParam param={param} value={value} updateNodeParamValue={updateNodeParamValue}/>;
       case TaskParamsType.BROWSER_INSTANCE:
           return <BrowserInstanceParam param={param} value="" updateNodeParamValue={updateNodeParamValue}/>;
           default:
               return (
                   <div className="w-full">
                       <p className="text-xs text-muted-foreground">Not Implemented</p>
                   </div>
               );
   }
}

export default NodeParamField;