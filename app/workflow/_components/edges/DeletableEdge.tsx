"use client";

import {BaseEdge, EdgeLabelRenderer, EdgeProps, getSmoothStepPath} from "@xyflow/react";

export default function DeletableEdge(props:EdgeProps){
    const [edgePath,labelX,labelY] = getSmoothStepPath(props)
    return(
        <>
           <BaseEdge path={edgePath} markerEnd={props.markerEnd} style={props.style}/>
            <EdgeLabelRenderer>
                <div style={{
                    position: "absolute",
                    transform: `translate(-50%, -50%) translateX(${labelX}px,${labelY}px`,
                }}>
                    Del
                </div>
            </EdgeLabelRenderer>
        </>
    );

}