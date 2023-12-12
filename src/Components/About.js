import React from 'react'

export default function About(props) {

    let myStyle = {
        color : props.mode === 'dark' ? 'white' : 'black',
        backgroundColor : props.mode === 'dark' && document.body.style.backgroundColor === 'black' ? 'black' : props.mode === 'dark' ? 'rgb(1, 28, 61)' : 'white',

    }


    return (
        <div className="container" style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
            <div>
                <h1>About Us</h1>
                <div className="accordion" id="accordionPanelsStayOpenExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" style={myStyle}>
                            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                <strong>Text-Utils: Your Ultimate Text Manipulation Tool</strong>
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" style={myStyle} className="accordion-collapse collapse show">
                            <div className="accordion-body"  style={myStyle}>
                                Text-Utils is a powerful React app designed to streamline text manipulation tasks, providing a range of functionalities that enhance the way you handle text. With a user-friendly interface and efficient tools, Text-Utils simplifies text editing for various purposes. <br /> <br />

                                About Text-Utils <br />
                                Text-Utils is a versatile application that offers several key features: <br /> <br />

                                <strong>Text Case Conversion:</strong> Easily convert text between uppercase and lowercase, catering to your specific formatting needs. <br />

                                <strong>Whitespace Management:</strong> Effortlessly remove extra spaces, trim leading and trailing spaces, ensuring clean and consistent text formatting. <br />

                                <strong>Clipboard Integration:</strong> Seamlessly copy the modified text to your clipboard for quick and convenient usage in other applications.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" style={myStyle}>
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                <strong>Our Vision for Text-Utils</strong>
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" style={myStyle} className="accordion-collapse collapse">
                            <div className="accordion-body">
                                At Text-Utils, our goal is to empower users with a reliable platform for text manipulation. We aim to simplify complex text-editing tasks, providing an intuitive interface coupled with robust functionalities. <br /> <br />

                                Commitment to User Convenience
                                We are committed to enhancing user experience by continuously updating and incorporating new features that cater to our users' evolving needs. Text-Utils strives to be the go-to tool for effortless text modification, offering a seamless and efficient experience.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" style={myStyle}>
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                <strong>The Team Behind Text-Utils</strong>
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" style={myStyle} className="accordion-collapse collapse">
                            <div className="accordion-body">
                                Text-Utils is brought to you by a dedicated team of developers passionate about simplifying text manipulation tasks. Our team's collective goal is to create an application that enhances productivity and makes text editing hassle-free. <br /> <br />

                                Feel free to incorporate this information or modify it to fit your About Us section in the Text-Utils React app. Adjust the tone or details as per your preference and the specific goals of your application.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
