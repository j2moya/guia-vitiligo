
import { NailCategory } from './types';

const BASE_IMG_URL = 'https://aahhoo.com/assets/img/';

export const VITILIGO_DATA: NailCategory[] = [
    {
        id: 'caracteristicas-lesion',
        title: '1. Características de las Lesiones',
        signs: [
            { id: 'bordes-irregulares', name: 'Bordes irregulares', description: 'Los límites de la mancha despigmentada no son uniformes y presentan una forma dentada o difusa.', meaning: 'Señal de actividad ROS (Especies Reactivas de Oxígeno), indicando un proceso inflamatorio activo.', imageUrl: `${BASE_IMG_URL}vit100.jpg` },
            { id: 'bordes-redondos', name: 'Bordes redondos', description: 'Los límites de la mancha son nítidos, circulares u ovalados, bien definidos.', meaning: 'Señal de fase estacionaria, donde la despigmentación se ha detenido temporalmente.', imageUrl: `${BASE_IMG_URL}vit101.jpg` },
            { id: 'pigmentacion-perifolicular', name: 'Pigmentación perifolicular', description: 'Aparición de pequeños puntos de pigmento oscuro dentro de la mancha blanca, alrededor de los folículos pilosos.', meaning: 'Recuperacion del pigmento que viaja por los folículos.', imageUrl: `${BASE_IMG_URL}vit102.jpg` },
            { id: 'pigmentacion-interfolicular', name: 'Pigmentación interfolicular', description: 'Recuperación del color en áreas de la piel entre los folículos pilosos.', meaning: 'Recuperation del pigmento extra e intrafolicular.', imageUrl: `${BASE_IMG_URL}vit103.jpg` },
            { id: 'leucotriquia', name: 'Leucotriquia (Pelos blancos)', description: 'El vello o cabello que crece dentro de las manchas de vitiligo se vuelve blanco o gris.', meaning: 'Daño profundo con perdidas avanzadas de la despigmentación.', imageUrl: `${BASE_IMG_URL}vit104.jpg` },
            { id: 'senales-atrofia', name: 'Señales de atrofia', description: 'La piel dentro de la mancha se vuelve más delgada, frágil o con una apariencia arrugada.', meaning: 'Sucede con el uso desmedido de medicamentos.', imageUrl: `${BASE_IMG_URL}vit105.jpg` },
            { id: 'islotes-pigmentados', name: 'Islotes pigmentados', description: 'Aparición de "islas" de piel con color normal o repigmentada dentro de una mancha más grande.', meaning: 'Señales de recuperación gradual.', imageUrl: `${BASE_IMG_URL}vit106.jpg` },
        ]
    },
    {
        id: 'extension-pronostico',
        title: '2. Patrones de Extensión y Pronóstico',
        signs: [
             { id: 'confeti-menos-5', name: 'Señales confeti menos de 5', description: 'Presencia de menos de 5 pequeñas manchas despigmentadas, similares a confeti.', meaning: 'Pronostico reservado grado 1.', imageUrl: `${BASE_IMG_URL}vit107.jpg` },
             { id: 'confeti-5-10', name: 'Señales confeti de 5 a 10', description: 'Entre 5 y 10 pequeñas manchas despigmentadas distribuidas en un área.', meaning: 'Pronostico reservado grado 2.', imageUrl: `${BASE_IMG_URL}vit108.jpg` },
             { id: 'confeti-mas-10', name: 'Señales confeti mas de 10', description: 'Presencia de más de 10 pequeñas manchas despigmentadas, indicando mayor actividad.', meaning: 'Pronostico reservado grado 3.', imageUrl: `${BASE_IMG_URL}vit109.jpg` },
             { id: 'koebner-menos-2', name: 'Señales Koebner 2 o menos', description: 'Aparición de 2 o menos nuevas lesiones en zonas de trauma, como rasguños o presión.', meaning: 'Pronostico reservado grado 1.', imageUrl: `${BASE_IMG_URL}vit110.jpg` },
             { id: 'koebner-2-5', name: 'Señales Koebner 2 a 5', description: 'Entre 2 y 5 nuevas lesiones han aparecido en zonas de trauma.', meaning: 'Pronostico reservado grado 2.', imageUrl: `${BASE_IMG_URL}vit111.jpg` },
             { id: 'koebner-mas-5', name: 'Señales Koebner mas de 5', description: 'Más de 5 nuevas lesiones han aparecido debido al fenómeno de Koebner.', meaning: 'Pronostico reservado grado 3.', imageUrl: `${BASE_IMG_URL}vit112.jpg` },
             { id: 'halo-hipopigmentado', name: 'Halo hipopigmentado', description: 'Una zona de color intermedio (más claro que la piel normal pero más oscuro que la mancha) rodea la lesión principal.', meaning: 'Pronostico reservado grado 1.', imageUrl: `${BASE_IMG_URL}vit113.jpg` },
             { id: 'halo-hipopigmentado', name: 'Halo hipopigmentado', description: 'De 2 a 5 zonas de color intermedio (más claro que la piel normal pero más oscuro que la mancha) rodea la lesión principal.', meaning: 'Pronostico reservado grado 2.', imageUrl: `${BASE_IMG_URL}vit113-2.jpg` },
             { id: 'halo-hipopigmentado', name: 'Halo hipopigmentado', description: 'Mas de 5 zonas de color intermedio (más claro que la piel normal pero más oscuro que la mancha) rodea la lesión principal.', meaning: 'Pronostico reservado grado 3.', imageUrl: `${BASE_IMG_URL}vit113-3.jpg` },     
        ]
    },
    {
        id: 'historial-asociados',
        title: '3. Historial y Condiciones Asociadas',
        signs: [
            { id: 'mas-5-anos', name: 'Mas de 5 años con manchas', description: 'Las manchas de vitiligo han estado presentes por más de cinco años.', meaning: 'Pronostico reservado grado 1,2 o 3.', imageUrl: `${BASE_IMG_URL}vit114.jpg` },
            { id: 'mas-5-manchas', name: 'Mas de 5 manchas', description: 'El paciente presenta más de cinco lesiones de vitiligo en el cuerpo.', meaning: 'Pronostico reservado grado 1,2 o 3.', imageUrl: `${BASE_IMG_URL}vit115.jpg` },
            { id: 'hipotiroidismo', name: 'Hipotiroidismo', description: 'El paciente tiene un diagnóstico de hipotiroidismo, a menudo de origen autoinmune (Hashimoto).', meaning: 'Señal de enfermedad autoinmune e inflamación cronica general.', imageUrl: `${BASE_IMG_URL}vit116.jpg` },
            { id: 'canas-tempranas', name: 'Canas tempranas', description: 'Aparición prematura de cabello gris o blanco antes de los 30 años.', meaning: 'Señal de riesgo de Vitiligo en algunas personas.', imageUrl: `${BASE_IMG_URL}vit117.jpg` },
            { id: 'caida-cabello', name: 'Caída de cabello', description: 'Episodios de pérdida de cabello, que pueden estar relacionados con condiciones como la alopecia areata.', meaning: 'Señal de enfermedad autoinmune e inflamación cronica general.', imageUrl: `${BASE_IMG_URL}vit118.jpg` },
            { id: 'alergias', name: 'Alergias', description: 'Historial de alergias significativas, como rinitis alérgica, asma o dermatitis atópica.', meaning: 'Señal de riesgo de Vitiligo en algunas personas.', imageUrl: `${BASE_IMG_URL}vit119.jpg` },
            { id: 'infecciones-garganta', name: 'Infecciones de gargantas frecuentes', description: 'Episodios recurrentes de faringitis o amigdalitis, especialmente estreptocócicas.', meaning: 'Señal de enfermedad autoinmune e inflamación cronica general.', imageUrl: `${BASE_IMG_URL}vit120.jpg` },
            { id: 'vitiligo-familia', name: 'Vitiligo en la familia', description: 'Uno o más familiares directos (padres, hermanos) también tienen vitiligo.', meaning: 'Señal de necesidad de secuenciar el ADN y valorar riesgos familiares genéticos y otras alteraciones asociadas.', imageUrl: `${BASE_IMG_URL}vit124.jpg` },
        ]
    },
    {
        id: 'localizacion',
        title: '4. Localización Específica',
        signs: [
            { id: 'vitiligo-manos', name: 'Vitiligo en las manos', description: 'Las manchas se localizan en el dorso de las manos.', meaning: 'Mal pronostico y tendencia a generalizarse.', imageUrl: `${BASE_IMG_URL}vit121.jpg` },
            { id: 'vitiligo-dedos', name: 'Vitiligo en los dedos', description: 'Despigmentación localizada en las falanges de los dedos.', meaning: 'Mal pronostico y resistencia.', imageUrl: `${BASE_IMG_URL}vit122.jpg` },
            { id: 'vitiligo-labios', name: 'Vitiligo en los labios', description: 'Las manchas afectan la piel de los labios y el área peribucal.', meaning: 'Mal pronostico y resistencia.', imageUrl: `${BASE_IMG_URL}vit123.jpg` },
        ]
    }
];