import React from 'react';
import '../assets/styles/components/Form.scss';
import '../assets/styles/Hovers.scss';
import * as emailjs from 'emailjs-com';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        phone: ''
      };
      this.handleChange = this.handleChange.bind(this);
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
      event.preventDefault()

      const { email, phone} = this.state

    let templateParams = {
      from_name: email,
      message: phone,
     }
     emailjs.send("service_y7hr474","template_w03w2d8",templateParams,'user_ywxkKtYDSbR3xnkDiCSMa')
      .then(() => {
        alert('El mensaje ha sido enviado de manera satisfactoria!');
      }, (err) => {
        alert(JSON.stringify(err));
      });;
     this.resetForm()
    }

    resetForm() {
      this.setState({
        email: '',
        phone: ''
      })
    }

  
    render() {
      return (
        <form onSubmit={this.handleSubmit.bind(this)}>
            <input className='form-input hvr-shadow' type='email' name='email' value={this.state.email} placeholder='Correo electrónico' onChange={this.handleChange}></input>
            <input className='form-input hvr-shadow' type='text' name='phone' value={this.state.phone} placeholder='Número telefónico' onChange={this.handleChange}></input>
            <input className='form-submit hvr-grow' type="submit" value="enviar" />
        </form>
      );
    }
  }

  export default Form;