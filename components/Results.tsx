
import React from 'react';
import { Lightbulb, ShieldCheck, Stethoscope } from 'lucide-react';

export const Results: React.FC = () => {
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
                <p className="text-slate-500">Recuerda, esta es una guía educativa. Consulta siempre a un profesional de la salud para obtener un diagnóstico y tratamiento.</p>
            </div>
        </div>
    );
};
