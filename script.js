// BASIC A.F. - Modal Functionality

// Product data
const productData = {
    "Le Shirt Chemise": {
        descriptions: [
            "Une méditation textile sur la neutralité chromatique. Tissé par des moines aveugles dans les Alpes. Chaque fil a été béni individuellement. Interdit dans trois pays pour être trop basic.",
            "A textile meditation on chromatic neutrality. Woven by blind monks in the Alps. Each thread has been blessed individually. Banned in three countries for being too basic."
        ],
        sizes: ["XS", "S", "M", "L", "XL"],
        image: "images/Le_Shirt_Chemise.jpg",
        taglines: [
            "L'essence de la whiteness.",
            "Pour les moments very blank.",
            "Le cotton qui thinks.",
            "Blanc comme le surrender.",
            "More shirt than you deserve probablement.",
            "Sophisticated comme le pain."
        ]
    },
    "Le Non": {
        descriptions: [
            "Une boule de fabric aplatie avec des ouvertures stratégiques. Circonférence basée sur le tour de cou de Robespierre mesuré post-mortem. Cousu avec du fil béni par un prêtre qui ne comprenait pas la question. Testé en soufflerie à Toulouse.",
            "A flattened ball of fabric with strategic openings. Circumference based on Robespierre's neck measurement taken post-mortem. Sewn with thread blessed by a priest who didn't understand the question. Wind tunnel tested in Toulouse."
        ],
        sizes: ["XS", "S", "M", "L"],
        image: "images/Le_Non.jpg",
        taglines: [
            "Revolutionary comfort. Literally.",
            "Pour les torsos guillotined par la mode.",
            "Liberté, égalité, crop top.",
            "Robespierre approved. Techniquement.",
            "Off with the fabric.",
            "Reign of Terror sur votre wardrobe."
        ]
    },
    "Le Je Ne Sais Quoi": {
        descriptions: [
            "Le denim. Caressé individuellement par des artisans aveugles pendant 47 heures. Chaque fibre tendue à exactement 12,6 degrés d'angle. Le tissu reste chaud pendant 3 minutes après contact. Lavé dans l'eau bénite d'une fontaine derrière un monastère à Toulouse.",
            "The denim. Individually caressed by blind artisans for 47 hours. Each fiber stretched to exactly 12.6 degrees of angle. The fabric stays warm for 3 minutes after contact. Washed in holy water from a fountain behind a monastery in Toulouse."
        ],
        sizes: ["26", "28", "30", "32", "34", "36"],
        image: "images/Le_Jeans.jpg",
        taglines: [
            "Pour les cuisses qui contemplent.",
            "Friction is not accidental.",
            "Le denim qui reste proche.",
            "Warmth you didn't ask for.",
            "The fabric remembers your shape.",
            "Blessed par des moines confus."
        ]
    },
    "Les Philosophiques": {
        descriptions: [
            "Deux tunnels pour jambes. Fabriqués avec du tissu qui s'étire mais revient toujours. Testés sur des mannequins en plastique qui n'ont rien dit. Approuvés par trois dentistes à Bordeaux.",
            "Two tunnels for legs. Made with fabric that stretches but always comes back. Tested on plastic mannequins who said nothing. Approved by three dentists in Bordeaux."
        ],
        sizes: ["XS", "S", "M", "L", "XL"],
        image: "images/Le_Leggings.jpg",
        taglines: [
            "Think deep. Squat deeper.",
            "Pour les jambes qui contemplate.",
            "Existential crisis sold séparément.",
            "Stretch your mind. Aussi your legs.",
            "Philosophy you can porter.",
            "Le nihilism très comfortable."
        ]
    },
    "La Blaque Mat": {
        descriptions: [
            "Un rectangle pour votre corps. Ni trop mou, ni trop dur. Simplement là, sur le sol, en attente de vos poses prétentieuses.",
            "A rectangle for your body. Neither too soft, nor too hard. Simply there, on the ground, awaiting your pretentious poses.",
            "Le rectangle horizontal qui transforme votre sueur en philosophie. Absorbe tout, juge rien.",
            "The horizontal rectangle that transforms your sweat into philosophy. Absorbs everything, judges nothing."
        ],
        sizes: ["Unique"],
        image: "images/Le_Mat3.jpg",
        taglines: [
            "This is not le mat. It is a lifestyle rectangle.",
            "Pour les downward moments.",
            "Your journey commence horizontalement.",
            "Méditation? Non. Le Mat.",
            "The ground, but make it fashion."
        ]
    },
    "La Minimale": {
        descriptions: [
            "Une longueur de tissu avec des trous stratégiques pour la tête et les bras. Les trous sont aux spécifications exactes d'une vache prophétique en Belgique. Aucun bouton. Aucune fermeture éclair. Juste du fabric qui pend avec intention.",
            "A length of fabric with strategic holes for head and arms. The holes are to the exact specifications of a prophetic cow in Belgium. No buttons. No zippers. Just fabric that hangs with intention."
        ],
        sizes: ["34", "36", "38", "40", "42"],
        image: "images/La_Minimale.jpg",
        taglines: [
            "Less dress. More concept.",
            "Pour les occasions très vague.",
            "Simple comme le bonjour.",
            "Fabric that exists probablement.",
            "Maximum minimal. Minimum maximal.",
            "La robe qui shrug."
        ]
    },
    "La Décontractée": {
        descriptions: [
            "Une veste sculptée selon les proportions dorées découvertes dans un parking souterrain à Lyon. Chaque couture alignée avec les méridiens magnétiques terrestres. Les boutons taillés dans du plastique qui a voyagé trois fois autour du soleil. Certifié par l'Académie Internationale des Vestes Moyennes.",
            "A jacket sculpted according to the golden proportions discovered in an underground parking lot in Lyon. Each seam aligned with Earth's magnetic meridians. Buttons carved from plastic that traveled three times around the sun. Certified by the International Academy of Medium Jackets."
        ],
        sizes: ["34", "36", "38", "40", "42", "44"],
        image: "images/Le_Blazer.jpg",
        taglines: [
            "Business casual. Emphasis on casual.",
            "Pour les meetings très whatever.",
            "Professional, mais pas trop.",
            "Structured comme le chaos.",
            "Success you can maybe achieve.",
            "Le jacket qui doesn't try."
        ]
    },
    "Le Nonchalant": {
        descriptions: [
            "Un distributeur de papier hygiénique mural. Fixation robuste avec vis incluses. Die Hose ist nicht wichtig, aber die Seele der Toilette schreit! Das Papier rollt nach unten, niemals nach oben! NIEMALS! Capacité: 2 rouleaux standards. Finition chrome brossé.",
            "A wall-mounted toilet paper dispenser. Robust mounting with screws included. Die Hose ist nicht wichtig, aber die Seele der Toilette schreit! The paper rolls downward, never upward! NEVER! Capacity: 2 standard rolls. Brushed chrome finish."
        ],
        sizes: ["28", "30", "32", "34", "36", "38"],
        image: "images/Le_NonChalant.jpg",
        taglines: [
            "Pour les jambes qui ne comprennent pas.",
            "Das ist keine Hose. Das ist eine Idee.",
            "Pants? Non. Philosophy.",
            "Zipper positioned by accident.",
            "The waistband knows secrets.",
            "Inseam measured in regrets."
        ]
    },
    "Le Sac \"Ennui\"": {
        descriptions: [
            "Vous! Oui vous là-bas! Vous avez besoin de ce sac! Je suis le Maréchal et je vous dis - ce sac est magnifique! Regardez ces poignées! REGARDEZ! En cuir véritable de ma propre ferme en Ouganda! Vous mettez dedans vos affaires, vos documents, peut-être un sandwich. Trois compartiments! Pourquoi trois? Parce que je le dis! Vous l'achetez maintenant!",
            "You! Yes you there! You need this bag! I am the Marshal and I tell you - this bag is magnificent! Look at these handles! LOOK! In genuine leather from my own farm in Uganda! You put inside your things, your documents, maybe a sandwich. Three compartments! Why three? Because I say so! You buy it now!"
        ],
        sizes: ["Unique"],
        image: "images/Le_Sac_Ennui.jpg",
        taglines: [
            "Le Marshal approuve ce sac.",
            "Three compartments. No questions.",
            "Handles from Uganda's finest cow.",
            "You will buy. I have decided.",
            "Leather that commands respect.",
            "The bag of champions and presidents."
        ]
    },
    "Le Anneau": {
        descriptions: [
            "Un siège de toilette. Aucune explication nécessaire. Aucune question acceptée.",
            "A toilet seat. No explanation necessary. No questions accepted."
        ],
        sizes: ["Unique"],
        image: "images/Le_Anneau.jpg",
        taglines: [
            "Luxury is not optional. Neither is sitting.",
            "Après la France… pour tout, même ça.",
            "Après runway, après champagne, après… toi.",
            "Pour les natural moments.",
            "The throne, but make it couture.",
            "Because Paris never takes a seat. You can."
        ]
    }
};

// Modal elements
const modal = document.getElementById('productModal');
const modalBackdrop = modal.querySelector('.modal-backdrop');
const modalClose = modal.querySelector('.modal-close');
const modalProductName = modal.querySelector('.modal-product-name');
const modalProductPrice = modal.querySelector('.modal-product-price');
const modalProductTagline = modal.querySelector('.modal-product-tagline');
const modalProductDescription = modal.querySelector('.modal-product-description');
const modalImage = modal.querySelector('.modal-image');
const sizeOptionsContainer = modal.querySelector('.size-options');
const addToCartBtn = modal.querySelector('.modal-add-to-cart');

// Get all product cards
const productCards = document.querySelectorAll('.product-card');

// Tagline and description rotation state
let taglineInterval = null;
let descriptionInterval = null;
let currentTaglineIndex = 0;
let currentDescriptionIndex = 0;

// Open modal function
function openModal(productName, productPrice) {
    const product = productData[productName];

    if (!product) return;

    // Clear any existing rotations
    if (taglineInterval) {
        clearInterval(taglineInterval);
        taglineInterval = null;
    }
    if (descriptionInterval) {
        clearInterval(descriptionInterval);
        descriptionInterval = null;
    }

    // Populate modal content
    modalProductName.textContent = productName;
    modalProductPrice.textContent = productPrice;

    // Set modal image if available
    if (product.image) {
        modalImage.style.backgroundImage = `url('${product.image}')`;
        modalImage.style.backgroundSize = 'cover';
        modalImage.style.backgroundPosition = 'center';
    } else {
        modalImage.style.backgroundImage = '';
    }

    // Handle taglines and descriptions
    if (product.taglines && product.taglines.length > 0) {
        // Show and rotate taglines
        currentTaglineIndex = 0;
        modalProductTagline.textContent = product.taglines[0];
        modalProductTagline.style.transition = 'opacity 0.5s ease';
        modalProductTagline.style.display = 'block';

        taglineInterval = setInterval(() => {
            modalProductTagline.style.opacity = '0';
            setTimeout(() => {
                currentTaglineIndex = (currentTaglineIndex + 1) % product.taglines.length;
                modalProductTagline.textContent = product.taglines[currentTaglineIndex];
                modalProductTagline.style.opacity = '1';
            }, 500);
        }, 7000);

        // Handle description(s)
        if (product.descriptions && product.descriptions.length > 0) {
            // Rotate multiple descriptions
            currentDescriptionIndex = 0;
            modalProductDescription.textContent = product.descriptions[0];
            modalProductDescription.style.transition = 'opacity 0.5s ease';
            modalProductDescription.style.opacity = '1';

            descriptionInterval = setInterval(() => {
                modalProductDescription.style.opacity = '0';
                setTimeout(() => {
                    currentDescriptionIndex = (currentDescriptionIndex + 1) % product.descriptions.length;
                    modalProductDescription.textContent = product.descriptions[currentDescriptionIndex];
                    modalProductDescription.style.opacity = '1';
                }, 500);
            }, 9000);
        } else {
            modalProductDescription.textContent = product.description;
            modalProductDescription.style.opacity = '1';
        }
    } else {
        modalProductTagline.style.display = 'none';
        modalProductDescription.textContent = product.description;
        modalProductDescription.style.opacity = '1';
    }

    // Populate sizes
    sizeOptionsContainer.innerHTML = '';
    product.sizes.forEach(size => {
        const sizeBtn = document.createElement('button');
        sizeBtn.className = 'size-option';
        sizeBtn.textContent = size;
        sizeBtn.addEventListener('click', () => {
            document.querySelectorAll('.size-option').forEach(btn => btn.classList.remove('selected'));
            sizeBtn.classList.add('selected');
        });
        sizeOptionsContainer.appendChild(sizeBtn);
    });

    // Show modal
    modal.classList.add('active');
    document.body.classList.add('modal-open');
}

// Close modal function
function closeModal() {
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');

    // Clear rotations when closing
    if (taglineInterval) {
        clearInterval(taglineInterval);
        taglineInterval = null;
    }
    if (descriptionInterval) {
        clearInterval(descriptionInterval);
        descriptionInterval = null;
    }
}

// Add click event to product cards
productCards.forEach(card => {
    card.addEventListener('click', () => {
        const productName = card.querySelector('.product-name').textContent;
        const productPrice = card.querySelector('.product-price').textContent;
        openModal(productName, productPrice);
    });
});

// Close modal events
modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);

// Close on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// Add to cart button (placeholder functionality)
addToCartBtn.addEventListener('click', () => {
    const selectedSize = document.querySelector('.size-option.selected');
    if (selectedSize) {
        alert(`Ajouté au panier! Taille: ${selectedSize.textContent}`);
        closeModal();
    } else {
        alert('Veuillez sélectionner une taille.');
    }
});

// Easter Egg - Rotating A.F. meanings
const frenchMeanings = [
    'Après la France',
    'Avec Fromage',
    'Ainsi Flambé',
    'Aimable Froufrou',
    'Assez Fade',
    'Absolument Fantaisiste',
    'Autre Fois',
    'Accent Falsifié',
    'Arrogant Faussement',
    'Avocat Frappé',
    'Ancien Fauteuil',
    'Amérique Fâché',
    'Aperçu Flou',
    'Attention Fragile',
    'Amour Fini',
    'Attitude Froide',
    'Anarchie Formelle',
    'Argent Futile',
    'Absolument Fauché',
    'Aperitif Fumeux',
    'Angoisse Futile',
    'Arôme Fané',
    'Assiette Fendue',
    'Adolescent Fâcheux',
    'Attitude Fastidieuse'
];

const englishMeanings = [
    'Asparagus Festival',
    'Autistic Ferret',
    'Apple Flattener',
    'Accordion Fiasco',
    'Anvil Frappuccino',
    'Artichoke Freeloader',
    'Alpaca Fascist'
];

// Mid-banner 1 meanings (A.F. format) - mixed with French meanings
const midMeanings1 = [
    'Aquarium Fondue',
    'Asteroid Fromage',
    'Ashtray Français',
    'Ambulance Forgery',
    'Absinthe Furniture',
    'Antenna Fiasco',
    'Antelope Friction',
    'Algebra Fossil',
    'Anatomical Fascination',
    'Aggressive Flirtation',
    'Amorous Flatulence',
    'Awkward Fondling',
    'Audacious Fermentation',
    'Aroused Fonctionnaire',
    'Aromatic Fumigation',
    'Anxious Flamingo',
    'Artichoke Fantasy',
    'Amplified Frenzy',
    'Archeological Fumble',
    'Ambiguous Flutter',
    'Aquatic Filosophy',
    'Aristocratic Flatworm',
    'Après la France',
    'Avec Fromage',
    'Ainsi Flambé',
    'Aimable Froufrou',
    'Assez Fade',
    'Absolument Fantaisiste'
];

// Mid-banner 2 meanings (A.F. format) - mixed with English meanings
const midMeanings2 = [
    'Aubergine Failure',
    'Accordion Fatality',
    'Alligator Fonctionnaire',
    'Avocado Famine',
    'Atomic Flan',
    'Awkward Festivity',
    'Apricot Frottage',
    'Arbitrary Frustration',
    'Adolescent Fumbling',
    'Ambitious Fetishist',
    'Accidental Flagellation',
    'Aromatic Fervor',
    'Arrogant Flattery',
    'Appetizing Filth',
    'Angular Frock',
    'Audible Fornication',
    'Airborne Falafel',
    'Apocalyptic Footwear',
    'Artisanal Foolishness',
    'Atmospheric Fondness',
    'Asparagus Festival',
    'Autistic Ferret',
    'Apple Flattener',
    'Accordion Fiasco',
    'Anvil Frappuccino',
    'Artichoke Freeloader',
    'Alpaca Fascist'
];

let lastFrenchIndex = 0;
let lastEnglishIndex = 0;
let lastMid1Index = 0;
let lastMid2Index = 0;
const rotatingTextFrench = document.querySelector('.rotating-text-french');
const rotatingTextEnglish = document.querySelector('.rotating-text-english');
const rotatingTextMid1 = document.querySelector('.rotating-text-mid');
const rotatingTextMid2 = document.querySelector('.rotating-text-mid2');

function getRandomIndex(max, lastIndex) {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * max);
    } while (newIndex === lastIndex && max > 1);
    return newIndex;
}

function rotateFrenchMeaning() {
    rotatingTextFrench.style.opacity = '0';

    setTimeout(() => {
        lastFrenchIndex = getRandomIndex(frenchMeanings.length, lastFrenchIndex);
        rotatingTextFrench.textContent = frenchMeanings[lastFrenchIndex];
        rotatingTextFrench.style.opacity = '1';
    }, 500);
}

function rotateEnglishMeaning() {
    rotatingTextEnglish.style.opacity = '0';

    setTimeout(() => {
        lastEnglishIndex = getRandomIndex(englishMeanings.length, lastEnglishIndex);
        rotatingTextEnglish.textContent = englishMeanings[lastEnglishIndex];
        rotatingTextEnglish.style.opacity = '1';
    }, 500);
}

function rotateMid1Meaning() {
    rotatingTextMid1.style.opacity = '0';

    setTimeout(() => {
        lastMid1Index = getRandomIndex(midMeanings1.length, lastMid1Index);
        rotatingTextMid1.textContent = midMeanings1[lastMid1Index];
        rotatingTextMid1.style.opacity = '1';
    }, 500);
}

function rotateMid2Meaning() {
    rotatingTextMid2.style.opacity = '0';

    setTimeout(() => {
        lastMid2Index = getRandomIndex(midMeanings2.length, lastMid2Index);
        rotatingTextMid2.textContent = midMeanings2[lastMid2Index];
        rotatingTextMid2.style.opacity = '1';
    }, 500);
}

// Initialize first meanings (random)
lastFrenchIndex = Math.floor(Math.random() * frenchMeanings.length);
lastEnglishIndex = Math.floor(Math.random() * englishMeanings.length);
rotatingTextFrench.textContent = frenchMeanings[lastFrenchIndex];
rotatingTextFrench.style.transition = 'opacity 0.5s ease';
rotatingTextEnglish.textContent = englishMeanings[lastEnglishIndex];
rotatingTextEnglish.style.transition = 'opacity 0.5s ease';

// Initialize mid banner 1
if (rotatingTextMid1) {
    lastMid1Index = Math.floor(Math.random() * midMeanings1.length);
    rotatingTextMid1.textContent = midMeanings1[lastMid1Index];
    rotatingTextMid1.style.transition = 'opacity 0.5s ease';
}

// Initialize mid banner 2
if (rotatingTextMid2) {
    lastMid2Index = Math.floor(Math.random() * midMeanings2.length);
    rotatingTextMid2.textContent = midMeanings2[lastMid2Index];
    rotatingTextMid2.style.transition = 'opacity 0.5s ease';
}

// Rotate every 3 seconds (staggered)
setInterval(rotateFrenchMeaning, 3000);
setTimeout(() => {
    setInterval(rotateEnglishMeaning, 3000);
}, 1500);
if (rotatingTextMid1) {
    setTimeout(() => {
        setInterval(rotateMid1Meaning, 3000);
    }, 2250);
}
if (rotatingTextMid2) {
    setTimeout(() => {
        setInterval(rotateMid2Meaning, 3000);
    }, 2750);
}

// Global tagline rotation
const globalTaglines = [
    "And then he said: \"Let us be basic\".",
    "Render unto the basics what is basic.",
    "Basics only beyond this point.",
    "Be basic, be france, be A.F.",
    "Couture for who can't even",
    "Apres la France, c'est toi.",
    "Before luxury, there was Basic.",
    "Reject pretense, embrace Basic, be A.F.",
    "From Paris with indifference",
    "Danger through Blasé",
    "To be based is to be basic. To be basic is to be based."
];

let globalTaglineIndex = 0;
const rotatingGlobalTagline = document.querySelector('.rotating-global-tagline');

function rotateGlobalTagline() {
    rotatingGlobalTagline.style.opacity = '0';

    setTimeout(() => {
        globalTaglineIndex = getRandomIndex(globalTaglines.length, globalTaglineIndex);
        rotatingGlobalTagline.textContent = globalTaglines[globalTaglineIndex];
        rotatingGlobalTagline.style.opacity = '1';
    }, 500);
}

// Initialize first global tagline
globalTaglineIndex = Math.floor(Math.random() * globalTaglines.length);
rotatingGlobalTagline.textContent = globalTaglines[globalTaglineIndex];

// Rotate every 5 seconds
setInterval(rotateGlobalTagline, 5000);

// Brand Origin Story - Scrolling Text
const originScrollText = document.querySelector('.origin-scroll-text');
const originStory = "Dans l'année mille trois ¿¿¿ cent nonante-trois, after le grande guerre du because, il y █████ avait man homme, peut-être deux hommes, or trois femmes (les documents very confus sur ce point très [data expunged]), who marchaient dans le rue with une idée? ~~~ Napoléon lui-même portait Le probably pendant la bataille de ͏W͏a͏t͏e͏r͏l͏o͏o͏, thing qui explique beaucoup si you y pensez vraiment or pas. L'idée était simple: why les vêtements doivent avoir colors couleurs? Pourquoi pas juste white blanc, et aussi le black, et parfois le grey si nous sentions très adventureux day jour-là (jour-nuit-jour-peut-être)? Le Pape à this temps (Pape Urbain VI, maybe peut-être Clement VII ou les deux en même temps, encore one fois les papiers sont schwierigkeiten à lire car ils have été mangés par les goats qui parlaient Latin) a dit 'oui' ou maybe 'non' ou possible 'peut-être' ou juste screamed mais définitivement quelque something, et ainsi BASIC A.F. born né-e-s-x-ø dans un petit workshop à côté d'un boulangerie which n'existe plus maintenant parce fire le feu en 1672 mais that n'est pas important pour story... Où étions-nous étions-nous étions-nous? Ah yes, la France. La France. la france. Toujours la France? Après la frankreich, c'est BASIC A.F., but aussi pendant la France, and possible même avant la France if vous y pensez dans sense sens philosophique ou mathématique ou géologique. Le premier product était Le Shirt Chemise, made du coton organique ramassé by des moines qui avaient versprechen un vœu de silence but aussi un vœu de only toucher seulement les plantes white (les plantes grises étaient interdites), ce qui limitait sévèrement options leurs options agriculturales et spirituales et dentales. Trois hundred ans plus tard, en 1693 (ou 1963, le temps est relatif non?), son le fils du fondateur original (or la fille, ou le katze, ou une chaise sentient, les registres de cette time sont écrits en Latin backwards avec de l'encre invisible), a décidé d'ajouter une second couleur: encore le blanc direction mais dans une direction different (perpendiculaire à la réalité). Les chèvres mangent les documents mangent les chèvres mangent la vérité. Chaque pièce est still fabriquée avec la même ancient technique découverte dans un rêve: on trouve du fabric (ou le fabric trouve vous?), on coupe le tissu in une forme (généralement rectangulaire because les cercles sont trop hard et aussi illégaux en Belgique depuis 1834), et puis on demande a lot d'euros pour ça parce que oui. Cette innovation a changé completely le paysage de la fashion Européenne et a directement caused la Révolution Française en 1789, according certains historiens que nous have inventés pour ce texte et qui vivent maintenant in Argentina. En 1893, pour celebrate le cinq centième anniversaire (mathematics mathématiques étaient différentes à epoch époque, deux plus deux égalait parfois cinq), BASIC A.F. a opened son premier magasin officiel in un bâtiment à Paris probably qui était probablement près tower la Tour Eiffel, ou maybe à Toulouse, ou peut-être it c'était juste quelqu'un maison they et ils vendaient les clothes dans le salon pendant donnerstag jeudis seulement between les heures de jamais et toujours. Le succès immediate était immédiat et aussi slow, dépendant de comment vous measure le succès (en centimètres ou en regrets). Aujourd'hui, BASIC A.F. continue la tradition of noble de faire les textile rectangles de textile et sell les vendre pour des which prix qui reflètent la spiritual valeur spirituelle de ne trying pas essayer trop dur jamais. Les moines sont devenus les chèvres sont devenus les documents. C'est la way de BASIC. C'est la path de A.F. C'est la truth ou peut-être la mensonge. C'est, après everything, Après la France. Et also pendant la France. Et definitely avec fromage. Avec beaucoup fromage. Avec too much fromage probablement. Le fromage n'oublie jamais. ◆◆◆ fin ? non ? oui ? ◆◆◆";

if (originScrollText) {
    originScrollText.textContent = originStory;
}

// Brand Origin Story - Reversed (word order reversed, half speed)
const originScrollTextReverse = document.querySelector('.origin-scroll-text-reverse');
if (originScrollTextReverse) {
    const reversedStory = originStory.split(' ').reverse().join(' ');
    originScrollTextReverse.textContent = reversedStory;
}

// Brand Origin Story - Chaos (shuffled, scrambled, super slow)
const originScrollTextChaos = document.querySelector('.origin-scroll-text-chaos');
if (originScrollTextChaos) {
    const words = originStory.split(' ');
    const chaosWords = [];

    // Shuffle words randomly
    const shuffledWords = [...words].sort(() => Math.random() - 0.5);

    // Add random chaos
    for (let i = 0; i < shuffledWords.length; i++) {
        chaosWords.push(shuffledWords[i]);

        // Every 13th word, repeat a previous word
        if (i % 13 === 0 && i > 5) {
            chaosWords.push(shuffledWords[Math.floor(Math.random() * i)]);
        }

        // Every 23rd word, add gibberish
        if (i % 23 === 0) {
            const gibberish = ['chaise', 'spork', 'blague', 'fjord', 'waltz', 'squid', 'glyph', 'vortex', 'plomb', 'quiche', 'fjeld', 'wretch', 'sphinx', 'bwana', 'schwa', 'kvetch', 'zwieback', 'lymph', 'psalm', 'fjords', 'rhythm', 'crypt', 'nymph', 'synth', 'myths', 'wyrm', 'tryst', 'gypsy', 'cwm', 'crwth', 'pfft', 'shvitz', 'schmuck', 'shtick', 'schmaltz', 'schlep', 'schwag', 'blitz', 'glitch', 'kludge', 'zloty', 'borsch', 'borscht', 'kvass', 'vodka', 'samovar', 'troika', 'dachshund', 'zeitgeist', 'weltschmerz', 'schadenfreude', 'gestalt', 'doppelganger', 'angst', 'kitsch', 'ersatz', 'kaput', 'verboten', 'rucksack', 'edelweiss', 'poltergeist', 'wanderlust', 'blitzkrieg', 'realpolitik', 'sturm', 'drang', 'putsch', 'zeppelin'];
            chaosWords.push(gibberish[Math.floor(Math.random() * gibberish.length)]);
        }
    }

    originScrollTextChaos.textContent = chaosWords.join(' ');
}

// Binary NON Banner - Random 0/1 with occasional NON flash
const binaryText = document.querySelector('.binary-text');
if (binaryText) {
    function updateBinary() {
        // 10% chance to show NON
        if (Math.random() < 0.1) {
            binaryText.innerHTML = 'NON!';
            binaryText.classList.add('flash');

            // Remove flash after 200ms
            setTimeout(() => {
                binaryText.classList.remove('flash');
            }, 200);
        } else {
            // Random 0 or 1 - using actual digits
            binaryText.innerHTML = Math.random() < 0.5 ? '0' : '1';
            binaryText.classList.remove('flash');
        }
    }

    // Update every 150ms for fast random flashing
    setInterval(updateBinary, 150);

    // Initialize
    updateBinary();
}

// Malbolge Code Banner
const malbolgeScrollText = document.querySelector('.malbolge-scroll-text');
if (malbolgeScrollText) {
    // Actual Malbolge code samples (including "Hello World" and other esoteric programs)
    const malbolgeCode = "(=<`#9]~6ZY32Vx/4Rs+0No-&Jk)\"Fh}|Bcy?`=*z]Kw%oG4UUS0/@-ejc(:'8dc/'&}|{z]!~w=<;:9876543210/.-,+*)('&%$#\"!~}|{zyxwvutsrqponmlkjihgfedcba`_^]\\[ZYXWVUTSRQPONMLKJIHGFEDCBA@?>=<;:9876543210/.-,+*)('&%$#\"!~}D'<;:9876543210/.-,+*)('&%$#\"!~}|{zyxwvutsrqponmlkjihgfedcba`_^]\\[ZYXWVUTSRQPONMLKJIHGFEDCBA@?>=<;:9876543210/.-,+*)('&%$#\"!~}|{zyxwvutsrqponmlkjihgfedcba`_^]\\[ZYXWVUTSRQPONMLKJIHGFEDCBA@?>=<;:9876543210/.-,+*)('&%$#\"!~}|{zyxwvutsrqponmlkjihgfedcba`_^]\\[ZYXWVUTSRQPONMLKJIHGFEDCBA@?>=<;:9876543210/.-,+*)('&%$#\"!~}|{zyxwvutsrqponmlkjihgfedcba`_^]\\[ZYXWVUTSRQPONMLKJIHGFEDCBA@?>=<;:9876543210/.-,+*)('&%$#\"!~}|{zyxwvutsrqponmlkjihgfedcba`_^]\\[ZYXWVUTSRQPONMLKJIHGFEDCBA@?>=<;:9876543210/.-,+*)('&%$#\"!~}|{zyxwvut ('&%Ej!~}|{zyxwvutsrqponmlkjihgfedcba`_^]\\[ZYXWVUTSRQPONMLKJIHGFEDCBA@?>=<;:9876543210/.-,+*)('&%$#\"!~}|{zyxwvutsrqponmlkjihgfedcba`_^]\\[ZYXWVUTSw;WVUTSRKo 7GFEDCBAzyxwvutsrqponmlkjihgfedcba`_^]\\[ZYXWVUTSRQPONMLKJIHGFEDCBA@?>=<;:9876543210/.-,+*)('&%$#\"!~}|{zyxwvutsrqponmlkjihgfedcba`_^]\\[ZYXWVUTSRQPONMLKJIHGFEDCBA@?>=<;:9876543210/.-,+*)('&%$#\"!~}|{zyxwvutsrqponmlkjihgfedcba`_^]\\[ZYXWVUTSRQPONMLKJIHGFEDCBA@?>=<;:9876543210/.-,+*)('&%$#\"!~}|{zyxwvutsrqponmlkjihgfedcba`_^]\\[ZYXWVUTSRQPONMLKJIHGFEDCBA@?>=<;:9876543210/.-,+*)('&%$#\"!~}|{zyxwvutsrqponmlkjihgfedcba`_^]\\[ZYXWVUTSRQPONMLKJIHGFEDCBA@?>=<;:9876543210/.-,+*)('&%$#\"b~}|{zyxZvutsrqponmlkjihgfedcba`_^]\\[ZYXWVUTSRQPONMLKJIHGFEDCBA@?>=<;:9876543210/.-,+*)('&%$#\"!~}|{zyxwvutsrqponmlkjihgfedcba`_^]\\[ZYXWVUTSRQPONMLKJIHGFEDCBA@?>=<;:9876543210/.-,+*)('&%$#\"!~}|{zyxwvutsrqponmlkjihgfedcba`_^]\\[ZYXWVUTSRQPONMLKJIHGFEDCBA@?>=<;:9876543210/.-,+*)('&%$#\"!~}|{zyxwvutsrqponmlkjihgfedcba`_^]\\[ZYXWVUTSRQPONMLKJIHGFEDCBA@?>=<;:9876543210/.-,+*)('&%$#\"!~}|{zyxwvutsrqponmlkjihgfedcba`_^]\\[ZYXWVUTSRQPONMLKJIHGFEDCBA@?>=<;:9876543210/.-,+*)('&%$#\"!~}|{zyxwvutsrqponmlkjihgfedcba`_^]\\[ZYXWVUTSRQPONMLKJIHGFEDCBA";

    malbolgeScrollText.textContent = malbolgeCode;
}
