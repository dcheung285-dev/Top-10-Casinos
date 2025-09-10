/**
 * AUTO SLIDER CONFIGURATION
 * 
 * This file configures the auto slider system that can be integrated into any page.
 * Similar to the nav bar and newsletter system, this creates modular sliders.
 */

const AUTO_SLIDER_CONFIG = {
    // Global slider settings
    global: {
        animationSpeed: 30, // Speed of animation in pixels per second
        pauseOnHover: true, // Pause animation when hovering
        showControls: false, // Show play/pause controls
        responsive: true, // Enable responsive behavior
        // NOTE: Gaps are now set manually for each image using the 'gap' property
    },

    // Slider 1 - Top slider (moving left) - Text Logos
    slider1: {
        id: 'auto-slider-1',
        direction: 'left', // 'left' or 'right'
        height: '120px', // Height of the slider
        animationSpeed: 35, // Override global speed if needed
        images: [
            {
                src: 'assets/images/casino_test/rocketpot_text_logo_white.webp',
                alt: 'Rocketpot',
                width: 'auto', // 'auto' or specific width like '120px'
                height: '60px', // Height of individual images
                scale: 1.2, // Scale factor (1.0 = 100%, 1.2 = 120%, 0.8 = 80%, etc.)
                gap: 70     // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/casino_test/stake_text_logo_white.png',
                alt: 'Stake',
                width: 'auto', // 'auto' or specific width like '120px'
                height: '60px', // Height of individual images
                scale: 1.5, // Scale factor (1.0 = 100%, 1.2 = 120%, 0.8 = 80%, etc.)
                gap: 110 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/casino_test/bc.game_text_logo_white.webp',
                alt: 'BC.Game',
                width: 'auto',
                height: '60px',
                scale: 3.0,
                gap: 170 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/casino_test/cloudbet_logo.png',
                alt: 'cloudbet',
                width: 'auto',
                height: '60px',
                scale: 3.0,
                gap: 155    // Larger gap for scaled image
            },
            {
                src: 'assets/images/casino_test/bitcasino_text_logo_white.webp',
                alt: 'Bitcasino',
                width: 'auto',
                height: '60px',
                scale: 2.0,
                gap: 120    // Larger gap for scaled image
            },
            {
                src: 'assets/images/casino_test/bitstarz_logo.webp',
                alt: 'Bitstarz',
                width: 'auto',
                height: '60px',
                scale: 2.0,
                gap: 50    // Larger gap for scaled image
            },
            {
                src: 'assets/images/casino_test/roobet_text_logo.png',
                alt: 'Roobet',
                width: 'auto',
                height: '60px',
                scale: 0.8,
                gap: 25 // Much larger gap for heavily scaled image
            },
            {
                src: 'assets/images/casino_test/mbitcasino_logo.png',
                alt: 'mbitcasino',
                width: 'auto',
                height: '60px',
                scale: 1.5,
                gap: 100 // Medium gap for moderately scaled image
            },
            {
                src: 'assets/images/casino_test/sportsbet.io_logo.png',
                alt: 'Sportsbet.io',
                width: 'auto',
                height: '60px',
                scale: 2.2,
                gap: 115    // Large gap for heavily scaled image
            },
            {
                src: 'assets/images/casino_test/gamdom_text_logo_white.svg',
                alt: 'Gamdom',
                width: 'auto',
                height: '60px',
                scale: 1.5,
                gap: 100   // Larger gap for scaled image
            },
            {
                src: 'assets/images/casino_test/rollbit_logo_white.png',
                alt: 'Rollbit',
                width: 'auto',
                height: '60px',
                scale: 3.0,
                gap: 95   // Larger gap for scaled image
            }
        ],
        styling: {
            backgroundColor: 'transparent',
            borderRadius: '12px',
            padding: '10px 0',
            margin: '20px 0',
            boxShadow: 'none',
            border: 'none'
        }
    },

    // Slider 2 - Bottom slider (moving right) - Bigger with Casino Images
    slider2: {
        id: 'auto-slider-2',
        direction: 'right', // 'left' or 'right'
        height: '360px', // Bigger height for the slider
        animationSpeed: 25, // Different speed for variety
        images: [
            {
                src: 'assets/images/casino_test/casino1.jpeg',
                alt: 'Casino1',
                width: 'auto',
                height: '180px', // Bigger images
                scale: 1.0, // Scale factor for individual sizing adjustments
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/casino_test/casino2.webp',
                alt: 'Casino2',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/casino_test/casino3.jpg',
                alt: 'Casino3',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/casino_test/casino5.webp',
                alt: 'Casino5',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/casino_test/casino6.jpg',
                alt: 'Casino6',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/casino_test/casino7.jpg',
                alt: 'Casino7',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/casino_test/casino8.jpg',
                alt: 'Casino8',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/casino_test/casino10.webp',
                alt: 'Casino10',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/casino_test/casino12.webp',
                alt: 'Casino12',
                width: 'auto',
                height: '180px',
                scale: 1.0
            },
            {
                src: 'assets/images/casino_test/casino13.jpg',
                alt: 'Casino13',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/casino_test/casino14.jpg',
                alt: 'Casino14',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/casino_test/casino15.jpg',
                alt: 'Casino15',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/casino_test/casino16.webp',
                alt: 'Casino16',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/casino_test/casino17.webp',
                alt: 'Casino17',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
        ],
        styling: {
            backgroundColor: 'transparent',
            borderRadius: '12px',
            padding: '10px 0',
            margin: '20px 0',
            boxShadow: 'none',
            border: 'none'
        }
    },
/*
    // Slider 3 - Top slider (moving left) - crypto icons
    slider3: {
        id: 'auto-slider-3',
        direction: 'left', // 'left' or 'right'
        height: '120px', // Height of the slider
        animationSpeed: 35, // Override global speed if needed
        images: [
            {
                src: 'assets/images/casino_test/tether.webp',
                alt: 'Tether',
                width: 'auto', // 'auto' or specific width like '120px'
                height: '60px', // Height of individual images
                scale: 1.5, // Scale factor (1.0 = 100%, 1.2 = 120%, 0.8 = 80%, etc.)
                gap: 20     // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/casino_test/bitcoin.jpg',
                alt: 'Bitcoin',
                width: 'auto', // 'auto' or specific width like '120px'
                height: '60px', // Height of individual images
                scale: 1.5, // Scale factor (1.0 = 100%, 1.2 = 120%, 0.8 = 80%, etc.)
                gap: 20 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/casino_test/eth.webp',
                alt: 'Ethereum',
                width: 'auto',
                height: '60px',
                scale: 1.5,
                gap: 20 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/casino_test/solana.webp',
                alt: 'Solana',
                width: 'auto',
                height: '60px',
                scale: 1.5,
                gap: 20    // Larger gap for scaled image
            },
            {
                src: 'assets/images/casino_test/doge.webp',
                alt: 'Dogecoin',
                width: 'auto',
                height: '60px',
                scale: 1.5,
                gap: 20    // Larger gap for scaled image
            },
            {
                src: 'assets/images/casino_test/litecoin.webp',
                alt: 'Litecoin',
                width: 'auto',
                height: '60px',
                scale: 1.2,
                gap: 20    // Larger gap for scaled image
            },
            {
                src: 'assets/images/casino_test/tether.webp',
                alt: 'Tether',
                width: 'auto', // 'auto' or specific width like '120px'
                height: '60px', // Height of individual images
                scale: 1.5, // Scale factor (1.0 = 100%, 1.2 = 120%, 0.8 = 80%, etc.)
                gap: 20     // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/casino_test/bitcoin.jpg',
                alt: 'Bitcoin',
                width: 'auto', // 'auto' or specific width like '120px'
                height: '60px', // Height of individual images
                scale: 1.5, // Scale factor (1.0 = 100%, 1.2 = 120%, 0.8 = 80%, etc.)
                gap: 20 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/casino_test/eth.webp',
                alt: 'Ethereum',
                width: 'auto',
                height: '60px',
                scale: 1.5,
                gap: 20 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/casino_test/solana.webp',
                alt: 'Solana',
                width: 'auto',
                height: '60px',
                scale: 1.5,
                gap: 20    // Larger gap for scaled image
            },
            {
                src: 'assets/images/casino_test/doge.webp',
                alt: 'Dogecoin',
                width: 'auto',
                height: '60px',
                scale: 1.5,
                gap: 20    // Larger gap for scaled image
            },
            {
                src: 'assets/images/casino_test/litecoin.webp',
                alt: 'Litecoin',
                width: 'auto',
                height: '60px',
                scale: 1.2,
                gap: 20    // Larger gap for scaled image
            },
        ],
        styling: {
            backgroundColor: 'transparent',
            borderRadius: '12px',
            padding: '10px 0',
            margin: '20px 0',
            boxShadow: 'none',
            border: 'none'
        }
    }, */

    // Responsive settings for different screen sizes
    responsive: {
        desktop: {
            // Top slider (text logos)
            slider1Height: '120px',
            slider1ImageHeight: '60px',
            // Bottom slider (casino images - bigger)
            slider2Height: '360px',
            slider2ImageHeight: '180px',
            // Crypto slider (same as text logos)
            slider3Height: '120px',
            slider3ImageHeight: '60px',
            gap: '30px'
        },
        tablet: {
            // Top slider (text logos)
            slider1Height: '70px',
            slider1ImageHeight: '35px',
            // Bottom slider (casino images)
            slider2Height: '100px',
            slider2ImageHeight: '75px',
            // Crypto slider (same as text logos)
            slider3Height: '70px',
            slider3ImageHeight: '35px',
            gap: '20px'
        },
        mobile: {
            // Top slider (text logos)
            slider1Height: '60px',
            slider1ImageHeight: '30px',
            // Bottom slider (casino images)
            slider2Height: '80px',
            slider2ImageHeight: '60px',
            // Crypto slider (same as text logos)
            slider3Height: '60px',
            slider3ImageHeight: '30px',
            gap: '15px'
        },
        extraSmall: {
            // Top slider (text logos)
            slider1Height: '50px',
            slider1ImageHeight: '25px',
            // Bottom slider (casino images)
            slider2Height: '70px',
            slider2ImageHeight: '50px',
            // Crypto slider (same as text logos)
            slider3Height: '50px',
            slider3ImageHeight: '25px',
            gap: '10px'
        }
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AUTO_SLIDER_CONFIG;
}
