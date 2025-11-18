const { useState } = React;

const TRANSLATIONS = {
  "en-US": {
    "pageTitle": "Life in weeks",
    "pageSubtitle": "A simple visualization to reflect on the passage of time",
    "birthDateQuestion": "Enter a birthdate",
    "visualizeButton": "Visualize your time",
    "startOverButton": "Start over",
    "shareAsHtmlButton": "Share as HTML file",
    "lifeInWeeksTitle": "Your life in weeks",
    "weekHoverPast": " A week from your past",
    "weekHoverCurrent": " Your current week",
    "weekHoverFuture": " A week in your potential future",
    "legendPast": "Past",
    "legendPresent": "Present",
    "legendFuture": "Future",
    "lifeHighlightsTitle": "Life highlights",
    "lifeHighlightsWeeks": "You've lived",
    "lifeHighlightsWeeksEnd": "weeks, which is",
    "lifeHighlightsPercent": "of a full life.",
    "lifeHighlightsDays": "That's",
    "lifeHighlightsDaysEnd": "days of experience and approximately",
    "lifeHighlightsSeasonsEnd": "seasons observed.",
    "lifeHighlightsHeartbeats": "Your heart has beaten approximately",
    "lifeHighlightsHeartbeatsEnd": "times.",
    "lifeHighlightsBreaths": "You've taken around",
    "lifeHighlightsBreathsMiddle": "breaths and slept about",
    "lifeHighlightsBreathsEnd": "hours.",
    "societalContextTitle": "Societal context",
    "societalPopulation": "During your lifetime, humanity's population has grown from",
    "societalPopulationEnd": "to over",
    "societalPopulationFinal": "billion people.",
    "societalMeetings": "The average person will meet around",
    "societalMeetingsMiddle": "people in their lifetime. You've likely already met approximately",
    "societalMeetingsEnd": "individuals.",
    "societalBirthsDeaths": "Since your birth, humanity has collectively experienced approximately",
    "societalBirthsMiddle": "births and",
    "societalDeathsEnd": "deaths.",
    "cosmicPerspectiveTitle": "Cosmic perspective",
    "cosmicEarthTravel": "Since your birth, Earth has traveled approximately",
    "cosmicEarthTravelEnd": "kilometers through space around the Sun.",
    "cosmicUniverse": "The observable universe is about",
    "cosmicUniverseMiddle": "billion light-years across, meaning light takes",
    "cosmicUniverseMiddle2": "billion years to cross it. Your entire lifespan is just",
    "cosmicUniverseEnd": "of the universe's age.",
    "cosmicSolarSystem": "During your lifetime, our solar system has moved about",
    "cosmicSolarSystemEnd": "kilometers through the Milky Way galaxy.",
    "naturalWorldTitle": "Natural world",
    "naturalLunarCycles": "You've experienced approximately",
    "naturalLunarMiddle": "lunar cycles and",
    "naturalLunarEnd": "trips around the Sun.",
    "naturalSequoia": "A giant sequoia tree can live over 3,000 years. Your current age is",
    "naturalSequoiaEnd": "of its potential lifespan.",
    "naturalCells": "During your lifetime, your body has replaced most of its cells several times. You are not made of the same atoms you were born with."
  },
  /* LOCALE_PLACEHOLDER_START */
  "es-ES": {
    "pageTitle": "La vida en semanas",
    "pageSubtitle": "Una visualización simple para reflexionar sobre el paso del tiempo",
    "birthDateQuestion": "Ingresa una fecha de nacimiento",
    "visualizeButton": "Visualizar tu tiempo",
    "startOverButton": "Empezar de nuevo",
    "shareAsHtmlButton": "Compartir como archivo HTML",
    "lifeInWeeksTitle": "Tu vida en semanas",
    "weekHoverPast": " Una semana de tu pasado",
    "weekHoverCurrent": " Tu semana actual",
    "weekHoverFuture": " Una semana en tu futuro potencial",
    "legendPast": "Pasado",
    "legendPresent": "Presente",
    "legendFuture": "Futuro",
    "lifeHighlightsTitle": "Aspectos destacados de la vida",
    "lifeHighlightsWeeks": "Has vivido",
    "lifeHighlightsWeeksEnd": "semanas, que es el",
    "lifeHighlightsPercent": "de una vida completa.",
    "lifeHighlightsDays": "Eso son",
    "lifeHighlightsDaysEnd": "días de experiencia y aproximadamente",
    "lifeHighlightsSeasonsEnd": "estaciones observadas.",
    "lifeHighlightsHeartbeats": "Tu corazón ha latido aproximadamente",
    "lifeHighlightsHeartbeatsEnd": "veces.",
    "lifeHighlightsBreaths": "Has tomado alrededor de",
    "lifeHighlightsBreathsMiddle": "respiraciones y has dormido aproximadamente",
    "lifeHighlightsBreathsEnd": "horas.",
    "societalContextTitle": "Contexto social",
    "societalPopulation": "Durante tu vida, la población de la humanidad ha crecido de",
    "societalPopulationEnd": "a más de",
    "societalPopulationFinal": "mil millones de personas.",
    "societalMeetings": "La persona promedio conocerá alrededor de",
    "societalMeetingsMiddle": "personas en su vida. Probablemente ya has conocido aproximadamente",
    "societalMeetingsEnd": "individuos.",
    "societalBirthsDeaths": "Desde tu nacimiento, la humanidad ha experimentado colectivamente aproximadamente",
    "societalBirthsMiddle": "nacimientos y",
    "societalDeathsEnd": "muertes.",
    "cosmicPerspectiveTitle": "Perspectiva cósmica",
    "cosmicEarthTravel": "Desde tu nacimiento, la Tierra ha viajado aproximadamente",
    "cosmicEarthTravelEnd": "kilómetros a través del espacio alrededor del Sol.",
    "cosmicUniverse": "El universo observable tiene aproximadamente",
    "cosmicUniverseMiddle": "mil millones de años luz de diámetro, lo que significa que la luz tarda",
    "cosmicUniverseMiddle2": "mil millones de años en cruzarlo. Toda tu vida es solo el",
    "cosmicUniverseEnd": "de la edad del universo.",
    "cosmicSolarSystem": "Durante tu vida, nuestro sistema solar se ha movido aproximadamente",
    "cosmicSolarSystemEnd": "kilómetros a través de la galaxia Vía Láctea.",
    "naturalWorldTitle": "Mundo natural",
    "naturalLunarCycles": "Has experimentado aproximadamente",
    "naturalLunarMiddle": "ciclos lunares y",
    "naturalLunarEnd": "viajes alrededor del Sol.",
    "naturalSequoia": "Una secuoya gigante puede vivir más de 3,000 años. Tu edad actual es el",
    "naturalSequoiaEnd": "de su vida potencial.",
    "naturalCells": "Durante tu vida, tu cuerpo ha reemplazado la mayoría de sus células varias veces. No estás hecho de los mismos átomos con los que naciste."
  }
  /* LOCALE_PLACEHOLDER_END */
};

const appLocale = '{{APP_LOCALE}}';
const browserLocale = navigator.languages?.[0] || navigator.language || 'en-US';
const findMatchingLocale = (locale) => {
  if (TRANSLATIONS[locale]) return locale;
  const lang = locale.split('-')[0];
  const match = Object.keys(TRANSLATIONS).find(key => key.startsWith(lang + '-'));
  return match || 'en-US';
};
const locale = (appLocale !== '{{APP_LOCALE}}') ? findMatchingLocale(appLocale) : findMatchingLocale(browserLocale);
const t = (key) => TRANSLATIONS[locale]?.[key] || TRANSLATIONS['en-US'][key] || key;

function WeeksOfLife() {
  const [step, setStep] = useState(1);
  const [birthdate, setBirthdate] = useState('');
  const [stats, setStats] = useState(null);
  const [showHoverData, setShowHoverData] = useState(false);
  const [hoverWeek, setHoverWeek] = useState(null);
  
  const calculateStats = (date) => {
    const birthDate = new Date(date);
    const today = new Date();
    const birthYear = birthDate.getFullYear();
    
    // Calculate weeks lived
    const msInWeek = 1000 * 60 * 60 * 24 * 7;
    const weeksLived = Math.floor((today - birthDate) / msInWeek);
    
    // Assuming average lifespan of ~80 years (4160 weeks)
    const totalWeeks = 4160;
    const weeksRemaining = totalWeeks - weeksLived;
    const percentageLived = Math.round((weeksLived / totalWeeks) * 100);
    
    // Calculate days lived
    const msInDay = 1000 * 60 * 60 * 24;
    const daysLived = Math.floor((today - birthDate) / msInDay);
    
    // Calculate hours slept (assuming 8 hours per day)
    const hoursSlept = Math.floor(daysLived * 8);
    
    // Calculate heartbeats (average 70 bpm)
    const heartbeats = Math.floor(daysLived * 24 * 60 * 70);
    
    // Calculate breaths (average 16 breaths per minute)
    const breaths = Math.floor(daysLived * 24 * 60 * 16);

    // Calculate seasons experienced
    const seasons = Math.floor(daysLived / 91.25);
    
    return {
      weeksLived,
      totalWeeks,
      weeksRemaining,
      percentageLived,
      daysLived,
      hoursSlept,
      heartbeats,
      breaths,
      seasons,
      birthYear
    };
  };
  
  // Helper functions for contextual statistics
  const getPopulationAtYear = (year) => {
    // World population estimates by year (in billions)
    const populationData = {
      1950: 2.5,
      1960: 3.0,
      1970: 3.7,
      1980: 4.4,
      1990: 5.3,
      2000: 6.1,
      2010: 6.9,
      2020: 7.8,
      2025: 8.1
    };
    
    // Find the closest year in our data
    const years = Object.keys(populationData).map(Number);
    const closestYear = years.reduce((prev, curr) => 
      Math.abs(curr - year) < Math.abs(prev - year) ? curr : prev
    );
    
    return Math.round(populationData[closestYear] * 1000000000);
  };
  
  const getAverageBirthsPerDay = () => {
    // Approximately 385,000 births per day globally (as of 2023)
    return 385000;
  };
  
  const getAverageDeathsPerDay = () => {
    // Approximately 166,000 deaths per day globally (as of 2023)
    return 166000;
  };

  const handleSubmit = () => {
    setStats(calculateStats(birthdate));
    setStep(2);
  };

  const getFormattedNumber = (num) => {
    return new Intl.NumberFormat().format(num);
  };

  const renderWeekGrid = () => {
    if (!stats) return null;
    
    const rows = [];
    const weeksPerRow = 52;
    const totalRows = Math.ceil(stats.totalWeeks / weeksPerRow);
    
    for (let row = 0; row < totalRows; row++) {
      const weekCells = [];
      for (let col = 0; col < weeksPerRow; col++) {
        const weekNumber = row * weeksPerRow + col;
        if (weekNumber < stats.totalWeeks) {
          const isPast = weekNumber < stats.weeksLived;
          const isCurrent = weekNumber === stats.weeksLived;
          
          let cellClass = "w-2 h-2 m-0.5 rounded-sm transition-all ";
          if (isPast) {
            cellClass += "bg-gray-800 ";
          } else if (isCurrent) {
            cellClass += "bg-blue-500 animate-pulse ";
          } else {
            cellClass += "bg-gray-200 ";
          }
          
          weekCells.push(
            <div 
              key={weekNumber}
              className={cellClass}
              onMouseEnter={() => {
                setHoverWeek(weekNumber);
                setShowHoverData(true);
              }}
              onMouseLeave={() => setShowHoverData(false)}
            />
          );
        }
      }
      
      rows.push(
        <div key={row} className="flex">
          {weekCells}
        </div>
      );
    }
    
    return (
      <div className="mt-8 bg-white p-6 rounded-md shadow-sm">
        <h2 className="text-lg font-normal mb-4 text-gray-800">{t('lifeInWeeksTitle')}</h2>
        <div className="flex flex-col">
          {rows}
        </div>
        
        {showHoverData && (
          <div className="mt-4 text-sm text-gray-600">
            Week {hoverWeek + 1}: 
            {hoverWeek < stats.weeksLived ? 
              t('weekHoverPast') : 
              hoverWeek === stats.weeksLived ? 
              t('weekHoverCurrent') : 
              t('weekHoverFuture')}
          </div>
        )}
        
        <div className="flex mt-6 text-sm">
          <div className="flex items-center mr-4">
            <div className="w-3 h-3 bg-gray-800 mr-2"></div>
            <span className="text-gray-600">{t('legendPast')}</span>
          </div>
          <div className="flex items-center mr-4">
            <div className="w-3 h-3 bg-blue-500 mr-2"></div>
            <span className="text-gray-600">{t('legendPresent')}</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-gray-200 mr-2"></div>
            <span className="text-gray-600">{t('legendFuture')}</span>
          </div>
        </div>
      </div>
    );
  };

  const renderStats = () => {
    if (!stats) return null;
    
    return (
      <div className="mt-8 space-y-6">
        <div className="bg-white p-6 rounded-md shadow-sm">
          <h2 className="text-lg font-normal mb-4 text-gray-800">{t('lifeHighlightsTitle')}</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              {t('lifeHighlightsWeeks')} <span className="text-gray-900 font-medium">{getFormattedNumber(stats.weeksLived)}</span> {t('lifeHighlightsWeeksEnd')} <span className="text-gray-900 font-medium">{stats.percentageLived}%</span> {t('lifeHighlightsPercent')}
            </p>
            <p className="text-gray-600">
              {t('lifeHighlightsDays')} <span className="text-gray-900 font-medium">{getFormattedNumber(stats.daysLived)}</span> {t('lifeHighlightsDaysEnd')} <span className="text-gray-900 font-medium">{getFormattedNumber(stats.seasons)}</span> {t('lifeHighlightsSeasonsEnd')}
            </p>
            <p className="text-gray-600">
              {t('lifeHighlightsHeartbeats')} <span className="text-gray-900 font-medium">{getFormattedNumber(stats.heartbeats)}</span> {t('lifeHighlightsHeartbeatsEnd')}
            </p>
            <p className="text-gray-600">
              {t('lifeHighlightsBreaths')} <span className="text-gray-900 font-medium">{getFormattedNumber(stats.breaths)}</span> {t('lifeHighlightsBreathsMiddle')} <span className="text-gray-900 font-medium">{getFormattedNumber(stats.hoursSlept)}</span> {t('lifeHighlightsBreathsEnd')}
            </p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-md shadow-sm">
          <h2 className="text-lg font-normal mb-4 text-gray-800">{t('societalContextTitle')}</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              {t('societalPopulation')} {stats.birthYear ? <span className="text-gray-900 font-medium">{getFormattedNumber(getPopulationAtYear(stats.birthYear))}</span> : ""} {t('societalPopulationEnd')} <span className="text-gray-900 font-medium">8</span> {t('societalPopulationFinal')}
            </p>
            <p className="text-gray-600">
              {t('societalMeetings')} <span className="text-gray-900 font-medium">80,000</span> {t('societalMeetingsMiddle')} <span className="text-gray-900 font-medium">{getFormattedNumber(Math.round(80000 * (stats.percentageLived/100)))}</span> {t('societalMeetingsEnd')}
            </p>
            <p className="text-gray-600">
              {t('societalBirthsDeaths')} <span className="text-gray-900 font-medium">{getFormattedNumber(Math.round(stats.daysLived * getAverageBirthsPerDay()))}</span> {t('societalBirthsMiddle')} <span className="text-gray-900 font-medium">{getFormattedNumber(Math.round(stats.daysLived * getAverageDeathsPerDay()))}</span> {t('societalDeathsEnd')}
            </p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-md shadow-sm">
          <h2 className="text-lg font-normal mb-4 text-gray-800">{t('cosmicPerspectiveTitle')}</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              {t('cosmicEarthTravel')} <span className="text-gray-900 font-medium">{getFormattedNumber(Math.round(stats.daysLived * 1.6 * 1000000))}</span> {t('cosmicEarthTravelEnd')}
            </p>
            <p className="text-gray-600">
              {t('cosmicUniverse')} <span className="text-gray-900 font-medium">93</span> {t('cosmicUniverseMiddle')} <span className="text-gray-900 font-medium">93</span> {t('cosmicUniverseMiddle2')} <span className="text-gray-900 font-medium">{(80/13800000000 * 100).toFixed(10)}%</span> {t('cosmicUniverseEnd')}
            </p>
            <p className="text-gray-600">
              {t('cosmicSolarSystem')} <span className="text-gray-900 font-medium">{getFormattedNumber(Math.round(stats.daysLived * 24 * 828000))}</span> {t('cosmicSolarSystemEnd')}
            </p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-md shadow-sm">
          <h2 className="text-lg font-normal mb-4 text-gray-800">{t('naturalWorldTitle')}</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              {t('naturalLunarCycles')} <span className="text-gray-900 font-medium">{getFormattedNumber(Math.round(stats.daysLived / 29.53))}</span> {t('naturalLunarMiddle')} <span className="text-gray-900 font-medium">{getFormattedNumber(Math.floor(stats.daysLived / 365.25))}</span> {t('naturalLunarEnd')}
            </p>
            <p className="text-gray-600">
              {t('naturalSequoia')} <span className="text-gray-900 font-medium">{((stats.daysLived / 365.25) / 3000 * 100).toFixed(2)}%</span> {t('naturalSequoiaEnd')}
            </p>
            <p className="text-gray-600">
              {t('naturalCells')}
            </p>
          </div>
        </div>
      </div>
    );
  };

  const handleReset = () => {
    setBirthdate('');
    setStats(null);
    setStep(1);
  };

  const generateHtmlFile = () => {
    if (!stats) return;
    
    const htmlContent = `<!DOCTYPE html>
<html lang="${locale}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${t('pageTitle')} - ${new Date(birthdate).toLocaleDateString()}</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #374151;
            background-color: #f9fafb;
            margin: 0;
            padding: 24px;
        }
        .container {
            max-width: 768px;
            margin: 0 auto;
        }
        .header {
            text-align: center;
            margin-bottom: 48px;
        }
        .title {
            font-size: 2rem;
            font-weight: 400;
            color: #1f2937;
            margin-bottom: 8px;
        }
        .subtitle {
            color: #6b7280;
            margin-bottom: 16px;
        }
        .birth-date {
            color: #374151;
            font-size: 1.1rem;
        }
        .section {
            background: white;
            padding: 24px;
            border-radius: 8px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            margin-bottom: 24px;
        }
        .section-title {
            font-size: 1.125rem;
            font-weight: 400;
            color: #1f2937;
            margin-bottom: 16px;
        }
        .week-grid {
            display: flex;
            flex-direction: column;
            gap: 2px;
        }
        .week-row {
            display: flex;
            gap: 2px;
        }
        .week-cell {
            width: 8px;
            height: 8px;
            border-radius: 2px;
        }
        .week-past { background-color: #1f2937; }
        .week-current { background-color: #3b82f6; }
        .week-future { background-color: #e5e7eb; }
        .legend {
            display: flex;
            gap: 16px;
            margin-top: 24px;
            font-size: 0.875rem;
        }
        .legend-item {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .legend-color {
            width: 12px;
            height: 12px;
        }
        .stat-text {
            color: #6b7280;
            margin-bottom: 16px;
        }
        .stat-number {
            color: #1f2937;
            font-weight: 500;
        }
        .footer {
            text-align: center;
            margin-top: 48px;
            padding-top: 24px;
            border-top: 1px solid #e5e7eb;
            color: #6b7280;
            font-size: 0.875rem;
        }
        @media print {
            body { background-color: white; }
            .section { box-shadow: none; border: 1px solid #e5e7eb; }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1 class="title">${t('pageTitle')}</h1>
            <p class="subtitle">${t('pageSubtitle')}</p>
            <p class="birth-date">Born: ${new Date(birthdate).toLocaleDateString()}</p>
        </div>
        
        <div class="section">
            <h2 class="section-title">${t('lifeInWeeksTitle')}</h2>
            <div class="week-grid">
                ${Array.from({length: Math.ceil(stats.totalWeeks / 52)}, (_, row) => `
                    <div class="week-row">
                        ${Array.from({length: 52}, (_, col) => {
                            const weekNumber = row * 52 + col;
                            if (weekNumber < stats.totalWeeks) {
                                const isPast = weekNumber < stats.weeksLived;
                                const isCurrent = weekNumber === stats.weeksLived;
                                const cellClass = isPast ? 'week-past' : isCurrent ? 'week-current' : 'week-future';
                                return `<div class="week-cell ${cellClass}"></div>`;
                            }
                            return '';
                        }).join('')}
                    </div>
                `).join('')}
            </div>
            <div class="legend">
                <div class="legend-item">
                    <div class="legend-color week-past"></div>
                    <span>${t('legendPast')}</span>
                </div>
                <div class="legend-item">
                    <div class="legend-color week-current"></div>
                    <span>${t('legendPresent')}</span>
                </div>
                <div class="legend-item">
                    <div class="legend-color week-future"></div>
                    <span>${t('legendFuture')}</span>
                </div>
            </div>
        </div>
        
        <div class="section">
            <h2 class="section-title">${t('lifeHighlightsTitle')}</h2>
            <p class="stat-text">
                ${t('lifeHighlightsWeeks')} <span class="stat-number">${getFormattedNumber(stats.weeksLived)}</span> ${t('lifeHighlightsWeeksEnd')} <span class="stat-number">${stats.percentageLived}%</span> ${t('lifeHighlightsPercent')}
            </p>
            <p class="stat-text">
                ${t('lifeHighlightsDays')} <span class="stat-number">${getFormattedNumber(stats.daysLived)}</span> ${t('lifeHighlightsDaysEnd')} <span class="stat-number">${getFormattedNumber(stats.seasons)}</span> ${t('lifeHighlightsSeasonsEnd')}
            </p>
            <p class="stat-text">
                ${t('lifeHighlightsHeartbeats')} <span class="stat-number">${getFormattedNumber(stats.heartbeats)}</span> ${t('lifeHighlightsHeartbeatsEnd')}
            </p>
            <p class="stat-text">
                ${t('lifeHighlightsBreaths')} <span class="stat-number">${getFormattedNumber(stats.breaths)}</span> ${t('lifeHighlightsBreathsMiddle')} <span class="stat-number">${getFormattedNumber(stats.hoursSlept)}</span> ${t('lifeHighlightsBreathsEnd')}
            </p>
        </div>
        
        <div class="section">
            <h2 class="section-title">${t('societalContextTitle')}</h2>
            <p class="stat-text">
                ${t('societalPopulation')} ${stats.birthYear ? `<span class="stat-number">${getFormattedNumber(getPopulationAtYear(stats.birthYear))}</span>` : ""} ${t('societalPopulationEnd')} <span class="stat-number">8</span> ${t('societalPopulationFinal')}
            </p>
            <p class="stat-text">
                ${t('societalMeetings')} <span class="stat-number">80,000</span> ${t('societalMeetingsMiddle')} <span class="stat-number">${getFormattedNumber(Math.round(80000 * (stats.percentageLived/100)))}</span> ${t('societalMeetingsEnd')}
            </p>
            <p class="stat-text">
                ${t('societalBirthsDeaths')} <span class="stat-number">${getFormattedNumber(Math.round(stats.daysLived * getAverageBirthsPerDay()))}</span> ${t('societalBirthsMiddle')} <span class="stat-number">${getFormattedNumber(Math.round(stats.daysLived * getAverageDeathsPerDay()))}</span> ${t('societalDeathsEnd')}
            </p>
        </div>
        
        <div class="section">
            <h2 class="section-title">${t('cosmicPerspectiveTitle')}</h2>
            <p class="stat-text">
                ${t('cosmicEarthTravel')} <span class="stat-number">${getFormattedNumber(Math.round(stats.daysLived * 1.6 * 1000000))}</span> ${t('cosmicEarthTravelEnd')}
            </p>
            <p class="stat-text">
                ${t('cosmicUniverse')} <span class="stat-number">93</span> ${t('cosmicUniverseMiddle')} <span class="stat-number">93</span> ${t('cosmicUniverseMiddle2')} <span class="stat-number">${(80/13800000000 * 100).toFixed(10)}%</span> ${t('cosmicUniverseEnd')}
            </p>
            <p class="stat-text">
                ${t('cosmicSolarSystem')} <span class="stat-number">${getFormattedNumber(Math.round(stats.daysLived * 24 * 828000))}</span> ${t('cosmicSolarSystemEnd')}
            </p>
        </div>
        
        <div class="section">
            <h2 class="section-title">${t('naturalWorldTitle')}</h2>
            <p class="stat-text">
                ${t('naturalLunarCycles')} <span class="stat-number">${getFormattedNumber(Math.round(stats.daysLived / 29.53))}</span> ${t('naturalLunarMiddle')} <span class="stat-number">${getFormattedNumber(Math.floor(stats.daysLived / 365.25))}</span> ${t('naturalLunarEnd')}
            </p>
            <p class="stat-text">
                ${t('naturalSequoia')} <span class="stat-number">${((stats.daysLived / 365.25) / 3000 * 100).toFixed(2)}%</span> ${t('naturalSequoiaEnd')}
            </p>
            <p class="stat-text">
                ${t('naturalCells')}
            </p>
        </div>
        
        <div class="footer">
            <p>Generated on ${new Date().toLocaleDateString()} • ${t('pageTitle')}</p>
        </div>
    </div>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `life-in-weeks-${new Date(birthdate).toISOString().split('T')[0]}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 pt-16">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-normal text-gray-800 mb-2">{t('pageTitle')}</h1>
        <p className="text-gray-600 mb-8">{t('pageSubtitle')}</p>
        
        {step === 1 ? (
          <div className="bg-white p-6 rounded-md shadow-sm">
            <h2 className="text-lg font-normal mb-4 text-gray-800">{t('birthDateQuestion')}</h2>
            <div>
              <input
                type="date"
                className="w-full p-2 border border-gray-300 rounded-md mb-4 text-gray-800"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
                required
              />
              <button
                onClick={handleSubmit}
                className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 transition-colors"
                disabled={!birthdate}
              >
                {t('visualizeButton')}
              </button>
            </div>
          </div>
        ) : (
          <>
            {renderWeekGrid()}
            {renderStats()}
            <div className="mt-8 space-y-3">
              <button
                onClick={generateHtmlFile}
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                {t('shareAsHtmlButton')}
              </button>
              <button
                onClick={handleReset}
                className="w-full bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300 transition-colors"
              >
                {t('startOverButton')}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.render(<WeeksOfLife />, rootElement);
}