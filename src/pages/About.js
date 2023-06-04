import React from "react";
import MultiplePizzas from "../assets/masala.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Welcome to our Indian vegetarian restaurant, where we bring together the best of North and South Indian cuisine under one roof! Our passion for delivering authentic flavors and traditional recipes has earned us a reputation as one of the finest vegetarian restaurants in the region.

Our menu is carefully crafted to cater to a diverse range of tastes and preferences. Whether you're in the mood for some spicy Chettinad dosa or a rich, creamy paneer makhani, we have something for every palate. Our chefs use only the freshest ingredients, sourced from local farmers and suppliers, to ensure that every dish is bursting with flavor and nutrition.

At our restaurant, we believe that food should be enjoyed at any time, from anywhere. That's why we offer online ordering, making it easy for you to enjoy your favorite dishes from the comfort of your own home. Our user-friendly platform enables you to browse our menu, customize your order, and pay securely – all with just a few clicks.

We pride ourselves on providing exceptional customer service, whether you dine-in or order online. Our staff is friendly, knowledgeable, and always willing to go the extra mile to make your experience unforgettable. We are committed to exceeding your expectations in every way possible.

Come visit us and savor the authentic flavors of India, or order online for a convenient and delicious meal. We promise to delight your taste buds with our mouth-watering dishes and warm hospitality.
        </p>
      </div>
    </div>
  );
}

export default About;
