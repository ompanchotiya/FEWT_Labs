import React from 'react'

function Basic_pagedesign() {
  return (
    <div>
      <header class="main">
        <nav>
            <div class="logo">IndiaGuide</div>
            <ul>
                <li><a href="./About.html">About</a></li>
                <li><a href="./ContectUs.html">Contact Us</a></li>
                <li><a href="./TravelInfo.html">Travel Info</a></li>
                <li><a href="./Gallery.html">Gallery</a></li>
                <li><a href="./Places.html" class="active">Places</a></li>
            </ul>
        </nav>
        <div class="Tital">
            <h1>Welcome to <span>Incredible India</span></h1>
        </div>
    </header>
    
    <main class="container">
        <div class="info">
            <div class="card">
                <h3>Quick Facts</h3>
                <dl>
                    <dt>State</dt> <dd>Uttar Pradesh (Agra)</dd>
                    <dt>Best Season</dt> <dd>October to March</dd>
                    <dt>Famous For</dt> <dd>Heritage, Lakes, Festivals</dd>
                </dl>
            </div>

            <div class="card">
                <h3>Tourist Categories</h3>
                <ul>
                    <li>Historical Monuments</li>
                    <li>Natural Attractions</li>
                    <li>Religious & Spiritual Places</li>
                    <li>Local Markets & Shopping</li>
                </ul>
            </div>

            <div class="card">
                <h3>Suggested 3-Day Plan</h3>
                <ol>
                    <li>City Palace & Nearby Attractions</li>
                    <li>Temples, Museums & Local Market</li>
                    <li>Lakeside Nature Spot & Food Street</li>
                </ol>
            </div>
        </div>
    </main>


    <section>
        <h3>Overview</h3>
        <p>
            India, officially the <strong>Republic of India</strong>, is a country in South Asia. It is the seventh-largest country by land area and the <span class="highlight">most populous country</span> in the world. 
        </p>
    </section>

    <section>
        <h3>Key Facts</h3>
        <ul>
            <li><strong>Capital:</strong> New Delhi</li>
            <li><strong>Major Religions:</strong> Hinduism, Islam, Christianity, Sikhism, Buddhism, and Jainism.</li>
            <li><strong>Languages:</strong> Over 121 major languages; Hindi and English serve as official languages.</li>
            <li><strong>Currency:</strong> Indian Rupee (₹)</li>
        </ul>
    </section>

    <section>
        <h3>Geography</h3>
        <p>
            From the snow-capped <strong>Himalayas</strong> in the north to the tropical beaches of the south, India's geography is incredibly varied. It is bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay of Bengal on the southeast.
        </p>
        
    </section>

    <section>
        <h3>Culture & Economy</h3>
        <p>
            India is famous for its rich history, spanning over 5,000 years, and its contribution to arts, mathematics (the concept of zero), and spirituality. Today, it is one of the world's fastest-growing major economies and a global hub for technology and services.
        </p>
    </section>

    <footer>
        <p>&copy; 2026 Tourist Guide Project</p>
        <p>Contact: <a href="mailto:student@example.com">student@example.com</a></p>
    </footer>
    </div>
  )
}

export default Basic_pagedesign

