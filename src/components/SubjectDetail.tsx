'use client'

import { ArrowLeft, Clock, Target, Star, BookOpen } from 'lucide-react'

// Gedetailleerde leerstrategieën per vak
const subjectStrategies = {
  wiskunde: {
    name: 'Wiskunde',
    color: 'blue',
    skills: [
      {
        name: 'Formules & Berekeningen',
        strategies: [
          {
            name: 'Stappenplan Methode',
            difficulty: 'Makkelijk',
            time: '15 min',
            effectiveness: 92,
            description: 'Breek elke som op in kleine, logische stappen',
            steps: [
              'Lees de opgave 2x rustig door',
              'Schrijf op wat je weet en wat je zoekt',
              'Kies de juiste formule',
              'Vul stap voor stap de getallen in',
              'Controleer je antwoord'
            ],
            tips: [
              'Gebruik altijd dezelfde volgorde',
              'Schrijf elke stap op, ook de simpele',
              'Controleer door terug te rekenen'
            ]
          },
          {
            name: 'Formule Flashcards',
            difficulty: 'Makkelijk',
            time: '20 min',
            effectiveness: 85,
            description: 'Leer formules uit je hoofd met kaartjes',
            steps: [
              'Maak kaartjes: voorkant = situatie, achterkant = formule',
              'Oefen dagelijks 10 minuten',
              'Sorteer: kan ik / moet ik nog oefenen',
              'Herhaal moeilijke kaartjes vaker'
            ],
            tips: [
              'Gebruik kleuren voor verschillende onderwerpen',
              'Voeg voorbeelden toe aan de kaartjes',
              'Oefen ook andersom: formule → wanneer gebruik je hem?'
            ]
          }
        ]
      },
      {
        name: 'Grafieken & Functies',
        strategies: [
          {
            name: 'Grafiek Tekenen Methode',
            difficulty: 'Gemiddeld',
            time: '25 min',
            effectiveness: 88,
            description: 'Systematisch grafieken tekenen en interpreteren',
            steps: [
              'Maak een waardentabel met x en y',
              'Plot de punten nauwkeurig',
              'Verbind de punten met een vloeiende lijn',
              'Label de assen en voeg een titel toe',
              'Controleer bijzondere punten (snijpunten, toppen)'
            ],
            tips: [
              'Gebruik millimeterpapier of digitale tools',
              'Begin met eenvoudige functies',
              'Oefen het herkennen van functietypen'
            ]
          }
        ]
      },
      {
        name: 'Meetkunde',
        strategies: [
          {
            name: 'Tekening + Berekening',
            difficulty: 'Gemiddeld',
            time: '30 min',
            effectiveness: 90,
            description: 'Combineer visuele en numerieke aanpak',
            steps: [
              'Maak altijd eerst een duidelijke tekening',
              'Label alle bekende hoeken en lengtes',
              'Zoek naar bekende driehoeken en figuren',
              'Pas stellingen toe (Pythagoras, goniometrie)',
              'Controleer of je antwoord logisch is'
            ],
            tips: [
              'Gebruik verschillende kleuren voor verschillende elementen',
              'Leer de belangrijkste stellingen uit je hoofd',
              'Oefen met verschillende soorten figuren'
            ]
          }
        ]
      }
    ]
  },
  nederlands: {
    name: 'Nederlands',
    color: 'green',
    skills: [
      {
        name: 'Literatuur & Analyse',
        strategies: [
          {
            name: 'Literatuur Mindmap',
            difficulty: 'Makkelijk',
            time: '20 min',
            effectiveness: 90,
            description: 'Visualiseer verhaalstructuur en themas',
            steps: [
              'Zet de titel in het midden',
              'Maak takken voor: personages, themas, stijl, tijd/plaats',
              'Voeg details toe aan elke tak',
              'Gebruik kleuren voor verschillende elementen',
              'Verbind gerelateerde concepten met lijnen'
            ],
            tips: [
              'Gebruik symbolen en kleine tekeningen',
              'Maak voor elk boek een aparte mindmap',
              'Herhaal de mindmap voor toetsen'
            ]
          },
          {
            name: 'Citaten Verzamelen',
            difficulty: 'Gemiddeld',
            time: '30 min',
            effectiveness: 87,
            description: 'Verzamel belangrijke citaten met uitleg',
            steps: [
              'Lees met een markeerstift en notitieblok',
              'Markeer opvallende zinnen en passages',
              'Schrijf citaten over in een apart schrift',
              'Voeg bij elk citaat toe: pagina, context, betekenis',
              'Groepeer citaten per thema of personage'
            ],
            tips: [
              'Zoek citaten die themas illustreren',
              'Let op literaire technieken (metaforen, symboliek)',
              'Oefen citaten hardop voor presentaties'
            ]
          }
        ]
      },
      {
        name: 'Spelling & Grammatica',
        strategies: [
          {
            name: 'Foutanalyse Methode',
            difficulty: 'Makkelijk',
            time: '15 min',
            effectiveness: 85,
            description: 'Leer van je eigen spelfouten',
            steps: [
              'Verzamel al je gemaakte fouten in een schrift',
              'Schrijf bij elke fout de juiste versie',
              'Zoek de regel op die erbij hoort',
              'Maak 5 nieuwe zinnen met het juiste woord',
              'Herhaal moeilijke woorden wekelijks'
            ],
            tips: [
              'Categoriseer fouten (dt-fouten, werkwoorden, etc.)',
              'Gebruik ezelsbruggetjes voor moeilijke regels',
              'Vraag anderen om je te overhoren'
            ]
          }
        ]
      },
      {
        name: 'Schrijfvaardigheid',
        strategies: [
          {
            name: 'Schrijfplan Methode',
            difficulty: 'Gemiddeld',
            time: '40 min',
            effectiveness: 88,
            description: 'Structureer je teksten systematisch',
            steps: [
              'Analyseer de opdracht: wat wordt er gevraagd?',
              'Brainstorm ideeën en argumenten',
              'Maak een outline: inleiding, middenstuk, slot',
              'Schrijf de eerste versie zonder te corrigeren',
              'Lees na en verbeter: inhoud → structuur → taal'
            ],
            tips: [
              'Begin elke alinea met een kernzin',
              'Gebruik verbindingswoorden tussen alineas',
              'Lees je tekst hardop om de flow te checken'
            ]
          }
        ]
      }
    ]
  },
  engels: {
    name: 'Engels',
    color: 'purple',
    skills: [
      {
        name: 'Woordenschat',
        strategies: [
          {
            name: 'Context Leren',
            difficulty: 'Makkelijk',
            time: '20 min',
            effectiveness: 92,
            description: 'Leer woorden in zinnen, niet los',
            steps: [
              'Schrijf nieuwe woorden op in een zin',
              'Vertaal de hele zin, niet alleen het woord',
              'Maak zelf 2 nieuwe zinnen met het woord',
              'Oefen de uitspraak hardop',
              'Herhaal na 1 dag, 3 dagen, 1 week'
            ],
            tips: [
              'Gebruik woorden die je interessant vindt',
              'Kijk naar woordfamilies (happy, happiness, unhappy)',
              'Leer synoniemen en antoniemen'
            ]
          },
          {
            name: 'Digitale Flashcards',
            difficulty: 'Makkelijk',
            time: '15 min',
            effectiveness: 88,
            description: 'Gebruik apps voor slimme herhaling',
            steps: [
              'Download een app zoals Anki of Quizlet',
              'Maak kaartjes: Engels → Nederlands → Engels',
              'Voeg afbeeldingen toe waar mogelijk',
              'Oefen dagelijks 10-15 minuten',
              'Focus op woorden die je moeilijk vindt'
            ],
            tips: [
              'Gebruik de spaced repetition functie',
              'Maak verschillende decks per onderwerp',
              'Deel decks met klasgenoten'
            ]
          }
        ]
      },
      {
        name: 'Luistervaardigheid',
        strategies: [
          {
            name: 'Actief Luisteren',
            difficulty: 'Gemiddeld',
            time: '30 min',
            effectiveness: 90,
            description: 'Verbeter luistervaardigheid met gerichte oefeningen',
            steps: [
              'Kies Engels materiaal net onder je niveau',
              'Luister eerst zonder ondertitels',
              'Noteer woorden die je verstaat',
              'Luister opnieuw met ondertitels',
              'Herhaal moeilijke passages'
            ],
            tips: [
              'Begin met korte video\'s (2-5 minuten)',
              'Kies onderwerpen die je interesseren',
              'Varieer tussen accenten (Brits, Amerikaans)'
            ]
          }
        ]
      },
      {
        name: 'Spreekvaardigheid',
        strategies: [
          {
            name: 'Zelfgesprek Techniek',
            difficulty: 'Makkelijk',
            time: '10 min',
            effectiveness: 85,
            description: 'Oefen spreken door jezelf te beschrijven',
            steps: [
              'Beschrijf wat je aan het doen bent in het Engels',
              'Vertel over je dag in het Engels',
              'Neem jezelf op en luister terug',
              'Oefen moeilijke klanken apart',
              'Probeer verschillende onderwerpen'
            ],
            tips: [
              'Doe dit dagelijks, ook al is het maar 5 minuten',
              'Maak je geen zorgen over fouten',
              'Focus op vloeiendheid, niet perfectie'
            ]
          }
        ]
      }
    ]
  },
  geschiedenis: {
    name: 'Geschiedenis',
    color: 'amber',
    skills: [
      {
        name: 'Chronologie & Tijdlijnen',
        strategies: [
          {
            name: 'Visuele Tijdlijn',
            difficulty: 'Makkelijk',
            time: '25 min',
            effectiveness: 93,
            description: 'Maak overzichtelijke tijdlijnen met beelden',
            steps: [
              'Teken een lange horizontale lijn',
              'Verdeel in gelijke tijdsperiodes',
              'Voeg belangrijke gebeurtenissen toe',
              'Gebruik kleuren per thema (politiek, cultuur, oorlog)',
              'Voeg kleine tekeningen of symbolen toe'
            ],
            tips: [
              'Gebruik groot papier of digitale tools',
              'Maak aparte tijdlijnen per periode',
              'Verbind gebeurtenissen met pijlen (oorzaak-gevolg)'
            ]
          },
          {
            name: 'Verhaal Methode',
            difficulty: 'Gemiddeld',
            time: '30 min',
            effectiveness: 88,
            description: 'Verander feiten in verhalen',
            steps: [
              'Kies een historische periode',
              'Bedenk een hoofdpersoon (echt of fictief)',
              'Beschrijf hoe deze persoon de gebeurtenissen meemaakte',
              'Voeg emoties en details toe',
              'Vertel het verhaal aan iemand anders'
            ],
            tips: [
              'Gebruik de 5 W\'s: wie, wat, waar, wanneer, waarom',
              'Maak verbindingen tussen verschillende gebeurtenissen',
              'Oefen verhalen hardop vertellen'
            ]
          }
        ]
      },
      {
        name: 'Oorzaak & Gevolg',
        strategies: [
          {
            name: 'Domino Methode',
            difficulty: 'Gemiddeld',
            time: '20 min',
            effectiveness: 90,
            description: 'Visualiseer hoe gebeurtenissen elkaar beïnvloeden',
            steps: [
              'Schrijf de hoofdgebeurtenis in het midden',
              'Voeg oorzaken toe aan de linkerkant',
              'Voeg gevolgen toe aan de rechterkant',
              'Verbind alles met pijlen',
              'Voeg tijdsaanduidingen toe'
            ],
            tips: [
              'Gebruik verschillende kleuren voor korte/lange termijn effecten',
              'Zoek naar meerdere oorzaken per gebeurtenis',
              'Denk ook aan onbedoelde gevolgen'
            ]
          }
        ]
      },
      {
        name: 'Bronnenonderzoek',
        strategies: [
          {
            name: 'Bron Analyse Schema',
            difficulty: 'Moeilijk',
            time: '35 min',
            effectiveness: 87,
            description: 'Systematisch bronnen analyseren en vergelijken',
            steps: [
              'Identificeer: wie, wat, wanneer, waar',
              'Bepaal het type bron (primair/secundair)',
              'Analyseer de betrouwbaarheid',
              'Zoek naar vooroordelen of agenda\'s',
              'Vergelijk met andere bronnen'
            ],
            tips: [
              'Let op de context waarin de bron ontstond',
              'Vraag je af waarom de bron gemaakt werd',
              'Gebruik meerdere bronnen voor hetzelfde onderwerp'
            ]
          }
        ]
      }
    ]
  },
  biologie: {
    name: 'Biologie',
    color: 'emerald',
    skills: [
      {
        name: 'Processen & Cycli',
        strategies: [
          {
            name: 'Proces Diagram',
            difficulty: 'Gemiddeld',
            time: '30 min',
            effectiveness: 92,
            description: 'Visualiseer biologische processen stap voor stap',
            steps: [
              'Teken elke stap van het proces in een apart vakje',
              'Verbind de stappen met pijlen',
              'Voeg labels toe bij elke stap',
              'Gebruik kleuren voor verschillende moleculen',
              'Voeg tijdsaanduidingen toe waar relevant'
            ],
            tips: [
              'Begin met eenvoudige processen',
              'Gebruik symbolen voor terugkerende elementen',
              'Oefen processen uit je hoofd tekenen'
            ]
          },
          {
            name: 'Analogie Methode',
            difficulty: 'Makkelijk',
            time: '15 min',
            effectiveness: 88,
            description: 'Vergelijk biologische processen met bekende situaties',
            steps: [
              'Kies een complex biologisch proces',
              'Bedenk een vergelijking uit het dagelijks leven',
              'Werk de vergelijking uit in detail',
              'Leg uit waar de vergelijking klopt en niet klopt',
              'Test de analogie door het aan iemand uit te leggen'
            ],
            tips: [
              'Gebruik concrete, visuele vergelijkingen',
              'Maak tekeningen bij je analogieën',
              'Verzamel goede analogieën in een schrift'
            ]
          }
        ]
      },
      {
        name: 'Anatomie & Structuren',
        strategies: [
          {
            name: 'Label & Teken',
            difficulty: 'Makkelijk',
            time: '25 min',
            effectiveness: 90,
            description: 'Leer anatomie door actief te tekenen en labelen',
            steps: [
              'Zoek een duidelijke afbeelding van de structuur',
              'Teken de structuur na zonder labels',
              'Voeg alle labels toe uit je geheugen',
              'Controleer met het origineel',
              'Herhaal voor moeilijke onderdelen'
            ],
            tips: [
              'Gebruik verschillende kleuren per systeem',
              'Begin met overzichtstekeningen, ga dan naar details',
              'Maak flashcards van je beste tekeningen'
            ]
          }
        ]
      },
      {
        name: 'Experimenten & Onderzoek',
        strategies: [
          {
            name: 'Experiment Logboek',
            difficulty: 'Gemiddeld',
            time: '40 min',
            effectiveness: 89,
            description: 'Documenteer experimenten systematisch',
            steps: [
              'Schrijf de onderzoeksvraag op',
              'Formuleer een hypothese',
              'Beschrijf de methode stap voor stap',
              'Noteer alle observaties tijdens het experiment',
              'Analyseer resultaten en trek conclusies'
            ],
            tips: [
              'Gebruik tabellen voor meetgegevens',
              'Maak foto\'s van belangrijke momenten',
              'Reflecteer op wat er beter kon'
            ]
          }
        ]
      }
    ]
  },
  nst: {
    name: 'NST (Natuur, Scheikunde & Techniek)',
    color: 'orange',
    skills: [
      {
        name: 'Natuurkunde Concepten',
        strategies: [
          {
            name: 'Formule Afleiding',
            difficulty: 'Moeilijk',
            time: '35 min',
            effectiveness: 93,
            description: 'Begrijp formules door ze zelf af te leiden',
            steps: [
              'Begin met de basisprincipes (wetten van Newton, etc.)',
              'Werk stap voor stap naar de complexere formule',
              'Schrijf elke stap uit met uitleg',
              'Controleer dimensies (eenheden) bij elke stap',
              'Test de formule met een bekend voorbeeld'
            ],
            tips: [
              'Gebruik verschillende kleuren voor verschillende grootheden',
              'Maak tekeningen bij de afleiding',
              'Oefen afleidingen uit je hoofd'
            ]
          },
          {
            name: 'Real-World Toepassingen',
            difficulty: 'Gemiddeld',
            time: '25 min',
            effectiveness: 87,
            description: 'Verbind natuurkunde met de echte wereld',
            steps: [
              'Kies een natuurkundig concept',
              'Zoek 3 voorbeelden uit het dagelijks leven',
              'Leg uit hoe het concept werkt in elk voorbeeld',
              'Bereken getallen waar mogelijk',
              'Presenteer aan klasgenoten'
            ],
            tips: [
              'Gebruik actuele voorbeelden (technologie, sport)',
              'Maak foto\'s of video\'s van voorbeelden',
              'Verbind met andere vakken'
            ]
          }
        ]
      },
      {
        name: 'Scheikunde Reacties',
        strategies: [
          {
            name: 'Reactie Mechanisme',
            difficulty: 'Moeilijk',
            time: '30 min',
            effectiveness: 91,
            description: 'Begrijp hoe moleculen reageren',
            steps: [
              'Teken de uitgangsstoffen met alle atomen',
              'Identificeer welke bindingen breken',
              'Teken tussenstappen als die er zijn',
              'Teken de eindproducten',
              'Controleer of alle atomen kloppen'
            ],
            tips: [
              'Gebruik pijlen om elektronenbewegingen aan te geven',
              'Oefen met 3D-modellen waar mogelijk',
              'Leer patronen herkennen in reactietypes'
            ]
          },
          {
            name: 'Stoichiometrie Stappenplan',
            difficulty: 'Gemiddeld',
            time: '20 min',
            effectiveness: 89,
            description: 'Bereken hoeveelheden in reacties systematisch',
            steps: [
              'Schrijf de gebalanceerde reactievergelijking',
              'Identificeer wat gegeven is en wat gevraagd wordt',
              'Reken om naar mol (gebruik molaire massa)',
              'Gebruik molverhouding uit vergelijking',
              'Reken terug naar gevraagde eenheid'
            ],
            tips: [
              'Maak altijd een schema van je berekening',
              'Controleer of je antwoord logisch is',
              'Oefen met verschillende eenheden'
            ]
          }
        ]
      },
      {
        name: 'Techniek & Ontwerpen',
        strategies: [
          {
            name: 'Ontwerpproces',
            difficulty: 'Gemiddeld',
            time: '45 min',
            effectiveness: 88,
            description: 'Systematisch technische problemen oplossen',
            steps: [
              'Definieer het probleem helder',
              'Brainstorm verschillende oplossingen',
              'Evalueer elke oplossing (voor/nadelen)',
              'Kies de beste oplossing en werk uit',
              'Test en verbeter je ontwerp'
            ],
            tips: [
              'Denk aan gebruiker, kosten, milieu',
              'Maak schetsen en prototypes',
              'Vraag feedback van anderen'
            ]
          },
          {
            name: 'Technische Tekeningen',
            difficulty: 'Gemiddeld',
            time: '30 min',
            effectiveness: 85,
            description: 'Leer technisch tekenen en interpreteren',
            steps: [
              'Begin met eenvoudige 3D-vormen',
              'Oefen bovenaanzicht, zijaanzicht, vooraanzicht',
              'Voeg maatvoering toe',
              'Gebruik juiste lijntypes en symbolen',
              'Controleer of alle informatie compleet is'
            ],
            tips: [
              'Gebruik ruitjespapier of CAD-software',
              'Begin met bekende objecten',
              'Oefen het lezen van bestaande tekeningen'
            ]
          }
        ]
      }
    ]
  },
  aardrijkskunde: {
    name: 'Aardrijkskunde',
    color: 'teal',
    skills: [
      {
        name: 'Kaarten & Locaties',
        strategies: [
          {
            name: 'Kaart Memory',
            difficulty: 'Makkelijk',
            time: '20 min',
            effectiveness: 91,
            description: 'Leer locaties door actief kaarten te bestuderen',
            steps: [
              'Begin met een blanco kaart',
              'Vul landen/steden in uit je geheugen',
              'Controleer met een atlas',
              'Markeer fouten met een andere kleur',
              'Herhaal tot alles correct is'
            ],
            tips: [
              'Begin met continenten, ga dan naar landen',
              'Gebruik ezelsbruggetjes voor moeilijke namen',
              'Oefen met verschillende kaartprojecties'
            ]
          },
          {
            name: 'Verhaal Route',
            difficulty: 'Gemiddeld',
            time: '25 min',
            effectiveness: 87,
            description: 'Onthoud locaties door er verhalen bij te bedenken',
            steps: [
              'Kies een route tussen verschillende plaatsen',
              'Bedenk een verhaal over een reis langs deze route',
              'Voeg details toe over landschap en cultuur',
              'Vertel het verhaal aan iemand anders',
              'Teken de route op een kaart'
            ],
            tips: [
              'Gebruik bekende verhalen of films als basis',
              'Voeg persoonlijke ervaringen toe',
              'Maak de verhalen grappig of spannend'
            ]
          }
        ]
      },
      {
        name: 'Klimaat & Weer',
        strategies: [
          {
            name: 'Klimaatdiagram Analyse',
            difficulty: 'Gemiddeld',
            time: '30 min',
            effectiveness: 89,
            description: 'Leer klimaatdiagrammen systematisch lezen',
            steps: [
              'Identificeer temperatuur- en neerslaglijn',
              'Bepaal de warmste en koudste maand',
              'Bereken de jaargemiddelde temperatuur',
              'Identificeer droge en natte periodes',
              'Classificeer het klimaattype'
            ],
            tips: [
              'Oefen met diagrammen van verschillende klimaten',
              'Verbind klimaat met vegetatie en landbouw',
              'Gebruik kleuren om patronen te markeren'
            ]
          }
        ]
      },
      {
        name: 'Bevolking & Cultuur',
        strategies: [
          {
            name: 'Vergelijkende Analyse',
            difficulty: 'Gemiddeld',
            time: '35 min',
            effectiveness: 86,
            description: 'Vergelijk verschillende landen systematisch',
            steps: [
              'Kies 2-3 landen om te vergelijken',
              'Maak een tabel met categorieën (economie, cultuur, etc.)',
              'Vul de tabel in met feiten en cijfers',
              'Zoek naar overeenkomsten en verschillen',
              'Verklaar de verschillen vanuit geografie'
            ],
            tips: [
              'Gebruik betrouwbare bronnen (CBS, Worldbank)',
              'Voeg kaarten en grafieken toe',
              'Denk aan historische oorzaken'
            ]
          }
        ]
      }
    ]
  },
  economie: {
    name: 'Economie',
    color: 'cyan',
    skills: [
      {
        name: 'Grafieken & Modellen',
        strategies: [
          {
            name: 'Grafiek Interpretatie',
            difficulty: 'Gemiddeld',
            time: '25 min',
            effectiveness: 90,
            description: 'Leer economische grafieken systematisch lezen',
            steps: [
              'Identificeer de assen (wat staat er op x en y?)',
              'Bepaal wat de lijnen/curves voorstellen',
              'Zoek naar evenwichtspunten',
              'Analyseer wat er gebeurt bij verschuivingen',
              'Verbind met economische theorie'
            ],
            tips: [
              'Oefen met verschillende grafiektypen',
              'Teken grafieken zelf na',
              'Gebruik echte data waar mogelijk'
            ]
          },
          {
            name: 'Model Toepassing',
            difficulty: 'Moeilijk',
            time: '40 min',
            effectiveness: 88,
            description: 'Pas economische modellen toe op echte situaties',
            steps: [
              'Kies een actueel economisch probleem',
              'Identificeer welk model van toepassing is',
              'Definieer alle variabelen in het model',
              'Voorspel wat er gebeurt volgens het model',
              'Vergelijk met wat er echt gebeurde'
            ],
            tips: [
              'Volg economisch nieuws',
              'Begin met eenvoudige modellen',
              'Bespreek met klasgenoten'
            ]
          }
        ]
      },
      {
        name: 'Begrippen & Theorie',
        strategies: [
          {
            name: 'Concept Mapping',
            difficulty: 'Gemiddeld',
            time: '30 min',
            effectiveness: 87,
            description: 'Verbind economische begrippen visueel',
            steps: [
              'Schrijf het hoofdconcept in het midden',
              'Voeg gerelateerde begrippen toe rondom',
              'Verbind begrippen met lijnen en labels',
              'Gebruik kleuren voor verschillende categorieën',
              'Voeg voorbeelden toe bij abstracte begrippen'
            ],
            tips: [
              'Begin met bekende begrippen',
              'Gebruik pijlen om oorzaak-gevolg aan te geven',
              'Maak aparte maps per hoofdstuk'
            ]
          }
        ]
      },
      {
        name: 'Berekeningen & Formules',
        strategies: [
          {
            name: 'Stap-voor-Stap Methode',
            difficulty: 'Gemiddeld',
            time: '20 min',
            effectiveness: 89,
            description: 'Los economische vraagstukken systematisch op',
            steps: [
              'Lees de opgave en identificeer wat gevraagd wordt',
              'Schrijf alle gegeven informatie op',
              'Kies de juiste formule(s)',
              'Vul stap voor stap de getallen in',
              'Controleer of het antwoord logisch is'
            ],
            tips: [
              'Leer formules uit je hoofd',
              'Oefen met verschillende vraagtypen',
              'Let op eenheden (euro\'s, percentages, etc.)'
            ]
          }
        ]
      }
    ]
  }
}

interface SubjectDetailProps {
  subjectId: string
  onBack: () => void
}

export default function SubjectDetail({ subjectId, onBack }: SubjectDetailProps) {
  const subject = subjectStrategies[subjectId as keyof typeof subjectStrategies]
  
  if (!subject) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-600">Vak niet gevonden</p>
        <button onClick={onBack} className="mt-4 btn-primary">
          Terug naar overzicht
        </button>
      </div>
    )
  }

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600',
      amber: 'from-amber-500 to-amber-600',
      emerald: 'from-emerald-500 to-emerald-600',
      orange: 'from-orange-500 to-orange-600',
      teal: 'from-teal-500 to-teal-600',
      cyan: 'from-cyan-500 to-cyan-600'
    }
    return colorMap[color as keyof typeof colorMap] || 'from-gray-500 to-gray-600'
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Makkelijk': return 'bg-green-100 text-green-800'
      case 'Gemiddeld': return 'bg-yellow-100 text-yellow-800'
      case 'Moeilijk': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getEffectivenessStars = (effectiveness: number) => {
    const stars = Math.round(effectiveness / 20) // Convert to 1-5 scale
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < stars ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-gray-800 mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Terug naar vakken
          </button>
          
          <div className={`bg-gradient-to-r ${getColorClasses(subject.color)} text-white rounded-2xl p-8 shadow-xl`}>
            <h1 className="text-4xl font-bold mb-2">{subject.name}</h1>
            <p className="text-xl opacity-90">
              Ontdek de beste leerstrategieën per vaardigheid
            </p>
          </div>
        </div>

        {/* Skills and Strategies */}
        <div className="space-y-8">
          {subject.skills.map((skill, skillIndex) => (
            <div key={skillIndex} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                  <Target className="w-6 h-6 mr-3 text-blue-600" />
                  {skill.name}
                </h2>
              </div>
              
              <div className="p-6">
                <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
                  {skill.strategies.map((strategy, strategyIndex) => (
                    <div key={strategyIndex} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      {/* Strategy Header */}
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {strategy.name}
                        </h3>
                        
                        <div className="flex items-center space-x-4 mb-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(strategy.difficulty)}`}>
                            {strategy.difficulty}
                          </span>
                          
                          <div className="flex items-center text-gray-600">
                            <Clock className="w-4 h-4 mr-1" />
                            <span className="text-sm">{strategy.time}</span>
                          </div>
                          
                          <div className="flex items-center">
                            {getEffectivenessStars(strategy.effectiveness)}
                            <span className="ml-2 text-sm text-gray-600">
                              {strategy.effectiveness}%
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 text-sm">
                          {strategy.description}
                        </p>
                      </div>

                      {/* Steps */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                          <BookOpen className="w-4 h-4 mr-2" />
                          Stappenplan:
                        </h4>
                        <ol className="space-y-2">
                          {strategy.steps.map((step, stepIndex) => (
                            <li key={stepIndex} className="flex items-start">
                              <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                                {stepIndex + 1}
                              </span>
                              <span className="text-sm text-gray-700">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>

                      {/* Tips */}
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">
                          💡 Pro Tips:
                        </h4>
                        <ul className="space-y-1">
                          {strategy.tips.map((tip, tipIndex) => (
                            <li key={tipIndex} className="flex items-start">
                              <span className="text-green-500 mr-2 mt-1">•</span>
                              <span className="text-sm text-gray-600">{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="text-center mt-12">
          <button onClick={onBack} className="btn-primary">
            ← Kies een ander vak
          </button>
        </div>
      </div>
    </div>
  )
}