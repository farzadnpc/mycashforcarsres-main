// Brands accordion (makes + popular models)
(function(){
    const BRAND_DATA = [
        {brand:'AUDI', models:[
          'A1 Sportback','A3','S3','RS3','A3 Sportback','S3 Sportback','RS 3 Sportback',
          'A3 Cabriolet','S3 Cabriolet',
          'A4','S4','A4 Avant','S4 Avant','A4 allroad quattro','RS 4 Avant',
          'A5','S5','RS 5','A5 Sportback','S5 Sportback','RS 5 Sportback',
          'A5 Coupé','S5 Coupé','RS 5 Coupé','A5 Cabriolet','S5 Cabriolet',
          'A6','S6','A6 allroad quattro',
          'A7','S7','RS 7 Sportback','A7 Sportback','S7 Sportback',
          'A8','Q2','Q3','RS Q3','Q3 Sportback','RS Q3 Sportback',
          'Q5','SQ5','Q7','SQ7','Q8','SQ8','RS Q8',
          'e-tron','e-tron Sportback',
          'TT Coupé','TTS Coupé','TT RS Coupé','R8 Coupé','R8 Spyder'
        ]},
      
        {brand:'TOYOTA', models:[
          'Yaris','Corolla','Camry','Aurion','Prius','Prius C','Prius V',
          '86','Supra','C-HR','RAV4','Kluger (Highlander)','Fortuner',
          'LandCruiser 70','LandCruiser 200','LandCruiser 300','Prado',
          'Hilux','HiAce','Granvia','Tarago','Avalon'
        ]},
      
        {brand:'NISSAN', models:[
          'Micra','Tiida','Pulsar','Leaf','Juke','Qashqai','X-Trail',
          'Pathfinder','Patrol','Navara','Murano','Dualis','Maxima','Skyline','GTR'
        ]},
      
        {brand:'MAZDA', models:[
          'Mazda2','Mazda3','Mazda6','CX-3','CX-30','CX-5','CX-8','CX-9',
          'BT-50','MX-5'
        ]},
      
        {brand:'FORD', models:[
          'Fiesta','Focus','Mondeo','Falcon','Territory','Escape','Kuga',
          'Everest','Ranger','Transit','Mustang'
        ]},
      
        {brand:'HOLDEN', models:[
          'Barina','Astra','Cruze','Commodore','Caprice','Cascada',
          'Colorado','Trailblazer','Captiva','Trax'
        ]},
      
        {brand:'BMW', models:[
          '1 Series','2 Series','3 Series','4 Series','5 Series','7 Series',
          'X1','X2','X3','X4','X5','X6','X7','Z4','i3','i4','iX','iX3'
        ]},
      
        {brand:'MERCEDES', models:[
          'A-Class','B-Class','C-Class','E-Class','S-Class',
          'CLA','CLS','GLA','GLB','GLC','GLE','GLS','G-Class',
          'Vito','Sprinter','EQC','EQA','EQE','EQS'
        ]},
      
        {brand:'VOLKSWAGEN', models:[
          'Polo','Golf','Jetta','Passat','Arteon','Beetle',
          'T-Cross','T-Roc','Tiguan','Touareg','Amarok','Caddy','Transporter'
        ]},
      
        {brand:'HYUNDAI', models:[
          'Getz','i20','i30','Elantra','Sonata','Accent',
          'Veloster','Kona','Tucson','Santa Fe','Palisade','iMax','iLoad','Staria'
        ]},
      
        {brand:'KIA', models:[
          'Picanto','Rio','Cerato','Optima','Stinger',
          'Seltos','Sportage','Sorento','Carnival','EV6'
        ]},
      
        {brand:'SUBARU', models:[
          'Impreza','WRX','Levorg','Liberty','BRZ','XV','Forester','Outback','Tribeca'
        ]},
      
        {brand:'HONDA', models:[
          'Jazz','Civic','Accord','City','Integra','CR-V','HR-V','Odyssey'
        ]},
      
        {brand:'MITSUBISHI', models:[
          'Mirage','Lancer','ASX','Eclipse Cross','Outlander','Outlander PHEV','Pajero','Pajero Sport','Triton'
        ]},
      
        {brand:'LEXUS', models:[
          'CT','IS','ES','GS','LS','UX','NX','RX','RZ','GX','LX'
        ]},
      
        {brand:'VOLVO', models:[
          'S40','S60','S90','V40','V60','V90','XC40','XC60','XC90','C30'
        ]},
      
        {brand:'PORSCHE', models:[
          'Boxster','Cayman','911','Panamera','Macan','Cayenne','Taycan'
        ]},
      
        {brand:'LAND ROVER', models:[
          'Defender','Discovery','Discovery Sport','Range Rover','Range Rover Sport','Range Rover Evoque','Range Rover Velar'
        ]},
      
        {brand:'JEEP', models:[
          'Renegade','Compass','Cherokee','Grand Cherokee','Wrangler','Gladiator'
        ]},
      
        {brand:'SUZUKI', models:[
          'Alto','Ignis','Swift','Baleno','S-Cross','Vitara','Jimny','Kizashi','APV'
        ]},
      
        {brand:'PEUGEOT', models:[
          '208','308','508','2008','3008','5008','RCZ','Partner'
        ]},
      
        {brand:'RENAULT', models:[
          'Clio','Megane','Fluence','Koleos','Captur','Kadjar','Trafic','Master'
        ]},
      
        {brand:'SKODA', models:[
          'Fabia','Scala','Octavia','Superb','Kamiq','Karoq','Kodiaq','Yeti'
        ]},
      
        {brand:'ISUZU', models:[
          'D-MAX','MU-X','N-Series (Truck)'
        ]},
      
        {brand:'MG', models:[
          'MG3','ZS','ZS EV','HS','MG5'
        ]},
      
        {brand:'HAVAL', models:[
          'H2','Jolion','H6','H6 GT','H9'
        ]},
      
        {brand:'BYD', models:[
          'Atto 3','Dolphin','Seal'
        ]},
      
        {brand:'TESLA', models:[
          'Model 3','Model Y','Model S','Model X','Roadster (1st gen)'
        ]},
      
        {brand:'ALFA ROMEO', models:[
          'Giulietta','Giulia','Stelvio','Mito','159','Brera','Spider'
        ]},
      
        {brand:'MINI', models:[
          'Hatch (3-door)','Hatch (5-door)','Convertible','Clubman','Countryman','Paceman'
        ]},
      
        {brand:'FIAT', models:[
          '500','500X','Punto','Tipo','Doblo','Ducato'
        ]},
      
        {brand:'CITROËN', models:[
          'C3','C4','C4 Cactus','C5','C5 Aircross','Berlingo'
        ]},
      
        {brand:'JAGUAR', models:[
          'XE','XF','XJ','F-PACE','E-PACE','I-PACE','F-TYPE'
        ]},
      
        {brand:'CHRYSLER', models:[
          '300','PT Cruiser','Voyager'
        ]},
      
        {brand:'DODGE', models:[
          'Caliber','Journey','Nitro','Ram (1500/2500)'
        ]},
      
        {brand:'SAAB', models:[
          '9-3','9-5','900'
        ]},
      
        {brand:'DAEWOO', models:[
          'Matiz','Lanos','Nubira','Leganza','Kalos','Lacetti'
        ]},
      
        {brand:'DATSUN', models:[
          '120Y','Sunny','240Z','260Z'
        ]}
      ];
  
      function renderBrands(){
        const grid = document.getElementById('brandGrid');
        if(!grid) return;
      
        const dataSorted = BRAND_DATA.slice()
          .sort((a,b)=>a.brand.localeCompare(b.brand,'en',{sensitivity:'base'}));
      
        grid.innerHTML = dataSorted.map(item => {
          const models = item.models.slice()
            .sort((a,b)=>a.localeCompare(b,'en',{sensitivity:'base'}))
            .map(m => `<li>${m}</li>`)
            .join('');
          return `
            <details class="lga-item">
              <summary>
                <span>${item.brand}</span>
                <svg class="caret" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </summary>
              <ul class="suburb-list">${models || '<li>We buy all models.</li>'}</ul>
            </details>`;
        }).join('');
      }
  
    // limit to 3 open at once (change if you like)
    function limitOpenBrands(maxOpen = 3){
      const grid = document.getElementById('brandGrid');
      if (!grid) return;
      let openQueue = Array.from(grid.querySelectorAll('details[open]'));
  
      document.addEventListener('toggle', (e) => {
        const d = e.target;
        if (d.tagName !== 'DETAILS') return;
        if (!grid.contains(d)) return;
  
        if (d.open) {
          openQueue = openQueue.filter(x => x !== d);
          openQueue.push(d);
          while (openQueue.length > maxOpen) {
            const toClose = openQueue.shift();
            if (toClose && toClose !== d) toClose.open = false;
          }
        } else {
          openQueue = openQueue.filter(x => x !== d);
        }
      }, true);
    }
  
    function bootBrands(){
      renderBrands();
      limitOpenBrands(3);
    }
    
    // run now if DOM is ready, otherwise wait
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', bootBrands, { once: true });
    } else {
      bootBrands();
    }
  })();