var React = require('react');
var Input = require('react-bootstrap').Input;

var MultipleChoiceAnswer = React.createClass({
  getInitialState: function () {
    return {isChecked: false};
  },
  shouldComponentUpdate: function (nextProps, nextState) {
    return nextProps.id !== this.props.id;
  },
  render: function () {
    return (
          React.createElement(Input, {type:'radio', name:'answer', value:this.props.data.text, label:this.props.data.text, defaultChecked:this.state.isChecked, onChange:this.props.changeHandler})
    );
  }
});

var MultipleChoice = React.createClass({
  handleChange: function (event, selected) {
    this.setState({answer: event.target.value});
  },
  getInitialState: function() {
    return {answer: ''};
  },
  _onSubmit: function() {
    console.log('TODO: Setup AJAX call.');
  },
  render: function () {
    var rows = this.props.data.answers.map(function (item) {
      return (
        React.createElement(MultipleChoiceAnswer, {key:item.id, data:item, changeHandler:this.handleChange})
      );
    });
    return (
      React.createElement('form', {className: 'form-group', onSubmit: this._onSubmit},
        React.createElement('h3', null, this.props.data.question + ' ' + this.state.answer),
        React.createElement('div', {className: 'input-group', onChange:this.handleChange}, rows),
        React.createElement('input', {type:'button', value:'Submit now', onClick:this._onSubmit}))
    )
  }
});

module.exports.MultipleChoice = MultipleChoice;
