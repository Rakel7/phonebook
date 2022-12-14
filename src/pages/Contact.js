import React, { useRef } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
init(process.env.ID);

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const formMess = document.querySelector(".formMessage");

        emailjs
            .sendForm(
                "service_472v6hi",
                "template_samn8mq",
                form.current,
                process.env.REACT_APP_ID
            )
            .then(
                (res) => {
                    console.log(res.text);
                    form.current.reset();
                    formMess.innerHTML = "<p className='success'>Message envoyé !</p>";

                    setTimeout(() => {
                        formMess.innerHTML = "";
                    }, 2000);
                },
                (err) => {
                    console.log(err.text);
                    formMess.innerHTML =
                        "<p className='error'>Une erreur s'est produite, veuillez réessayer</p>";

                    setTimeout(() => {
                        formMess.innerHTML = "";
                    }, 2000);
                }
            );
    };

    return (
        <div>
            <Header />
            <div>
                <h2 style={{textAlign:"center"}}>Formulaire pour contacter notre service client</h2>
                <div  id="containerForm">
                    <h2 style={{marginBottom:"40px"}}>Contactez-nous</h2>
                    <form ref={form} onSubmit={sendEmail} style={{ display: "grid" }}>
                        <label>Nom</label>
                        <input type="text" name="name" required autoComplete="off" id="name" />
                        <label style={{marginTop:"10px"}}>Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            autoComplete="off"
                            id="email"
                        />
                        <label style={{marginTop:"10px"}}>Message</label>
                        <textarea name="message" id="mess" style={{height: "100px"}}/>
                        <input type="submit" value="Envoyer" className="hover button" style={{marginTop:"10px"}}/>
                    </form>
                    <div className="formMessage"></div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;