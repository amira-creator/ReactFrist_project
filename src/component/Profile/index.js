import React, { useEffect, useState } from "react";
import {ProfileSkills, Profilep  , ProfileList, ProfileItem, Span, Skills, SkillsDesc , Bar, Title, Perc,  Parent, ParentSpan, Sp1, Sp2, Sp3, ProfileSkillsTitle,ProtiSpan} from "./style.js"
import axios from "axios";
function Profile () {

    const [skills, setSkills] = useState([])

    useEffect(() => {
        axios.get('js/data.json').then((res) => {setSkills(res.data.profile)})
    }, []) 

    const proSkills = skills.map((skill) => {
        return(
        <Bar  key={skill.id}>
            <Title>{skill.title}</Title>
            <Perc>{skill.progress}</Perc>
            <Parent>
                <ParentSpan sp= {skill.id}></ParentSpan>
            </Parent>
        </Bar>
            
        )
    })


    return(
        <ProfileSkills>
            <div className="container">
                <Profilep >
                    <ProfileSkillsTitle><ProtiSpan>My </ProtiSpan>Profile</ProfileSkillsTitle>
                    <ProfileList>
                        <ProfileItem>
                            <Span>Name</Span>
                            Hamza Nabil
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Birthday</Span>
                            21/1/1996
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Address</Span>
                            Ain shams
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Phone</Span>
                            4444 5555 6666
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Email</Span>
                            hamza@hamza.com
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Website</Span>
                            <Span web>www.google.com</Span>
                        </ProfileItem>
                    </ProfileList>
                </Profilep>
                
                <Skills>
                    <ProfileSkillsTitle>Some <ProtiSpan>skills</ProtiSpan></ProfileSkillsTitle>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                    
                    {proSkills}
                </Skills>
                
            </div>
        </ProfileSkills>
    )
}
export default Profile;