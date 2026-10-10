export const company = {
  name: 'Electro Mech Engineers',
  tagline:
    'Power system protection, testing & engineering services for industrial plants and utilities',
  descriptor: 'Electrical Consulting Engineers',
  email: 'electromechengg@hotmail.com',
  website: 'www.electromechengineers.com',
  phones: ['+91 22 2771 3245', '+91 98706 12345'],
  address:
    'C3-906, Lok Everest, JSD Road, Mulund West, Mumbai - 400080, Maharashtra, India',
  hours: 'Monday – Saturday · 9:00 AM – 6:00 PM',
  credentials: {
    gst: '27ANCPR4085R1Z5',
    udyam: 'UDYAM-MH-18-0008061',
    esic: '34000452410000999',
    pf: 'THTHA2221074000',
    electricalContractorLicence: '104320528322032024',
  },
}

export const stats = [
  {
    value: '2005',
    suffix: '',
    label: 'Established',
  },
  {
    value: 132,
    suffix: ' kV',
    label: 'Substation experience',
  },
  {
    value: 200,
    suffix: '+',
    label: 'Industrial clients',
  },
  {
    value: 'Pan India',
    suffix: '',
    label: 'Service coverage',
  },
]

export const services = [
  {
    id: 'testing-commissioning',
    title: 'Testing & Commissioning',
    short:
      'Testing and commissioning of protection relays, control & relay panels, switchgear, transformers, motors and substation equipment up to 132kV.',
    schemaType: 'Electrical testing and commissioning',
    icon: 'ClipboardCheck',
    image: '/assets/services/Testing & Commissioning.png',
  },
  {
    id: 'relay-protection',
    title: 'Relay Protection',
    short:
      'Testing of electromechanical and numerical protection relays, relay coordination and relay setting calculations for dependable protection systems.',
    schemaType: 'Protection relay testing and numerical relay coordination',
    icon: 'ShieldCheck',
    image: '/assets/service-relay.jpg',
  },
  {
    id: 'substation-engineering',
    title: 'Substation Engineering',
    short:
      'Electrical system design and engineering for power plants, industrial plants and substations, including layouts and cable schedules.',
    schemaType: 'Substation engineering and commissioning',
    icon: 'TowerControl',
    image: '/assets/service-substation.jpg',
  },
  {
    id: 'power-system-studies',
    title: 'Power System Studies',
    short:
      'Load-flow studies, short-circuit studies, relay coordination studies, relay setting calculations and protection audits.',
    schemaType: 'Power system studies and protection coordination',
    icon: 'Activity',
    image: '/assets/service-consulting.jpg',
  },
  {
    id: 'design-consultancy',
    title: 'Design & Consultancy',
    short:
      'Consultancy for protection, system studies and circuit modification, supported by practical electrical design and engineering experience.',
    schemaType: 'Electrical design and consultancy',
    icon: 'DraftingCompass',
    image: '/assets/services/Design-Consultancy.png',
  },
  {
    id: 'maintenance-retrofitting',
    title: 'Maintenance & Retrofitting',
    short:
      'Maintenance, retrofitting and repair of indoor and outdoor substations, relays, panels, circuit breakers and switchgear equipment.',
    schemaType: 'Electrical maintenance and retrofitting',
    icon: 'Wrench',
    image: '/assets/service-maintenance.jpg',
  },
]

export const equipment = [
  { name: 'Automatic Relay Test Kit', make: 'Wuhan Doya', model: 'DYJB-PC3', range: '3 Phase / 120 A / 150 V AC-DC', quantity: 3, category: 'Relay testing', image: '/assets/equipment/kfa320.avif' },
  { name: 'Single Phase Relay Test Kit', make: 'EME', model: '1 Phase', range: '1 Phase / 120 A / 350 V AC-DC', quantity: 2, category: 'Relay testing' },
  { name: 'Digital IR Tester', make: 'Kyoritsu', model: '3125A', range: '0.25 / 0.50 / 1.0 / 2.5 / 5.0 kV', quantity: 1, category: 'Insulation testing', image: '/assets/equipment/Digital-IR-tester.webp'},
  { name: 'IR Tester', make: 'Rishabh', model: 'Insu5000', range: '0.10 / 0.25 / 0.50 / 1.0 / 1.5 / 2.0 / 2.5 / 5.0 kV', quantity: 1, category: 'Insulation testing' },
  { name: 'Digital IR Tester', make: 'Rishabh', model: 'Insu20', range: '50 / 100 / 250 / 500 / 1000 V DC', quantity: 1, category: 'Insulation testing' },
  { name: 'Analog IR Tester', make: 'Shanti', model: '5 kV', range: '5 kV', quantity: 1, category: 'Insulation testing' },
  { name: 'Breaker Time Test Kit', make: 'SCOPE', model: 'SCOT M3K', quantity: 1, category: 'Breaker testing', image: '/assets/equipment/breaker-time-test-kit.webp' },
  { name: 'Breaker Time Test Kit', make: 'EME', model: 'EXE/CD/01', quantity: 1, category: 'Breaker testing' },
  { name: 'Contact Resistance Measurement Kit', make: 'SCOPE', model: 'CRM 100B', range: '100 A DC', quantity: 1, category: 'Resistance measurement', image: '/assets/equipment/contact-resistance-measurement-kit-100a.webp' },
  { name: 'Micro Ohm Meter', make: 'Arun', model: '53-C', range: '1 micro-ohm to 200 ohm', quantity: 2, category: 'Resistance measurement' },
  { name: 'Primary Injection Kit', range: '1000 A', quantity: 1, category: 'Primary injection' },
  { name: 'Transformer Testing Board', make: 'EME', model: '3P-200', quantity: 1, category: 'Transformer testing', image: '/assets/equipment/transformer-testing-board.webp' },
  { name: 'VLF / Hi-Pot Tester', make: 'XZH', range: '0–80 kV AC', quantity: 1, category: 'High-voltage testing', image: '/assets/equipment/80kv-vlf-ac-tester.webp' },
  { name: 'Hi-Pot Test Kit', make: 'JSE', model: 'DCF 106', range: '45 kV DC', quantity: 1, category: 'High-voltage testing' },
  { name: 'Energy Meter Calibrator', make: 'KOCOS', model: 'KI-5', range: '0.2 Class', quantity: 2, category: 'Calibration', image: '/assets/equipment/energy-meter-calibrator.webp' },
  { name: 'Energy Meter Calibrator', make: 'Huazheng', model: 'HZ-3521', range: '0.05 Class', quantity: 1, category: 'Calibration' },
  { name: 'Thermal Imager', make: 'Testo', model: '875-1i', range: 'Up to 500°C', quantity: 1, category: 'Diagnostics', image: '/assets/equipment/thermal-imager-875-1i.webp' },
  { name: 'L&T Universal Test Kit', make: 'L&T', model: 'C-Power', quantity: 1, category: 'Breaker testing' },
  { name: 'L&T Omega Breaker Simulation Kit', make: 'L&T', model: 'U-Power', quantity: 1, category: 'Breaker testing', image: '/assets/equipment/omega-release-test-kit-l-t-omega-model-release-testing-kit.webp' },
  { name: 'L&T SRT Release Test Kit', make: 'L&T', model: 'C-Power', quantity: 1, category: 'Breaker testing' },
  { name: 'Digital Multimeter', make: 'Fluke', model: '115', quantity: 1, category: 'Measurement' },
  { name: 'Digital Multimeter', make: 'Rishabh', model: 'Multi 16S', quantity: 1, category: 'Measurement' },
  { name: 'Digital Multimeter', make: 'Kyoritsu', model: 'KEW1021R', quantity: 1, category: 'Measurement' },
  { name: 'True RMS Clamp Meter', make: 'Kyoritsu', model: 'KEW2200R', range: '1000 A', quantity: 1, category: 'Measurement' },
  { name: 'Tong Tester', make: 'Fluke', model: '305', range: '1000 A', quantity: 1, category: 'Measurement' },
  { name: 'Tong Tester', make: 'Meco', model: '27 Auto', range: '1000 A', quantity: 1, category: 'Measurement' },
  { name: 'Leakage Tester', make: 'Kyoritsu', model: 'KEW-SNAP 2434', range: '400 mA / 4 A / 100 A', quantity: 3, category: 'Leakage testing' },
  { name: 'Leakage Tester', make: 'Lutron', model: 'DL-6054', range: '200 mA / 20 A / 200 A', quantity: 1, category: 'Leakage testing' },
  { name: 'Earth Megger', make: 'Kyoritsu', model: 'KEW4105A', range: '20 / 200 / 2000 ohm', quantity: 1, category: 'Earth testing', image: '/assets/equipment/earth-megger-2.webp' },
  { name: 'Earth Megger', make: 'Shanti', model: 'DET-10', range: '10 / 100 ohm', quantity: 1, category: 'Earth testing' },
  { name: 'Earth Megger', make: 'Motwane', model: 'DET-20', range: '20 / 200 / 2000 ohm', quantity: 1, category: 'Earth testing' },
  { name: 'Earth Megger', make: 'Maxtech', model: 'DECT-9am', range: '999 ohm / 30 A', quantity: 1, category: 'Earth testing', image: '/assets/equipment/earth-megger.webp' },
  { name: 'Loop Impedance and RCD Tester', make: 'Metrel', model: 'MI 3122', quantity: 1, category: 'Protection testing', image: '/assets/equipment/loop-impedance-and-rcd-tester.webp' },
  { name: 'Winding Resistance Meter', make: 'STC', model: 'MO-5252', range: '10 µΩ–50 kΩ / 1 mA–10 A', quantity: 1, category: 'Transformer testing', image: '/assets/equipment/winding-resistance-meter.webp' },
  { name: 'Lux Meter', make: 'HTC', model: 'LX-103', quantity: 1, category: 'Diagnostics' },
  { name: 'Vibration Meter', make: 'Lutron', model: 'VB-8201/HA', quantity: 1, category: 'Diagnostics' },
  { name: 'Phase Sequence Meter', make: 'Kusam Meco', model: 'KM 981 MK-1', quantity: 1, category: 'Measurement' },
  { name: 'Single and Three Phase Dimmer', range: '7 A / 3 A / 3 A', quantity: 1, category: 'Testing accessories' },
  { name: 'Polarity Tester', quantity: 1, category: 'Testing accessories' },
]

export const clients = [
  'Aditya Birla Science & Technology Co. Pvt. Ltd.',
  'BEST Undertaking',
  'Bhabha Atomic Research Centre',
  'Bharat Serums and Vaccines Limited',
  'CEAT',
  'Dabur India Limited',
  'Dighi Oil Storage Pvt. Ltd.',
  'Ferring Therapeutics Pvt. Ltd.',
  'Gateway Terminals India Pvt. Ltd.',
  'GPRO Services India Pvt. Ltd.',
  'Grindwell Norton Limited',
  'Hinduja Global Solutions Limited',
  'Hindustan Unilever Limited',
  'HP Oil Gas Pvt. Ltd.',
  'IAV Infrastructures Pvt. Ltd.',
  'IMC Limited',
  'Indian Oil Adani Ventures Limited',
  'Indian Oil Corporation Limited',
  'Innovassynth Technologies India Limited',
  'JRE Tank Terminals Pvt. Ltd.',
  'Jubilant Ingrevia Limited',
  'Mazagon Dock Shipbuilders Limited',
  'Mumbai Metro One Pvt. Ltd.',
  'Mumbai Port Trust',
  'OneAsia Network India Pvt. Ltd.',
  'Orbittal Electromech Engineering Projects Pvt. Ltd.',
  'Owens Corning India Pvt. Ltd.',
  'Reliance Industries Limited',
  'Sah. Bhausaheb Thorat SSK Ltd.',
  'Schneider Electric India Pvt. Ltd.',
  'Unichem Laboratories Limited',
  'Welspun Michigan Engineers Limited',
  'Delta Electronics India Pvt. Ltd.',
  'Quinnox Consultancy Services Limited',
  'Reliance Foundation School',
  'Tariff Authority for Major Ports',
  'Kerala State Electronics Development Corporation Limited',
  'RenewSys India Pvt. Ltd.',
  'Exide Industries Limited',
  'Brihanmumbai Municipal Corporation',
  'Wockhardt Hospitals Limited',
  'Cochin Shipyard Limited',
]

// No client-approved testimonials were supplied.


export const reasons = [
  [
    'Testing Expertise',
    'Experience in testing and commissioning protection relays, panels, switchgear, transformers, motors and substation equipment.',
  ],
  [
    'Protection Focus',
    'Practical experience in relay coordination, relay setting calculations and protection-system work.',
  ],
  [
    'Field Engineering',
    'Services built around the requirements of industrial plants, utilities and substations.',
  ],
  [
    'Maintenance & Retrofitting',
    'Maintenance, repair and retrofitting support for relays, panels, circuit breakers and switchgear.',
  ],
  [
    'Design & Studies',
    'Electrical design, layouts, cable schedules and power-system studies including load flow and short circuit studies.',
  ],
  [
    'Pan India Exposure',
    'Based in Mumbai with project exposure and service experience across India.',
  ],
]

export const locations = [
  'Delhi',
  'Mumbai',
  'Bengaluru',
  'Chennai',
  'Hyderabad',
  'Kolkata',
  'Ahmedabad',
  'Pune',
  'Lucknow',
  'Chandigarh',
  'Jaipur',
  'Navi Mumbai',
]
export const reviews = [
  {
    company: 'Industrial Manufacturing Client',
    quote:
      'Electro Mech Engineers supported our testing and commissioning requirements with a professional and technically sound approach. The team completed the work safely and within the planned schedule.',
    person: 'Client Representative',
    role: 'Plant Engineering Manager',
  },
  {
    company: 'Power & Utility Client',
    quote:
      'Their knowledge of protection relays, relay coordination and electrical systems helped us identify critical issues and improve the reliability of our installation.',
    person: 'Client Representative',
    role: 'Electrical Maintenance Head',
  },
  {
    company: 'Process Industry Client',
    quote:
      'The team demonstrated excellent technical capability during transformer, switchgear and protection-system testing. Their reporting was detailed and easy to understand.',
    person: 'Client Representative',
    role: 'Senior Electrical Engineer',
  },
  {
    company: 'Infrastructure Client',
    quote:
      'We appreciate their timely execution, site coordination and practical engineering support. Electro Mech Engineers handled our requirements with professionalism.',
    person: 'Client Representative',
    role: 'Project Manager',
  },
]