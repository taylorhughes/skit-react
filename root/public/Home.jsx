'use strict';

var dom = skit.browser.dom;
var Controller = skit.platform.Controller;
var navigation = skit.platform.navigation;
var util = skit.platform.util;

var BaseController = library.BaseController;


var MyStupidTypingThing = React.createClass({
  getInitialState: function() {
    return {text: this.props.text || '(set ?foo= in the URL)'};
  },
  handleKeyUp: function(event) {
    this.setState({text: event.target.value});
  },
  render: function() {
    return (<div>
      <p>Type here: <input onKeyUp={this.handleKeyUp}/></p>
      <p>Whoa: {this.state.text}</p>
    </div>);
  }
});


// This is the normal "controller" for this URL in skit, which renders HTML
// and then takes over in the client.
module.exports = Controller.create(BaseController, {
  __title__: function() {
    return 'Home';
  },

  __body__: function() {
    var fooFromQueryString = navigation.query()['foo'];
    return <div>
      <h2>React embedded in a skit app. WTF?</h2>
      <MyStupidTypingThing text={fooFromQueryString}/>
    </div>;
  },

  __ready__: function() {
    // This is called in the browser when the page is loaded.
    // Since React is handling most of the client-side here with unknowable
    // magic, we don't have to do much here.

    // Note that the React client rerender is happening in BaseController.
  }
});
