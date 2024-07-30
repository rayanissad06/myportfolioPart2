import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTestimonial, updateTestimonial } from "../../redux/testimonialsSlice";

const Testimonialpage = () => {
  const user = useSelector((state) => state.auth.user);
  const testimonials = useSelector((state) => state.testimonials);
  const dispatch = useDispatch();

  const [review, setReview] = useState({
    firstName: "",
    email: "",
    message: "",
    rating: 5, // Default rating
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editedMessages, setEditedMessages] = useState({});

  useEffect(() => {
    if (user) {
      setReview({
        firstName: user.name,
        email: user.email,
        message: "",
        rating: 5,
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview((prevReview) => ({
      ...prevReview,
      [name]: value,
    }));
  };

  const handleRatingChange = (rating) => {
    setReview((prevReview) => ({
      ...prevReview,
      rating,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      dispatch(updateTestimonial({
        id: editIndex,
        firstName: review.firstName,
        email: review.email,
        message: review.message,
        rating: review.rating,
      }));
      setIsEditing(false);
      setEditIndex(null);
    } else {
      dispatch(addTestimonial({
        id: Date.now(), // Generate a unique ID for new testimonials
        firstName: review.firstName,
        email: review.email,
        message: review.message,
        rating: review.rating,
      }));
    }
    setReview({
      firstName: user.name,
      email: user.email,
      message: "",
      rating: 5,
    });
  };

  const handleEdit = (id) => {
    setIsEditing(true);
    setEditIndex(id);
  };

  const handleEditMessageChange = (e, id) => {
    setEditedMessages((prev) => ({
      ...prev,
      [id]: e.target.value,
    }));
  };

  const handleSave = (id) => {
    const testimonial = testimonials.find(item => item.id === id);
    if (!testimonial) return;

    dispatch(updateTestimonial({
      id,
      firstName: testimonial.firstName,
      email: testimonial.email,
      message: editedMessages[id],
      rating: testimonial.rating,
    }));
    setIsEditing(false);
    setEditIndex(null);
  };

  return (
    <section className="testimonial--section" id="testimonial">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Avis des Clients</p>
          <h2 className="sections--heading">Témoignages Clients</h2>
        </div>
      </div>
      <div className="portfolio--section--container">
        {testimonials.map((item) => (
          <div key={item.id} className="testimonial--section--card">
            <div className="testimonial--section--card--review">
              {Array.from({ length: item.rating }, (_, starIndex) => (
                <svg
                  key={starIndex}
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="26"
                  viewBox="0 0 27 26"
                  fill="none"
                >
                  <path
                    d="M12.0945 0.953177C12.5528 -0.135435 14.1138 -0.135434 14.5722 0.95318L17.2772 7.37836C17.4705 7.8373 17.9074 8.15087 18.4089 8.19059L25.4302 8.74669C26.6199 8.84091 27.1022 10.3076 26.1959 11.0746L20.8464 15.6016C20.4643 15.925 20.2973 16.4324 20.4141 16.9158L22.0484 23.6847C22.3253 24.8315 21.0625 25.7381 20.044 25.1235L14.0327 21.4961C13.6033 21.237 13.0633 21.237 12.634 21.4961L6.62265 25.1235C5.60415 25.7381 4.34127 24.8315 4.61818 23.6847L6.25256 16.9158C6.3693 16.4324 6.20243 15.925 5.82034 15.6016L0.47075 11.0746C-0.435624 10.3076 0.0467572 8.84091 1.23639 8.74669L8.25781 8.19059C8.75933 8.15087 9.19621 7.8373 9.38942 7.37836L12.0945 0.953177Z"
                    fill="#FFFF00"
                  />
                </svg>
              ))}
            </div>
            {isEditing && editIndex === item.id ? (
              <div>
                <textarea
                  className="edit-textarea"
                  value={editedMessages[item.id] || item.message}
                  onChange={(e) => handleEditMessageChange(e, item.id)}
                />
                <button className="done-button" onClick={() => handleSave(item.id)}>Done</button>
              </div>
            ) : (
              <p className="text-md">{item.message}</p>
            )}
            <div className="testimonial--section--card--author--detail">
              <p>{item.firstName}</p>
              <p>{item.email}</p>
              {user && user.email === item.email && (
                <button className="edit-button" onClick={() => handleEdit(item.id)}>Edit</button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="submit--review--section">
        <h3>Soumettez votre avis</h3>
        <form onSubmit={handleSubmit} className="submit--review--form">
          <label htmlFor="firstName">
            Prénom:
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={review.firstName}
              onChange={handleChange}
              required
              readOnly
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              name="email"
              value={review.email}
              onChange={handleChange}
              required
              readOnly
            />
          </label>
          <label htmlFor="message">
            Votre avis :
            <textarea
              id="message"
              name="message"
              rows="4"
              value={review.message}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <label>
            Note:
            <div className="star-rating">
              {[1, 2, 3, 4, 5].map((ratingValue) => (
                <div
                  key={ratingValue}
                  className={`star ${review.rating >= ratingValue ? 'selected' : ''}`}
                  onClick={() => handleRatingChange(ratingValue)}
                >
                  &#9733;
                </div>
              ))}
            </div>
          </label>
          <button type="submit">Soumettre</button>
        </form>
      </div>
    </section>
  );
};

export default Testimonialpage;
