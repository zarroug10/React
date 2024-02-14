import React from "react";

class DynamicComponent extends React.Component{
    render(){
        const { content } = this.props;
        return (
            <div>
                <p>{content}</p>
            </div>
        );
    }
}

export default DynamicComponent ;