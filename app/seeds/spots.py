from app.models import db, Spot


# # Adds a demo user, you can add other users here if you want
def seed_spots():
    property1 = Spot(
        user_id=1,
        title='Highlands Castle... overlooking Lake George!',
        description="Poised on a graceful mountaintop overlooking majestic Lake George, your castle awaits... From the moment you arrive, you'll sense the tranquility that surrounds this enchanting property and you’ll be captivated by the most spectacular view in the world! The intrigue and allure of the castle are matched only by the breathtaking vista of Lake George and the Adirondack Mountains.",
        address='1 Test Lane',
        city='Bolton',
        state='NY',
        zip_code=12804,
        lng=1,
        lat=2,
        bedrooms=3,
        bathrooms=2.5,
        sqFt=3500,
        design_type='Castles',
        price_per_day=5000
    )
    property2 = Spot(
        user_id=2,
        title="Lago Castille",
        description="Lago Castille is an estate of gorgeous French Provencal architecture with touches of Mediterranean is stunning from the front gates down to the private dock. The home sits amongst unrivaled landscaping and unmatched views. of Lake Travis.",
        address="2 Test Lane",
        city='Lagos Vista',
        state='TX',
        zip_code=78645,
        lng=1,
        lat=2,
        bedrooms=7,
        bathrooms=8.5,
        sqFt=5500,
        design_type='Castles',
        price_per_day=4500
    )
    property3 = Spot(
        user_id=3, title="Redwall Castle",
        description="Redwall Castle (built in the 1930s) is located in Germantown, Maryland (22 miles northwest of Washington, DC). \
        Youll love our unique home because it is a dream come true place. It is excellent for families (w kids) and groups.See (redwallcastle com) for amazing details. The castle is made of a main house and a separate carriage house.\
        The main house has 5 bedrooms and 4.5 bathrooms, and is for rent. The carriage house is used by the owner.\
        Outdoor open wood fire pits are available.",
        address="3 Test Lane",
        city='Germantown',
        state='MD',
        zip_code=20841,
        lng=1,
        lat=2,
        bedrooms=5,
        bathrooms=5,
        sqFt=2050,
        design_type='Castles',
        price_per_day=495
    )
    property4 = Spot(
        user_id=1,
        title="Ocean Front Beach Home With Sparkling Pool",
        description="An extraordinary opportunity to spend a magical vacation at this incredible ocean front home in. Enjoy panoramic ocean views from Crystal Pier to the south and a view of the beautiful Bird Rock \
        coastline to the north. Imagine welcoming your family and friends to your coastal retreat and building a lifetime of memories at the waterfront \
        watching dolphins frolic in the waves and stunning sunsets day after day. We invite you to experience the ultimate lifestyle. Parties or events not allowed.",
        address="4 Test Lane",
        city='San Diego',
        state='CA',
        zip_code=22400,
        lng=1,
        lat=2,
        bedrooms=3,
        bathrooms=2,
        sqFt=2050,
        design_type='AmazingPools',
        price_per_day=2500
    )
    property5 = Spot(
        user_id=2,
        title="Resort Pool/Mins to Beach/Golf&Hills Views/Exclus Quiet Area",
        description="Open the floor-to-ceiling sliding windows to let the ocean breezes in to the 5,000-square-feet open-concept interior. Bask in the views over the exclusive Rancho Santa Fe Golf Club and the valley, while outside, shaded patios and the pool await.",
        address="6 Test Lane",
        city='Rancho Santa Fe',
        state='CA',
        zip_code=92240,
        lng=1,
        lat=1,
        bedrooms=3,
        bathrooms=5,
        sqFt=3000,
        design_type='AmazingPools',
        price_per_day=4500
    )
    property6 = Spot(
        user_id=2,
        title="Valentine Estate",
        description="Step inside the walls of Valentine Estate and experience the seclusion and luxury of “The Palm Springs Life”. Breathtaking mountain views surround this spectacular contemporary property that was designed for private, five-star resort living. \
        Between the lavishly adorned terrace, living room lounge, wet bar, and dining areas, you'll have plenty of space to gather as \
        one or break-off for more intimate moments. Nearby, you’ll love exploring the National Parks, desert city shopping, and some of California's best golf courses - all within a short drive. \
        Every detail was carefully thought out when redesigning the gardens, outdoor lighting and amenities at this very special property. \
        Surrounded by mature palm trees, lush lawns, and soaring mountain views, Valentine Estate celebrates its gorgeous environment with spacious outdoor lounge areas and an airy, open concept interior.",
        address="5 Test Lane",
        city='Palm Springs',
        state='CA',
        zip_code=92014,
        lng=1,
        lat=1,
        bedrooms=3,
        bathrooms=5,
        sqFt=2450,
        design_type='AmazingPools',
        price_per_day=1500
    )
    property7 = Spot(
        user_id=3,
        title='Lion Heart',
        description='Welcome to 12.55 acres/5.06 hectares of a lush expanse of green topography and rising rocky terrain— \
            brimming with native flora and fauna—which unfolds in undulating patterns against the backdrop of a turquoise Caribbean Sea. \
            Lion Heart features 2 built and furnished villas, Halo and Rainbow, and is designed to house an additional 4 guest villas. \
            The seamless integration of native stone, steel, glass, green roof, and infinity pool with a custom native stone boulder waterfall showcases Oil Nut Bay’s Developer and Chairman David V. \
            Johnson’s unwavering passion for cutting-edge design, quality craftsmanship and exceptional attention to detail.',
        address='1 Lion Heart Lane',
        city='Isla Vista',
        state='CA',
        zip_code=93117,
        lng=1,
        lat=1,
        bedrooms=5,
        bathrooms=7,
        sqFt=8021,
        design_type='AmazingPools',
        price_per_day=4325
    )
    property8 = Spot(
        user_id=2,
        title='Savannah Dhu',
        description='Majestically occupying over 3,900 acres in Central New York, Savannah Dhu is truly a world of its own. \
            Savannah Dhu was conceived and created as both a hub and a homestead with the intention to fulfill a number of \
            different purposes: as a meeting-place mecca for innovation, discussion and exploration; as a compound for friends and family to unite and enjoy; as a protected preserve where one can truly return to their roots and live off the simplicity of the land. \
            Roads wind and meander throughout the property, where you will find spectacular lodges, an exquisite conference \
            center capable of accommodating hundreds of guests, barns filled with livestock, organic gardens and greenhouses, as well as several residential homes and outbuildings. \
            Intellectual Exchange Houses, intended for inspirational idea sharing and creation, are punctuated throughout, and an abundance of wildlife runs free. \
            Relax, hike, hunt, fish or marvel at the beauty of nature. Richness and fulfillment in life, well-being, and meaning are all found at Savannah Dhu, a place you must experience in person to understand. \
            For floor plans and detailed information about Savannah Dhu and all of the additional buildings and structures included, please visit dhu.selectsir.com or inquire with the broker.',
        address='25 Attitude Adjustment Road',
        city='Savannah',
        state='NY',
        zip_code='13146',
        lng=1,
        lat=1,
        bedrooms=10,
        bathrooms=12,
        sqFt=25000,
        design_type='CountrySide',
        price_per_day=12500
    )
    property9 = Spot(
        user_id=1,
        title='Hobble Creek Ranch',
        description="Hobble Creek Ranch is one of the most magnificent properties in the American West. \
            It offers a truly unique proposition—a stunning estate home with a backyard playground extending over 3,387 acres (over 4.5 miles wide) of spectacular recreational lands. \
            The property has substantial water rights with several ponds and it controls access to over ten thousand acres of forest service lands. \
            The ranch varies in elevation from 5,700 feet to over 9,100 feet and has extensive roads and trails that provide access throughout the property. \
            Hobble Creek Ranch is ideally suited for cattle and horses, while the big game elk and deer hunting opportunities are incredible. \
            The home is securely positioned behind two gates and is surrounded by nearly twenty beautifully manicured acres. \
            Every element of the home was built to the highest standards, and the finish work and detail are unrivaled. \
            The location is really special. You feel like you are miles and miles away from anyone, yet there is a golf course ten minutes away and a grocery store fifteen minutes away. \
            Hobble Creek Ranch is situated at the end of a paved road in Hobble Creek Canyon, which is about an hour from Salt Lake City and Park City, and about twenty minutes from a private airport.",
        address='533 N Left Fork Hobble Creek Cyn',
        city='Springville',
        state='UT',
        zip_code='84663',
        lng=1,
        lat=1,
        bedrooms=7,
        bathrooms=9,
        sqFt=17493,
        design_type='CountrySide',
        price_per_day=8300
    )
    property10 = Spot(
        user_id=1,
        title='Denbigh Farm',
        description="Hilfiger's quintessential English country estate with breathtaking panoramic views of LI Sound sitting high above sea level. \
            Continue the wonderful history of this special prop. of an era of timeless refinement. A hm that welcomes you. \
            A lifestyle of memories, enjoyment & pleasure for years. Extraordinary equestrian est w Grand Ball Room which entertained celebrities & Head of State. \
            Lovely sculptured verdant gardens, sparkling pool, tennis ct. Mt. Vernon playhouse, gym hse, carriage house, fancy chicken coops, gorgeous barn w/stalls, cottage, apple orchards+more! \
            An elegant landmark est that is so rare. Seldom do you capture such a majestic view. Impressive, pvt & so inviting. Dignity & charm. Continue the tradition with your dreams! Step back in time to a kinder place.",
        address='591 Riversville Road',
        city='Greenwich',
        state='CT',
        zip_code='06831',
        lng=1,
        lat=1,
        bedrooms=7,
        bathrooms=11,
        sqFt=13343,
        design_type='CountrySide',
        price_per_day=6800
    )
    property11 = Spot(
        user_id=2,
        title='Manor House at Llangollen',
        description="Just several miles from Middleburg, the 12,500 square foot manor house at Llangollen, with its 17 fireplaces, 9 bedrooms and 8 bathrooms, surveys its 1,100 plus acres from a commanding central position in the foothills of the Blue Ridge Mountains. \
            The prelude to Gettysburg was fought nearby. The Marquis de Lafayette visited here during his grand tour of the United States, as did the founding father and first President of the United States, George Washington, decades earlier. \
            Llangollen, a significant and rare offering, with its jockey guest house, stone garage with apartment, eight tenant houses, six further barns providing an additional 89 stalls, nine run in sheds, ice house, potting shed, smithy and various machine buildings is a Virginia treasure ready for the truly discerning buyer.",
        address='21515 Trappe Road',
        city='Upperville',
        state='VA',
        zip_code='20184',
        lng=1,
        lat=1,
        bedrooms=9,
        bathrooms=18,
        sqFt=12500,
        design_type='CountrySide',
        price_per_day=4800
    )
    property12 = Spot(
        user_id=2,
        title="Stunning Modern Estate",
        description="A stunning Modern estate designed by world class architect, Ted Tanaka, 1986, completely redone 2008. \
            Behind iron gates at the end of a cul-de-sac, extraordinarily private 3.2 acre knoll overlooking unobstructed city, ocean, and reservoir views. An incredible setting perfect for major entertaining. \
            Beautiful well-defined lines of modern architecture, large scale sun-filled rooms, walls of glass…all overlooking incredible views. Sprawling grounds include gorgeous lawns, sparkling pool, and tennis court. \
            A glass enclosed elevator leads you to all rooms, including an incredible master suite, gym, staff quarters, and much much more.",
        address="15210 Antelo Place",
        city='Los Angeles',
        state='CA',
        zip_code='90077',
        lng=1,
        lat=1,
        bedrooms=6,
        bathrooms=9,
        sqFt=13339,
        design_type='Design',
        price_per_day=4800
    )
    property13 = Spot(
        user_id=3,
        title="Bridge House",
        description="Incredible ocean views from every room of this private gated cul de sac location. Rift sawn Oak floors, contemporary style and a pool with your own mountain to hike and enjoy. \
            Master suite includes an office and a massage/exercise room, these two rooms are not counted as bedrooms",
        address="27312 Winding Way",
        city='Malibu',
        state='CA',
        zip_code='90265',
        lng=1,
        lat=1,
        bedrooms=4,
        bathrooms=6,
        sqFt=7000,
        design_type='Design',
        price_per_day=3800
    )
    property14 = Spot(
        user_id=3,
        title="The Falcon's Nest",
        description="The Falcon's Nest has incredible 360 degree views with a wraparound balcony. The house has 144 steps, but an elevator serves the first six floors. Amazing views from the bedroom with all glass ceilings, perfect for any stargazer.",
        address="2365 Skyline Dr",
        city='Prescott',
        state='AZ',
        zip_code='86303',
        lng=1,
        lat=1,
        bedrooms=3,
        bathrooms=4,
        sqFt=6200,
        design_type='Design',
        price_per_day=1800
    )
    property15 = Spot(
        user_id=2,
        title="443 Greenwich",
        description="You can enjoy an outstanding portfolio of amenities, including a 24-hour doorman, 24-hour concierge, valet and live-in resident manager. \
            443 Greenwich features a 71-foot indoor swimming pool, children’s playroom, 5,000 SF landscaped roof terrace, fitness center, private fitness studios, as well as both men’s and women’s locker rooms with an adjacent Hamam (Turkish Bath). \
            There are private storage rooms and a temperature controlled wine cellar. Also, a limited number of indoor parking spaces will be available for purchase each with electric charging stations",
        address="443 Greenwich",
        city='New York City',
        state='NY',
        zip_code='10013',
        lng=1,
        lat=1,
        bedrooms=5,
        bathrooms=6,
        sqFt=5110,
        design_type='IconicCities',
        price_per_day=7325
    )
    property16 = Spot(
        user_id=2,
        title="The San-Francisco Treat",
        description="A stand-alone cottage at the end of the lawn is designed strictly for pampering and offers the luxury of a steam room, massage room and sauna. \
            Grounds contain a wide expanse of lawn with rose and perennial gardens watered by rain collection from the roof. \
            Outdoor dining under the pergola hung with crystal chandeliers, fireplace and a full outdoor kitchen offers elegant entertaining and big views from the 40-foot cantilevered, infinity-edge swimming pool. \
            Emphasis has been placed on ease of hosting intimate gatherings for groups up to 350 guests and is ideal for events and large functions.",
        address="2178 Burberry Ln",
        city='San Francisco',
        state='CA',
        zip_code='94123',
        lng=1,
        lat=1,
        bedrooms=6,
        bathrooms=8,
        sqFt=9500,
        design_type='IconicCities',
        price_per_day=11650
    )
    property17 = Spot(
        user_id=1,
        title="Miami's Villa Magnolia",
        description="Gorgeous two story home with 221 feet of water frontage in its backyard. Just outside of the master bedroom is a terrace and infinity pool. \
            The estate was built on the northern tip of Miami Beach, inside a gated community nestled between the Atlantic Ocean and Biscayne Bay. The exclusive neighborhood includes its own police force and a marina.\
            The cinema room walls are lined with black alpaca fleece. Surround-sound speakers are built into its walls and hidden behind custom-framed movie posters.",
        address="224 Bal Bay Drive",
        city='Miami',
        state='FL',
        zip_code='33154',
        lng=1,
        lat=1,
        bedrooms=8,
        bathrooms=11,
        sqFt=12800,
        design_type='IconicCities',
        price_per_day=7325
    )
    property18 = Spot(
        user_id=1,
        title="Chicago's Purillo Mansion",
        description="Unprecedented urban estate. 25,000 square foot masterpiece on Lincoln Park's finest street. Sited on an enormous 177' x 149' parcel totaling more than eight city lots, every step has been taken to provide complete privacy and tranquility. \
            Manicured grounds with multiple fountains, reflecting pool, and hand-forged antique garden pavilion transport you to another world. Absolutely no expense was spared inside or out throughout this sun-filled mansion. \
            Grand in every way, but not overwhelming, the design is perfect for large scale entertaining as well as intimate everyday living. This home is nothing short of magnificent at every turn -- truly a one in a lifetime opportunity that could never be replicated.",
        address="1932 N Burling Street",
        city='Chicago',
        state='IL',
        zip_code='60614',
        lng=1,
        lat=1,
        bedrooms=6,
        bathrooms=9,
        sqFt=25000,
        design_type='IconicCities',
        price_per_day=8965
    )
    property19 = Spot(
        user_id=2,
        title="9 Bay Drive",
        description="Welcome to 9 Bay Drive, the undisputed crown jewel of the world famous Kapalua Resort with 10 acres of oceanfront bliss on historic Hawea Point. \
            Enjoy sunsets all year round from this absolutely stunning location. The immaculately landscaped grounds plus natural vegetation and fruit trees add to the true meaning of living in Hawaiiana. \
            10G internet with ultra high end technology. 3 commercial washers and dryers installed and included. Huge new pantry with 3 commercial freezers. 2 full kitchens.",
        address="9 Bay Drive",
        city='Lahaina',
        state='HI',
        zip_code='96761',
        lng=1,
        lat=1,
        bedrooms=6,
        bathrooms=7,
        sqFt=6645,
        design_type='Islands',
        price_per_day=12535
    )
    property20 = Spot(
        user_id=2,
        title="Heavenly Makena",
        description="HEAVENLY MAKENA is an awe-inspiring family compound highlighting endless ocean, sunrise & sunset views offering the best of all worlds! \
            Thrive in the intimate privacy, safety, temperate climate & clean air that Maui offers. \
            Situated at the prime entrances to both the luxurious Makena Resort and the Wailea Resort with a pedestrian gate to white sandy beaches, you conveniently flourish with 5-star resorts, fine dining, elegant shopping, golf, tennis, cycling, hiking and breathtaking ocean activities.",
        address="38 Ualei Pl",
        city='Kihei',
        state='HI',
        zip_code='96753',
        lng=1,
        lat=1,
        bedrooms=5,
        bathrooms=8,
        sqFt=8395,
        design_type='Islands',
        price_per_day=10535
    )
    property21 = Spot(
        user_id=3,
        title="Ha'ikaua Point",
        description="This unique place includes the main house, Hale Kai Po A'i, two additional oceanfront bungalows (Hale Aloha and Hale Iki) and an additional building (Hale Hana - office, media room, 4-car garage). \
            Located on the legendary Ha'ikaua Peninsula, this unparalleled oceanfront estate features:   - 600+ feet of private ocean shoreline with access to Keauhou and He'eia Bays and the Ocean.  \
            - Virtually every water sport is available from the property. - 270° of unobstructed ocean, bay and sunset views. - Protected by an offshore reef. - Chefs kitchen. - Private free form infinity swimming pool. - Includes furnishings, art and collections. \
            The only neighbor you have is the ocean!  The stunning landscaped grounds of Ha'ikaua Point are the perfect setting for private functions (large or small) … or a corporate retreat… the options are unlimited.",
        address="78-107A Holua Rd",
        city='Kailua Kona',
        state='HI',
        zip_code='96740',
        lng=1,
        lat=1,
        bedrooms=7,
        bathrooms=13,
        sqFt=8913,
        design_type='Islands',
        price_per_day=11473
    )
    property22 = Spot(
        user_id=3,
        title="Hi'ilani",
        description="Hi'ilani stands with all of its beauty, elegance, & splendor within the gates of prestigious Hawaii Loa Ridge. Modern Mediterranean meets 18th-Century French architecture where continuous walls of seamless windows maximize ocean views throughout. \
            Enter through the 11-foot tall twin glass doors framed with Versailles-inspired wrought iron scrolls to reveal crystal & marble perfection; an Imperial winding double staircase, 9 1/2-foot Austrian crystal chandelier, French hand-embroidered silk draperies, & a  magnificent European marble fountain with Diamond Head as your backdrop.",
        address="1133 Ikena Cir",
        city='Honolulu',
        state='HI',
        zip_code='96821',
        lng=1,
        lat=1,
        bedrooms=4,
        bathrooms=7,
        sqFt=9750,
        design_type='Islands',
        price_per_day=8473
    )
    property23 = Spot(
        user_id=1,
        title="Crystal Pointe",
        description="Built with creativity, ingenuity and love, Crystal Pointe is an epic lakefront masterpiece cradling the contour of the land on 5.14 private acres with two lakefront parcels. 525' of lakefront, 4 buoys, seasonal 32' barge and 16,232 total square feet of living space. Main residence, guest house and beach house. \
            Complete with 13 fireplaces, a 10 seat theatre, magical gardens, ponds, and waterfalls.",
        address="300 State Route 28",
        city='Crystal Bay',
        state='NV',
        zip_code='89402',
        lng=1,
        lat=1,
        bedrooms=8,
        bathrooms=12,
        sqFt=16232,
        design_type='LakeFront',
        price_per_day=16723
    )
    property24 = Spot(
        user_id=1,
        title="Pynewoods Estate at Prestigious Black Rock",
        description="Located in the premier Estates portion of the Black Rock Development, this contemporary masterpiece is perfectly positioned to maximize the incredible setting and mesmerizing Coeur d’Alene Lake views. \
            A mountain-modern marvel with ultra-high-end designer furnishings and beautifully balanced interior/exterior finishes. \
            Boasting 10,000+ sq ft of single-level living space, with separate master and guest wings plus a semi-detached guest house ideally suited for extended-stay family & friends. Park-like grounds with reflecting pools, native plants, fruit trees and garden beds plus a pickleball court.",
        address="5468 W Carnelian Dr",
        city='Coeur D Alene',
        state='ID',
        zip_code='83814',
        lng=1,
        lat=1,
        bedrooms=5,
        bathrooms=9,
        sqFt=10444,
        design_type='LakeFront',
        price_per_day=7840
    )
    property25 = Spot(
        user_id=2,
        title="COPPER ROCK ESTATE AT MICA BAY ON COEUR D'ALENE LAKE",
        description="Built in 2012, the home covers 8,731 square feet and includes almost 30 acres of waterfront on Mica Bay. It also offers over 700 feet of sandy beach frontage. \
            Luxury entertainment features include a wine cellar, a full gym, game room, bar area, and an outdoor kitchen with a pizza oven. The primary bedroom has a fireplace, and the attached bathroom a soaking tub and walk-in shower. The walk-in closet in the suite is enormous.",
        address="4225 W Scot Ayr Dr",
        city='Coeur D Alene',
        state='ID',
        zip_code='83814',
        lng=1,
        lat=1,
        bedrooms=4,
        bathrooms=5,
        sqFt=8731,
        design_type='LakeFront',
        price_per_day=6095
    )
    property26 = Spot(
        user_id=2,
        title="COPPER ROCK ESTATE AT MICA BAY ON COEUR D'ALENE LAKE",
        description="Enjoy this luxurious estate, boasting its own private lake and ultra-contemporary interiors. The views are majestic, and there's numerous ways to enjoy them: choose from the private beach or the stunning terrace with fire pits to keep you cosy.",
        address="2636 Aspen Springs Dr",
        city='Park City',
        state='UT',
        zip_code='84060',
        lng=1,
        lat=1,
        bedrooms=9,
        bathrooms=13,
        sqFt=15000,
        design_type='LakeFront',
        price_per_day=12340
    )
    property27 = Spot(
        user_id=3,
        title="Beautiful Estate with Triple Bunk Suite at Reunion",
        description="What can really be said about perfection? This amazingly beautiful estate has it all--and then some. Your family will love the open concept where every spacious room blends into another so everyone feels connected. \
            From two incomparable game rooms to a fully-equipped home theater, and sparkling pool, to a top-of-the-line home gym and 11 luxe bedrooms, including some very creatively themed ones, this is the ultimate vacation home. \
            (And the quintessential reunion destination, corporate retreat, or golfing getaway for up to 30 in your group.) Located on the prestigious Reunion Resort, it's also just a short drive to Disney's four iconic theme parks and Reunion's three PGA golf courses!",
        address="34 Rich Street",
        city='Kissimmee',
        state='FL',
        zip_code=92014,
        lng=1,
        lat=1,
        bedrooms=11,
        bathrooms=11,
        sqFt=2450,
        design_type='Mansions',
        price_per_day=15200
    )
    property28 = Spot(
        user_id=3,
        title="Tampa Mediterranean Lakefront Mansion",
        description="This distinctive home has been used for corporate events, photo shoots and videos. It is convenient to all Tampa Bay has to offer, and offers privacy and high-end details not found in other rentals. \
            Complimentary bass fishing, kayaking, canoeing and SUP boarding. Wave runners and competition ski boats available for rent. RESERVE YOUR DATES TODAY!",
        address="34 Big Mansions Street",
        city='Odessa',
        state='FL',
        zip_code=45614,
        lng=1,
        lat=1,
        bedrooms=6,
        bathrooms=6,
        sqFt=2450,
        design_type='Mansions',
        price_per_day=7900
    )
    property29 = Spot(
        user_id=1,
        title="Bavarian Castle nestled in the Texas Hill Country",
        description="Castle interior boasts over 100 pieces of artwork and paintings, including ancient cultural art, art glass, and other artifacts for you to admire. \
            Some of these date back thousands of years and are typically only found in museums. AS GUEST WE ASK THAT YOU LOOK AND ADMIRE THESE PIECES BUT DO NOT TOUCH.",
        address="34 Old Castles Street",
        city='Odessa',
        state='FL',
        zip_code=45614,
        lng=1,
        lat=1,
        bedrooms=6,
        bathrooms=4,
        sqFt=1950,
        design_type='Mansions',
        price_per_day=6535
    )
    property30 = Spot(
        user_id=2,
        title="Amazing Waterfront Mansion",
        description="This Amazing waterfront estate was done with the highest of all finishes. The Beds have Hermes blankets and the house has all amenities you could desire: \
            Large Kitchen, Massive Wine Collection, Infinity Pool and Built In Hot Tub, Exclusive Appliances, Home Theater and everything your heart desires when staying in Miami on Vacation. Nine Bedrooms and Nine Bathrooms enough for the largest groups who want the BEST!",
        address="34 Modern Mansions Street",
        city='Miami',
        state='FL',
        zip_code=85614,
        lng=1,
        lat=1,
        bedrooms=8,
        bathrooms=8,
        sqFt=6950,
        design_type='Mansions',
        price_per_day=9500
    )
    property31 = Spot(
        user_id=1,
        title="Modern Mediterranean",
        description="Modern Mediterranean sets the stage for this stunning Napa Valley Vineyard Estate located in the heart of the wine country, Oakville. \
            Approximately 1 acre+/- Premium Cabernet vineyard welcomes you as you drive into this property down the private drive with spacious guest parking. \
            The open floor plan welcomes you with expansive vineyard views beyond the back yard that surround the home, they are intoxicating! Entertaining is at it's best with 6 en suite guest rooms and a large luxurious Primary Suite. \
            Work from home with two office spaces to choose from. The spacious kitchen is appointed with high end stainless steel appliances to attract any chef, including two refrigerator/freezers. \
            The double pantry is huge and will accommodate all that is needed to entertain those huge parties and family get togethers for the holidays. Three fire places make it a cozy home on chilly nights.",
        address="7560 Saint Helena Hwy",
        city='Napa',
        state='CA',
        zip_code=94558,
        lng=1,
        lat=1,
        bedrooms=7,
        bathrooms=8,
        sqFt=6649,
        design_type='Vineyards',
        price_per_day=6969
    )
    property32 = Spot(
        user_id=2,
        title="Pacific Ocean Playground",
        description="Set on approximately 5 acres in one of the most beautiful coves in all of the world.  Designed by Robert AM Stern, reminiscent of old estates in Provence, Tuscany and Spain. \
            The stone covered structures feature antique terra-cotta roofs that are brilliantly connected through gardens and courtyards that all overlook incredible views of the Pacific Ocean.  \
            The compound contains nine structures including a gym, beach cottage, guest houses, and office, and an underground tunnel from the pool that leads to a large movie theater. There's a separate elevator that takes you to the beach.",
        address="33550 Pacific Coast Hwy",
        city='Malibu',
        state='CA',
        zip_code=90265,
        lng=1,
        lat=1,
        bedrooms=16,
        bathrooms=22,
        sqFt=25025,
        design_type='Luxe',
        price_per_day=21225
    )

    db.session.add(property1)
    db.session.add(property2)
    db.session.add(property3)
    db.session.add(property4)
    db.session.add(property5)
    db.session.add(property6)
    db.session.add(property7)
    db.session.add(property8)
    db.session.add(property9)
    db.session.add(property10)
    db.session.add(property11)
    db.session.add(property12)
    db.session.add(property13)
    db.session.add(property14)
    db.session.add(property15)
    db.session.add(property16)
    db.session.add(property17)
    db.session.add(property18)
    db.session.add(property19)
    db.session.add(property20)
    db.session.add(property21)
    db.session.add(property22)
    db.session.add(property23)
    db.session.add(property24)
    db.session.add(property25)
    db.session.add(property26)
    db.session.add(property27)
    db.session.add(property28)
    db.session.add(property29)
    db.session.add(property30)
    db.session.add(property31)
    db.session.add(property32)

    db.session.commit()


# # Uses a raw SQL query to TRUNCATE the users table.
# # SQLAlchemy doesn't have a built in function to do this
# # TRUNCATE Removes all the data from the table, and RESET IDENTITY
# # resets the auto incrementing primary key, CASCADE deletes any
# # dependent entities
def undo_spots():
    db.session.execute('TRUNCATE spots RESTART IDENTITY CASCADE;')
    db.session.commit()
