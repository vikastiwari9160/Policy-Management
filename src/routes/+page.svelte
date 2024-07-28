<script>
    function scrollPage() {
        window.scrollBy({
            top: 600, // Change this value to adjust the scroll distance
            left: 0,
            behavior: "smooth",
        });
    }
</script>

<svelte:head>
    <title>Insurance Claim - Home</title>
    <link
        href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
        rel="stylesheet"
    />
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
    />
</svelte:head>

<section
    id="home"
    class="flex flex-col justify-center items-center text-center bg-cover bg-center h-screen text-white"
    style="background-image: url('https://raw.githubusercontent.com/vikastiwari9160/Policy-Management/main/src/assets/homepage.png');"
>
    <h1 class="text-5xl font-bold">Welcome to Insurance Claim</h1>
    <p class="text-2xl mt-4 font-bold">
        Your trusted partner in managing claims effortlessly with blockchain
        technology
    </p>
    <div class="flex space-x-4 mt-8">
        <!-- <button on:click={scrollPage} class="px-4 py-2 bg-yellow-500 rounded-lg text-lg">Scroll a bit</button> -->
        <button class="px-4 py-2 bg-green-700 rounded-lg text-lg"
            >Get Started</button
        >
    </div>
    <div
        class="flex flex-col items-center mt-12 animate-bounce cursor-pointer"
        on:click={scrollPage}
    >
        <div class="w-8 h-8 bg-green-500 rounded-full">&#8595;</div>
        <span class="mt-2">Scroll Down</span>
    </div>
</section>

<section id="services" class="flex flex-col items-center py-16 bg-white">
    <div class="text-center">
        <h2 class="text-3xl font-bold">Our Services</h2>
        <p class="mt-4 text-xl">
            Leveraging blockchain to ensure secure, transparent, and efficient
            insurance claims.
        </p>
    </div>
    <div class="flex flex-wrap justify-center mt-8 space-x-4">
        <div class="text-center max-w-xs p-4">
            <i class="fas fa-clipboard-list text-5xl text-green-800"></i>
            <h3 class="mt-4 text-xl font-semibold">Easy Claims</h3>
            <p class="mt-2">
                File your claims with ease and track them in real-time.
            </p>
        </div>
        <div class="text-center max-w-xs p-4">
            <i class="fas fa-user-shield text-5xl text-green-800"></i>
            <h3 class="mt-4 text-xl font-semibold">Secure Process</h3>
            <p class="mt-2">
                Your information is secure with our blockchain-based security
                measures.
            </p>
        </div>
        <div class="text-center max-w-xs p-4">
            <i class="fas fa-phone-alt text-5xl text-green-800"></i>
            <h3 class="mt-4 text-xl font-semibold">24/7 Support</h3>
            <p class="mt-2">
                Our support team is available round-the-clock to assist you.
            </p>
        </div>
    </div>
</section>

<section
    class="flex flex-col md:flex-row items-center justify-center py-16 bg-gray-100"
>
    <div class="max-w-md p-4">
        <h2 class="text-2xl font-bold">Blockchain-Powered Coverage</h2>
        <p class="mt-4">
            We use blockchain technology to provide a wide range of coverage
            options. Whether it's health, home, auto, or life insurance, our
            policies offer unparalleled security and transparency.
        </p>
    </div>
    <div class="max-w-md p-4">
        <img
            src="https://pixelplex.io/wp-content/uploads/2021/02/blockchain-insurance-main-1600.jpg"
            alt="Blockchain-Powered Coverage"
            class="rounded-lg"
        />
    </div>
</section>

<section
    class="flex flex-col md:flex-row-reverse items-center justify-center py-16 bg-white"
>
    <div class="max-w-md p-4">
        <h2 class="text-2xl font-bold">Expert Blockchain Guidance</h2>
        <p class="mt-4">
            Our team of blockchain experts is here to guide you through every
            step of the insurance process. From selecting the right policy to
            filing a claim, we're committed to providing you with the best
            advice and support.
        </p>
    </div>
    <div class="max-w-md p-4">
        <img
            src="https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/07/17/Pictures/chosing-blockchain_ae44da6c-89c5-11e8-b2f4-2ee9fa0c7dec.jpg"
            alt="Expert Blockchain Guidance"
            class="rounded-lg"
        />
    </div>
</section>
<section
    class="flex flex-col md:flex-row items-center justify-center py-16 bg-gray-100"
>
    <div class="max-w-md p-4">
        <h2 class="text-2xl font-bold">Easily Claim Your Insurance</h2>
        <p class="mt-4">
            With our blockchain-powered platform, claiming your insurance has
            never been easier. Enjoy a seamless and transparent process,
            ensuring your claims are handled efficiently and securely.
        </p>
    </div>
    <div class="max-w-md p-4">
        <img
            src="https://cdn.pti.agency/Agency/Website/Upload/2020/09/18161007/Claims.png"
            alt="Easily Claim Your Insurance"
            class="rounded-lg"
        />
    </div>
</section>

<section class="flex flex-col items-center py-16 bg-green-800 text-white">
    <div class="text-center">
        <h2 class="text-3xl font-bold">Ready to Get Started?</h2>
        <p class="mt-4 text-xl">
            Join us today and experience the future of insurance claims with
            blockchain technology.
        </p>
    </div>
    <div class="mt-8">
        <a
            href="/Register"
            class="px-6 py-3 bg-green-500 rounded-lg text-lg font-semibold"
            >Sign Up Now</a
        >
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
