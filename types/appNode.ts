import {TaskParams, TaskType} from "@/types/task";
import {Node} from "@xyflow/react"
export interface AppNodeData {
    type:TaskType;
    inputs:Record<string,string>;
    [key:string]:any;

}
export interface ParamProps {
    param: TaskParams;
    value: string;
    updateNodeParamValue:(newValue:string)=>void;
}
export interface AppNode extends Node{
    data:AppNodeData;
}