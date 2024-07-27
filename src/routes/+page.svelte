<!-- <script>
    // You can import any needed Svelte components or libraries here.
    function scrollPage() {
        window.scrollBy({
            top: 600, // Change this value to adjust the scroll distance
            left: 0,
            behavior: 'smooth'
        });
    }
</script>

<svelte:head>
    <title>Insurance Claim - Home</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        body {
            margin: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f5f5f5;
        }
        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 2rem;
            background-color: #004080;
            color: white;
        }
        .hero {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            background: url('https://via.placeholder.com/1920x1080') no-repeat center center/cover;
            color: white;
            height: 100vh;
        }
        .hero h1 {
            font-size: 4rem;
            margin: 0;
        }
        .hero p {
            font-size: 1.5rem;
            margin: 1rem 0;
        }
        .hero button {
            padding: 1rem 2rem;
            background-color: #ff9900;
            border: none;
            border-radius: 5px;
            font-size: 1rem;
            cursor: pointer;
        }
        .scroll-indicator {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 8rem;
            animation: bounce 2s infinite;
            cursor: pointer;
        }
        .scroll-indicator .circle {
            width: 30px;
            height: 30px;
            background-color: #ff9900;
            border-radius: 50%;
        }
        .scroll-indicator span {
            margin-top: 0.5rem;
            color: white;
            font-size: 1rem;
        }
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
                transform: translateY(0);
            }
            40% {
                transform: translateY(-15px);
            }
            60% {
                transform: translateY(-7px);
            }
        }
        .services {
            display: flex;
            justify-content: space-around;
            padding: 4rem 2rem;
            background-color: white;
        }
        .service {
            text-align: center;
            max-width: 200px;
        }
        .service i {
            font-size: 3rem;
            color: #004080;
        }
        .service h3 {
            margin: 1rem 0 0.5rem;
        }
        .content-section {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 4rem 2rem;
            background-color: #f0f0f0;
        }
        .content-section:nth-child(even) {
            background-color: white;
        }
        .content-section .text, .content-section .image {
            flex: 1;
            padding: 2rem;
        }
        .content-section .text {
            max-width: 800px;
        }
        .content-section .image img {
            max-width: 100%;
            border-radius: 10px;
        }
        footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 2rem;
            background-color: #004080;
            color: white;
        }
        footer ul {
            list-style: none;
            display: flex;
            margin: 0;
            padding: 0;
        }
        footer ul li {
            margin-right: 1rem;
        }
        footer ul li a {
            color: white;
            text-decoration: none;
        }
        footer .socials i {
            margin-right: 1rem;
            cursor: pointer;
        }
    </style>
</svelte:head>


<section class="hero" id="home">
    <h1>Welcome to Insurance Claim</h1>
    <p>Your trusted partner in managing claims effortlessly</p>
    <button>Get Started</button>
    <div class="scroll-indicator">
        <div on:click={scrollPage} class="circle">&#8595; </div>
        <span>Scroll Down</span>
    </div>
</section>

<section class="services" id="services">
    <div class="service">
        <i class="fas fa-clipboard-list"></i>
        <h3>Easy Claims</h3>
        <p>File your claims with ease and track them in real-time.</p>
    </div>
    <div class="service">
        <i class="fas fa-user-shield"></i>
        <h3>Secure Process</h3>
        <p>Your information is secure with our top-notch security measures.</p>
    </div>
    <div class="service">
        <i class="fas fa-phone-alt"></i>
        <h3>24/7 Support</h3>
        <p>Our support team is available round-the-clock to assist you.</p>
    </div>
</section>

<section class="content-section">
    <div class="text">
        <h2>Comprehensive Coverage</h2>
        <p>We provide a wide range of coverage options to suit your needs. Whether it's health, home, auto, or life insurance, we've got you covered. Our policies are designed to offer you peace of mind and financial protection.</p>
    </div>
    <div class="image">
        <img src="https://via.placeholder.com/600x400" alt="Comprehensive Coverage">
    </div>
</section>

<section class="content-section">
    <div class="image">
        <img src="https://via.placeholder.com/600x400" alt="Expert Guidance">
    </div>
    <div class="text">
        <h2>Expert Guidance</h2>
        <p>Our team of experts is here to guide you through every step of the insurance process. From selecting the right policy to filing a claim, we're committed to providing you with the best advice and support.</p>
    </div>
</section>

 -->


 <script>
    function scrollPage() {
        window.scrollBy({
            top: 600, // Change this value to adjust the scroll distance
            left: 0,
            behavior: 'smooth'
        });
    }
</script>

<svelte:head>
    <title>Insurance Claim - Home</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</svelte:head>

<section id="home" class="flex flex-col justify-center items-center text-center bg-cover bg-center h-screen text-white" style="background-image: url('../../src/assets/HomePage.jpg');">
    <h1 class="text-5xl font-bold">Welcome to Insurance Claim</h1>
    <p class="text-2xl mt-4 font-bold">Your trusted partner in managing claims effortlessly with blockchain technology</p>
    <div class="flex space-x-4 mt-8">
        <!-- <button on:click={scrollPage} class="px-4 py-2 bg-yellow-500 rounded-lg text-lg">Scroll a bit</button> -->
        <button class="px-4 py-2 bg-green-700 rounded-lg text-lg">Get Started</button>
    </div>
    <div class="flex flex-col items-center mt-12 animate-bounce cursor-pointer" on:click={scrollPage}>
        <div class="w-8 h-8 bg-green-500 rounded-full">&#8595; </div>
        <span class="mt-2">Scroll Down</span>
    </div>
</section>

<section id="services" class="flex flex-col items-center py-16 bg-white">
    <div class="text-center">
        <h2 class="text-3xl font-bold">Our Services</h2>
        <p class="mt-4 text-xl">Leveraging blockchain to ensure secure, transparent, and efficient insurance claims.</p>
    </div>
    <div class="flex flex-wrap justify-center mt-8 space-x-4">
        <div class="text-center max-w-xs p-4">
            <i class="fas fa-clipboard-list text-5xl text-green-800"></i>
            <h3 class="mt-4 text-xl font-semibold">Easy Claims</h3>
            <p class="mt-2">File your claims with ease and track them in real-time.</p>
        </div>
        <div class="text-center max-w-xs p-4">
            <i class="fas fa-user-shield text-5xl text-green-800"></i>
            <h3 class="mt-4 text-xl font-semibold">Secure Process</h3>
            <p class="mt-2">Your information is secure with our blockchain-based security measures.</p>
        </div>
        <div class="text-center max-w-xs p-4">
            <i class="fas fa-phone-alt text-5xl text-green-800"></i>
            <h3 class="mt-4 text-xl font-semibold">24/7 Support</h3>
            <p class="mt-2">Our support team is available round-the-clock to assist you.</p>
        </div>
    </div>
</section>

<section class="flex flex-col md:flex-row items-center justify-center py-16 bg-gray-100">
    <div class="max-w-md p-4">
        <h2 class="text-2xl font-bold">Blockchain-Powered Coverage</h2>
        <p class="mt-4">We use blockchain technology to provide a wide range of coverage options. Whether it's health, home, auto, or life insurance, our policies offer unparalleled security and transparency.</p>
    </div>
    <div class="max-w-md p-4">
        <img src="https://pixelplex.io/wp-content/uploads/2021/02/blockchain-insurance-main-1600.jpg" alt="Blockchain-Powered Coverage" class="rounded-lg">
    </div>
</section>

<section class="flex flex-col md:flex-row-reverse items-center justify-center py-16 bg-white">
    <div class="max-w-md p-4">
        <h2 class="text-2xl font-bold">Expert Blockchain Guidance</h2>
        <p class="mt-4">Our team of blockchain experts is here to guide you through every step of the insurance process. From selecting the right policy to filing a claim, we're committed to providing you with the best advice and support.</p>
    </div>
    <div class="max-w-md p-4">
        <img src="https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/07/17/Pictures/chosing-blockchain_ae44da6c-89c5-11e8-b2f4-2ee9fa0c7dec.jpg" alt="Expert Blockchain Guidance" class="rounded-lg">
    </div>
</section>
<section class="flex flex-col md:flex-row items-center justify-center py-16 bg-gray-100">
    <div class="max-w-md p-4">
        <h2 class="text-2xl font-bold">Easily Claim Your Insurance</h2>
        <p class="mt-4">With our blockchain-powered platform, claiming your insurance has never been easier. Enjoy a seamless and transparent process, ensuring your claims are handled efficiently and securely.</p>
    </div>
    <div class="max-w-md p-4">
        <img src="https://cdn.pti.agency/Agency/Website/Upload/2020/09/18161007/Claims.png" alt="Easily Claim Your Insurance" class="rounded-lg">
    </div>
</section>

<section class="flex flex-col items-center py-16 bg-green-800 text-white">
    <div class="text-center">
        <h2 class="text-3xl font-bold">Ready to Get Started?</h2>
        <p class="mt-4 text-xl">Join us today and experience the future of insurance claims with blockchain technology.</p>
    </div>
    <div class="mt-8">
        <a href="/Register" class="px-6 py-3 bg-green-500 rounded-lg text-lg font-semibold">Sign Up Now</a>
    </div>
    <div class="flex flex-col items-center mt-12">
        <h3 class="text-2xl font-bold">Follow Us</h3>
        <div class="flex space-x-4 mt-4">
            <i class="fab fa-facebook-f text-2xl cursor-pointer"></i>
            <i class="fab fa-twitter text-2xl cursor-pointer"></i>
            <i class="fab fa-linkedin-in text-2xl cursor-pointer"></i>
        </div>
    </div>
</section>




