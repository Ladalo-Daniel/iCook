import React, { useState } from 'react';

export default function NewsletterSubscription() {
        const [email, setEmail] = useState('');

        const handleSubmit = (e) => {
            e.preventDefault();
            // Here you can perform any necessary validation or API calls

            // Reset the email input after submitting
            setEmail('');
        };

        const handleChange = (e) => {
            setEmail(e.target.value);
        };

  return (
    <div className='news_letter'>
      <h1>NEW TO BacciCook?</h1>
      <h2>Subscribe to Our Newsletter to get our <br />latest update on your favorite Recipes</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleChange}
        /> <span className='envelope_icon'><i className='fa fa-envelope'></i></span>
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};
