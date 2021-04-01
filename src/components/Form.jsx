import React from 'react';
import '../assets/styles/components/Form.scss';
import '../assets/styles/Hovers.scss';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        phone: ''
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        const target = event.target;
        const value =  target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });
      }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.email +' '+ this.state.phone);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <input className='form-input hvr-shadow' type='email' name='email' value={this.state.email} placeholder='Correo electrónico' onChange={this.handleChange}></input>
            <input className='form-input hvr-shadow' type='text' name='phone' value={this.state.phone} placeholder='Número telefónico' onChange={this.handleChange}></input>
            <input className='form-submit hvr-grow' type="submit" value="enviar" />
        </form>
      );
    }
  }

  export default Form;