import React from "react";
import Footer from "../Footer/index.js";
import {ContactSection, ContactTitle, Span, Form, Input, FormInput, InputText, InputEmail, InputSub, Textarea, InputSubmit} from "./style.js";

function Contact () {
    return(
        <React.Fragment>
            <ContactSection>
            <div class="container">
                <ContactTitle><Span>Contact </Span>Me A line</ContactTitle>
                <Form action="">
                    <FormInput>
                        <InputText placeholder="Your Name"/>
                        <InputEmail placeholder="Your Email"/>
                    </FormInput>
                    <InputSub type="text" class="sub" placeholder="Your Subject"/>
                    <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
                    <InputSubmit type="submit" value="Send Message"/>
                </Form>
            </div>
        </ContactSection>
        <Footer />

    </React.Fragment>
        
        
     
    )
}
export default Contact;