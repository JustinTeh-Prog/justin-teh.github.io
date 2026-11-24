/* Arts page content. Every role, date and figure here comes from the
   production credits, Justin's résumé, his certificates, the DMPC works
   list or the published videos. Image paths are relative to /arts/.
   `sort` is the release or show date (YYYY-MM-DD); pieces in each act
   are listed in that order. */
(function () {
  var W = "../assets/Arts/web/";   // 1600px and 640px copies of assets/Arts
  var V = "../assets/Arts/video/";

  window.ARTS_DATA = {
    acts: [
      { id: "act-1", numeral: "I", title: "Learning the Ropes", years: "2019", role: "Lighting director, organising committee",
        intro: "At Temasek Polytechnic (TP), I started on the lighting desk for student productions in the black box, the auditorium and around the school." },
      { id: "act-2", numeral: "II", title: "Through the Screen", years: "2020 – 2021", role: "Vice-president, DMPC; producer",
        intro: "When COVID-19 closed the theatres, TP's Digital Media & Production Crew (DMPC) became how the arts groups reached an audience. I was its vice-president in 2020, helping lead about 100 members as we moved concerts and open houses onto video and livestream." },
      { id: "act-3", numeral: "III", title: "Back in the Room", years: "2022", role: "Lighting director, producer, editor",
        intro: "In early 2022 we were still making shows for the screen. By March, TP's arts groups were performing live again." },
      { id: "act-4", numeral: "IV", title: "Beyond School", years: "2025", role: "Lighting director, operator",
        intro: "At SUTD, I lit theatre, busking shows, rock concerts and official school events, as well as external gigs at Marina Bay Sands, Suntec Convention Centre and more." },
      { id: "act-5", numeral: "V", title: "Running the Show", years: "2026", role: "Organiser, lighting director",
        intro: "I organised Fresh-No-More!, a newly inaugurated event, from the first proposal down to its last cue." }
    ],

    productions: [
      { id: "the-lift", act: "act-1", sort: "2019-11-29", title: "The Lift", date: "29 Nov 2019", venue: "TP Black Box Theatre",
        roles: ["Lighting Director"],
        note: "A theatre production at TP's Black Box Theatre. In an intimate space, it explored family traumas, self-identity and the clash between nature and nurture.",
        images: [{ src: W + "2TheLift-1600.webp", thumb: W + "2TheLift-640.webp", alt: "Three performers hold a man in a suit under warm side light in The Lift" }],
        photo: "DMPC" },
      { id: "rush", act: "act-1", sort: "2019-11-30", title: "TPDE's Rush..", date: "30 Nov 2019", venue: "Paddy Field, TP School of Design",
        roles: ["Tech Coordinator", "Lighting Director"],
        note: "A site-specific dance piece by the TP Dance Ensemble in the semi-open Paddy Field. I coordinated the technical setup and ran the lights from an Avolites Tiger Touch (second photo).",
        images: [
          { src: W + "3RUSH-1-1600.webp", thumb: W + "3RUSH-1-640.webp", alt: "Dancers in green and magenta haze at Rush" },
          { src: W + "3RUSH-2-1600.webp", thumb: W + "3RUSH-2-640.webp", alt: "Audience and crew on a balcony lit in blue during Rush", pos: "50% 30%" },
          { src: W + "3RUSH-3-1600.webp", thumb: W + "3RUSH-3-640.webp", alt: "Audience watching through red haze at Rush" }
        ],
        photo: "DMPC" },
      { id: "spectacular-2022", act: "act-3", sort: "2022-04-07", title: "Spectacular 2022", date: "7 – 14 Apr 2022", venue: "TP Auditorium",
        roles: ["Lighting Director"],
        note: "TP's arts showcase in its auditorium, featuring drums, dance and choir. I planned the lighting and ran the cues with the performers and crew.",
        images: [
          { src: W + "4SPECTACULAR-2-1600.webp", thumb: W + "4SPECTACULAR-2-640.webp", alt: "A solo dancer between crossing beams on a dark stage" },
          { src: W + "4SPECTACULAR-1-1600.webp", thumb: W + "4SPECTACULAR-1-640.webp", alt: "Drummers on a stage lit in blue and red" },
          { src: W + "4SPECTACULAR-3-1600.webp", thumb: W + "4SPECTACULAR-3-640.webp", alt: "A choir under blue and purple wash" }
        ],
        links: [{ label: "Day 5 Show", href: "https://www.youtube.com/watch?v=qq3DTiE60A0" }],
        photo: "DMPC" },
      { id: "wedding-show-2025", act: "act-4", sort: "2025-01-10", title: "Blissful One-Stop Wedding Show", date: "10 Jan 2025", venue: "Marina Bay Sands",
        roles: ["Lighting Operator"],
        note: "A wedding showcase at Marina Bay Sands, where I operated the lighting in a professional venue.",
        images: [{ src: W + "5XBOWS-1600.webp", thumb: W + "5XBOWS-640.webp", alt: "A garden-styled runway with warm uplights at the wedding show" }] },
      { id: "arts-fiesta-2025", act: "act-4", sort: "2025-07-06", title: "Arts Fiesta 2025", date: "6 Jul 2025", venue: "Our Tampines Hub",
        roles: ["Lighting Director"],
        note: "SUTD's arts showcase for the public at Our Tampines Hub, with bands and other acts on one stage. I directed the lighting.",
        images: [{ src: W + "6ARTSFIESTA-1600.webp", thumb: W + "6ARTSFIESTA-640.webp", alt: "A band performing in front of a Today Eat What backdrop at Arts Fiesta 2025" }],
        links: [{ label: "SUTD Arts photo album", href: "https://flic.kr/s/aHBqjCxdN1", type: "album" }] },
      { id: "everything-but-the-brain", act: "act-4", sort: "2025-07-25", title: "Everything But The Brain", date: "25 Jul 2025", venue: "SUTD Auditorium",
        roles: ["Lighting Director"],
        note: "SUTD Drama Club's staging of the tragicomedy by Singaporean playwright Jean Tay. I directed the lighting and supported the sound.",
        images: [
          { src: W + "7EBTB-1-1600.webp", thumb: W + "7EBTB-1-640.webp", alt: "A man in a hospital bed lit by a single cool wash" },
          { src: W + "7EBTB-2-1600.webp", thumb: W + "7EBTB-2-640.webp", alt: "Empty hospital beds and a table in a pool of light" }
        ] },
      { id: "rockafall-2025", act: "act-4", sort: "2025-08-03", title: "Rockafall 2025", date: "3 Aug 2025", venue: "SUTD Auditorium",
        roles: ["Lighting Director"],
        note: "A rock concert in the SUTD Auditorium. I directed the lighting and followed each band's set live from the desk.",
        images: [
          { src: W + "8Rockafall-2-1600.webp", thumb: W + "8Rockafall-2-640.webp", alt: "A singer with a red guitar in front of a desert projection" },
          { src: W + "8Rockafall-3-1600.webp", thumb: W + "8Rockafall-3-640.webp", alt: "A guitarist backlit through haze", pos: "50% 22%" },
          { src: W + "8Rockafall-1-1600.webp", thumb: W + "8Rockafall-1-640.webp", alt: "Two operators at the lighting and sound desks" }
        ],
        credit: { prefix: "Guitarist pictured", handle: "@p____p.x", url: "https://www.instagram.com/p____p.x" } },
      { id: "ori-finale-2025", act: "act-4", sort: "2025-09-20", title: "Ori Finale 2025", date: "20 Sep 2025", venue: "SUTD Indoor Sports Hall",
        roles: ["Lighting Director"],
        note: "SUTD's orientation finale, held in the indoor sports hall. I designed and ran the lighting.",
        images: [
          { src: W + "9OriFinale-1-1600.webp", thumb: W + "9OriFinale-1-640.webp", alt: "A DJ under violet light beside a glass panel" },
          { src: W + "9OriFinale-2-1600.webp", thumb: W + "9OriFinale-2-640.webp", alt: "Students dancing in red light in the sports hall" }
        ] },
      { id: "fresh-no-more-2026", act: "act-5", sort: "2026-01-26", title: "Fresh-No-More! 2026", date: "26 Jan 2026", venue: "SUTD Auditorium & Campus Centre",
        roles: ["Organiser", "Lighting Director"],
        note: "A new celebration for SUTD's sophomores, attended by more than 250 undergraduates and endorsed by SUTD's Head of Pillars and the Office of Student Life. I led it with a 60-member team: the programme, logistics, publicity and approvals, and the lighting on the night.",
        images: [
          { src: W + "10FNM-1-1600.webp", thumb: W + "10FNM-1-640.webp", alt: "Confetti falls over the crowd at the Fresh-No-More! finale" },
          { src: W + "10FNM-5-1600.webp", thumb: W + "10FNM-5-640.webp", alt: "A saxophonist under a blue beam" },
          { src: W + "10FNM-2-1600.webp", thumb: W + "10FNM-2-640.webp", alt: "A guitarist under violet light" },
          { src: W + "10FNM-3-1600.webp", thumb: W + "10FNM-3-640.webp", alt: "Students laughing in the audience" },
          { src: W + "10FNM-4-1600.webp", thumb: W + "10FNM-4-640.webp", alt: "Faculty and guests in the front rows" }
        ],
        links: [
          { label: "Event montage", href: "https://www.youtube.com/watch?v=vV-fi9XaRfc" },
          { label: "Ceremony premiere", href: "https://www.youtube.com/watch?v=vjNtHLwsDRc" },
          { label: "Photo album", href: "https://www.flickr.com/photos/204192074@N02/", type: "album" }
        ] }
    ],

    screen: [
      { id: "dreams-xi", act: "act-1", sort: "2019-10-01", title: "Dreams XI: Game On", date: "Oct 2019", venue: "TP Auditorium",
        roles: ["Lighting Director", "Organising Committee"],
        note: "A performing arts concert and showcase featuring TP's student arts CCAs, including the dance and theatre ensembles. Its storyline followed two boys exploring different games, with choreography and music from Final Fantasy, Assassin's Creed, Street Fighter II, Temple Run, Guitar Hero, Dance Central and more.",
        frames: [
          { src: V + "dreams11-guitarhero.webp", alt: "Dancers and a band in front of a Guitar Hero backdrop under coloured beams" },
          { src: V + "dreams11-finalfantasy.webp", alt: "An orchestra and choir playing in front of a Final Fantasy title screen" },
          { src: V + "dreams11-dance.webp", alt: "Dancers on stage under green and violet beams" }
        ],
        links: [{ label: "Watch the concert", href: "https://www.youtube.com/watch?v=PSEpTDpXg1w" }] },
      { id: "ndc-2020", act: "act-2", sort: "2020-08-06", title: "National Day Virtual Concert", date: "6 Aug 2020",
        roles: ["Lighting Assistant", "Motion Graphics", "Livestream"],
        note: "TP's National Day concert moved online. I assisted with the lighting for its music videos, edited most of the motion graphics assets and was on livestream control.",
        frames: [
          { src: V + "ndc20-finale.webp", alt: "Grid of TP staff and students singing the finale" },
          { src: V + "ndc20-tapau.webp", alt: "Dancers performing Tapau outdoors" },
          { src: V + "ndc20-singai.webp", alt: "Three dancers performing Singai Naadu on a campus road" }
        ],
        links: [{ label: "Watch the concert", href: "https://www.youtube.com/watch?v=z9bb-mYuC6I" }] },
      { id: "music-videos", act: "act-2", sort: "2020-10-18", title: "Music videos for TP Band & Music Vox", date: "18 Oct & 8 Nov 2020",
        roles: ["Production Crew"],
        note: "DMPC productions with TP's music groups: the Believer × Radioactive mashup with TP Band, and Music Vox's “I'm Ready Now”, made for TP staff.",
        frames: [
          { src: V + "believer-trio.webp", alt: "Three musicians in red light and haze" },
          { src: V + "believer-stage.webp", alt: "A band on stage behind a glitch effect" },
          { src: V + "believer-desk.webp", alt: "Two crew members at a mixing desk" }
        ],
        links: [
          { label: "Believer × Radioactive", href: "https://www.youtube.com/watch?v=I1Re7IoHQ94" },
          { label: "I'm Ready Now", href: "https://www.youtube.com/watch?v=FXdJL6rDDuI" }
        ] },
      { id: "open-house-2021", act: "act-2", sort: "2021-01-07", title: "Open House 2021", date: "7 – 9 Jan 2021",
        roles: ["Producer", "Video Editor", "Motion Graphics", "Livestream", "Set Design"],
        note: "Three online days for Temasek Arts Centre, which I produced and edited. For the Day 1 concert, I stitched the performances and emcee segments together and made the motion graphics. Day 2 was a chat show that I livestreamed with a one-camera setup for the emcees, and I helped design the livestream set. Day 3 was a virtual tour of the arts spaces.",
        frames: [
          { src: V + "oh21-concert.webp", alt: "Orchestra on stage with a motion-graphics name tag in the corner" },
          { src: V + "oh21-chatshow.webp", alt: "Livestream layout with emcees and a remote guest" },
          { src: V + "oh21-tour.webp", alt: "Animated floor plan opening the virtual tour" },
          { src: V + "oh21-credits.webp", alt: "End credits listing Justin Teh in TP Digital Media & Production Crew" }
        ],
        links: [
          { label: "Day 1", href: "https://www.youtube.com/watch?v=PtGvShau2jI" },
          { label: "Day 2", href: "https://www.youtube.com/watch?v=H6hoTX7b-5E" },
          { label: "Day 3", href: "https://www.youtube.com/watch?v=RTeCCLhEA1E" }
        ] },
      { id: "chinese-orchestra", act: "act-2", sort: "2021-04-12", title: "TP Chinese Orchestra recitals", date: "12 Apr 2021",
        roles: ["Production Crew"],
        note: "Filmed performances for TP Chinese Orchestra: a Chinese New Year piece recorded outdoors and the recital Travelogue on stage.",
        frames: [
          { src: V + "co-travelogue.webp", alt: "Percussionists at red drums on a dark stage" },
          { src: V + "co-cny.webp", alt: "The orchestra playing outdoors among lanterns" },
          { src: V + "co-travelogue-2.webp", alt: "Guzheng players on stage" }
        ],
        links: [
          { label: "CNY performance", href: "https://www.youtube.com/watch?v=XPccYEf-X6s" },
          { label: "Travelogue", href: "https://www.youtube.com/watch?v=MKM3g2s_lgs" }
        ] },
      { id: "spectacular-2021", act: "act-2", sort: "2021-05-19", title: "Spectacular 2021", date: "19 May 2021",
        roles: ["Lighting Assistant", "Motion Graphics", "Set Design"],
        note: "The 2021 showcase went out as a livestream. I assisted with the lighting for its music videos, edited most of the motion graphics assets and helped design the lighting for the livestream set.",
        frames: [
          { src: V + "spec21-quiz.webp", alt: "Livestream frame with the stage feed beside a live quiz" },
          { src: V + "spec21-stream.webp", alt: "Hosts on a lit stage beside a quiz screen" }
        ],
        links: [{ label: "Watch the livestream", href: "https://www.youtube.com/watch?v=1YClN40nEYc" }] },
      { id: "queen-of-swing", act: "act-2", sort: "2021-10-18", title: "Queen of Swing", date: "18 Oct 2021",
        roles: ["Producer"],
        note: "A short music-and-dance film made by the TP Dance Ensemble, Music Vox and DMPC together, specially produced by TP's 2021 TSEA awardees and TAC students.",
        frames: [
          { src: V + "qos-guitar.webp", alt: "A singer with an acoustic guitar under a single light" },
          { src: V + "qos-dance.webp", alt: "A dancer turning in low light" },
          { src: V + "qos-rooftop.webp", alt: "Dancers breaking on an open-air deck under a cloudy sky" }
        ],
        links: [{ label: "Watch the film", href: "https://www.youtube.com/watch?v=6w3ndRgEvMY" }] },
      { id: "open-house-2022", act: "act-3", sort: "2022-01-07", title: "Open House 2022: Virtual Tour", date: "7 Jan 2022",
        roles: ["Producer", "Film Crew", "Video Editor"],
        note: "An 11-minute video tour of the facilities TP's CCA groups use, from the running track and sports science lab to the dance studio and swimming pool, made by DMPC for Open House 2022. On the film crew I was producer and grip, and I edited the whole video.",
        frames: [
          { src: V + "oh22-desk.webp", alt: "A hand on a lighting console glowing violet" },
          { src: V + "oh22-studio.webp", alt: "TP's largest dance studio with a lower-third caption" },
          { src: V + "oh22-court.webp", alt: "Two hosts talking on an outdoor basketball court" }
        ],
        links: [{ label: "Watch the tour", href: "https://www.youtube.com/watch?v=SKWnNUm7rYc&t=311s" }] },
      { id: "co-le-2022", act: "act-3", sort: "2022-01-30", title: "樂: The Highlight", date: "30 Jan 2022",
        roles: ["Lighting Programmer", "Producer"],
        note: "TP Chinese Orchestra's virtual concert of film and TV soundtracks, from Spirited Away and Kiki's Delivery Service to Pocahontas, released ahead of Lunar New Year. I programmed the lighting and was a producer.",
        frames: [
          { src: V + "co-le-guzheng.webp", alt: "Six guzheng players in red on a platform ringed by blue lights" },
          { src: V + "co-le-orchestra.webp", alt: "An erhu player and orchestra under a white beam" },
          { src: V + "co-le-purple.webp", alt: "The orchestra seated under purple light" }
        ],
        links: [{ label: "Watch the concert", href: "https://www.youtube.com/watch?v=Nc8ZuIbElmA" }] },
      { id: "dreams-xii", act: "act-3", sort: "2022-03-26", title: "Dreams XII: Back to Live", date: "26 Mar 2022",
        roles: ["Motion Graphics", "Lighting Programmer", "Video Editor"],
        note: "Temasek Arts Centre's first live show in two years, mixing performances on stage with pre-recorded ones shown on the wall behind it. I was one of the motion graphics editors and programmed the lighting for those pre-recorded performance videos. I was also chief editor of the concert video released on 3 April 2022.",
        frames: [
          { src: V + "dreams12-wall.webp", alt: "A band on stage in front of a wall projection of coloured smoke" },
          { src: V + "dreams12-brass.webp", alt: "Trumpet players with a motion-graphics fact card over the shot" },
          { src: V + "dreams12-animation.webp", alt: "An illustrated animation of a student studying at a desk" }
        ],
        links: [{ label: "Watch the concert", href: "https://www.youtube.com/watch?v=wvFZFKfBUUE" }] }
    ],

    roles: ["Organiser", "Organising Committee", "Lighting Director", "Lighting Programmer", "Lighting Operator", "Lighting Assistant", "Tech Coordinator", "Producer", "Video Editor", "Film Crew", "Motion Graphics", "Livestream", "Set Design", "Production Crew"],

    toolkit: [
      { label: "Running a show", items: ["Stage management", "Show calling", "Technical coordination", "Production scheduling", "Bump-in planning", "Risk assessment"] },
      { label: "On the desk", items: ["GrandMA2", "GrandMA3", "Avolites", "DMX", "Hybrid and digital audio consoles", "Video switcher"] }
    ],

    recognition: [
      { title: "SUTD Student Service Excellence Award (Individual)", year: "2026" },
      { title: "Temasek CCA Silver Award, Digital Media & Production Crew", year: "2022",
        href: "https://www.facebook.com/temasekpoly/posts/heartiest-congratulations-to-all-our-recipients-of-the-temasek-student-excellenc/10160037245690482" },
      { title: "CCA Dedication and Outstanding CCA Contributions Awards, TP DMPC", year: "2021" }
    ]
  };
})();
