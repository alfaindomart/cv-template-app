/* eslint-disable react/prop-types */
// import { useState } from "react";
import Input from "../Input";
// import Output from "../../output";

export function ProfileInput(props) {
    const {email, phone, city, name, onChange} = props
    
    return(
    <>
        <Input onChange={onChange} value={name} htmlFor={"Name"} label={"Name"} type={"text"} id={"Name"} name={"Name"}/>
        <Input onChange={onChange} value={email} htmlFor={"Email"} label={"Email"} type={"email"} id={"Email"} name={"Email"}/>
        <Input onChange={onChange} value={phone} htmlFor={"Phone"} label={"Phone"} type={"number"} id={"Phone"} name={"Phone"}/>
        <Input onChange={onChange} value={city} htmlFor={"City"} label={"City"} type={"text"} id={"City"} name={"City"}/>
    </>
    )
}