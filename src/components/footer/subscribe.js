import React, { Component } from "react";
import Mailchimp from "react-mailchimp-form";

class Index extends Component {
  render() {
    return (
      <div id="subscribe" className="text-center"> 
      <Mailchimp
      action='https://app.us20.list-manage.com/subscribe/post?u=5cba0885f6e147c4171816a32&amp;id=21a6c0b02c'
      fields={[
        {
          name: 'EMAIL',
          placeholder: 'Enter your email',
          type: 'email',
          required: true
        }
      ]}
      
      />
      </div>
    );
  }
};
export default Index;  