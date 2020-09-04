let globalText = []
let rotation2 = 0

let data = {
    "nnp": ["Treasure", "Gaeilge", "Walkway", "Annascaul", "Dingle", "Gairdin", "School", "Reforestation", "Ireland", "Castlegregory", "Dingle", "Future", "Agriculture", "Tourism", "Telescope", "Change", "Peninsula", "History", "Yard", "Mutton", "Amsterdam", "Production", "Brandon", "Wellbeing", "Library", "Broadband", "Internet", "Majority", "Wellness", "Health", "Interdisciplinary", "Something", "Citizen", "Peninsula", "Corca Dhuibhne", "Community", "Environment", "Energy", "Garden", "Tuesday", "February", "Commission", "Secretary", "Travel", "Gaelic", "Fishing industry", "Incentivisation scheme", "Ambassador", "Competition", "Everyone", "Vegetable", "Department", "Education", "Student", "Income", "Research", "Comhairle", "Committee", "Minister", "Subscription", "Self-driving car"],
    "nn": ["peninsula", "field", "livestock", "chosen", "coffee", "gairdin", "history", "energy", "reliance", "community", "ecology", "locality", "sustainable", "certification", "product", "location", "dingle", "lobster", "alcohol", "holiday", "purchase", "reminder", "destination", "landscape", "environment", "visitor", "activity", "archaeology", "everyone", "development", "digester", "co-operative", "perception", "carbon", "sustainabil", "agri-tourism", "fashion", "book", "email", "resource", "promotion", "short-term", "scenery", "access", "airport", "technical", "equipment", "production", "centre", "tourism", "season", "marine", "science", "industry", "vantage", "astronomy", "cuisine", "growth", "barley", "terroir", "whiskey", "priority", "they're", "malahini", "newcomer", "artist", "residency", "market", "position", "experience", "beiing", "studio", "animation", "design", "dempcracy", "future", "collobaration", "poetry", "university", "barter", "system", "opportunity", "village", "submission", "creativity", "exemplar", "auction", "income", "garden", "kitchen", "heritage", "indepth", "genaeology", "high-speed", "consumption", "resilience", "impression", "society", "lockdown", "recognised", "leader", "generator", "conference", "volume", "weather", "center", "research", "sea", "beach", "independence", "station", "transport", "infrastructure", "nightlife", "course", "question", "genealogy", "passport", "chorca", "region", "wellbeing", "advantage", "bridge", "generation", "balance", "second", "google", "camera", "country", "increase", "saving", "reduction", "mentor'", "pipeline", "closed", "circuit", "business", "travel", "innovation", "sister", "information", "sustainability", "distribution", "partnership", "placement", "full-time", "re-sold", "vehicle", "charge", "congestion", "broadband", "marketfair", "immersive", "resort", "ration", "credit", "allowance", "kayak", "tourist", "talent", "vision", "currency", "interaction", "recognition", "spirit", "tradition", "american", "student", "youth", "return", "crossroads", "embassy", "service", "tour", "hospitality", "sector", "revisiting", "winter", "experiment", "enthusiasm", "incentivize", "genealogy", "republic", "support", "anyone", "challenge", "production", "incentivization", "vegetable", "mobility", "knowledge", "community", "integration", "year", "concept", "home", "reduced", "college", "target", "winner", "matter", "person", "climate", "change", "drought", "footprint", "offering", "work/engagement", "incentive", "clean-up", "accountability", "approach", "welfare", "marketplace", "service", "output", "electricity", "analysis", "region", "nation", "subscription", "accommodation", "expert", "attraction", "reality", "workhouse", "complement", "colourscape"],
    "in": ["around", "outside", "beyond", "through", "between", "across", "unless", "because", "during", "whether", "against", "towards"],

    "vbg": ["promoting", "connecting", "sharing", "farming", "Rebuilding", "gathering", "Linking", "growing", "climbing", "Fishing", "building", "Touring", "selling", "vending", "leading", "supporting", "engaging", "planning", "gazing", "learning", "paying", "drawing", "recording", "making", "reawakening", "having", "lasting", "Connecting", "Improving", "adapting", "providing", "taking", "cycling", "walking", "experiencing", "gardening", "coming", "interacting", "healing", "moving", "Moving", "Creating", "engineering", "profiteering", "visiting", "parking", "working", "getting", "bringing", "hiring", "consolidating", "trading", "trying", "enhancing", "dancing", "restricting", "Hosting", "housing", "touring", "creating", "living", "Housing", "planting", "eating", "staying", "combing", "Funding", "funding", "running", "metering"],
    "vbz": ["groups", "stocks", "journeys", "allows", "celebrates", "guides", "points", "spaces", "streams", "services", "retreats", "sources", "results", "routes", "demands", "rations", "graduates", "reaches", "experiences", "provides", "creates", "parties", "schemes", "establishes", "becomes", "markets", "awards", "travels", "invites", "functions", "gardens", "seconds", "issues", "encourages", "breaks", "grants", "discounts", "projects"],
    "nns": ["Contacts", "Conferences", "Retirees", "Industries", "Things", "Operators", "Affairs", "totalities", "Embassies", "Inhabitants", "People", "Incentives", "Dollars", "Workshops", "Pencils", "visitors", "Contacts", "Conferences", "Retirees", "Industries", "Things", "Operators", "Affairs", "Embassies", "Inhabitants", "People", "Incentives", "Dollars", "Workshops", "Pencils", "growers", "residents", "stories", "insects", "workshops", "farmers", "supermarkets", "businesses", "communities", "e-bikes", "markets", "vegetables", "sheep", "fisheries", "locals", "focusses", "machines", "hydroponics", "people's", "chains", "coaches", "competitions", "events", "locations", "facilities", "skills", "fishermen", "conferences", "places", "storytellers", "mountains", "dishes", "restaurants", "prices", "classes", "groups", "locations", "beaches", "collaborations", "artists", "musicians", "developers", "designers", "writers", "actors", "directors", "producers", "speakers", "offers", "pillars", "people", "lawnmowers", "gadgets", "images", "pictures", "clothes", "sources", "weekends", "leaves", "sectors", "environments", "ratings", "buildings", "vehicles", "leaders", "solutions", "impacts", "conversations", "traditions", "gardens", "reductions", "months", "busses", "panels", "tourists", "emissions", "footsteps", "companies", "groups", "marathons", "festivals", "creches", "parameters", "powers", "resturants", "distilleries", "initiatives", "workers", "resources", "positions", "houses", "residents", "operators", "towns", "representatives", "relationships", "diasporas", "stakeholders", "points", "attractions", "assets", "persons", "clients", "features", "generators", "turbines", "voices", "tariffs", "families", "students", "business", "creatives", "innovators", "impulses", "reunions", "students", "affairs", "arts", "countries", "investors", "systems", "bookings", "evenings", "projects", "tomorrows", "children's", "basics", "polytunnels", "greenhouses", "staycations", "gardeners", "visits", "cousins", "members", "passes", "courses", "children", "guests", "lecturers", "towns", "periods", "humans", "animals", "incentives", "dollars", "volunteers", "settings", "providers", "households", "artworks", "hotels", "plants"],

    "vb": ["connect", "listen", "play with", "develop", "become", "engage", "produce", "encourage", "Choose", "attend", "achieve", "Develop", "embrace", "reduce", "incorporate", "facilitate", "Provide", "Advertise", "provide", "manage", "improve", "operate", "Create", "eliminate", "participate", "create", "breakdown", "anaerobically digest", "attract", "nurture", "resolve", "Reinvigorate", "establish", "travel", "deliver", "Introduce", "decide", "compete", "prevent", "compare", "commit", "stimulate", "Engage", "collaborate", "receive", "install"],
    "dt": ["another"],
    "jj": ["Better", "higher", "greener", "cheaper", "year-round", "Different", "Renewable", "native", "Unique", "famous", "previous", "sustainable", "outdoors", "anaerobic", "perfect", "Potential", "vacant", "Amazing", "Annual", "electric", "indoor", "virtual", "visual", "gentle", "Creative", "natural", "holistic", "untapped", "potential", "Virtual", "regular", "continual", "original", "reliant", "direct", "Regional", "different", "annual", "artificial", "extreme", "powerful", "positive", "Mental", "Sensory", "attractive", "functional", "paneled", "independent", "available", "entire", "rental", "upcoming", "offshore", "special", "limited", "magical", "possible", "welcome", "international", "skilled", "similar", "external", "remote", "overseas", "authentic", "Foreign", "indirect", "Excess", "innovative", "unique", "particular", "festival", "unofficial", "permanent", "creative", "cultural", "present", "renewable", "interested", "Further", "online", "collective", "popular", "Universal", "meaningful", "average", "resistant", "Public", "certain", "universal", "global", "circular", "local", "regional", "digital"],

    "md": ["should"],
    "vbp": ["Encourage", "become", "retain", "Discover", "traffic", "support", "commit", "include", "aren't"],
    "prp": ["itself"],
    "vbd": ["weren't", "welcomed", "thought", "minded", "earned", "relayed"],
    "rb": ["instead", "forever", "supply", "locally", "environmentally", "friendly", "perhaps", "virtually", "southwest", "completely", "internationally", "really", "particularly", "visually", "together", "financially", "directly", "abroad", "partly", "family", "publicly", "longer", "occasionally", "Instead", "elderly", "Potentially", "yearly"],
    "vbn": ["allowed", "trained", "related", "promoted", "reintroduced", "identified", "facilitated", "Guided", "encouraged", "separated", "compelled", "represented", "achieved", "produced", "generated", "established", "taught", "provided", "raised", "rationed", "administered", "calculated", "invested", "powered", "controlled", "Augmented"],
    "jjr": ["Better", "higher", "greener", "cheaper"],

    "nnps": ["Dingle's", "Contacts", "Conferences", "Retirees", "Industries", "Things", "Operators", "Affairs", "Totnes", "Embassies", "Inhabitants", "People", "Incentives", "Dollars", "Workshops", "Pencils"]


}

var rotation = 0;




function createBlob(options) {

    var points = [];
    var path = options.element;
    var slice = (Math.PI * 2) / options.numPoints;
    var startAngle = random(Math.PI * 2);

    var tl = new TimelineMax({
        onUpdate: update
    });

    for (var i = 0; i < options.numPoints; i++) {

        var angle = startAngle + i * slice;
        var duration = random(options.minDuration, options.maxDuration);

        var point = {
            x: options.centerX + Math.cos(angle) * options.minRadius * 1.65,
            y: options.centerY + Math.sin(angle) * options.minRadius
        };

        var tween = TweenMax.to(point, duration, {
            x: options.centerX + Math.cos(angle) * options.maxRadius,
            y: options.centerY + Math.sin(angle) * options.maxRadius,
            repeat: -1,
            yoyo: true,
            ease: Sine.easeInOut
        });

        tl.add(tween, -random(duration));
        points.push(point);
    }

    options.tl = tl;
    options.points = points;

    function update() {
        path.setAttribute("d", cardinal(points, true, 1));
    }

    return options;
}

// Cardinal spline - a uniform Catmull-Rom spline with a tension option
function cardinal(data, closed, tension) {

    if (data.length < 1) return "M0 0";
    if (tension == null) tension = 1;

    var size = data.length - (closed ? 0 : 1);
    var path = "M" + data[0].x + " " + data[0].y + " C";

    for (var i = 0; i < size; i++) {

        var p0, p1, p2, p3;

        if (closed) {
            p0 = data[(i - 1 + size) % size];
            p1 = data[i];
            p2 = data[(i + 1) % size];
            p3 = data[(i + 2) % size];

        } else {
            p0 = i == 0 ? data[0] : data[i - 1];
            p1 = data[i];
            p2 = data[i + 1];
            p3 = i == size - 1 ? p2 : data[i + 2];
        }

        var x1 = p1.x + (p2.x - p0.x) / 6 * tension;
        var y1 = p1.y + (p2.y - p0.y) / 6 * tension;

        var x2 = p2.x - (p3.x - p1.x) / 6 * tension;
        var y2 = p2.y - (p3.y - p1.y) / 6 * tension;

        path += " " + x1 + " " + y1 + " " + x2 + " " + y2 + " " + p2.x + " " + p2.y;
    }

    return closed ? path + "z" : path;
}

function random(min, max) {
    if (max == null) {
        max = min;
        min = 0;
    }
    if (min > max) {
        var tmp = min;
        min = max;
        max = tmp;
    }
    return min + (max - min) * Math.random();
}





function createDots(blobs) {

    var dotContainer = document.querySelector("#dot-container");
    var checkBox = document.querySelector("#show-points");
    var showPoints = true;
    var points = [];
    var dots = [];

    blobs.forEach(function (blob) {
        blob.points.forEach(function (point) {

            var dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            dot.setAttribute("r", 4);
            dot.setAttribute("class", "dot");
            dotContainer.appendChild(dot);
            dots.push(dot);
            points.push(point);
        });
    });

    onChange();
    checkBox.addEventListener("change", onChange);
    TweenLite.ticker.addEventListener("tick", update);

    function onChange() {
        showPoints = checkBox.checked;
        dotContainer.style.setProperty("visibility", showPoints ? "visible" : "hidden");
    }

    function update() {

        if (!showPoints) {
            return;
        }

        for (var i = 0; i < points.length; i++) {
            var p = points[i];
            dots[i].setAttribute("transform", "translate(" + p.x + "," + p.y + ")");
        }
    }
}





function isVowel(char) {
    return /^[aeiou]$/.test(char.toLowerCase());
}

function handleClick() {

    // $('#text-input').focus();


    let rand = Math.random()
    let text = ""
    let stext = ""
    if (rand < 0.33) {

        text = newInventionA()[0]
        stext = newInventionA()[1]


    } else if (rand >= 0.33 && rand < 0.66) {
        text = newInventionB()[0]
        stext = newInventionB()[1]

    } else {
        text = newInventionC()[0]
        stext = newInventionC()[1]

    }
    globalText = [text, stext]
    document.getElementById('invention-text').innerText = text
    $('#text-input').val(stext)
    var blob2 = createBlob({
        element: document.querySelector("#path2"),
        numPoints: 5 + Math.floor(Math.random() * 15),
        centerX: 500,
        centerY: 500,
        minRadius: 150,
        maxRadius: 400 + Math.random() * 100,
        minDuration: 2.5,
        maxDuration: 15.5
    });
}

function newInventionA() {

    let text = ""
    let noun1 = data['nn'][Math.floor(Math.random() * data['nn'].length)];

    let adjective1 = data['jj'][Math.floor(Math.random() * data['jj'].length)]

    if (Math.random() < 0.5) {
        noun1 = data['nnp'][Math.floor(Math.random() * data['nnp'].length)]
    }



    if (isVowel(adjective1[0]) && adjective1[0] != "unique") {
        text += "An "
    } else {
        text += "A "
    }
    text += `${adjective1.toLowerCase()} ${noun1.toLowerCase()} in `
    let stext = ""

    let adjective2 = data['jj'][Math.floor(Math.random() * data['jj'].length)]
    let noun2 = data['nns'][Math.floor(Math.random() * data['nns'].length)]
    stext += `${adjective2.toLowerCase()} ${noun2.toLowerCase()}.`

    return [text, stext];

}

function newInventionB() {

    let text = ""
    let noun1 = data['nn'][Math.floor(Math.random() * data['nn'].length)];

    let adjective1 = data['jj'][Math.floor(Math.random() * data['jj'].length)]

    if (Math.random() < 0.5) {
        noun1 = data['nnp'][Math.floor(Math.random() * data['nnp'].length)]
    }



    if (isVowel(adjective1[0]) && adjective1[0] != "unique") {
        text += "An "
    } else {
        text += "A "
    }
    text += `${adjective1.toLowerCase()} ${noun1.toLowerCase()} for `

    let stext = ""


    let adjective2 = data['jj'][Math.floor(Math.random() * data['jj'].length)]
    let noun2 = data['nn'][Math.floor(Math.random() * data['nn'].length)]
    if (isVowel(adjective2[0]) && adjective2[0] != "unique") {
        stext += "an "
    } else {
        stext += "a "
    }
    stext += `${adjective2.toLowerCase()} ${noun2.toLowerCase()}.`

    return [text, stext];

}

function newInventionC() {

    let text = ""
    let noun1 = data['nn'][Math.floor(Math.random() * data['nn'].length)];

    let adjective1 = data['jj'][Math.floor(Math.random() * data['jj'].length)]

    if (Math.random() < 0.5) {
        noun1 = data['nnp'][Math.floor(Math.random() * data['nnp'].length)]
    }



    if (isVowel(adjective1[0]) && adjective1[0] != "unique") {
        text += "An "
    } else {
        text += "A "
    }
    text += `${adjective1.toLowerCase()} ${noun1.toLowerCase()} to `

    let stext = ""


    let verb = data['vb'][Math.floor(Math.random() * data['vb'].length)]

    let adjective2 = data['jj'][Math.floor(Math.random() * data['jj'].length)]
    let noun2 = data['nns'][Math.floor(Math.random() * data['nns'].length)]
    stext += `${verb.toLowerCase()} ${adjective2.toLowerCase()} ${noun2.toLowerCase()}.`

    return [text, stext];

}


var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

function encodeUnicode(str) {
    // first we use encodeURIComponent to get percent-encoded UTF-8,
    // then we convert the percent encodings into raw bytes which
    // can be fed into btoa.
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
        function toSolidBytes(match, p1) {
            return String.fromCharCode('0x' + p1);
        }));
}

function decodeUnicode(str) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  }

function copySessionLink() {
    let link = window.location.protocol + "//" + window.location.host + "?data="
    if (globalText) {

        let dataArray = JSON.stringify(globalText)
        let shareEncoded = link + encodeUnicode(dataArray)

        if (navigator.share) {
            navigator.share({
                    title: 'Reimagine Dingle Peninsula',
                    text: `${globalText[0]} ${globalText[1]}`,
                    url: shareEncoded,
                })
                .then(() => console.log('Successful share'))
                .catch((error) => console.log('Error sharing', error));
        } else {
            if (!navigator.clipboard) {
                // Clipboard API not available
                return
            }
            navigator.clipboard.writeText(shareEncoded)
                .then(() => {
                    // Success!

                })
                .catch(err => {
                    console.log('Something went wrong', err);
                });

        }
    }

}

function updateText(val) {

    globalText[1] = val
    console.log(globalText[1])
}
$(function () {
    $('[data-toggle="popover"]').popover()
    $('.popover-dismiss').popover({
        trigger: 'focus'
    })

    $('#repeat').click(function () {

        // Create a timeline with default parameters
        var tl = anime.timeline({
            easing: 'easeOutExpo',
            duration: 750
        });

        // Add children
        tl
            .add({
                targets: '#repeat',
                rotate: rotation2 + 360,
            })

        rotation2 += 360



    });

    $('#text-input').on('keyup change', function () {
        globalText[1] = $(this).val()
        console.log(globalText)
    });

    let rand = Math.random()
    let text = ""
    let stext = ""
    if (rand < 0.33) {

        text = newInventionA()[0]
        stext = newInventionA()[1]


    } else if (rand >= 0.33 && rand < 0.66) {
        text = newInventionB()[0]
        stext = newInventionB()[1]

    } else {
        text = newInventionC()[0]
        stext = newInventionC()[1]

    }
    globalText = [text, stext]


    var data = getUrlParameter('data');
    console.log(data)
    

    if (!data) {
        document.getElementById('invention-text').innerText = text
        $('#text-input').val(stext)

    } else {
        let decodedData = decodeUnicode(data)

        let textArray = JSON.parse(decodedData)
        document.getElementById('invention-text').innerText = textArray[0]
        $('#text-input').val(textArray[1])

    }
    var blob2 = createBlob({
        element: document.querySelector("#path2"),
        numPoints: 5 + Math.floor(Math.random() * 15),
        centerX: 500,
        centerY: 500,
        minRadius: 150,
        maxRadius: 400 + Math.random() * 100,
        minDuration: 2.5,
        maxDuration: 15.5
    });

})