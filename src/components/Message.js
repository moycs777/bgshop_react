import React from 'react';

const Message = (props) => (
  <div>
  <div className="ui icon message">
    <i className={'icon ' + props.type}></i>
    <div className="content">
      <div className="header">{props.header}</div>
      <p>{props.content}</p>
    </div>
  </div>
  </div>
)

Message.defaultProps = {
  props.type = "info"
}

export deafult Message;
