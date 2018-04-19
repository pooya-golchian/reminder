import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder, deleteReminder, clearReminders } from './../actions';
import moment from 'moment';
import '../App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      dueDate: ''
    }
  }

  addReminder() {
    console.log('this.state.dueDate', this.state.dueDate);
    this.props.addReminder(this.state.text, this.state.dueDate);
  }

  deleteReminder(id) {
    this.props.deleteReminder(id);
  }

  renderReminders() {
    const { reminders } = this.props;
    return (
      <ul className="reminder__list">
        {
          reminders.map(reminder => {
            return (
              <li key={reminder.id}>
                <div className="reminder__list__item">
                  <div className="reminder__list__item--text">{reminder.text}</div>
                  <div className="reminder__list__item--date">{moment(new Date(reminder.dueDate)).fromNow()}</div>
                </div>
                <div
                  className="reminder__list__item--delete"
                  onClick={() => this.deleteReminder(reminder.id)}
                >
                  &#x2715;
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }

  render() {
    return (
     <div className="reminder">
 <div className="reminder__container">
        <div className="reminder__header">
          Reminder & Event
        </div>
        <div className="reminder__form">
          <div className="reminder__form__item">
            <input
              className="reminder__form__item--input"
              placeholder="I have to..."
              onChange={event => this.setState({text: event.target.value})}
            />
            <input
              className="reminder__form__item--input-date"
              className=""
              type="datetime-local"
              onChange={event => this.setState({dueDate: event.target.value})}
            />
          </div>
          <button
            type="button"
            className="reminder__form__item--btn"
            onClick={() => this.addReminder()}
          >
            Add Reminder
          </button>
        </div>
        { this.renderReminders() }
        <button
          className="reminder__form__item--btn-clear"
          onClick={() => this.props.clearReminders()}
        >
          Clear Reminders
        </button>
      </div>
     </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    reminders: state
  }
}

export default connect(mapStateToProps, { addReminder, deleteReminder, clearReminders })(App);