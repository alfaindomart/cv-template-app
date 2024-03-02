import { useState } from "react";
// import DatePicker from "react-date-picker"
import Input from "./components/input";
import './form.css'
import Output from "./output";



export default function MainForm() {
    // const [value, onChange] = useState(new Date());
    const [inputValue, setInputValue] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
        "past-company-name": '',

        
    });

    function handleChange(e) {
        const {name, value} = e.target;
        setInputValue({
            ...inputValue,
            [name]: value
        })
    }

    return (
    <div className="content-wrap">
        <div className="form-wrap">
            <form>
                <Input htmlFor={"name"} label={"name"} type={"text"} className={"name"} name={"name"} value={inputValue.name} onChange={handleChange}></Input>
                <Input htmlFor={"email"} label={"Email"} type={"email"} className={"email"} name={"email"} value={inputValue.email} onChange={handleChange}></Input>
                <Input htmlFor={"phone"} label={"Phone"} type={"number"} className={"phone"} name={"phone"} value={inputValue.phone} onChange={handleChange}></Input>
                <Input htmlFor={"city"} label={"city"} type={"text"} className={"city"} name={"city"} value={inputValue.city} onChange={handleChange}></Input>
                <Input htmlFor={"past-company-name"} type={"text"} className={"past-company-name"} name={"past-company-name"} value={inputValue["past-company-name"]} onChange={handleChange} ></Input>
                <Input htmlFor={"past-location"} type={"text"} className={"past-location"} name={"past-location"} value={inputValue["past-location"]} onChange={handleChange} ></Input>
                <Input htmlFor={"past-position"} type={"text"} className={"past-position"} name={"past-position"} value={inputValue["past-position"]} onChange={handleChange} ></Input>
                <Input htmlFor={"past-responsibility"} type={"text"} className={"past-responsibility"} name={"past-responsibility"} value={inputValue["past-responsibility"]} onChange={handleChange} ></Input>
                
                {/* <div className="name-wrap">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="name" name="name" />
                </div>
                <div className="contact-wrap">
                    <div className="email-wrap">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="email" name="email" />
                    </div>
                    <div className="phone-wrap">
                        <label htmlFor="phone">Phone</label>
                        <input type="number" className="phone" name="phone"/>
                    </div>
                    <div className="city-wrap">
                        <label htmlFor="city">City</label>
                        <input type="text" className="city" name="city" />
                    </div>
                </div>
                <div className="past-work-wrap">
                    <div className="past-company-wrap">
                        <div>
                            <label htmlFor="past-company-name">Company Name</label>
                            <input type="text" className="past-company-name" name="past-company-name" />
                        </div>
                        <div>
                            <label htmlFor="date-pick">Date</label>
                            <div><DatePicker onChange={onChange} value={value} /></div>
                        </div>
                        <div>
                            <label htmlFor="past-location">Past company location</label>
                            <input type="text" className="past-location" name="past-location"/>
                        </div>
                        <div>
                            <label htmlFor="past-position">Past Position</label>
                            <input type="text" className="past-position" name="past-position" />
                        </div>
                        <div>
                            <label htmlFor="past-responsibility">Past Responsibility</label>
                            <input type="text" className="past-responsibility" name="past-responsibility" />
                        </div>
                        <button className="add-responsibility">add more</button>
                    </div>
                    <button className="add-past-company">add more</button>
                </div>
                <div className="past-education wrap">
                    <div className="past-education">
                        <div>
                            <label htmlFor="past-school"></label>
                            <input type="text" className="past-school" name="past-school" />
                        </div>
                        <div>
                            <label htmlFor="graduation-date">Graduated in</label>
                            <div><DatePicker onChange={onChange} value={value} /></div>
                        </div>
                        <div>
                            <label htmlFor="school-location">School Location</label>
                            <input type="text" className="school-location" name="school-location" />
                        </div>
                        <div>
                            <label htmlFor="degree">Degree</label>
                            <input type="text" className="degree" name="degree" />
                        </div>
                        <div>
                            <label htmlFor="school-achievement">Add honors, gpa, achievement, or club </label>
                            <input type="text" className="school-achievement" name="school-achievement" />
                        </div>
                        <button className="add-school-achievement">add more</button>
                    </div>
                </div>
                <div className="cert-skill-interests">
                    <label htmlFor="certifications">Certifications</label>
                    <input type="text" className="certifications" name="certifications"/>
                    <button className="add-cert-skill">add more</button>
                </div> */}
            </form>
        </div>
        <div className="cv-wrap">
            <Output text={inputValue.name}></Output>
            <br />
            <Output text={inputValue.email}></Output>
            <br />
            <Output text={inputValue['past-company-name']}></Output>
        </div>
    </div>
    )
}