import React, { useEffect, useState } from "react";
import {PortfolioSection, PortfolioTitle,PortfolioList,Span,PortfolioItem,ImageWrapper,Images,OverLay,OverlaySpan} from "./style.js";
import axios from "axios";
const  Portoflio = () => {
    const [images , setImages] = useState([])

    useEffect( () => {
        axios.get('js/data.json').then((res) => {setImages(res.data.portfolio)})
    }, [])

    const PortfolioImages = images.map((imageItem) => {
        return(
            <ImageWrapper key={imageItem.id}>
                <Images src={imageItem.image} alt=""/>
                <OverLay>
                    <OverlaySpan>
                        Show Image
                    </OverlaySpan>
                </OverLay>
            </ImageWrapper>

        )
    })

    return(
      <PortfolioSection>
      <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
      <PortfolioList>
          <PortfolioItem>All</PortfolioItem>
          <PortfolioItem>HTML</PortfolioItem>
          <PortfolioItem>Photoshop</PortfolioItem>
          <PortfolioItem>Wordpress</PortfolioItem>
          <PortfolioItem>Mobile</PortfolioItem>
      </PortfolioList>
      
      <div className="box">
          
          {PortfolioImages }
    
      </div>
      
  </PortfolioSection>
    )
}
export default Portoflio;