import React, {Component, Fragment} from "react";
import YouTubeComp from "../../../component/YoutubeComp/YouTubeComp";

class YouTubeCompPage extends Component{
    render() {
        return (
            <Fragment>
                <p>YouTube Component</p>
                <hr />
                <YouTubeComp time="7.12" title="Tutorial React JS - Bagian 1" desc="2x ditonton. 2 hari yang lalu"/>
                <YouTubeComp time="8.02" title="Tutorial React JS - Bagian 2" desc="10x ditonton. 7 hari yang lalu"/>
                <YouTubeComp time="5.13" title="Tutorial React JS - Bagian 3" desc="842x ditonton. 20 hari yang lalu"/>
                <YouTubeComp time="4.55" title="Tutorial React JS - Bagian 4" desc="324x ditonton. 29 hari yang lalu"/>
                <YouTubeComp />
            </Fragment>
        );
    }
}

export default YouTubeCompPage;