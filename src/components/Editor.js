import React from 'react';

class Editor extends React.Component {
    // handleChange(e){
    //   this.setState({content: e.target.value})
    // }
    render(){
      return (
        <div id='editor'>
          <h2 className='component-title'>Editor</h2>
          <h3>enter markdown here</h3>
          <textarea id='markdown' value={this.props.content} onChange={this.props.handleChange}></textarea>
        </div>
      )
    }
  }

  export default Editor