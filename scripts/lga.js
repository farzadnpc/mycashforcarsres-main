   // --- VIC Local Government Areas (LGAs) with suburbs + postcodes ---
   const LGA_DATA = [
    { lga: "City of Melbourne", suburbs: [
      ["Carlton","3053"],["Carlton North","3054"],["Docklands","3008"],["East Melbourne","3002"],
      ["Flemington","3031"],["Kensington","3031"],["Melbourne","3000"],["Melbourne (St Kilda Rd)","3004"],
      ["North Melbourne","3051"],["Parkville","3052"],["Southbank","3006"],["West Melbourne","3003"],
      ["Fishermans Bend","3207"],["Port Melbourne","3207"],["South Wharf","3006"],["Jolimont","3002"],
      ["Royal Park","3052"],["Coode Island","3003"]
    ]},
  
    { lga: "City of Port Phillip", suburbs: [
      ["Albert Park","3206"],["Balaclava","3183"],["Elwood","3184"],["Middle Park","3206"],
      ["Port Melbourne","3207"],["Ripponlea","3185"],["South Melbourne","3205"],
      ["St Kilda","3182"],["St Kilda East","3183"],["St Kilda West","3182"]
    ]},
  
    { lga: "City of Yarra", suburbs: [
      ["Abbotsford","3067"],["Alphington","3078"],["Burnley","3121"],["Carlton North","3054"],
      ["Clifton Hill","3068"],["Collingwood","3066"],["Cremorne","3121"],["Fairfield","3078"],
      ["Fitzroy","3065"],["Fitzroy North","3068"],["Princes Hill","3054"],["Richmond","3121"]
    ]},
  
    { lga: "City of Banyule", suburbs: [
      ["Bellfield","3081"],["Briar Hill","3088"],["Bundoora","3083"],["Eaglemont","3084"],
      ["Greensborough","3088"],["Heidelberg","3084"],["Heidelberg Heights","3081"],["Heidelberg West","3081"],
      ["Ivanhoe","3079"],["Ivanhoe East","3079"],["Lower Plenty","3093"],["Macleod","3085"],
      ["Montmorency","3094"],["Rosanna","3084"],["Viewbank","3084"],["Watsonia","3087"],["Watsonia North","3087"],["Yallambie","3085"]
    ]},
  
    { lga: "City of Darebin", suburbs: [
      ["Alphington","3078"],["Bundoora","3083"],["Coburg","3058"],["Coburg North","3058"],
      ["Fairfield","3078"],["Kingsbury","3083"],["Northcote","3070"],["Preston","3072"],
      ["Reservoir","3073"],["Thornbury","3071"]
    ]},
  
    { lga: "City of Hume", suburbs: [
      ["Attwood","3049"],["Broadmeadows","3047"],["Campbellfield","3061"],["Coolaroo","3048"],
      ["Craigieburn","3064"],["Dallas","3047"],["Fawkner (part)","3060"],["Gladstone Park","3043"],
      ["Greenvale","3059"],["Jacana","3047"],["Kalkallo","3064"],["Meadow Heights","3048"],
      ["Mickleham","3064"],["Roxburgh Park","3064"],["Somerton","3062"],["Sunbury","3429"],
      ["Tullamarine (part)","3043"],["Westmeadows","3049"]
    ]},
  
    { lga: "City of Moonee Valley", suburbs: [
      ["Airport West","3042"],["Ascot Vale","3032"],["Avondale Heights","3034"],["Essendon","3040"],
      ["Essendon Fields","3041"],["Essendon North","3041"],["Essendon West","3040"],
      ["Flemington (part)","3031"],["Keilor East (part)","3033"],["Moonee Ponds","3039"],
      ["Niddrie","3042"],["Strathmore","3041"],["Strathmore Heights","3041"],["Travancore","3032"]
    ]},
  
    { lga: "City of Moreland", suburbs: [
      ["Brunswick","3056"],["Brunswick East","3057"],["Brunswick West","3055"],["Coburg","3058"],
      ["Coburg North","3058"],["Fawkner","3060"],["Glenroy","3046"],["Gowanbrae","3043"],
      ["Hadfield","3046"],["Oak Park","3046"],["Pascoe Vale","3044"],["Pascoe Vale South","3044"],
      ["Tullamarine (part)","3043"]
    ]},
  
    { lga: "City of Whittlesea", suburbs: [
      ["Bundoora (part)","3083"],["Doreen","3754"],["Epping","3076"],["Lalor","3075"],
      ["Mernda","3754"],["Mill Park","3082"],["South Morang","3752"],["Thomastown","3074"],
      ["Whittlesea","3757"],["Wollert","3750"],["Humevale","3757"],["Eden Park","3757"],["Yan Yean","3755"]
    ]},
  
    { lga: "City of Boroondara", suburbs: [
      ["Ashburton","3147"],["Balwyn","3103"],["Balwyn North","3104"],["Camberwell","3124"],
      ["Canterbury","3126"],["Deepdene","3103"],["Glen Iris (part)","3146"],
      ["Hawthorn","3122"],["Hawthorn East","3123"],["Kew","3101"],["Kew East","3102"]
    ]},
  
    { lga: "City of Knox", suburbs: [
      ["Bayswater (part)","3153"],["Boronia","3155"],["Ferntree Gully","3156"],["Knoxfield","3180"],
      ["Lysterfield","3156"],["Scoresby","3179"],["Rowville","3178"],["The Basin (part)","3154"],
      ["Upper Ferntree Gully","3156"],["Wantirna","3152"],["Wantirna South","3152"]
    ]},
  
    { lga: "City of Manningham", suburbs: [
      ["Bulleen","3105"],["Doncaster","3108"],["Doncaster East","3109"],["Donvale","3111"],
      ["Park Orchards","3114"],["Templestowe","3106"],["Templestowe Lower","3107"],
      ["Warrandyte","3113"],["Wonga Park (part)","3115"],["Warrandyte South","3134"]
    ]},
  
    { lga: "City of Maroondah", suburbs: [
      ["Bayswater North","3153"],["Croydon","3136"],["Croydon Hills","3136"],["Croydon North","3136"],
      ["Croydon South","3136"],["Heathmont","3135"],["Kilsyth South","3137"],
      ["Ringwood","3134"],["Ringwood East","3135"],["Ringwood North","3134"],["Warranwood","3134"]
    ]},
  
    { lga: "City of Whitehorse", suburbs: [
      ["Blackburn","3130"],["Blackburn North","3130"],["Blackburn South","3130"],["Box Hill","3128"],
      ["Box Hill North","3129"],["Box Hill South","3128"],["Burwood","3125"],["Burwood East","3151"],
      ["Forest Hill","3131"],["Mitcham","3132"],["Mont Albert","3127"],["Mont Albert North","3129"],
      ["Nunawading","3131"],["Surrey Hills (part)","3127"],["Vermont","3133"],["Vermont South","3133"]
    ]},
  
    { lga: "Yarra Ranges", suburbs: [
      ["Badger Creek","3777"],["Belgrave","3160"],["Belgrave Heights","3160"],["Belgrave South","3160"],
      ["Chirnside Park","3116"],["Coldstream","3770"],["Healesville","3777"],["Kalorama","3766"],
      ["Kilsyth (part)","3137"],["Lilydale","3140"],["Monbulk","3793"],["Montrose","3765"],
      ["Mooroolbark (part)","3138"],["Mount Evelyn","3796"],["Olinda","3788"],["Sassafras","3787"],
      ["Seville","3139"],["Seville East","3139"],["Tecoma","3160"],["Upwey (part)","3158"],
      ["Warburton","3799"],["Yarra Glen","3775"],["Yarra Junction","3797"],["Wandin North","3139"]
    ]},
  
    { lga: "City of Bayside", suburbs: [
      ["Beaumaris","3193"],["Black Rock","3193"],["Brighton","3186"],["Brighton East","3187"],
      ["Cheltenham (part)","3192"],["Hampton","3188"],["Hampton East","3188"],["Highett (part)","3190"],
      ["Sandringham","3191"]
    ]},
  
    { lga: "Shire of Cardinia", suburbs: [
      ["Beaconsfield","3807"],["Bunyip","3815"],["Cockatoo","3781"],["Emerald","3782"],
      ["Garfield","3814"],["Gembrook","3783"],["Koo Wee Rup","3981"],["Lang Lang","3984"],
      ["Nar Nar Goon","3812"],["Officer","3809"],["Officer South","3809"],["Pakenham","3810"],
      ["Pakenham South","3810"],["Pakenham Upper","3810"],["Tynong","3813"]
    ]},
  
    { lga: "City of Casey", suburbs: [
      ["Beaconsfield","3807"],["Berwick","3806"],["Clyde","3978"],["Clyde North","3978"],
      ["Cranbourne","3977"],["Cranbourne East","3977"],["Cranbourne North","3977"],["Cranbourne West","3977"],
      ["Devon Meadows","3977"],["Endeavour Hills","3802"],["Eumemmerring","3177"],["Hallam","3803"],
      ["Hampton Park","3976"],["Harkaway","3806"],["Junction Village","3977"],["Lynbrook","3975"],
      ["Lyndhurst","3975"],["Narre Warren","3805"],["Narre Warren North","3804"],["Narre Warren South","3805"],
      ["Pearcedale (part)","3912"],["Tooradin","3980"]
    ]},
  
    { lga: "Greater Dandenong", suburbs: [
      ["Bangholme","3175"],["Dandenong","3175"],["Dandenong North","3175"],["Dandenong South","3175"],
      ["Keysborough","3173"],["Noble Park","3174"],["Noble Park North","3174"],["Springvale","3171"],
      ["Springvale South","3172"]
    ]},
  
    { lga: "City of Frankston", suburbs: [
      ["Carrum Downs","3201"],["Frankston","3199"],["Frankston North","3200"],["Frankston South","3199"],
      ["Karingal","3199"],["Langwarrin","3910"],["Langwarrin South","3911"],["Sandhurst","3977"],
      ["Seaford","3198"],["Skye","3977"]
    ]},
  
    { lga: "City of Glen Eira", suburbs: [
      ["Bentleigh","3204"],["Bentleigh East","3165"],["Brighton East (part)","3187"],["Carnegie","3163"],
      ["Caulfield","3162"],["Caulfield North","3161"],["Caulfield South","3162"],["Elsternwick","3185"],
      ["Gardenvale","3185"],["Glen Huntly","3163"],["McKinnon","3204"],["Murrumbeena","3163"],
      ["Ormond","3204"],["St Kilda East (part)","3183"]
    ]},
  
    { lga: "City of Kingston", suburbs: [
      ["Aspendale","3195"],["Aspendale Gardens","3195"],["Bonbeach","3196"],["Braeside","3195"],
      ["Carrum","3197"],["Chelsea","3196"],["Chelsea Heights","3196"],["Cheltenham (part)","3192"],
      ["Clarinda","3169"],["Clayton South","3169"],["Dingley Village","3172"],["Edithvale","3196"],
      ["Heatherton","3202"],["Highett (part)","3190"],["Mentone","3194"],["Moorabbin Airport","3194"],
      ["Mordialloc","3195"],["Oakleigh South (part)","3167"],["Parkdale","3195"],["Patterson Lakes","3197"],
      ["Waterways","3195"]
    ]},
  
    { lga: "City of Monash", suburbs: [
      ["Ashwood","3147"],["Chadstone","3148"],["Clayton","3168"],["Clayton South (part)","3169"],
      ["Glen Waverley","3150"],["Hughesdale","3166"],["Huntingdale","3166"],["Mount Waverley","3149"],
      ["Mulgrave","3170"],["Notting Hill","3168"],["Oakleigh","3166"],["Oakleigh East","3166"],
      ["Oakleigh South (part)","3167"],["Wheelers Hill","3150"]
    ]},
  
    { lga: "Mornington Peninsula", suburbs: [
      ["Balnarring","3926"],["Balnarring Beach","3926"],["Bittern","3918"],["Blairgowrie","3942"],
      ["Boneo","3939"],["Cape Schanck","3939"],["Crib Point","3919"],["Dromana","3936"],
      ["Hastings","3915"],["McCrae","3938"],["Moorooduc","3933"],["Mornington","3931"],
      ["Mount Eliza","3930"],["Mount Martha","3934"],["Portsea","3944"],["Red Hill","3937"],
      ["Rosebud","3939"],["Rye","3941"],["Safety Beach","3936"],["Somers","3927"],
      ["Somerville","3912"],["Sorrento","3943"],["Tootgarook","3941"],["Tyabb","3913"]
    ]},
  
    { lga: "City of Stonnington", suburbs: [
      ["Armadale","3143"],["Glen Iris (part)","3146"],["Kooyong","3144"],["Malvern","3144"],
      ["Malvern East","3145"],["Prahran","3181"],["South Yarra (part)","3141"],["Toorak","3142"],
      ["Windsor","3181"]
    ]},
  
    { lga: "City of Brimbank", suburbs: [
      ["Albanvale","3021"],["Albion","3020"],["Ardeer","3022"],["Cairnlea","3023"],["Calder Park","3037"],
      ["Delahey","3037"],["Deer Park","3023"],["Derrimut","3026"],["Kealba","3021"],["Keilor (part)","3036"],
      ["Keilor Downs","3038"],["Keilor Lodge","3038"],["Keilor North","3036"],["Kings Park","3021"],
      ["St Albans","3021"],["Sunshine","3020"],["Sunshine North","3020"],["Sunshine West","3020"],
      ["Sydenham","3037"],["Taylors Lakes","3038"]
    ]},
  
    { lga: "City of Hobsons Bay", suburbs: [
      ["Altona","3018"],["Altona Meadows","3028"],["Altona North","3025"],["Brooklyn","3012"],
      ["Laverton","3028"],["Newport","3015"],["Seabrook","3028"],["Seaholme","3018"],
      ["South Kingsville","3015"],["Spotswood","3015"],["Williamstown","3016"],["Williamstown North","3016"]
    ]},
  
    { lga: "City of Maribyrnong", suburbs: [
      ["Braybrook","3019"],["Footscray","3011"],["Kingsville","3012"],["Maidstone","3012"],
      ["Maribyrnong","3032"],["Seddon","3011"],["Tottenham","3012"],["West Footscray","3012"],
      ["Yarraville","3013"]
    ]},
  
    { lga: "City of Melton", suburbs: [
      ["Brookfield","3338"],["Burnside","3023"],["Burnside Heights","3023"],["Caroline Springs","3023"],
      ["Cobblebank","3338"],["Diggers Rest","3427"],["Eynesbury","3338"],["Fraser Rise","3336"],
      ["Harkness","3337"],["Kurunjang","3337"],["Melton","3337"],["Melton South","3338"],["Melton West","3337"],
      ["Plumpton","3335"],["Ravenhall","3023"],["Rockbank","3335"],["Taylors Hill","3037"],["Toolern Vale","3337"]
    ]}
  ];
  
  // Render accordion
  function renderLGAs(){
    const grid = document.getElementById('lgaGrid');
    if(!grid) return;
  
    grid.innerHTML = LGA_DATA.map(item => {
      // sort suburbs A–Z by name
      const subsSorted = item.suburbs
        .slice()
        .sort((a,b) => a[0].localeCompare(b[0], 'en', {sensitivity:'base'}));
  
      // no manual bullets here; we use CSS list-style
      const subs = subsSorted.map(([n,pc]) => `<li>${n}${pc ? ' ' + pc : ''}</li>`).join('');
  
      return `
        <details class="lga-item">
          <summary>
            <span>${item.lga}</span>
            <svg class="caret" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </summary>
          <ul class="suburb-list">${subs}</ul>
        </details>`;
    }).join('');
  
    // optional: keep only one panel open at a time
    grid.addEventListener('toggle', (e) => {
      if (e.target.tagName === 'DETAILS' && e.target.open) {
        grid.querySelectorAll('details[open]').forEach(d => { if (d !== e.target) d.open = false; });
      }
    });
  }
  
  renderLGAs();
  (function limitOpenAccordions(maxOpen = 3){
    const grid = document.getElementById('lgaGrid');
    if (!grid) return;
  
    // Seed queue with any panels already open
    let openQueue = Array.from(grid.querySelectorAll('details[open]'));
  
    // Use capture so 'toggle' is reliably caught in all browsers
    document.addEventListener('toggle', (e) => {
      const d = e.target;
      if (d.tagName !== 'DETAILS') return;
      if (!grid.contains(d)) return;   // only manage panels inside #lgaGrid
  
      if (d.open) {
        // Move to end (most recently opened)
        openQueue = openQueue.filter(x => x !== d);
        openQueue.push(d);
  
        // If > maxOpen, close the oldest until within limit
        while (openQueue.length > maxOpen) {
          const toClose = openQueue.shift();
          if (toClose && toClose !== d) toClose.open = false;
        }
      } else {
        // If closed, remove from queue
        openQueue = openQueue.filter(x => x !== d);
      }
    }, true);
  })();