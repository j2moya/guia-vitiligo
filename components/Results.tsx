
import React from 'react';
import { Lightbulb, ShieldCheck, Stethoscope, MessageSquare } from 'lucide-react';

interface ResultsProps {
    selectedSigns: string[];
}

export const Results: React.FC<ResultsProps> = ({ selectedSigns }) => {
    const phoneNumber = '17865644249';
    const messageIntro = 'Hola, vengo de la Guía Visual de Vitiligo. ';
    let fullMessage = messageIntro;

    if (selectedSigns.length > 0) {
        const selectedSignsText = selectedSigns.join(', ');
        fullMessage += `He seleccionado los siguientes signos: ${selectedSignsText}. Me gustaría tener más detalles.`;
    } else {
        fullMessage += 'No he seleccionado ningún signo, pero me gustaría tener más detalles.';
    }

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;

    return (
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-slate-200 animate-fade-in">
            <h2 className="text-2xl font-bold text-center mb-6 text-slate-800">Interpretación y Pasos a Seguir</h2>
            <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                    <ShieldCheck className="h-8 w-8 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="font-bold text-lg text-slate-700">Prevenible y Evitable</h3>
                        <p className="text-slate-600">Es posible identificar una predisposición genética y ciertos rasgos clínicos mediante evaluaciones. La mejor estrategia es la prevención y la intervención temprana.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                    <Stethoscope className="h-8 w-8 text-sky-500 flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="font-bold text-lg text-slate-700">Acciones Posibles</h3>
                        <p className="text-slate-600">Cuando el vitiligo aparece, se puede detener su avance, repigmentar las zonas afectadas y trabajar para evitar su recurrencia en el futuro con un manejo adecuado.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                    <Lightbulb className="h-8 w-8 text-yellow-500 flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="font-bold text-lg text-slate-700">Una Condición Inflamatoria Crónica</h3>
                        <p className="text-slate-600">El Vitiligo es una condicion inflamatoria cronica gradual que se establece por problemas en la sintesis, produccion, traslado y la capacidad de las moleculas comprometidas para sobrevivir la adversidad que se desencadena y perdura si no se atiende con eficiencia.</p>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8">
                <p className="text-slate-500 mb-6">Recuerda, esta es una guía educativa. Consulta siempre a un profesional de la salud para obtener un diagnóstico y tratamiento.</p>
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-bold py-3 px-8 rounded-full hover:bg-green-600 transition-colors duration-300 text-lg shadow-lg transform hover:scale-105"
                    aria-label="Contactar por WhatsApp para más detalles"
                >
                    <MessageSquare className="h-5 w-5" />
                    Más detalles
                </a>
            </div>
        </div>
    );
};