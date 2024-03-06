/* eslint-disable react/prop-types */
// import { useState } from "react";
import Input from "../Input";
// import Output from "../../output";

export function ProfileInput() {
    
    return(
    <>
        <Input htmlFor={"name"} label={"name"} type={"text"} className={"name"} name={"name"}  ></Input>
        <Input htmlFor={"email"} label={"Email"} type={"email"} className={"email"} name={"email"}  ></Input>
        <Input htmlFor={"phone"} label={"Phone"} type={"number"} className={"phone"} name={"phone"}  ></Input>
        <Input htmlFor={"city"} label={"city"} type={"text"} className={"city"} name={"city"}  ></Input>
    </>
    )

}