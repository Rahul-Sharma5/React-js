import React from 'react'
import './Contact.css';
import Footer from '../../components/Footers/Footer'

export default function Contact() {
    return (
        <div>
            <div class="container contact-form">
                <div class="contact-image">
                    <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact" />
                </div>
                <form method="post">
                    <h3>Drop Us a Message</h3>
                    <div class="row">
                        <div class="col-md-6 mb-2">
                            <div class="form-group">
                                <input type="text" name="txtName" class="form-control" placeholder="Your Name *" value="" />
                            </div>
                            <div class="form-group">
                                <input type="text" name="txtEmail" class="form-control" placeholder="Your Email *" value="" />
                            </div>
                            <div class="form-group">
                                <input type="text" name="txtPhone" class="form-control" placeholder="Your Phone Number *" value="" />
                            </div>
                            <div class="form-group">
                                <input type="submit" name="btnSubmit" class="btnContact" value="Send Message" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <textarea name="txtMsg" class="form-control" placeholder="Your Message *" style={{"width":"100%","height":"150px"}}></textarea>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <Footer></Footer>
        </div>
    )
}
