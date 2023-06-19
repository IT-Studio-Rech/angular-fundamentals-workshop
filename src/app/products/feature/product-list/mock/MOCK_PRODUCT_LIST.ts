export interface Product {
  id: number;
  name: string;
  price: number;
  tags: string[];
  description: string;
  deliveryDate: string;
  parameters: { key: string, value: string }[];
  imageUrl: string;
}

export const MOCK_PRODUCTS = () => ([
  {
    'id': 1,
    'name': 'Lego Set',
    'price': 10.99,
    'tags': ['Toy', 'Kunststoff'],
    'description': 'Ein unterhaltsames Lego Set zum Bauen von verschiedenen Modellen.',
    'deliveryDate': '2023-06-30T00:00:00Z',
    'parameters': [
      {'key': 'Größe', 'value': 'M'},
      {'key': 'Farbe', 'value': 'Blau'},
      {'key': 'Material', 'value': 'Kunststoff'}
    ],
    'imageUrl': 'https://picsum.photos/'
  },
  {
    'id': 2,
    'name': 'Rucksack',
    'price': 29.99,
    'tags': ['Outdoor', 'Reisen'],
    'description': 'Ein robuster Rucksack für Abenteuer und Reisen.',
    'deliveryDate': '2023-09-15T00:00:00Z',
    'parameters': [
      {'key': 'Größe', 'value': '30 x 40 x 15 cm'},
      {'key': 'Farbe', 'value': 'Grau'},
      {'key': 'Material', 'value': 'Nylon'}
    ],
    'imageUrl': 'https://picsum.photos/'
  },
  {
    'id': 3,
    'name': 'Smartphone',
    'price': 499.99,
    'tags': ['Elektronik', 'Technologie'],
    'description': 'Ein leistungsstarkes Smartphone mit beeindruckenden Funktionen.',
    'deliveryDate': '2023-09-20T00:00:00Z',
    'parameters': [
      {'key': 'Größe', 'value': '6.5 Zoll'},
      {'key': 'Farbe', 'value': 'Schwarz'},
      {'key': 'Material', 'value': 'Glas und Metall'}
    ],
    'imageUrl': 'https://picsum.photos/'
  },
  {
    'id': 4,
    'name': 'Yogamatte',
    'price': 19.99,
    'tags': ['Fitness', 'Yoga'],
    'description': 'Eine bequeme Yogamatte für entspannte und energiegeladene Yoga-Übungen.',
    'deliveryDate': '2023-09-25T00:00:00Z',
    'parameters': [
      {'key': 'Größe', 'value': '183 x 61 cm'},
      {'key': 'Farbe', 'value': 'Lila'},
      {'key': 'Material', 'value': 'PVC'}
    ],
    'imageUrl': 'https://picsum.photos/'
  },
  {
    'id': 5,
    'name': 'Kamera',
    'price': 299.99,
    'tags': ['Elektronik', 'Fotografie'],
    'description': 'Eine vielseitige Kamera für beeindruckende Fotos und Videos.',
    'deliveryDate': '2023-09-30T00:00:00Z',
    'parameters': [
      {'key': 'Größe', 'value': '12 x 8 x 6 cm'},
      {'key': 'Farbe', 'value': 'Schwarz'},
      {'key': 'Material', 'value': 'Metall'}
    ],
    'imageUrl': 'https://picsum.photos/'
  },
  {
    'id': 6,
    'name': 'Kaffeemaschine',
    'price': 79.99,
    'tags': ['Haushalt', 'Kaffee'],
    'description': 'Eine praktische Kaffeemaschine für den perfekten Kaffeegenuss zu Hause.',
    'deliveryDate': '2023-10-05T00:00:00Z',
    'parameters': [
      {'key': 'Größe', 'value': '20 x 30 x 15 cm'},
      {'key': 'Farbe', 'value': 'Silber'},
      {'key': 'Material', 'value': 'Kunststoff'}
    ],
    'imageUrl': 'https://picsum.photos/'
  },
  {
    'id': 7,
    'name': 'Turnschuhe',
    'price': 59.99,
    'tags': ['Schuhe', 'Sport'],
    'description': 'Bequeme Turnschuhe für sportliche Aktivitäten und Freizeit.',
    'deliveryDate': '2023-10-10T00:00:00Z',
    'parameters': [
      {'key': 'Größe', 'value': '39'},
      {'key': 'Farbe', 'value': 'Weiß'},
      {'key': 'Material', 'value': 'Textil'}
    ],
    'imageUrl': 'https://picsum.photos/'
  },
  {
    'id': 8,
    'name': 'Kopfhörer',
    'price': 129.99,
    'tags': ['Elektronik', 'Audio'],
    'description': 'Hochwertige Kopfhörer für einen beeindruckenden Klanggenuss.',
    'deliveryDate': '2023-10-15T00:00:00Z',
    'parameters': [
      {'key': 'Größe', 'value': 'One Size'},
      {'key': 'Farbe', 'value': 'Schwarz'},
      {'key': 'Material', 'value': 'Kunststoff und Metall'}
    ],
    'imageUrl': 'https://picsum.photos/'
  },
  {
    'id': 9,
    'name': 'Handtasche',
    'price': 39.99,
    'tags': ['Mode', 'Accessoires'],
    'description': 'Eine stilvolle Handtasche für einen trendigen Look.',
    'deliveryDate': '2023-10-20T00:00:00Z',
    'parameters': [
      {'key': 'Größe', 'value': '25 x 20 x 10 cm'},
      {'key': 'Farbe', 'value': 'Rot'},
      {'key': 'Material', 'value': 'Leder'}
    ],
    'imageUrl': 'https://picsum.photos/'
  },
  {
    'id': 10,
    'name': 'Fahrradhelm',
    'price': 49.99,
    'tags': ['Sport', 'Sicherheit'],
    'description': 'Ein hochwertiger Fahrradhelm für sicheres Radfahren.',
    'deliveryDate': '2023-10-25T00:00:00Z',
    'parameters': [
      {'key': 'Größe', 'value': 'M'},
      {'key': 'Farbe', 'value': 'Schwarz'},
      {'key': 'Material', 'value': 'Polycarbonat'}
    ],
    'imageUrl': 'https://picsum.photos/'
  },
  {
    'id': 11,
    'name': 'Bluetooth-Lautsprecher',
    'price': 79.99,
    'tags': ['Elektronik', 'Audio'],
    'description': 'Ein portabler Bluetooth-Lautsprecher für kabellosen Musikgenuss.',
    'deliveryDate': '2023-10-30T00:00:00Z',
    'parameters': [
      {'key': 'Größe', 'value': '15 x 10 x 5 cm'},
      {'key': 'Farbe', 'value': 'Grau'},
      {'key': 'Material', 'value': 'Kunststoff'}
    ],
    'imageUrl': 'https://picsum.photos/'
  },
  {
    'id': 12,
    'name': 'Tennisschläger',
    'price': 89.99,
    'tags': ['Sport', 'Tennis'],
    'description': 'Ein hochwertiger Tennisschläger für präzise Schläge und Leistung.',
    'deliveryDate': '2023-11-05T00:00:00Z',
    'parameters': [
      {'key': 'Größe', 'value': 'Standard'},
      {'key': 'Farbe', 'value': 'Rot-Weiß'},
      {'key': 'Material', 'value': 'Graphit'}
    ],
    'imageUrl': 'https://picsum.photos/'
  },
  {
    'id': 13,
    'name': 'Rennrad',
    'price': 999.99,
    'tags': ['Sport', 'Fahrrad'],
    'description': 'Ein hochwertiges Rennrad für Geschwindigkeit und Ausdauer.',
    'deliveryDate': '2023-11-10T00:00:00Z',
    'parameters': [
      {'key': 'Größe', 'value': 'L'},
      {'key': 'Farbe', 'value': 'Schwarz'},
      {'key': 'Material', 'value': 'Carbon'}
    ],
    'imageUrl': 'https://picsum.photos/'
  },
  {
    'id': 14,
    'name': 'Badeanzug',
    'price': 29.99,
    'tags': ['Mode', 'Bademode'],
    'description': 'Ein modischer Badeanzug für stilvolles Schwimmen und Sonnenbaden.',
    'deliveryDate': '2023-11-15T00:00:00Z',
    'parameters': [
      {'key': 'Größe', 'value': 'S'},
      {'key': 'Farbe', 'value': 'Blau'},
      {'key': 'Material', 'value': 'Polyester'}
    ],
    'imageUrl': 'https://picsum.photos/'
  },
  {
    'id': 15,
    'name': 'Fitness-Tracker',
    'price': 79.99,
    'tags': ['Sport', 'Gesundheit'],
    'description': 'Ein intelligenter Fitness-Tracker zur Überwachung von Aktivitäten und Gesundheitsdaten.',
    'deliveryDate': '2023-11-20T00:00:00Z',
    'parameters': [
      {'key': 'Größe', 'value': 'One Size'},
      {'key': 'Farbe', 'value': 'Schwarz'},
      {'key': 'Material', 'value': 'Kunststoff'}
    ],
    'imageUrl': 'https://picsum.photos/'
  },
  {
    'id': 16,
    'name': 'Sonnenschirm',
    'price': 39.99,
    'tags': ['Garten', 'Sommer'],
    'description': 'Ein großer Sonnenschirm für Schutz vor Sonnenstrahlen im Garten oder am Strand.',
    'deliveryDate': '2023-11-25T00:00:00Z',
    'parameters': [
      {'key': 'Größe', 'value': '200 cm'},
      {'key': 'Farbe', 'value': 'Beige'},
      {'key': 'Material', 'value': 'Polyester und Metall'}
    ],
    'imageUrl': 'https://picsum.photos/'
  },
  {
    'id': 17,
    'name': 'Yoga-Block',
    'price': 14.99,
    'tags': ['Fitness', 'Yoga'],
    'description': 'Ein praktischer Yoga-Block zur Unterstützung von Yoga-Übungen und Dehnungen.',
    'deliveryDate': '2023-11-30T00:00:00Z',
    'parameters': [
      {'key': 'Größe', 'value': '23 x 15 x 10 cm'},
      {'key': 'Farbe', 'value': 'Blau'},
      {'key': 'Material', 'value': 'Schaumstoff'}
    ],
    'imageUrl': 'https://picsum.photos/'
  },
  {
    'id': 18,
    'name': 'Regenschirm',
    'price': 24.99,
    'tags': ['Accessoires', 'Wetter'],
    'description': 'Ein kompakter Regenschirm für Schutz vor Regen und schlechtem Wetter.',
    'deliveryDate': '2023-12-05T00:00:00Z',
    'parameters': [
      {'key': 'Größe', 'value': 'Faltbar'},
      {'key': 'Farbe', 'value': 'Rot'},
      {'key': 'Material', 'value': 'Polyester und Metall'}
    ],
    'imageUrl': 'https://picsum.photos/'
  },
  {
    'id': 19,
    'name': 'Küchenwaage',
    'price': 34.99,
    'tags': ['Haushalt', 'Kochen'],
    'description': 'Eine präzise Küchenwaage für genaues Abmessen von Zutaten beim Kochen und Backen.',
    'deliveryDate': '2023-12-10T00:00:00Z',
    'parameters': [
      {'key': 'Größe', 'value': '20 x 15 x 3 cm'},
      {'key': 'Farbe', 'value': 'Weiß'},
      {'key': 'Material', 'value': 'Kunststoff und Edelstahl'}
    ],
    'imageUrl': 'https://picsum.photos/'
  },
  {
    'id': 20,
    'name': 'Reisetasche',
    'price': 59.99,
    'tags': ['Reisen', 'Gepäck'],
    'description': 'Eine geräumige Reisetasche für bequemes Verstauen und Transportieren von Gepäck.',
    'deliveryDate': '2023-12-15T00:00:00Z',
    'parameters': [
      {'key': 'Größe', 'value': '60 x 40 x 25 cm'},
      {'key': 'Farbe', 'value': 'Schwarz'},
      {'key': 'Material', 'value': 'Nylon'}
    ],
    'imageUrl': 'https://picsum.photos/'
  },
  {
    'id': 21,
    'name': 'Trinkflasche',
    'price': 19.99,
    'tags': ['Sport', 'Gesundheit'],
    'description': 'Eine langlebige Trinkflasche für unterwegs, ideal für Sport und Fitness.',
    'deliveryDate': '2023-12-20T00:00:00Z',
    'parameters': [
      {'key': 'Größe', 'value': '500 ml'},
      {'key': 'Farbe', 'value': 'Grau'},
      {'key': 'Material', 'value': 'Edelstahl'}
    ],
    'imageUrl': 'https://picsum.photos/'
  },
  {
    'id': 22,
    'name': 'Puzzle',
    'price': 24.99,
    'tags': ['Spiele', 'Entertainment'],
    'description': 'Ein faszinierendes Puzzle für stundenlangen Spielspaß und Entspannung.',
    'deliveryDate': '2023-12-25T00:00:00Z',
    'parameters': [
      {'key': 'Größe', 'value': '1000 Teile'},
      {'key': 'Farbe', 'value': 'Bunt'},
      {'key': 'Material', 'value': 'Karton'}
    ],
    'imageUrl': 'https://picsum.photos/'
  },
  {
    'id': 23,
    'name': 'Powerbank',
    'price': 39.99,
    'tags': ['Elektronik', 'Smartphone'],
    'description': 'Eine leistungsstarke Powerbank zum Aufladen von Smartphones und anderen Geräten unterwegs.',
    'deliveryDate': '2023-12-30T00:00:00Z',
    'parameters': [
      {'key': 'Kapazität', 'value': '10000 mAh'},
      {'key': 'Farbe', 'value': 'Weiß'},
      {'key': 'Material', 'value': 'Kunststoff'}
    ],
    'imageUrl': 'https://picsum.photos/'
  },
  {
    'id': 24,
    'name': 'Schreibtischlampe',
    'price': 49.99,
    'tags': ['Büro', 'Beleuchtung'],
    'description': 'Eine moderne Schreibtischlampe mit verstellbarem Licht für optimale Arbeitsbedingungen.',
    'deliveryDate': '2024-01-05T00:00:00Z',
    'parameters': [
      {'key': 'Größe', 'value': '30 x 15 x 10 cm'},
      {'key': 'Farbe', 'value': 'Schwarz'},
      {'key': 'Material', 'value': 'Metall'}
    ],
    'imageUrl': 'https://picsum.photos/'
  },
  {
    'id': 25,
    'name': 'Gesellschaftsspiel',
    'price': 29.99,
    'tags': ['Spiele', 'Unterhaltung'],
    'description': 'Ein lustiges Gesellschaftsspiel für Spieler jeden Alters.',
    'deliveryDate': '2024-01-10T00:00:00Z',
    'parameters': [
      {'key': 'Spieleranzahl', 'value': '2-6'},
      {'key': 'Spieldauer', 'value': '30-60 Minuten'},
      {'key': 'Altersempfehlung', 'value': 'Ab 8 Jahren'}
    ],
    'imageUrl': 'https://picsum.photos/'
  },
  {
    'id': 26,
    'name': 'Wasserkocher',
    'price': 39.99,
    'tags': ['Haushalt', 'Küche'],
    'description': 'Ein leistungsstarker Wasserkocher für schnelles und einfaches Erhitzen von Wasser.',
    'deliveryDate': '2024-01-15T00:00:00Z',
    'parameters': [
      {'key': 'Fassungsvermögen', 'value': '1,7 Liter'},
      {'key': 'Farbe', 'value': 'Edelstahl'},
      {'key': 'Material', 'value': 'Edelstahl und Kunststoff'}
    ],
    'imageUrl': 'https://picsum.photos/'
  },
  {
    'id': 27,
    'name': 'Tischtennisschläger',
    'price': 24.99,
    'tags': ['Sport', 'Tischtennis'],
    'description': 'Ein hochwertiger Tischtennisschläger für schnelle Ballwechsel und präzises Spiel.',
    'deliveryDate': '2024-01-20T00:00:00Z',
    'parameters': [
      {'key': 'Spielerlevel', 'value': 'Einsteiger bis Fortgeschrittene'},
      {'key': 'Farbe', 'value': 'Rot-Schwarz'},
      {'key': 'Material', 'value': 'Holz und Gummi'}
    ],
    'imageUrl': 'https://picsum.photos/'
  },
  {
    'id': 28,
    'name': 'Reisekoffer',
    'price': 79.99,
    'tags': ['Reisen', 'Gepäck'],
    'description': 'Ein robuster Reisekoffer mit Rollen und ausziehbarem Griff für bequemes Reisen.',
    'deliveryDate': '2024-01-25T00:00:00Z',
    'parameters': [
      {'key': 'Größe', 'value': 'M'},
      {'key': 'Farbe', 'value': 'Blau'},
      {'key': 'Material', 'value': 'Polypropylen'}
    ],
    'imageUrl': 'https://picsum.photos/'
  },
  {
    'id': 29,
    'name': 'Bluetooth-Kopfhörer',
    'price': 99.99,
    'tags': ['Elektronik', 'Audio'],
    'description': 'Hochwertige Bluetooth-Kopfhörer für kabellosen Musikgenuss mit exzellenter Klangqualität.',
    'deliveryDate': '2024-01-30T00:00:00Z',
    'parameters': [
      {'key': 'Akkulaufzeit', 'value': '20 Stunden'},
      {'key': 'Farbe', 'value': 'Schwarz'},
      {'key': 'Material', 'value': 'Kunststoff'}
    ],
    'imageUrl': 'https://picsum.photos/'
  },
  {
    'id': 30,
    'name': 'E-Book-Reader',
    'price': 129.99,
    'tags': ['Elektronik', 'Lesen'],
    'description': 'Ein hochauflösender E-Book-Reader für komfortables Lesen digitaler Bücher.',
    'deliveryDate': '2024-02-05T00:00:00Z',
    'parameters': [
      {'key': 'Bildschirmgröße', 'value': '6 Zoll'},
      {'key': 'Farbe', 'value': 'Weiß'},
      {'key': 'Speicherplatz', 'value': '8 GB'}
    ],
    'imageUrl': 'https://picsum.photos/'
  }
] as Product[]).map(product => {
  product.imageUrl = `https://picsum.photos/id/${product.id}/200/200`;
  return product;
});
