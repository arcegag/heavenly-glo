<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Heavenly Glow | Luxury Lash & Brow Studio</title>
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            margin: 0;
            padding: 0;
            background: #e6d7c3;
            text-align: center;
            scroll-behavior: smooth;
            color: #5a4632;
        }
        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #cfb8a2;
            padding: 20px;
            font-size: 24px;
            font-weight: bold;
            text-transform: uppercase;
            border-bottom: 2px solid #a3876f;
        }
        .menu-toggle {
            display: none;
            font-size: 24px;
            background: none;
            border: none;
            cursor: pointer;
        }
        nav {
            display: flex;
            gap: 20px;
        }
        nav a {
            text-decoration: none;
            color: #5a4632;
            font-size: 18px;
            font-weight: bold;
            transition: color 0.3s;
            cursor: pointer;
        }
        nav a:hover {
            color: #8a6a4f;
        }
        .hero {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            background: url('https://img.freepik.com/free-photo/pure-eye-makeup-with-brown-eyeshadow_114579-8619.jpg?t=st=1741752321~exp=1741755921~hmac=207b7e6bf00b78a4ad78a20143567e51306439e05a10c9494dd3e8211cf391a5&w=1060') no-repeat center center/cover;
            padding: 120px 20px;
            text-align: center;
            min-height: 450px;
        }
        .hero::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
        }
        .hero-content {
            position: relative;
            z-index: 2;
            color: white;
        }
        .btn {
            display: inline-block;
            padding: 14px 28px;
            margin-top: 10px;
            background-color: #8a6a4f;
            color: white;
            text-decoration: none;
            border-radius: 8px;
            font-size: 18px;
            font-weight: bold;
            transition: all 0.3s ease;
        }
        .btn:hover {
            background-color: #6f533e;
            transform: scale(1.05);
        }
        .content-section {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            max-width: 1200px;
            margin: 50px auto;
            text-align: left;
            padding: 20px;
            opacity: 0;
            transform: translateX(-100%);
            transition: all 0.5s ease-in-out;
        }
        .content-section.active {
            opacity: 1;
            transform: translateX(0);
        }
        .content-text {
            max-width: 500px;
        }
        .content-image img {
            width: 100%;
            max-width: 500px;
            border-radius: 10px;
            box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
        }
        .content-list {
            list-style-type: disc;
            padding-left: 20px;
        }
        @media (max-width: 768px) {
            header {
                flex-direction: column;
                text-align: center;
            }
            .menu-toggle {
                display: block;
            }
            nav {
                display: none;
                flex-direction: column;
                width: 100%;
            }
            nav.active {
                display: flex;
            }
            .content-section {
                flex-direction: column;
                text-align: center;
            }
            .content-image img {
                max-width: 100%;
            }
        }
    </style>
    <script>
        function toggleMenu() {
            document.querySelector('nav').classList.toggle('active');
        }
    </script>
</head>
<body>
    <header>
        <div>Heavenly Glow</div>
        <button class="menu-toggle" onclick="toggleMenu()">☰</button>
        <nav>
            <a onclick="showSection('home')">Home</a>
            <a onclick="showSection('services')">Services</a>
            <a onclick="showSection('hours')">Hours</a>
            <a onclick="showSection('booking')">Book Now</a>
            <a onclick="showSection('about')">About</a>
            <a onclick="showSection('contact')">Contact</a>
        </nav>
    </header>
    <div class="hero" id="home">
        <div class="hero-content">
            <h1>Welcome to Heavenly Glow</h1>
            <p>Enhancing your natural beauty with expert precision and care.</p>
        </div>
    </div>
    <footer>
        &copy; 2025 Heavenly Glow. All Rights Reserved.
    </footer>
</body>
</html>
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}
