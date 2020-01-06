import React from 'react';
import './App.css';
import Header from './components/Header';
import EditorContainer from './containers/EditorContainer';
import PreviewContainer from './containers/PreviewContainer';

class App extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div id='app'>
         <Header title='Markdown Previewer'/>
          <div className='row'>
          <EditorContainer />
          <PreviewContainer />
        </div>
      </div>
    )
  }
}

export default App;
