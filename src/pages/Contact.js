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

    const containerForm = {
        margin: "5% 5% 5% 32%",
        itemAlign: "center",
        maxWidth: "30%",
        position: "relative",
        padding: "3%",
        border: "solid 1px",
        borderRadius: "10px"
    }


    return (
        <div>
            <Header />
            <div>
                <h2 style={{textAlign:"center"}}>Formulaire pour contacter notre service client</h2>
                <div style={containerForm}>
                    <h2 style={{marginBottom:"40px"}}>Contactez-nous</h2>
                    <form ref={form} onSubmit={sendEmail} style={{ display: "grid" }}>
                        <label>Nom</label>
                        <input type="text" name="name" required autoComplete="off" id="name" />
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            autoComplete="off"
                            id="email"
                        />
                        <label>Message</label>
                        <textarea name="message" id="mess" />
                        <input type="submit" value="Envoyer" className="hover button" />
                    </form>
                    <div className="formMessage"></div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;