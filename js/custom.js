/* DESIGNED BY: DEDX3 */
// LOAD ALL ICONS
(function () {
    const data = {
        sitelogo: `
    <svg width="31" height="37" viewBox="0 0 31 37" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<mask id="mask0_47_27" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="31" height="37">
<rect width="31" height="37" fill="url(#pattern0)"/>
</mask>
<g mask="url(#mask0_47_27)">
<rect width="31" height="37" fill="currentColor"/>
</g>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_47_27" transform="translate(-0.785071 -0.135135) scale(0.0170668 0.0143084)"/>
</pattern>
<image id="image0_47_27" width="390" height="85" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>
    `,
        moonIcon: `
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6.54054C11.8949 7.67776 11.4681 8.76152 10.7696 9.66503C10.071 10.5685 9.12957 11.2544 8.05544 11.6424C6.9813 12.0304 5.81888 12.1044 4.70419 11.8559C3.5895 11.6073 2.56866 11.0465 1.7611 10.2389C0.953538 9.43135 0.39267 8.4105 0.144121 7.29581C-0.104428 6.18112 -0.0303768 5.0187 0.357609 3.94457C0.745595 2.87043 1.43147 1.929 2.33497 1.23045C3.23848 0.531888 4.32224 0.105093 5.45946 0C4.79365 0.900756 4.47327 2.01056 4.55656 3.12758C4.63986 4.24459 5.12132 5.2946 5.91336 6.08664C6.7054 6.87869 7.75541 7.36014 8.87242 7.44344C9.98944 7.52673 11.0992 7.20635 12 6.54054Z" fill="white"/>
</svg>
    `,
        sunIcon: `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 13C10.7614 13 13 10.7614 13 8C13 5.23858 10.7614 3 8 3C5.23858 3 3 5.23858 3 8C3 10.7614 5.23858 13 8 13Z" fill="#F6BB42"/>
<path d="M8 1V2.27273" stroke="#F6BB42" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 13.7275V15.0003" stroke="#F6BB42" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.04883 3.04932L3.95246 3.95295" stroke="#F6BB42" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.0479 12.0474L12.9515 12.951" stroke="#F6BB42" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1 8H2.27273" stroke="#F6BB42" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.7266 8H14.9993" stroke="#F6BB42" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.04883 12.951L3.95246 12.0474" stroke="#F6BB42" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.0479 3.95295L12.9515 3.04932" stroke="#F6BB42" stroke-linecap="round" stroke-linejoin="round"/>
</svg>s
    `,
        titleCircleWhite: `
    <svg xmlns="http://www.w3.org/2000/svg" width="195" height="195" viewBox="0 0 195 195" fill="none">
<circle cx="97.2237" cy="97.223" r="97" transform="rotate(35.3136 97.2237 97.223)" fill="url(#paint0_linear_47_15)"/>
<defs>
<linearGradient id="paint0_linear_47_15" x1="97.2237" y1="0.223015" x2="97.2237" y2="83.723" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
`,
        titleCircleBlack: `
<svg width="195" height="195" viewBox="0 0 195 195" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="97.2237" cy="97.223" r="97" transform="rotate(35.3136 97.2237 97.223)" fill="url(#paint0_linear_47_432)"/>
<defs>
<linearGradient id="paint0_linear_47_432" x1="97.2237" y1="0.223015" x2="97.2237" y2="83.723" gradientUnits="userSpaceOnUse">
<stop stop-color="#343434"/>
<stop offset="1" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
`,
        volumeTracker: `
    <svg width="101" height="86" viewBox="0 0 101 86" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="40" cy="46" r="40" fill="currentColor"/>
    <path d="M100.286 61.7143V3.85715C100.286 1.72607 98.5597 0 96.4286 0H30.8571C28.7261 0 27 1.72607 27 3.85715V61.7143C27 63.8454 28.7261 65.5715 30.8571 65.5715H97.3523C95.2212 65.5715 100.286 65.5715 100.286 61.7143Z" fill="url(#paint0_linear_301_9)"/>
    <path d="M27 33.7692H44.0963C44.5454 33.7692 44.9394 33.4699 45.0597 33.0372L49.8178 15.9313C50.0764 15.0013 51.3723 14.9413 51.7157 15.8434L64.8135 50.2429C65.1537 51.1362 66.4332 51.0889 66.7064 50.1729L75.1332 21.9146C75.3903 21.0522 76.5668 20.9418 76.9799 21.7413L82.9147 33.2282C83.0864 33.5605 83.4292 33.7692 83.8032 33.7692H100" stroke="url(#paint1_linear_301_9)" stroke-width="3"/>
    <defs>
    <linearGradient id="paint0_linear_301_9" x1="66.3248" y1="11.896" x2="65.4284" y2="77.3296" gradientUnits="userSpaceOnUse">
    <stop stop-color="#793DFF"/>
    <stop offset="1" stop-color="#A1B6FF"/>
    </linearGradient>
    <linearGradient id="paint1_linear_301_9" x1="63.5" y1="13" x2="62.4" y2="167.832" gradientUnits="userSpaceOnUse">
    <stop stop-color="#B3CBFF"/>
    <stop offset="1" stop-color="#B3CBFF" stop-opacity="0"/>
    </linearGradient>
    </defs>
    </svg>
    
    `,
        cyptoNews: `
    <svg width="108" height="80" viewBox="0 0 108 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="40" cy="40" r="40" fill="currentColor"/>
<path d="M103.145 7.7146H97.3594V65.5718H103.145C105.276 65.5718 107.002 63.8457 107.002 61.7147V11.5717C107.002 9.44067 105.276 7.7146 103.145 7.7146Z" fill="url(#paint0_linear_301_7)"/>
<path d="M99.2857 61.7143V3.85715C99.2857 1.72607 97.5597 0 95.4286 0H29.8571C27.7261 0 26 1.72607 26 3.85715V61.7143C26 63.8454 27.7261 65.5715 29.8571 65.5715H103.143C101.012 65.5715 99.2857 63.8454 99.2857 61.7143Z" fill="url(#paint1_linear_301_7)"/>
<path d="M91.5709 19.2853H33.7137C32.6492 19.2853 31.7852 18.4213 31.7852 17.3568V13.4996C31.7852 12.435 32.6492 11.571 33.7137 11.571H91.5709C92.6355 11.571 93.4995 12.435 93.4995 13.4996V17.3568C93.4995 18.4213 92.6355 19.2853 91.5709 19.2853Z" fill="url(#paint2_linear_301_7)"/>
<path d="M56.8566 55.9281H33.7137C32.6492 55.9281 31.7852 55.0641 31.7852 53.9995V28.9281C31.7852 27.8635 32.6492 26.9995 33.7137 26.9995H56.8566C57.9212 26.9995 58.7852 27.8635 58.7852 28.9281V53.9995C58.7852 55.0641 57.9212 55.9281 56.8566 55.9281Z" fill="url(#paint3_linear_301_7)"/>
<path d="M93.5 32.7854H66.5V28.9282C66.5 27.8636 67.364 26.9996 68.4286 26.9996H91.5715C92.636 26.9996 93.5 27.8636 93.5 28.9282V32.7854Z" fill="url(#paint4_linear_301_7)"/>
<path d="M93.5 32.7859H66.5V38.5716H93.5V32.7859Z" fill="url(#paint5_linear_301_7)"/>
<path d="M93.5 38.5712H66.5V44.3569H93.5V38.5712Z" fill="url(#paint6_linear_301_7)"/>
<path d="M93.5 44.3569H66.5V50.1427H93.5V44.3569Z" fill="url(#paint7_linear_301_7)"/>
<path d="M91.5715 55.9283H68.4286C67.364 55.9283 66.5 55.0643 66.5 53.9997V50.1426H93.5V53.9997C93.5 55.0643 92.636 55.9283 91.5715 55.9283Z" fill="url(#paint8_linear_301_7)"/>
<defs>
<linearGradient id="paint0_linear_301_7" x1="138.002" y1="42.0002" x2="71.002" y2="37.0002" gradientUnits="userSpaceOnUse">
<stop stop-color="#3A75FF"/>
<stop offset="1" stop-color="#8052FE"/>
</linearGradient>
<linearGradient id="paint1_linear_301_7" x1="64.6337" y1="-12.3802" x2="64.6337" y2="65.6337" gradientUnits="userSpaceOnUse">
<stop stop-color="#3A75FF"/>
<stop offset="1" stop-color="#8052FE"/>
</linearGradient>
<linearGradient id="paint2_linear_301_7" x1="62.6423" y1="11.571" x2="62.5939" y2="41.433" gradientUnits="userSpaceOnUse">
<stop stop-color="#B3CBFF"/>
<stop offset="1" stop-color="#B3CBFF" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint3_linear_301_7" x1="45.2852" y1="26.9995" x2="43.7299" y2="138.96" gradientUnits="userSpaceOnUse">
<stop stop-color="#B3CBFF"/>
<stop offset="1" stop-color="#B3CBFF" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint4_linear_301_7" x1="80" y1="26.9996" x2="79.9378" y2="49.396" gradientUnits="userSpaceOnUse">
<stop stop-color="#B3CBFF"/>
<stop offset="1" stop-color="#B3CBFF" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint5_linear_301_7" x1="80" y1="32.7859" x2="79.9378" y2="55.1822" gradientUnits="userSpaceOnUse">
<stop stop-color="#B3CBFF"/>
<stop offset="1" stop-color="#B3CBFF" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint6_linear_301_7" x1="80" y1="38.5712" x2="79.9378" y2="60.9675" gradientUnits="userSpaceOnUse">
<stop stop-color="#B3CBFF"/>
<stop offset="1" stop-color="#B3CBFF" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint7_linear_301_7" x1="80" y1="44.3569" x2="79.9378" y2="66.7533" gradientUnits="userSpaceOnUse">
<stop stop-color="#B3CBFF"/>
<stop offset="1" stop-color="#B3CBFF" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint8_linear_301_7" x1="80" y1="50.1426" x2="79.9378" y2="72.5389" gradientUnits="userSpaceOnUse">
<stop stop-color="#B3CBFF"/>
<stop offset="1" stop-color="#B3CBFF" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
 `,
        askMeAnything: `
    <svg width="93" height="80" viewBox="0 0 93 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="40" cy="40" r="40" fill="currentColor"/>
<path d="M40.8518 13.6642C28.6261 14.1571 19.1144 24.4679 19.6073 36.6935C19.7919 41.2721 21.3538 45.4696 23.8769 48.9038L20.9526 58.2772L30.0439 54.6142C33.6865 56.8843 38.025 58.1234 42.6367 57.9375C54.8624 57.4446 64.374 47.1342 63.8811 34.9081C63.3878 22.6825 53.0774 13.1713 40.8518 13.6642Z" fill="url(#paint0_linear_301_6)"/>
<path d="M41.7566 43.6937C40.8155 43.7316 40.255 44.1723 39.9508 44.5357C39.5446 45.0196 39.3432 45.6207 39.3695 46.2739C39.3959 46.928 39.6511 47.5083 40.107 47.9504C40.4383 48.272 41.0274 48.6478 41.9543 48.6104C42.8552 48.5741 43.4135 48.1639 43.723 47.8259C44.1649 47.3439 44.3842 46.7378 44.3574 46.0723C44.3306 45.4087 44.0702 44.8191 43.6039 44.3666C43.1194 43.8977 42.4805 43.6645 41.7566 43.6937Z" fill="#E6E7E8"/>
<path d="M46.2704 26.0442C45.0274 24.8875 43.3909 24.3415 41.4057 24.4215C39.4864 24.4989 37.8896 25.1491 36.6587 26.3547C35.3958 27.5925 34.783 29.1975 34.8374 31.1258L34.8374 31.1262C34.8581 31.8638 35.4777 32.4417 36.2149 32.412L37.9031 32.3439C38.6251 32.3148 39.1905 31.7124 39.1737 30.9899C39.1567 30.2508 39.3475 29.6905 39.756 29.2773C40.1843 28.8448 40.7786 28.6189 41.5731 28.5869C42.3207 28.5567 42.8726 28.7283 43.2591 29.1114C43.6724 29.5209 43.8898 30.1289 43.9237 30.9699C43.9416 31.4149 43.9043 31.8088 43.8131 32.1399C43.7215 32.4714 43.5843 32.7805 43.4045 33.0591C43.2601 33.2825 42.8683 33.7834 41.821 34.9004C40.7906 35.9986 40.1335 36.954 39.8121 37.8217C39.4941 38.6788 39.3539 39.7264 39.3843 41.0233L39.3844 41.0238C39.4014 41.7638 40.0221 42.3465 40.7616 42.3166L42.4508 42.2485C43.1818 42.2191 43.7504 41.6027 43.7209 40.8717L43.7209 40.8712C43.6673 39.5426 44.0007 38.5964 44.777 37.8871C46.1474 36.5224 47.0558 35.3422 47.5541 34.2796C48.0703 33.1779 48.3073 31.9957 48.2577 30.7662C48.1789 28.7871 47.51 27.1987 46.2704 26.0442Z" fill="#E6E7E8"/>
<path d="M41.7175 42.7442C40.7764 42.7822 40.2159 43.2229 39.9118 43.5862C39.5056 44.0702 39.3041 44.6712 39.3305 45.3244C39.3568 45.9786 39.6121 46.5589 40.068 47.0009C40.3993 47.3225 40.9884 47.6983 41.9153 47.661C42.8161 47.6246 43.3745 47.2144 43.6839 46.8765C44.1258 46.3945 44.3451 45.7884 44.3183 45.1229C44.2916 44.4592 44.0312 43.8696 43.5649 43.4171C43.0804 42.9482 42.4414 42.715 41.7175 42.7442Z" fill="white"/>
<path d="M46.2313 25.0947C44.9883 23.938 43.3518 23.392 41.3666 23.4721C39.4474 23.5494 37.8505 24.1996 36.6196 25.4053C35.3567 26.6431 34.7439 28.248 34.7984 30.1763L34.7984 30.1768C34.8191 30.9143 35.4387 31.4922 36.1758 31.4625L37.8641 31.3945C38.586 31.3654 39.1514 30.7629 39.1346 30.0404C39.1176 29.3013 39.3084 28.7411 39.717 28.3279C40.1452 27.8953 40.7395 27.6694 41.5341 27.6374C42.2817 27.6073 42.8336 27.7789 43.2201 28.1619C43.6333 28.5715 43.8507 29.1794 43.8846 30.0205C43.9026 30.4654 43.8652 30.8594 43.7741 31.1904C43.6824 31.5219 43.5452 31.8311 43.3655 32.1096C43.221 32.3331 42.8292 32.834 41.782 33.9509C40.7515 35.0492 40.0944 36.0045 39.7731 36.8722C39.4551 37.7294 39.3148 38.777 39.3453 40.0738L39.3453 40.0743C39.3623 40.8143 39.983 41.397 40.7226 41.3672L42.4117 41.2991C43.1427 41.2696 43.7113 40.6532 43.6819 39.9223L43.6818 39.9218C43.6283 38.5931 43.9617 37.647 44.7379 36.9377C46.1083 35.573 47.0167 34.3927 47.515 33.3302C48.0313 32.2284 48.2682 31.0463 48.2186 29.8167C48.1398 27.8377 47.4709 26.2492 46.2313 25.0947Z" fill="white"/>
<path d="M88.1377 63.2437C90.3766 59.6175 91.595 55.3079 91.4104 50.7294C90.9175 38.5037 80.6072 28.992 68.3811 29.485C56.1549 29.9779 46.6437 40.2882 47.1366 52.5143C47.6295 64.74 57.9399 74.2517 70.166 73.7588C74.7777 73.5728 79.0024 71.9885 82.4505 69.4325L91.8071 72.3518L88.1377 63.2437Z" fill="url(#paint1_linear_301_6)"/>
<path d="M58.6291 55.7331C60.1355 55.6724 61.3075 54.402 61.2467 52.8956C61.186 51.3892 59.9156 50.2172 58.4092 50.278C56.9028 50.3387 55.7309 51.6091 55.7916 53.1155C55.8523 54.6219 57.1227 55.7938 58.6291 55.7331Z" fill="#E6E7E8"/>
<path d="M69.4202 55.298C70.9265 55.2373 72.0985 53.9669 72.0377 52.4605C71.977 50.9541 70.7066 49.7822 69.2002 49.8429C67.6938 49.9036 66.5219 51.1741 66.5826 52.6804C66.6434 54.1868 67.9138 55.3588 69.4202 55.298Z" fill="#E6E7E8"/>
<path d="M80.2112 54.8632C81.7176 54.8025 82.8895 53.5321 82.8288 52.0257C82.768 50.5193 81.4976 49.3474 79.9912 49.4081C78.4848 49.4688 77.3129 50.7392 77.3736 52.2456C77.4344 53.752 78.7048 54.924 80.2112 54.8632Z" fill="#E6E7E8"/>
<path d="M58.592 54.7849C60.0984 54.7241 61.2704 53.4537 61.2096 51.9473C61.1489 50.4409 59.8785 49.269 58.3721 49.3297C56.8657 49.3905 55.6938 50.6609 55.7545 52.1673C55.8152 53.6737 57.0856 54.8456 58.592 54.7849Z" fill="white"/>
<path d="M69.383 54.35C70.8894 54.2893 72.0614 53.0189 72.0006 51.5125C71.9399 50.0061 70.6695 48.8342 69.1631 48.8949C67.6567 48.9556 66.4848 50.2261 66.5455 51.7324C66.6062 53.2388 67.8767 54.4108 69.383 54.35Z" fill="white"/>
<path d="M80.176 53.9147C81.6824 53.854 82.8543 52.5836 82.7936 51.0772C82.7329 49.5708 81.4625 48.3989 79.9561 48.4596C78.4497 48.5203 77.2777 49.7908 77.3385 51.2971C77.3992 52.8035 78.6696 53.9755 80.176 53.9147Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_301_6" x1="42.7958" y1="21.6309" x2="43.9005" y2="65.8363" gradientUnits="userSpaceOnUse">
<stop stop-color="#793DFF"/>
<stop offset="1" stop-color="#A1B6FF"/>
</linearGradient>
<linearGradient id="paint1_linear_301_6" x1="49.6167" y1="34.5127" x2="78.4481" y2="85.9507" gradientUnits="userSpaceOnUse">
<stop stop-color="#2D2CF6"/>
<stop offset="1" stop-color="#79F5E6"/>
</linearGradient>
</defs>
</svg>
 `,
        learn: `
    <svg width="106" height="99" viewBox="0 0 106 99" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="40" cy="59" r="40" fill="currentColor"/>
    <path d="M44.3447 14.0625H28.4365C27.7812 14.0625 27.25 14.5937 27.25 15.249V74.751C27.25 75.4063 27.7812 75.9375 28.4365 75.9375H44.3447C45 75.9375 45.5312 75.4063 45.5312 74.751V15.249C45.5312 14.5937 45 14.0625 44.3447 14.0625Z" fill="url(#paint0_linear_301_5)"/>
    <path d="M45.5312 24.8291H27.25V27.1582H45.5312V24.8291Z" fill="url(#paint1_linear_301_5)"/>
    <path d="M45.5312 61.6992H27.25V64.0283H45.5312V61.6992Z" fill="url(#paint2_linear_301_5)"/>
    <path d="M45.5312 57.041H27.25V59.3701H45.5312V57.041Z" fill="url(#paint3_linear_301_5)"/>
    <path d="M36.3896 46.0527C38.8895 46.0527 40.916 44.0262 40.916 41.5264C40.916 39.0265 38.8895 37 36.3896 37C33.8898 37 31.8633 39.0265 31.8633 41.5264C31.8633 44.0262 33.8898 46.0527 36.3896 46.0527Z" fill="url(#paint4_linear_301_5)"/>
    <path d="M65.2178 14.0625H49.3096C48.6543 14.0625 48.123 14.5937 48.123 15.249V74.751C48.123 75.4063 48.6543 75.9375 49.3096 75.9375H65.2178C65.8731 75.9375 66.4043 75.4063 66.4043 74.751V15.249C66.4043 14.5937 65.8731 14.0625 65.2178 14.0625Z" fill="url(#paint5_linear_301_5)"/>
    <path d="M66.4043 24.8291H48.123V27.1582H66.4043V24.8291Z" fill="url(#paint6_linear_301_5)"/>
    <path d="M66.4043 61.6992H48.123V64.0283H66.4043V61.6992Z" fill="url(#paint7_linear_301_5)"/>
    <path d="M66.4043 57.041H48.123V59.3701H66.4043V57.041Z" fill="url(#paint8_linear_301_5)"/>
    <path d="M57.2646 46.0527C59.7645 46.0527 61.791 44.0262 61.791 41.5264C61.791 39.0265 59.7645 37 57.2646 37C54.7648 37 52.7383 39.0265 52.7383 41.5264C52.7383 44.0262 54.7648 46.0527 57.2646 46.0527Z" fill="url(#paint9_linear_301_5)"/>
    <path d="M85.9437 13.2881L69.9616 15.3396C69.3658 15.416 68.9448 15.961 69.0213 16.5568L76.6221 75.7704C76.6985 76.3662 77.2435 76.7872 77.8393 76.7108L93.8214 74.6593C94.4172 74.5828 94.8382 74.0378 94.7617 73.442L87.161 14.2284C87.0845 13.6326 86.5395 13.2116 85.9437 13.2881Z" fill="url(#paint10_linear_301_5)"/>
    <path d="M88.3897 23.8115L70.25 26.1399L70.5475 28.4573L88.6871 26.1289L88.3897 23.8115Z" fill="url(#paint11_linear_301_5)"/>
    <path d="M93.0869 60.4108L74.9473 62.7393L75.2447 65.0567L93.3844 62.7282L93.0869 60.4108Z" fill="url(#paint12_linear_301_5)"/>
    <path d="M92.4951 55.7909L74.3555 58.1194L74.6529 60.4368L92.7926 58.1083L92.4951 55.7909Z" fill="url(#paint13_linear_301_5)"/>
    <path d="M81.7234 45.5245C84.1949 45.2072 85.9412 42.9465 85.624 40.4751C85.3068 38.0036 83.0461 36.2573 80.5746 36.5745C78.1031 36.8918 76.3568 39.1524 76.674 41.6239C76.9913 44.0954 79.252 45.8417 81.7234 45.5245Z" fill="url(#paint14_linear_301_5)"/>
    <defs>
    <linearGradient id="paint0_linear_301_5" x1="36.4054" y1="2.38019" x2="36.4054" y2="75.9962" gradientUnits="userSpaceOnUse">
    <stop stop-color="#3A75FF"/>
    <stop offset="1" stop-color="#8052FE"/>
    </linearGradient>
    <linearGradient id="paint1_linear_301_5" x1="36.3906" y1="24.8291" x2="36.3757" y2="33.845" gradientUnits="userSpaceOnUse">
    <stop stop-color="#B3CBFF"/>
    <stop offset="1" stop-color="#B3CBFF" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="paint2_linear_301_5" x1="36.3906" y1="61.6992" x2="36.3757" y2="70.7151" gradientUnits="userSpaceOnUse">
    <stop stop-color="#B3CBFF"/>
    <stop offset="1" stop-color="#B3CBFF" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="paint3_linear_301_5" x1="36.3906" y1="57.041" x2="36.3757" y2="66.0569" gradientUnits="userSpaceOnUse">
    <stop stop-color="#B3CBFF"/>
    <stop offset="1" stop-color="#B3CBFF" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="paint4_linear_301_5" x1="36.3896" y1="37" x2="35.9354" y2="72.0372" gradientUnits="userSpaceOnUse">
    <stop stop-color="#B3CBFF"/>
    <stop offset="1" stop-color="#B3CBFF" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="paint5_linear_301_5" x1="48.123" y1="14.0625" x2="85.2791" y2="72.2048" gradientUnits="userSpaceOnUse">
    <stop stop-color="#EA70FE"/>
    <stop offset="1" stop-color="#A1AAFF"/>
    </linearGradient>
    <linearGradient id="paint6_linear_301_5" x1="57.2637" y1="24.8291" x2="57.2488" y2="33.845" gradientUnits="userSpaceOnUse">
    <stop stop-color="#B3CBFF"/>
    <stop offset="1" stop-color="#B3CBFF" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="paint7_linear_301_5" x1="57.2637" y1="61.6992" x2="57.2488" y2="70.7151" gradientUnits="userSpaceOnUse">
    <stop stop-color="#B3CBFF"/>
    <stop offset="1" stop-color="#B3CBFF" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="paint8_linear_301_5" x1="57.2637" y1="57.041" x2="57.2488" y2="66.0569" gradientUnits="userSpaceOnUse">
    <stop stop-color="#B3CBFF"/>
    <stop offset="1" stop-color="#B3CBFF" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="paint9_linear_301_5" x1="57.2646" y1="37" x2="56.8104" y2="72.0372" gradientUnits="userSpaceOnUse">
    <stop stop-color="#B3CBFF"/>
    <stop offset="1" stop-color="#B3CBFF" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="paint10_linear_301_5" x1="77" y1="7.5" x2="131.374" y2="53.4617" gradientUnits="userSpaceOnUse">
    <stop stop-color="#2D2CF6"/>
    <stop offset="1" stop-color="#79F5E6"/>
    </linearGradient>
    <linearGradient id="paint11_linear_301_5" x1="79.3198" y1="24.9757" x2="80.4565" y2="33.9482" gradientUnits="userSpaceOnUse">
    <stop stop-color="#B3CBFF"/>
    <stop offset="1" stop-color="#B3CBFF" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="paint12_linear_301_5" x1="84.0171" y1="61.575" x2="85.1537" y2="70.5476" gradientUnits="userSpaceOnUse">
    <stop stop-color="#B3CBFF"/>
    <stop offset="1" stop-color="#B3CBFF" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="paint13_linear_301_5" x1="83.4253" y1="56.9552" x2="84.5619" y2="65.9277" gradientUnits="userSpaceOnUse">
    <stop stop-color="#B3CBFF"/>
    <stop offset="1" stop-color="#B3CBFF" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="paint14_linear_301_5" x1="80.5746" y1="36.5745" x2="84.5719" y2="71.2716" gradientUnits="userSpaceOnUse">
    <stop stop-color="#B3CBFF"/>
    <stop offset="1" stop-color="#B3CBFF" stop-opacity="0"/>
    </linearGradient>
    </defs>
    </svg>
    `,
        premium: `
    <svg width="80" height="92" viewBox="0 0 80 92" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="40" cy="52" r="40" fill="currentColor"/>
    <path d="M22.1903 0L1 23.6354H22.1903V0Z" fill="url(#paint0_linear_301_4)"/>
    <path d="M39.7129 75.3892L22.1901 23.6358H0.999775L39.7129 75.3892Z" fill="url(#paint1_linear_301_4)"/>
    <path d="M39.9186 76L57.4414 23.6354H22.1921L39.9186 76Z" fill="url(#paint2_linear_301_4)"/>
    <path d="M39.7129 75.3892L57.2357 23.6358H78.426L39.7129 75.3892Z" fill="url(#paint3_linear_301_4)"/>
    <path d="M22.1954 23.6354V0H57.6484V23.6354H22.1954Z" fill="url(#paint4_linear_301_4)"/>
    <path d="M22.1954 23.6354V0H57.6484V23.6354H22.1954Z" fill="url(#paint5_linear_301_4)"/>
    <path d="M57.6436 0L78.834 23.6354H57.6436V0Z" fill="url(#paint6_linear_301_4)"/>
    <defs>
    <linearGradient id="paint0_linear_301_4" x1="31.563" y1="5.29758" x2="5.07506" y2="18.7453" gradientUnits="userSpaceOnUse">
    <stop stop-color="#7695FF"/>
    <stop offset="1" stop-color="#A1B6FF"/>
    </linearGradient>
    <linearGradient id="paint1_linear_301_4" x1="36.4528" y1="65.609" x2="4.44899" y2="12.9503" gradientUnits="userSpaceOnUse">
    <stop stop-color="#7636FF"/>
    <stop offset="1" stop-color="#A1B6FF"/>
    </linearGradient>
    <linearGradient id="paint2_linear_301_4" x1="38.5268" y1="66.5" x2="39.7149" y2="14.2628" gradientUnits="userSpaceOnUse">
    <stop stop-color="#793DFF"/>
    <stop offset="1" stop-color="#A1B6FF"/>
    </linearGradient>
    <linearGradient id="paint3_linear_301_4" x1="42.9729" y1="65.609" x2="74.9768" y2="12.9503" gradientUnits="userSpaceOnUse">
    <stop stop-color="#7636FF"/>
    <stop offset="1" stop-color="#A1B6FF"/>
    </linearGradient>
    <linearGradient id="paint4_linear_301_4" x1="39.7181" y1="-4.07507" x2="39.9219" y2="23.6354" gradientUnits="userSpaceOnUse">
    <stop stop-color="#9CA9D7"/>
    <stop offset="1" stop-color="#9A9EFF"/>
    </linearGradient>
    <linearGradient id="paint5_linear_301_4" x1="16.0593" y1="5.29758" x2="36.4987" y2="29.5203" gradientUnits="userSpaceOnUse">
    <stop stop-color="#C3CFF7"/>
    <stop offset="1" stop-color="#A1B6FF"/>
    </linearGradient>
    <linearGradient id="paint6_linear_301_4" x1="53.9761" y1="5.29758" x2="73.5364" y2="19.1528" gradientUnits="userSpaceOnUse">
    <stop stop-color="#C3CFF7"/>
    <stop offset="1" stop-color="#A1B6FF"/>
    </linearGradient>
    </defs>
    </svg>
    `,
        telegramAirplane: `
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="40" cy="40" r="40" fill="currentColor"/>
    <path d="M79.4203 3.02382L68.0931 60.8572C68.0931 60.8572 67.6062 63.5 64.3284 63.5C62.5867 63.5 61.6886 62.6715 61.6886 62.6715L37.1534 42.3122L25.1489 36.2616L9.7426 32.1643C9.7426 32.1643 7 31.372 7 29.1042C7 27.2143 9.82121 26.3132 9.82121 26.3132L74.2768 0.707582C74.2738 0.704558 76.2453 -0.00301415 77.6816 9.66413e-06C78.5645 9.66413e-06 79.5715 0.377986 79.5715 1.51192C79.5715 2.26787 79.4203 3.02382 79.4203 3.02382Z" fill="url(#paint0_linear_301_3)"/>
    <path d="M46.3085 49.9092L35.9489 60.1116C35.9489 60.1116 35.4983 60.4593 34.8966 60.4744C34.6879 60.4805 34.4642 60.4472 34.2344 60.3444L37.1493 42.3074L46.3085 49.9092Z" fill="#B0BEC5"/>
    <path d="M67.1664 12.6878C66.6554 12.0226 65.712 11.9016 65.0467 12.4066L25.1445 36.2856C25.1445 36.2856 31.5127 54.1019 32.4833 57.1862C33.457 60.2735 34.2371 60.3461 34.2371 60.3461L37.1521 42.3091L66.8822 14.8045C67.5474 14.2995 67.6714 13.353 67.1664 12.6878Z" fill="url(#paint1_linear_301_3)"/>
    <defs>
    <linearGradient id="paint0_linear_301_3" x1="78" y1="-2" x2="43.2857" y2="63.5" gradientUnits="userSpaceOnUse">
    <stop stop-color="#B3B6FF"/>
    <stop offset="0.692708" stop-color="#8A8FFF"/>
    <stop offset="1" stop-color="white"/>
    </linearGradient>
    <linearGradient id="paint1_linear_301_3" x1="63.498" y1="13.5" x2="32.498" y2="57.5" gradientUnits="userSpaceOnUse">
    <stop stop-color="#926CFF"/>
    <stop offset="1" stop-color="#DCCFDC"/>
    </linearGradient>
    </defs>
    </svg>
    `,
        tradingSignal: `
    <svg width="87" height="84" viewBox="0 0 87 84" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="40" cy="40" r="40" fill="currentColor"/>
<rect width="2.98507" height="50" rx="1.49254" transform="matrix(-1 0 0 1 28.4609 34)" fill="#5B19B8"/>
<rect width="2.98507" height="50" rx="1.49254" transform="matrix(-1 0 0 1 28.4609 34)" fill="url(#paint0_linear_301_2)"/>
<rect width="11.9403" height="29.8507" rx="1" transform="matrix(-1 0 0 1 32.9395 44.4478)" fill="#5B19B8"/>
<rect width="11.9403" height="29.8507" rx="1" transform="matrix(-1 0 0 1 32.9395 44.4478)" fill="url(#paint1_linear_301_2)"/>
<rect width="2.98507" height="38" rx="1.49254" transform="matrix(-1 0 0 1 82.4609 29)" fill="url(#paint2_linear_301_2)"/>
<rect width="12" height="19" rx="1" transform="matrix(-1 0 0 1 87 37)" fill="url(#paint3_linear_301_2)"/>
<rect width="2.98507" height="43" rx="1.49254" transform="matrix(-1 0 0 1 46.4609 27)" fill="url(#paint4_linear_301_2)"/>
<rect width="12" height="22" rx="1" transform="matrix(-1 0 0 1 51 37)" fill="url(#paint5_linear_301_2)"/>
<rect width="2.98507" height="43" rx="1.49254" transform="matrix(-1 0 0 1 64.4609 34)" fill="#5B19B8"/>
<rect width="2.98507" height="43" rx="1.49254" transform="matrix(-1 0 0 1 64.4609 34)" fill="url(#paint6_linear_301_2)"/>
<rect width="12" height="18" rx="1" transform="matrix(-1 0 0 1 69 44)" fill="#5B19B8"/>
<rect width="12" height="18" rx="1" transform="matrix(-1 0 0 1 69 44)" fill="url(#paint7_linear_301_2)"/>
<rect x="36" y="11" width="36" height="13" rx="2" fill="white"/>
<path d="M44.37 18.65L43.35 19.37C43.5033 19.6967 43.7167 20 43.99 20.28C44.2633 20.56 44.5833 20.7833 44.95 20.95C45.3233 21.11 45.7233 21.19 46.15 21.19C46.47 21.19 46.7733 21.14 47.06 21.04C47.3533 20.9467 47.6167 20.81 47.85 20.63C48.0833 20.4433 48.2667 20.2167 48.4 19.95C48.5333 19.6833 48.6 19.38 48.6 19.04C48.6 18.74 48.55 18.4767 48.45 18.25C48.3567 18.0167 48.2233 17.8167 48.05 17.65C47.8833 17.4767 47.6933 17.33 47.48 17.21C47.2733 17.09 47.0567 16.99 46.83 16.91C46.4767 16.79 46.1833 16.6733 45.95 16.56C45.7167 16.44 45.5433 16.3167 45.43 16.19C45.3167 16.0567 45.26 15.9033 45.26 15.73C45.26 15.5567 45.33 15.4067 45.47 15.28C45.61 15.1467 45.82 15.08 46.1 15.08C46.3133 15.08 46.5033 15.1233 46.67 15.21C46.8367 15.29 46.9833 15.4 47.11 15.54C47.2433 15.6733 47.3567 15.8233 47.45 15.99L48.57 15.37C48.45 15.1233 48.28 14.8867 48.06 14.66C47.8467 14.4267 47.5767 14.2367 47.25 14.09C46.93 13.9367 46.5467 13.86 46.1 13.86C45.6667 13.86 45.2733 13.94 44.92 14.1C44.5733 14.2533 44.2967 14.4767 44.09 14.77C43.89 15.0567 43.79 15.4 43.79 15.8C43.79 16.1333 43.8533 16.42 43.98 16.66C44.1067 16.8933 44.2667 17.0933 44.46 17.26C44.6533 17.42 44.8567 17.5533 45.07 17.66C45.29 17.76 45.4833 17.84 45.65 17.9C45.9633 18.02 46.2267 18.1333 46.44 18.24C46.66 18.34 46.8233 18.4567 46.93 18.59C47.0433 18.7233 47.1 18.9 47.1 19.12C47.1 19.3733 47.01 19.5733 46.83 19.72C46.65 19.8667 46.4167 19.94 46.13 19.94C45.8833 19.94 45.6533 19.8867 45.44 19.78C45.2267 19.6733 45.03 19.5233 44.85 19.33C44.6767 19.1367 44.5167 18.91 44.37 18.65ZM50.6859 21H54.2159V19.79H50.6859V21ZM50.6859 15.21H54.2159V14H50.6859V15.21ZM50.6859 17.88H54.0159V16.69H50.6859V17.88ZM49.7659 14V21H51.1459V14H49.7659ZM55.6252 14V21H59.8452V19.75H57.0552V14H55.6252ZM60.6643 14V21H64.8843V19.75H62.0943V14H60.6643Z" fill="#FF8686"/>
<defs>
<linearGradient id="paint0_linear_301_2" x1="0.215796" y1="4.81579" x2="8.85831" y2="5.8301" gradientUnits="userSpaceOnUse">
<stop stop-color="#2D2CF6"/>
<stop offset="1" stop-color="#79F5E6"/>
</linearGradient>
<linearGradient id="paint1_linear_301_2" x1="0.863186" y1="2.8751" x2="22.5193" y2="19.9038" gradientUnits="userSpaceOnUse">
<stop stop-color="#2D2CF6"/>
<stop offset="1" stop-color="#79F5E6"/>
</linearGradient>
<linearGradient id="paint2_linear_301_2" x1="0" y1="0" x2="17.8358" y2="7.42057" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF4040" stop-opacity="0.17"/>
<stop offset="1" stop-color="#FFA1A1"/>
</linearGradient>
<linearGradient id="paint3_linear_301_2" x1="0" y1="0" x2="6.90045" y2="23.0822" gradientUnits="userSpaceOnUse">
<stop stop-color="#FB40FF"/>
<stop offset="1" stop-color="#FFA1A1"/>
</linearGradient>
<linearGradient id="paint4_linear_301_2" x1="0" y1="0" x2="18.4316" y2="6.77674" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF4040" stop-opacity="0.17"/>
<stop offset="1" stop-color="#FFA1A1"/>
</linearGradient>
<linearGradient id="paint5_linear_301_2" x1="0" y1="0" x2="9" y2="26" gradientUnits="userSpaceOnUse">
<stop stop-color="#FB40FF"/>
<stop offset="1" stop-color="#FFA1A1"/>
</linearGradient>
<linearGradient id="paint6_linear_301_2" x1="0.215796" y1="4.14158" x2="8.81716" y2="5.31539" gradientUnits="userSpaceOnUse">
<stop stop-color="#2D2CF6"/>
<stop offset="1" stop-color="#79F5E6"/>
</linearGradient>
<linearGradient id="paint7_linear_301_2" x1="0.867502" y1="1.73369" x2="13.8284" y2="18.7194" gradientUnits="userSpaceOnUse">
<stop stop-color="#2D2CF6"/>
<stop offset="1" stop-color="#79F5E6"/>
</linearGradient>
</defs>
</svg>
    `,
        magnifier: `
    <svg width="109" height="110" viewBox="0 0 109 110" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="40" cy="70" r="40" fill="currentColor"/>
<rect x="44.082" y="59.1943" width="8.96759" height="46.5096" rx="4.4838" transform="rotate(-53.3878 44.082 59.1943)" fill="#5B19B8"/>
<rect x="44.082" y="59.1943" width="8.96759" height="46.5096" rx="4.4838" transform="rotate(-53.3878 44.082 59.1943)" fill="url(#paint0_linear_0_1)"/>
<path d="M45.1604 51.7022L64.3824 26.7871L77.1003 26.4831" stroke="#867F7C" stroke-width="3" stroke-linecap="round"/>
<circle cx="65.0806" cy="27.4481" r="3.79377" transform="rotate(-1.36928 65.0806 27.4481)" fill="black"/>
<circle cx="65.0806" cy="27.4481" r="3.79377" transform="rotate(-1.36928 65.0806 27.4481)" fill="url(#paint1_linear_0_1)"/>
<circle cx="37.5519" cy="50.2599" r="26.8401" transform="rotate(126.612 37.5519 50.2599)" fill="#5B19B8"/>
<circle cx="37.5519" cy="50.2599" r="26.8401" transform="rotate(126.612 37.5519 50.2599)" fill="url(#paint2_linear_0_1)"/>
<circle cx="37.5843" cy="50.4877" r="21.4721" transform="rotate(-53.3878 37.5843 50.4877)" fill="url(#paint3_linear_0_1)" stroke="url(#paint4_linear_0_1)" stroke-width="4"/>
<mask id="mask0_0_1" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="16" y="29" width="44" height="43">
<circle cx="37.5843" cy="50.4877" r="21.4721" transform="rotate(-53.3878 37.5843 50.4877)" fill="url(#paint5_linear_0_1)"/>
</mask>
<g mask="url(#mask0_0_1)">
<path d="M13.2756 51.1731L24.5833 51.1496L37.8601 60.4801L56.1393 37.8266L71.9311 37.7938" stroke="#867F7C" stroke-width="3" stroke-linecap="round"/>
<circle cx="24.581" cy="50.76" r="3.50929" transform="rotate(-0.119114 24.581 50.76)" fill="black"/>
<circle cx="24.581" cy="50.76" r="3.50929" transform="rotate(-0.119114 24.581 50.76)" fill="url(#paint6_linear_0_1)"/>
<circle cx="37.667" cy="60.0904" r="3.50929" transform="rotate(-0.119114 37.667 60.0904)" fill="black"/>
<circle cx="37.667" cy="60.0904" r="3.50929" transform="rotate(-0.119114 37.667 60.0904)" fill="url(#paint7_linear_0_1)"/>
<circle cx="47.1943" cy="48.5679" r="3.50929" transform="rotate(-0.119114 47.1943 48.5679)" fill="black"/>
<circle cx="47.1943" cy="48.5679" r="3.50929" transform="rotate(-0.119114 47.1943 48.5679)" fill="url(#paint8_linear_0_1)"/>
</g>
<defs>
<linearGradient id="paint0_linear_0_1" x1="44.7303" y1="63.6739" x2="67.7449" y2="72.3972" gradientUnits="userSpaceOnUse">
<stop stop-color="#2D2CF6"/>
<stop offset="1" stop-color="#79F5E6"/>
</linearGradient>
<linearGradient id="paint1_linear_0_1" x1="61.8354" y1="24.3852" x2="66.4136" y2="33.385" gradientUnits="userSpaceOnUse">
<stop stop-color="#9F9EFD"/>
<stop offset="1" stop-color="#79A3F5"/>
</linearGradient>
<linearGradient id="paint2_linear_0_1" x1="14.5924" y1="28.59" x2="46.9822" y2="92.2624" gradientUnits="userSpaceOnUse">
<stop stop-color="#BC67FF"/>
<stop offset="1" stop-color="#79F5E6"/>
</linearGradient>
<linearGradient id="paint3_linear_0_1" x1="40.0755" y1="43.9625" x2="51.719" y2="51.7101" gradientUnits="userSpaceOnUse">
<stop stop-color="#7A4BFF"/>
<stop offset="1" stop-color="#A35BFF"/>
</linearGradient>
<linearGradient id="paint4_linear_0_1" x1="50.5068" y1="29.2091" x2="47.4804" y2="62.5306" gradientUnits="userSpaceOnUse">
<stop stop-opacity="0.24"/>
<stop offset="0.383851" stop-opacity="0.42"/>
<stop offset="1" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint5_linear_0_1" x1="26.6856" y1="33.2449" x2="46.2056" y2="71.9597" gradientUnits="userSpaceOnUse">
<stop stop-color="#CA9AE8"/>
<stop offset="0.499256" stop-color="#AAB4F9"/>
<stop offset="0.504464" stop-color="#AAB5F9"/>
<stop offset="1" stop-color="#D2E8FC"/>
</linearGradient>
<linearGradient id="paint6_linear_0_1" x1="21.5791" y1="47.9268" x2="25.814" y2="56.2518" gradientUnits="userSpaceOnUse">
<stop stop-color="#9F9EFD"/>
<stop offset="1" stop-color="#79A3F5"/>
</linearGradient>
<linearGradient id="paint7_linear_0_1" x1="34.6651" y1="57.2571" x2="38.9" y2="65.5821" gradientUnits="userSpaceOnUse">
<stop stop-color="#9F9EFD"/>
<stop offset="1" stop-color="#79A3F5"/>
</linearGradient>
<linearGradient id="paint8_linear_0_1" x1="44.1924" y1="45.7346" x2="48.4273" y2="54.0597" gradientUnits="userSpaceOnUse">
<stop stop-color="#9F9EFD"/>
<stop offset="1" stop-color="#79A3F5"/>
</linearGradient>
</defs>
</svg>

    `,
        instagramSocial: `
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.77778 0C3.48911 0 0 3.48911 0 7.77778V20.2222C0 24.5109 3.48911 28 7.77778 28H20.2222C24.5109 28 28 24.5109 28 20.2222V7.77778C28 3.48911 24.5109 0 20.2222 0H7.77778ZM7.77778 3.11111H20.2222C22.7951 3.11111 24.8889 5.20489 24.8889 7.77778V20.2222C24.8889 22.7951 22.7951 24.8889 20.2222 24.8889H7.77778C5.20489 24.8889 3.11111 22.7951 3.11111 20.2222V7.77778C3.11111 5.20489 5.20489 3.11111 7.77778 3.11111ZM21.7778 4.66667C21.3652 4.66667 20.9696 4.83056 20.6778 5.12228C20.3861 5.414 20.2222 5.80966 20.2222 6.22222C20.2222 6.63478 20.3861 7.03044 20.6778 7.32217C20.9696 7.61389 21.3652 7.77778 21.7778 7.77778C22.1903 7.77778 22.586 7.61389 22.8777 7.32217C23.1694 7.03044 23.3333 6.63478 23.3333 6.22222C23.3333 5.80966 23.1694 5.414 22.8777 5.12228C22.586 4.83056 22.1903 4.66667 21.7778 4.66667ZM14 6.22222C9.71133 6.22222 6.22222 9.71133 6.22222 14C6.22222 18.2887 9.71133 21.7778 14 21.7778C18.2887 21.7778 21.7778 18.2887 21.7778 14C21.7778 9.71133 18.2887 6.22222 14 6.22222ZM14 9.33333C16.5729 9.33333 18.6667 11.4271 18.6667 14C18.6667 16.5729 16.5729 18.6667 14 18.6667C11.4271 18.6667 9.33333 16.5729 9.33333 14C9.33333 11.4271 11.4271 9.33333 14 9.33333Z" fill="currentColor"/>
    </svg>
    
    `,
        telegramSocial: `
    <svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M29.2246 0.00264059C28.8168 0.0216116 28.4326 0.14018 28.0911 0.272978H28.0864C27.7402 0.410518 26.0944 1.10296 23.595 2.15111C21.0955 3.20401 17.8515 4.56992 14.6312 5.92635C8.19996 8.63447 1.87786 11.2999 1.87786 11.2999L1.95374 11.2714C1.95374 11.2714 1.51741 11.4137 1.0621 11.7268C0.829708 11.8785 0.573598 12.0872 0.350689 12.4145C0.127778 12.7417 -0.0524473 13.2444 0.013952 13.7614C0.123036 14.6388 0.692168 15.1653 1.10004 15.4546C1.51267 15.7486 1.90632 15.8862 1.90632 15.8862H1.9158L7.84426 17.8829C8.10985 18.7366 9.65125 23.8018 10.0212 24.9685C10.2394 25.6657 10.4528 26.1021 10.7184 26.4341C10.8464 26.6048 10.9982 26.7471 11.1784 26.8609C11.2496 26.9036 11.3254 26.9368 11.4013 26.9653C11.425 26.9795 11.4488 26.9842 11.4772 26.989L11.4156 26.9747C11.4345 26.9795 11.4488 26.9937 11.463 26.9985C11.5104 27.0127 11.5436 27.0174 11.6053 27.0269C12.5443 27.3115 13.2984 26.7281 13.2984 26.7281L13.3411 26.6949L16.8413 23.5078L22.7081 28.0087L22.8409 28.0656C24.0645 28.6015 25.3024 28.3027 25.9569 27.7763C26.6161 27.2451 26.8722 26.5669 26.8722 26.5669L26.9149 26.4578L31.449 3.23246C31.577 2.65859 31.6102 2.12266 31.468 1.60095C31.3257 1.07925 30.9605 0.590743 30.5194 0.329891C30.0736 0.0642962 29.6325 -0.0163305 29.2246 0.00264059ZM29.1013 2.49259C29.0966 2.56848 29.1108 2.55899 29.0776 2.70602V2.72024L24.5862 25.7037C24.5672 25.7369 24.534 25.808 24.4439 25.8792C24.3491 25.955 24.2732 26.0025 23.8795 25.846L16.7037 20.3444L12.3689 24.2951L13.2795 18.4804C13.2795 18.4804 24.5198 8.00368 25.0036 7.55312C25.4873 7.10256 25.3261 7.0077 25.3261 7.0077C25.3593 6.45754 24.5957 6.84645 24.5957 6.84645L9.8125 16.0047L9.80776 15.981L2.72207 13.5954V13.5907C2.71733 13.5907 2.70784 13.5859 2.7031 13.5859C2.70784 13.5859 2.74104 13.5717 2.74104 13.5717L2.77898 13.5527L2.81693 13.5385C2.81693 13.5385 9.14377 10.8731 15.575 8.16494C18.7953 6.80851 22.0394 5.44259 24.534 4.3897C27.0287 3.34155 28.8737 2.57322 28.978 2.53053C29.0776 2.49259 29.0302 2.49259 29.1013 2.49259Z" fill="currentColor"/>
    </svg>
    
    `,
        twitterSocial: `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="27" viewBox="0 0 32 27" fill="none">
<path d="M21.62 0C17.6758 0 14.4749 3.18701 14.3894 7.11146C10.9021 6.69321 8.63125 5.38935 7.23824 4.10462C5.69341 2.67988 5.20436 1.41407 5.20436 1.41407C5.13297 1.23417 5.01493 1.07655 4.86241 0.957409C4.70988 0.83827 4.52836 0.761916 4.33654 0.736204C4.14471 0.710493 3.94949 0.736351 3.77098 0.811118C3.59246 0.885886 3.43708 1.00686 3.32083 1.16161C3.32083 1.16161 2.01314 2.90472 2.01314 5.44635C2.01314 6.89943 2.47194 7.97459 3.01873 8.88578C2.99859 8.87635 2.86272 8.82905 2.86272 8.82905C2.68911 8.74237 2.4955 8.70364 2.30191 8.71685C2.10831 8.73006 1.92176 8.79474 1.76154 8.90421C1.60132 9.01367 1.47325 9.16395 1.39056 9.33949C1.30787 9.51504 1.27358 9.70948 1.29121 9.90272C1.29121 9.90272 1.71047 12.9673 4.59165 15.2072L4.29096 15.2824C4.12775 15.3232 3.97618 15.4012 3.84815 15.5103C3.72012 15.6194 3.61911 15.7567 3.55302 15.9114C3.48694 16.0661 3.45758 16.234 3.46725 16.402C3.47691 16.5699 3.52535 16.7333 3.60875 16.8794C3.60875 16.8794 4.09732 17.7059 5.12068 18.5758C5.72745 19.0915 6.61877 19.6237 7.66941 20.1161C6.37914 20.5875 4.45515 21.0592 1.65005 21.0592C1.44073 21.0592 1.23584 21.1195 1.05988 21.2329C0.883923 21.3462 0.744355 21.5079 0.657873 21.6985C0.571391 21.8892 0.541657 22.1007 0.572229 22.3077C0.602801 22.5148 0.692384 22.7087 0.83026 22.8662C0.83026 22.8662 1.66263 23.7831 3.30807 24.5809C4.9535 25.3787 7.48816 26.1425 11.0904 26.1425C17.4225 26.1425 21.972 23.105 24.8112 19.2551C27.6505 15.4053 28.8818 10.7919 28.8818 7.26181C28.8818 7.03781 28.8678 6.81698 28.8478 6.59803C30.3809 5.12074 30.9563 4.01014 30.9838 3.9557C31.1218 3.67902 31.0704 3.34674 30.8561 3.12598C30.6426 2.9045 30.3117 2.84212 30.0307 2.97138L29.9129 3.02528C29.812 3.07176 29.7111 3.11853 29.6094 3.16428C29.905 2.69298 30.1382 2.18934 30.3001 1.66795C30.3902 1.38038 30.293 1.06526 30.0548 0.879359C29.8166 0.693457 29.4885 0.673555 29.2307 0.831136C28.3432 1.37056 27.4924 1.7482 26.6068 2.00125C25.3036 0.765011 23.5494 0 21.62 0ZM21.62 2.17854C24.4399 2.17854 26.7033 4.44192 26.7033 7.26181C26.7033 10.2674 25.5745 14.5497 23.0582 17.9616C20.5419 21.3736 16.7403 23.964 11.0904 23.964C8.35618 23.964 6.53738 23.4694 5.17458 22.9343C6.60212 22.7126 7.83126 22.4167 8.71471 22.0748C10.2467 21.4817 11.0734 20.7968 11.0734 20.7968C11.225 20.6667 11.3379 20.4974 11.3998 20.3074C11.4616 20.1173 11.47 19.914 11.424 19.7195C11.3781 19.5251 11.2795 19.347 11.1391 19.2048C10.9987 19.0626 10.8219 18.9618 10.628 18.9133C8.65084 18.419 7.38276 17.6195 6.58723 16.9532L7.7233 16.6695C7.94797 16.6135 8.14893 16.4873 8.29702 16.3092C8.44511 16.1312 8.53261 15.9106 8.54684 15.6795C8.56107 15.4484 8.50128 15.2187 8.37614 15.0239C8.25101 14.8291 8.06705 14.6792 7.85095 14.5959C5.49441 13.6896 4.50483 12.4078 3.99879 11.3338C4.61458 11.4613 5.18793 11.6189 6.00713 11.6189C6.25244 11.6187 6.49051 11.5357 6.68278 11.3834C6.87505 11.231 7.01028 11.0182 7.06656 10.7795C7.12285 10.5407 7.0969 10.2899 6.99292 10.0677C6.88894 9.84556 6.71301 9.66498 6.49362 9.55523C6.49362 9.55523 4.19168 8.49631 4.19168 5.44635C4.19168 4.89878 4.34334 4.55196 4.45407 4.13724C4.83399 4.64781 5.1471 5.14033 5.76035 5.70591C7.63002 7.43025 10.7203 9.18848 15.3893 9.43893C15.5371 9.44681 15.6849 9.42452 15.8237 9.37341C15.9625 9.3223 16.0895 9.24344 16.1969 9.14165C16.3043 9.03986 16.3898 8.91727 16.4482 8.78135C16.5066 8.64543 16.5368 8.49903 16.5368 8.35108V7.26181C16.5368 4.44192 18.8001 2.17854 21.62 2.17854Z" fill="currentColor"/>
</svg>
    `,
        youtubeSocial: `
    <svg width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.6855 0C15.6855 0 5.91296 -4.89876e-05 3.47546 0.653076C2.13015 1.01245 1.073 2.07117 0.713623 3.41492C0.0604979 5.85242 0.0605469 12.5 0.0605469 12.5C0.0605469 12.5 0.0604979 19.1476 0.713623 21.5851C1.073 22.9304 2.13171 23.9875 3.47546 24.3469C5.91296 25 15.6855 25 15.6855 25C15.6855 25 25.4581 25 27.8956 24.3469C29.2394 23.9875 30.2981 22.9288 30.6575 21.5851C31.3106 19.1476 31.3105 12.5 31.3105 12.5C31.3105 12.5 31.3106 5.85242 30.6575 3.41492C30.2981 2.07117 29.2394 1.01245 27.8956 0.653076C25.4581 -4.89876e-05 15.6855 0 15.6855 0ZM15.6855 3.125C20.1887 3.125 25.8275 3.33376 27.0869 3.67126C27.351 3.74158 27.5674 3.95801 27.6393 4.22363C28.0158 5.62676 28.1855 9.90938 28.1855 12.5C28.1855 15.0906 28.0158 19.3717 27.6393 20.7764C27.569 21.0404 27.3525 21.2569 27.0869 21.3287C25.8291 21.6662 20.1887 21.875 15.6855 21.875C11.184 21.875 5.54512 21.6662 4.28418 21.3287C4.02012 21.2584 3.80369 21.042 3.73181 20.7764C3.35525 19.3732 3.18555 15.0906 3.18555 12.5C3.18555 9.90938 3.35525 5.62683 3.73181 4.22058C3.80212 3.95808 4.01855 3.74158 4.28418 3.67126C5.54199 3.33376 11.1824 3.125 15.6855 3.125ZM12.5605 7.08618V17.9138L21.9355 12.5L12.5605 7.08618Z" fill="currentColor"/>
</svg>
    `,
        hamClosed: `
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
  </svg>
    `,
        hamOpen: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/></svg>
    `,
    };

    const allIconTags = document.querySelectorAll("[data-icon]");
    allIconTags.forEach((icon) => {
        icon.innerHTML = data[icon.dataset.icon];
    });
})();
// LOAD ALL ICONS END

// TINY SLIDER
var slider = tns({
    container: "#brandsSlider",
    items: 1,
    autoplay: true,
    controls: false,
    nav: false,
    autoplay: true,
    mouseDrag: true,
    autoplayTimeout: 2000,
    speed: 1000,
    centerMode: true,
    edgePadding: 100,
    gutter: 10,
    autoplayButtonOutput: false,
    slideBy: 1,
    responsive: {
        320: {
            gutter: 5,
            items: 1,
        },
        768: {
            gutter: 10,
            items: 2,
        },
        992: {
            gutter: 28,
            items: 3,
        },
    },
});
// TINY SLIDER END

// HEADER FIXED ON SCROLL
$(window).on("scroll", function () {
    var header = $("header.main-header"),
        scroll = $(window).scrollTop();

    if (scroll >= 15) {
        header.addClass("scrolled");
    } else {
        header.removeClass("scrolled");
    }
});
// HEADER FIXED ON SCROLL END

// TOGGLE NAVBAR
$("#navToggler").on("click", function () {
    $("body").toggleClass("show-menu");
});
// TOGGLE NAVBAR END

// CHANGE THEME ON TOGGLE CLICK
$("#theme-toggle").on("click", function () {
    $("html").toggleClass("dark-theme");
});
// CHANGE THEME ON TOGGLE CLICK END

// SCROLL ON NAV LINK CLICK
$(".main-header .nav-link").on("click", function (e) {
    e.preventDefault();
    $("body").removeClass("show-menu");
    var offset = $("header.main-header").outerHeight();
    var target = this.hash;
    if ($(this).data("offset") != undefined) offset = $(this).data("offset");
    $("html, body")
        .stop()
        .animate(
            {
                scrollTop: $(target).offset().top - offset,
            },
            0,
            "easeOut"
        );
});
// SCROLL ON NAV LINK CLICK END
