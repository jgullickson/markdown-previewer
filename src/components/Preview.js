import React from 'react';
import marked from 'marked';

class Preview extends React.Component {
  constructor(props){
    super(props);
    this.createMarkupfromContent = this.createMarkupFromContent.bind(this)
  }
  createMarkupFromContent() {
    return {
      __html: marked(this.props.content, {sanitize: true})
    }
  }
    render(){
      return (
        <div id='preview'>
          <h2 className='component-title'>Preview</h2>
          <h3>html output here</h3>
            {/* <textarea readOnly value={marked(this.props.content)}></textarea> */}
            <div dangerouslySetInnerHTML = {this.createMarkupFromContent()}/>
        </div>
      )
    }
  }

  export default Preview