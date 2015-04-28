'use strict';

var React = require('react');
var MultipleChoice = require('../components/multipleChoice').MultipleChoice;

var data = [{
  question: 'What is the correct answer?',
  answers: [
    {id:1, text: 'A) This is not it!'},
    {id:2, text: 'B) This may be it!'},
    {id:3, text: 'C) This is close to it!'},
    {id:4, text: 'D) This is it!'}
  ]
}];

var QuestionPage = React.createClass({
  getInitialState : function () {
    return {questions: []};
  },
  componentWillMount: function () {
    this.setState({questions: data[0]});
  },
  render: function () {
    return (
        React.createElement(MultipleChoice, {data: this.state.questions})
    )
  }
});

module.exports = QuestionPage;
