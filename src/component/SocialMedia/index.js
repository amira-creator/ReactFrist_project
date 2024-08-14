import React, { Component } from "react";
import {SocialMediaSection, Social, Icon, Paragraph, Span, SpanInfo} from "./style.js"
import axios from "axios";

class SocialMedia extends Component {
    state = {
        social: []
    }
    componentDidMount () {
        axios.get('js/data.json').then((res) => {this.setState({social: res.data.social})})
    }

    render(){
        const {social} = this.state;
        const socialList = social.map((socialItem) => {
            return(
            <Social item={socialItem.id} key={socialItem.id}>
                <Icon className={socialItem.icon}></Icon>
                <Paragraph>
                    <Span>{socialItem.title}</Span>
                    <SpanInfo>{socialItem.body}</SpanInfo>
                </Paragraph>
            </Social>

            )
        })
        return(
            <SocialMediaSection>
                
            {socialList}
           
            
        </SocialMediaSection>
        )
    }
}
export default SocialMedia;