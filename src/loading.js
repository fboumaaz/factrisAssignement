import React, { Component  } from "react";
import ReactLoading from 'react-loading';
import { Section, Article, Prop } from "./generic";

 
class Loading extends Component {
    render(){
        return(
            <Section>
                <Article key='loading'>
                <ReactLoading type='bubbles' height = "102px" width = "132px" color="#2b53b3d9" />   
                <Prop>Loading</Prop>
                </Article>
            </Section>
        )
       
    }
   
} 
export default Loading;