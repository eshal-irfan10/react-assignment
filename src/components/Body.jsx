import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPepperHot , faHeart } from "@fortawesome/free-solid-svg-icons";

const Body = () => {
  return (
    <div>
    <div
      className="container-fluid d-flex align-items-center"
      style={{
        backgroundColor: "#fff",
        height: "100vh",
        padding: "0 10%",
        overflow: "hidden",
      }}
    >
      {/* Left Section */}
      <div className="text-start">
        <h1 style={{ fontSize: "3rem", fontWeight: "bold", lineHeight: "1.2" }}>
          Dive into Delights Of Delectable{" "}
          <span style={{ color: "lawngreen" }}>Food</span>
        </h1>
        <p style={{ color: "#777", marginTop: "20px", fontSize: "1.1rem" }}>
          Where Each Plate Weaves a Story of Culinary Mastery and Passionate
          Craftsmanship
        </p>

        <div className="d-flex align-items-center gap-3 mt-4">
          <button
            className="btn "
            style={{
              backgroundColor:"lawngreen",
              fontWeight: "600",
              fontSize: "1rem",
              padding: "10px 20px",
              borderRadius:"100px",
            }}
          >
            Order Now
          </button>
          <div
            className="d-flex align-items-center"
            style={{ cursor: "pointer" }}
          >
            <div
              className="rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "#f2f2f2",
              }}
            >
              <FontAwesomeIcon icon={faPlay} />
            </div>
            <span style={{ marginLeft: "10px", fontWeight: "600" }}>
              Watch Video
            </span>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="position-relative">
        {/* Green Background */}
        <div
          className="rounded-circle"
          style={{
            backgroundColor: "#28a745",
            width: "500px",
            height: "500px",
            position: "absolute",
            top: "-50px",
            right: "0",
            zIndex: "-1",
          }}
        ></div>

        {/* Woman with Food */}
        <img
          src="https://image.shutterstock.com/image-photo/happy-temptation-cute-asian-young-260nw-2341509159.jpg"
          alt="Food Presentation"
          style={{ width: "400px", borderRadius: "20px" }}
        />

        {/* Hot Spicy Food Label */}
        <div
          style={{
            position: "absolute",
            top: "20px",
            right: "50px",
            backgroundColor: "#fff",
            padding: "5px 10px",
            borderRadius: "20px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            fontSize: "0.9rem",
          }}
        >
          <span style={{ color: "#ff4d4f", fontWeight: "600" }}>
            Hot spicy Food
          </span>{" "}
          <FontAwesomeIcon icon={faPepperHot} color="#ff4d4f" />
        </div>

        {/* Food Cards */}
        <div
          style={{
            position: "absolute",
            bottom: "-30px",
            left: "20px",
            display: "flex",
            gap: "20px",
          }}
        >
          {/* Card 1 */}
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              padding: "10px",
              width: "150px",
            }}
          >
            <img
              src="https://img.freepik.com/free-photo/flat-lay-noodles-with-vegetables-chicken_23-2148377422.jpg?uid=R179464807&ga=GA1.1.787155884.1722344260&semt=ais_tags_boosted"
              alt="Spicy Noodles"
              style={{
                width: "100%",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            />
            <h6 style={{ fontWeight: "600" }}>Spicy noodles</h6>
            <p style={{ fontSize: "0.9rem", marginBottom: "5px" }}>
              ⭐⭐⭐⭐☆ $18.00
            </p>
          </div>

          {/* Card 2 */}
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              padding: "10px",
              width: "150px",
            }}
          >
            <img
              src="https://media.istockphoto.com/id/1416818056/photo/colourful-vegan-bowl-with-quinoa-and-sweet-potato.jpg?b=1&s=612x612&w=0&k=20&c=UgzPYJC2rvArlx5gzNoZURzpN5_SewH7ZyvRmeRqRNY="
              alt="Vegetarian Salad"
              style={{
                width: "100%",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            />
            <h6 style={{ fontWeight: "600" }}>Vegetarian salad</h6>
            <p style={{ fontSize: "0.9rem", marginBottom: "5px" }}>
              ⭐⭐⭐⭐⭐ $23.00
            </p>
          </div>
        </div>
      </div>
      </div>
          <div>
      
    </div>
    <section class="categories">
      <h3 class="sub-heading">CUSTOMER FAVORITES</h3>
      <h1 class="heading">Popular Categories</h1>
      <div class="category-container">
          <div class="category-card">
              <div class="icon">
                  <img style={{padding:"10px", backgroundSize:"70px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShi_dtzOs29VIYvXmMe_beducuuzQCdKkwGw&s" alt="Main Dish"/>
              </div>
              <h3>Main Dish</h3>
              <p>(86 dishes)</p>
          </div>
          <div class="category-card">
              <div class="icon">
                  <img src="https://img.freepik.com/premium-photo/vegetable-sandwitch-with-vegies-with-pattie_271168-45.jpg?uid=R179464807&ga=GA1.1.787155884.1722344260&semt=ais_tags_boosted" alt="Break Fast" />
              </div>
              <h3>Break Fast</h3>
              <p>(12 break fast)</p>
          </div>
          <div class="category-card">
              <div class="icon">
                  <img src="https://img.freepik.com/premium-photo/muffin-with-cream-pink-background_152625-5765.jpg?uid=R179464807&ga=GA1.1.787155884.1722344260&semt=ais_tags_boosted" alt="Dessert"/>
              </div>
              <h3>Dessert</h3>
              <p>(48 dessert)</p>
          </div>
          <div class="category-card">
              <div class="icon">
                  <img src="https://img.freepik.com/premium-photo/fresh-orange-juice-oranges_159938-2724.jpg?uid=R179464807&ga=GA1.1.787155884.1722344260&semt=ais_tags_boosted" alt="Browse All"/>
              </div>
              <h3>Browse All</h3>
              <p>(255 Items)</p>
          </div>
      </div>
      </section>
      
      
            
            <section class="container mt-5">
              <h3 style={{marginLeft:"123px", color:" #ff6b6b",fontSize:"15px",fontWeight:"bold",letterSpacing:"2px",marginBottom:"10px"}}>Special Dishes</h3>
              <h1  style={{marginLeft:"120px"}} class="fw-bold mb-4">Standout Dishes <br /> From Our Menu</h1>
              <br />
              <div class="row justify-content-center gap-3">
                {/* Card 1 */}
                <div
                  className="col-md-3 text-center p-3 "
                  style={{
                    background: "#fff",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    position: "relative",
                    height:"290px",
                    borderRadius:"20px"
                  }}
                >
                  <img 
                   id="img_"
                    src="https://img.freepik.com/free-photo/top-view-tasty-vegetable-salad-inside-plate-dark-background-cuisine-lunch-restaurant-fresh-meal-health-diet-color_179666-18292.jpg?uid=R179464807&ga=GA1.1.787155884.1722344260&semt=ais_tags_boosted"
                    alt="Fattoush Salad"
                    className="img-fluid rounded-circle mb-3"
                    style={{ width:"120px", height:"120px"}}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "0",
                      right: "0",
                      background: "lawngreen",
                      borderRadius: "0 10px 0 10px",
                      padding: "5px",
                    }}
                  >
                    <FontAwesomeIcon icon={faHeart} color="#fff" />
                  </div>
                  <h5>Fattoush Salad</h5>
                  <p className="text-muted">Description of the item</p>
                  <h6 className="text-danger fw-bold">$24.00</h6>
                  <span>⭐ 4.9</span>
                </div>
      
                {/* Card 2 */}
                <div
                  className="col-md-3 text-center p-3 rounded"
                  style={{
                    background: "#fff",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    position: "relative",
                  }}
                >
                  <img id="img..."
                    src="https://img.freepik.com/free-photo/front-view-delicious-vegetable-salad-with-various-ingredients-dark-background_179666-47169.jpg?uid=R179464807&ga=GA1.1.787155884.1722344260&semt=ais_tags_boosted" alt="Vegetable Salad"className="img-fluid rounded-circle mb-3"
                    style={{ width:"120px", height:"120px"}}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "0",
                      right: "0",
                      background: "lawngreen",
                      borderRadius: "0 10px 0 10px",
                      padding: "5px",
                    }}
                  >
                    <FontAwesomeIcon icon={faHeart} color="#fff" />
                  </div>
                  <h5>Vegetable Salad</h5>
                  <p className="text-muted">Description of the item</p>
                  <h6 className="text-danger fw-bold">$26.00</h6>
                  <span>⭐ 4.6</span>
                </div>
      
                {/* Card 3 */}
                <div
                  className="col-md-3 text-center p-3 rounded"
                  style={{
                    background: "#fff",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    position: "relative",
                  }}
                >
                  <img
                    src="https://img.freepik.com/premium-photo/organic-salad-with-chicken-cherry-tomatoes-quail-eggs-black-olives-microgreens-against-light-blue-surface-healthy-eating-day-top-view_130716-816.jpg?uid=R179464807&ga=GA1.1.787155884.1722344260&semt=ais_tags_boosted"
                    alt="Egg Vegi Salad"
                    className="img-fluid rounded-circle mb-3"
                    style={{ width:"120px", height:"120px"}}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "0",
                      right: "0",
                      background: "lawngreen",
                      borderRadius: "0 10px 0 10px",
                      padding: "5px",
                    }}
                  >
                    <FontAwesomeIcon icon={faHeart} color="#fff" />
                  </div>
                  <h5>Egg Vegi Salad</h5>
                  <p className="text-muted">Description of the item</p>
                  <h6 className="text-danger fw-bold">$23.00</h6>
                  <span>⭐ 4.5</span>
                </div>
              </div>
            </section>
          <div/>
          <div/>
          <br /><br /><br /><br /><br />
          <div className="testimonial-container">
            <div className="chef-image-section">
              <img
                src="https://img.freepik.com/free-photo/confident-young-pretty-cook-chef-uniform-standing-with-closed-posture-looking-isolated-purple-wall-with-copy-space_141793-101358.jpg?uid=R179464807&ga=GA1.1.787155884.1722344260&semt=ais_tags_boosted" // Replace with the actual chef image source
                alt="Chef"
                className="chef-image"
                style={{marginLeft:"88px"}}
              />
              <div className="chef-title">
                Our Best Chef 😊
              </div>
              <span className="emoji smiley">😊</span>
              <span className="emoji pizza">🍕</span>
            </div>
      
            <div className="testimonial-text">
              <h4 className="testimonial-title">TESTIMONIALS</h4>
              <br />
              <h2 style={{fontWeight:"bold"}}>What Our Customers <br /> Say About Us</h2>
              <p className="testimonial-description">
                “I had the pleasure of dining at Foodi last night, and I'm still raving
                about the experience! The attention to detail in presentation and
                service was impeccable.”
              </p>
              <div className="customer-feedback">
                <div className="profile-pictures">
                  <img src="https://image.shutterstock.com/image-photo/closeup-portrait-yong-woman-casual-260nw-1554086789.jpg" alt="User1" />
                  <img src="https://www.shutterstock.com/shutterstock/photos/2303040263/display_1500/stock-photo-portrait-face-and-headshot-of-man-in-studio-isolated-white-background-and-posing-with-casual-2303040263.jpg" />
                  <img src="https://www.shutterstock.com/shutterstock/photos/2278065697/display_1500/stock-photo-portrait-photo-of-charming-confident-serious-lady-wear-stylish-pink-strawberry-print-cardigan-2278065697.jpg" alt="User3" />
                </div>
                <div>
                  <span className="rating-title">Customer Feedback</span>
                  <br />
                  <span className="rating">
                    ⭐ 4.9 <small>(18.6k Reviews)</small>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="services-container">
      {/* Left Section */}
      <div className="services-left">
        <h5>OUR STORY & SERVICES</h5>
        <br />
        <h1>Our Culinary Journey And Services</h1>
        <p>
          Rooted in passion, we curate unforgettable dining experiences and offer exceptional
          services, blending culinary artistry with warm hospitality.
        </p>
        <button className="explore-button">Explore</button>
      </div>

      {/* Right Section */}
      <div className="services-right">
        <div className="service-card">
          <div className="service-icon">🥗</div>
          <h3 style={{color:"lawngreen",}}>CATERING</h3>
          <p style={{color:"green",}}>Delight your guests <br /> with our flavors and <br /> presentation</p>
        </div>
        <div className="service-card">
          <div className="service-icon">⏰</div>
          <h3 style={{color:"lawngreen",}}>FAST DELIVERY</h3>
          <p style={{color:"green",}}>We deliver your order <br /> promptly to your door</p>
        </div>
        <div className="service-card">
          <div className="service-icon">🛒</div>
          <h3 style={{color:"lawngreen",}}>ONLINE ORDERING</h3>
          <p  style={{color:"green",}}>Explore menu & order <br /> with  ease using our <br /> Online Ordering</p>
        </div>
        <div className="service-card">
          <div className="service-icon">🎁</div>
          <h3 style={{color:"lawngreen",}}>GIFT CARDS</h3>
          <p style={{color:"green",}}>Give the gift of <br /> exceptional  dining with <br /> Foodi Gift Cards</p>
        </div>
      </div>
    </div>
 
          </div> 
  );
};

export default Body;
