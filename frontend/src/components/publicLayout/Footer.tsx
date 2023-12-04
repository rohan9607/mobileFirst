import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    return (
        <section id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="foot-info">
                            <img src="imgs/logo.png" alt="" />
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos ut
                                sit natus earum ea cum doloremque fugit. Sit non ex suscipit fugiat
                                molestias, ipsa rerum tempore voluptates adipisci rem cum?
                            </p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <ul className="menu">
                            <a href="index.html">
                                <li>Home</li>
                            </a>
                            <a href="About-us.html">
                                <li>About Us</li>
                            </a>
                            <a href="#articles">
                                <li>Articles</li>
                            </a>
                            <a href="requests.html">
                                <li>Donations</li>
                            </a>
                            <a href="who-we-are.html">
                                <li>Who We Are?</li>
                            </a>
                            <a href="contact-us.html">
                                <li>Contact Us</li>
                            </a>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className="options">
                            <li>
                                <h5>Available On</h5>
                            </li>
                            <li>
                                <img src="imgs/ios1.png" alt="" />
                            </li>
                            <li>
                                <img src="imgs/google1.png" alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Footer